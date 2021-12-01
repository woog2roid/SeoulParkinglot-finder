import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Input } from 'reactstrap';
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

const FormWrapper = styled.div`
	text-align: right;
	@media ${(props) => props.theme.mobile} {
		width: 90%;
		margin: 0% 5% 0% 5%;
		height: 20px; 
	}
	@media ${(props) => props.theme.tablet} {
		width: 80%;
		margin: 0% 10% 0% 10%;
		height: 22px;
	}
	@media ${(props) => props.theme.desktop} {
		width: 60%;
		margin: 0% 20% 0% 20%;
		height: 30px;
	}
`;

const Label = styled.label`
	${(props) => props.theme.m}
	display: inline-block;
	float: right;
	vertical-align: middle;
`;

const Number = styled.div`
	${(props) => props.theme.m}
	float: right;
`

//13px로 input box가 고정되어있음
const InputBox = styled(Input)`
	@media ${(props) => props.theme.mobile} {
		margin-top: 3.5px;
		margin-bottom: 3.5px;
	}
	@media ${(props) => props.theme.tablet} {
		margin-top: 4.5px;
		margin-bottom: 4.5px;
	}
	@media ${(props) => props.theme.desktop} {
		margin-top: 8.5px;
		margin-bottom: 8.5px;
	}
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

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);
	const [isNotUpdatedHidden, setIsNotUpdatedHidden] = useState(false);
	
	//메인화면으로 가는 버튼
	const history = useHistory();
	const goMain = (e) => {
		e.preventDefault();
		history.push('/seoul-parking-lot-finder');
	};

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

				console.log(response);
				//response 받고 난 후,
				setData(response);
				setLoading(false);
			} catch (e) {
				console.log(e);
			}
		};
		fetchData();
	}, [mapState.radius]);

	return (
		<Wrapper>
			<Line className="my-2" />
			<Main>검색결과</Main>
			<Line className="my-2" />
			<FormWrapper>
				<Label>
					<InputBox
						type="checkbox"
						checked={isNotUpdatedHidden}
						onChange={() => {setIsNotUpdatedHidden(!isNotUpdatedHidden)}}
					/>
					운영시간이 업데이트 되지 않은 주차장은 표시하지 않기<br/>
					{data === null ? null : "검색결과:" + data.data.length + "개"}
				</Label>
			</FormWrapper>

			{loading ? (
				<LoadingWrapper>
					<Map
						loading={loading} 
						lat={lat} 
						lng={lng} 
					/>
					<Progress color="primary" />
				</LoadingWrapper>
			) : (
				<>
					<Map
						loading={loading}
						lat={lat}
						lng={lng}
						data={data}
						isHidden={isNotUpdatedHidden}
					/>
				</>
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