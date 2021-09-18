import React, { useEffect, useState, useContext } from 'react';
import qs from 'qs';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Wrapper, Main, Line, Buttons, Description, LoadingWrapper, Progress } from './Style';
import Map from './Map';
import MapOptionContext from '../../contexts/MapOptionContext';

const SearchResult = ({ location }) => {
	const { state } = useContext(MapOptionContext);
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
				const always = query.alwaysfree,
					holiday = query.holidayfree,
					night = query.nightfree,
					sat = query.satfree,
					lat = query.lat,
					lng = query.lng;
				setLat(lat);
				setLng(lng);
				
				const requestUrl =
					process.env.REACT_APP_DEV_API_DOMAIN +
					`?alwaysfree=${always}&holidayfree=${holiday}&nightfree=${night}&satfree=${sat}` +
					`&lat=${lat}&lng=${lng}` +
					`&radius=${state.radius}`;
				/*develop URL*/
				console.log(requestUrl);
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
	}, [state.radius]);

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
				<Map loading={loading} lat={lat} lng={lng} />
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