import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
//context
import MapOptionContext from '../../../contexts/MapOptionContext';
import SearchOptionContext from '../../../contexts/SearchOptionContext';
//Components
import {
	IsFree,
	IsFreeAtNight,
	IsFreeAtSaturday,
	IsFreeAtHoliday,
	IsCenterSet,
} from './SearchForm';
import SearchButton from './SearchButton';
import CenterModal from '../../modal/center/Center';
import { FreeHelpPopover, LocationPopover, CenterHelpPopover } from './SearchPopover';

const Wrapper = styled.form`
	width: 100%;
	text-align: center;
	@media ${(props) => props.theme.mobile} {
		height: 130px;
		margin-top: 20px;
		margin-bottom: 15px;
	}
	@media ${(props) => props.theme.tablet} {
		height: 200px;
		margin-top: 30px;
		margin-bottom: 20px;
	}
	@media ${(props) => props.theme.desktop} {
		height: 230px;
		margin-top: 40px;
		margin-bottom: 25px;
	}
`;

const FormGroup = styled.div`
	display: inline-block;
	vertical-align: middle;
	text-align: left;
	padding-left: 27px;
	@media ${(props) => props.theme.mobile} {
		margin-right: 1%;
	}
	@media ${(props) => props.theme.tablet} {
		margin-right: 15px;
	}
	@media ${(props) => props.theme.desktop} {
		margin-right: 20px;
	}
`;

const Help = styled.span`
	display: inline-block;
	vertical-align: middle;
	background-color: gray;
	color: white;
	border-radius: 20%;
	${(props) => props.theme.s}
	@media ${(props) => props.theme.mobile} {
		padding: 0px 5px 0px 5px;
		margin-left: 3px;
	}
	@media ${(props) => props.theme.tablet} {
		padding: 0px 7px 0px 7px;
		margin-left: 5px;
	}
	@media ${(props) => props.theme.desktop} {
		padding: 0px 7px 0px 7px;
		margin-left: 7px;
	}
`;

const Search = () => {
	const { searchState, searchActions } = useContext(SearchOptionContext);
	const { mapState, mapActions } = useContext(MapOptionContext);

	const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);
	const toggleCenterModal = () => setIsCenterModalOpen(!isCenterModalOpen);
	
	const [isLocationPopoverOpen, setIsLocationPopoverOpen] = useState(false);
	const openLocationPopover = () => {
		setIsLocationPopoverOpen(true);
		setTimeout(() => setIsLocationPopoverOpen(false), 2500);
	};
	
	//IsCenterSet Form의 onChange
	const onChangeCenterForm = () => {
		if (!searchState.customedCenter) {
			//modal 열기
			setIsCenterModalOpen(true);
		} else {
			//mapState의 LatLng을 현 위치로 설정
			searchActions.setCustomedCenter(false);
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude,
					lng = position.coords.longitude;
				mapActions.setLatitude(lat);
				mapActions.setLongitude(lng);
			});
		}
	};

	const history = useHistory();
	const onSubmit = (e) => {
		let url = '';
		e.preventDefault();
		url += `free=${e.target.free.checked}`;
		url += `&nightfree=${e.target.nightfree.checked}`;
		url += `&satfree=${e.target.satfree.checked}`;
		url += `&holidayfree=${e.target.holidayfree.checked}`;
		url += `&lat=${mapState.latitude}`;
		url += `&lng=${mapState.longitude}`;
		history.push('/search?' + url);
	};

	return (
		<>
			{/*Form*/}
			<Wrapper onSubmit={onSubmit}>
				<FormGroup>
					<IsFree />
					<Help id="FreeHelpPopover">?</Help>
					<br />
					<IsFreeAtNight />
					<br />
					<IsFreeAtSaturday />
					<br />
					<IsFreeAtHoliday />
					<br />
					<IsCenterSet popover="LocationPopover" onChange={onChangeCenterForm} />
					<Help id="CenterHelpPopover">?</Help>
				</FormGroup>
				<SearchButton />
			</Wrapper>
			{/* Center에 setCenterConditionTrue가 따로 있는 이유:
			IsCenterSet같은 경우는 modal에서 "여기로 설정"까지 눌러야,
			실제로 그 기능을 이용하는 것이기 때문. */}
			<CenterModal
				isOpen={isCenterModalOpen}
				toggleModal={toggleCenterModal}
				openLocationPopover={openLocationPopover}
				setCenterConditionTrue={() => searchActions.setCustomedCenter(true)}
			/>
			<FreeHelpPopover />
			<LocationPopover isOpen={isLocationPopoverOpen}/>
			<CenterHelpPopover />
		</>
	);
};

export default Search;