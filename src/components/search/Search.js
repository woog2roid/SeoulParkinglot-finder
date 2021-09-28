import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Button, Spinner } from 'reactstrap';
import qs from 'qs';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Map from './Map';
import MapOptionContext from '../../contexts/MapOptionContext';

const Wrapper = styled.div`
	text-align: center;
	@media ${(props) => props.theme.mobile} {
		margin-top: 5%;
	}
	@media ${(props) => props.theme.tablet} {
		margin-top: 10%;
	}
	@media ${(props) => props.theme.desktop} {
		margin-top: 30px;
	}
`;

const Main = styled.div`
	margin-bottom: 2px;
	${(props) => props.theme.xl}
`;

const Line = styled.hr`
	background-color: black;
	opacity: 0.25;
`;

const Buttons = styled(Button)`
	@media ${(props) => props.theme.mobile} {
		width: 300px;
	}
	@media ${(props) => props.theme.tablet} {
		width: 500px;
	}
	@media ${(props) => props.theme.desktop} {
		width: 600px;
	}
`;

const Description = styled.div`
	text-align: center;
	display: inline-block;
	${(props) => props.theme.s}
`;

const LoadingWrapper = styled.div`
	position: relative;
	opacity: 0.8;
`;

const Progress = styled(Spinner)`
	position: absolute;
	width: 90px;
	height: 90px;
	bottom: calc(50% - 45px);
	left: calc(50% - 45px);
	z-index: 1;
	opacity: 1;
`;

const SearchResult = ({ location }) => {
	const { mapState } = useContext(MapOptionContext);
	const history = useHistory();

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);

	//처음 렌더링 될 때, backend에서 data를 받아옴.
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				
				//query parsing
				const query = qs.parse(location.search, {
					ignoreQueryPrefix: true,
				});
				const weekday = query.free,
					holiday = query.holidayfree,
					night = query.nightfree,
					sat = query.satfree,
					lat = query.lat,
					lng = query.lng;
				setLat(lat);
				setLng(lng);
				
				//server에 요청
				const requestUrl =
					process.env.REACT_APP_API_DOMAIN +
					`?free=${weekday}&holidayfree=${holiday}&nightfree=${night}&satfree=${sat}` +
					`&lat=${lat}&lng=${lng}` +
					`&radius=${mapState.radius}`;
				const response = await axios.get(requestUrl);
				
				//response 받고 난 후,
				setData(response);
				setLoading(false);
			} catch (e) {
				console.log(e);
			}
		};
		fetchData();
	}, [mapState.radius]);

	//메인화면으로 가는 버튼
	const goMain = (e) => {
		e.preventDefault();
		history.push('/seoul-parking-lot-finder');
	};
	
	return (
		<Wrapper>
			<Line className="my-2" />
			<Main>검색결과</Main>
			<Line className="my-2" />
			{loading ? (
				<LoadingWrapper>
					<Map loading={loading} lat={lat} lng={lng} />
					<Progress color="primary" />
				</LoadingWrapper>
			) : (
				<Map loading={loading} lat={lat} lng={lng} data={data} />
			)}
			<div />
			<Buttons outline color="primary" onClick={goMain}>
				메인 페이지로 돌아가기
			</Buttons>
			<div />
			<Description>
				⁕탐색 반경 및 지도의 줌 설정은 상단의 설정 탭에서 조정할 수 있습니다.
			</Description>
		</Wrapper>
	);
};

export default SearchResult;