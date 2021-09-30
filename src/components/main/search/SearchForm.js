import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import MapOptionContext from '../../../contexts/MapOptionContext';
import SearchOptionContext from '../../../contexts/SearchOptionContext';

const Label = styled.label`
	display: inline-block;
	vertical-align: middle;
	${(props) => props.theme.m}
	@media ${(props) => props.theme.mobile} {
		margin: 3px 0px 3px 0px;
		line-height: 12px;
	}
	@media ${(props) => props.theme.tablet} {
		margin: 5px 0px 5px 0px;
		line-height: 15px;
	}
	@media ${(props) => props.theme.desktop} {
		margin: 7px 0px 7px 0px;
		line-height: 18px;
	}
`;

const InputBox = styled(Input)`
	@media ${(props) => props.theme.mobile} {
		line-height: 12px;
	}
	@media ${(props) => props.theme.tablet} {
		line-height: 15px;
	}
	@media ${(props) => props.theme.desktop} {
		line-height: 18px;
	}
`;

export const IsFree = () => {
	const { searchState, searchActions } = useContext(SearchOptionContext);
	return (
		<Label>
			<InputBox
				type="checkbox"
				name="free"
				checked={searchState.free}
				onChange={() => {
					searchActions.setFree(!searchState.free);
				}}
			/>
			주간 무료운영
		</Label>
	);
};

export const IsFreeAtNight = () => {
	const { searchState, searchActions } = useContext(SearchOptionContext);
	return (
		<Label>
			<InputBox
				type="checkbox"
				name="nightfree"
				checked={searchState.nigthFree}
				onChange={() => {
					searchActions.setNightFree(!searchState.nightFree);
				}}
			/>
			야간 무료운영
		</Label>
	);
};

export const IsFreeAtSaturday = () => {
	const { searchState, searchActions } = useContext(SearchOptionContext);
	return (
		<Label>
			<InputBox
				type="checkbox"
				name="satfree"
				checked={searchState.satFree}
				onChange={() => {
					searchActions.setSatFree(!searchState.satFree);
				}}
			/>
			토요일 무료운영
		</Label>
	);
};

export const IsFreeAtHoliday = () => {
	const { searchState, searchActions } = useContext(SearchOptionContext);
	return (
		<Label>
			<InputBox
				type="checkbox"
				name="holidayfree"
				checked={searchState.holidayFree}
				onChange={() => {
					searchActions.setHolidayFree(!searchState.holidayFree);
				}}
			/>
			공휴일 무료운영
		</Label>
	);
};

export const IsCenterSet = ({ onChange }) => {
	const { searchState } = useContext(SearchOptionContext);
	return (
		<Label>
			<InputBox
				id="PopoverLocation"
				type="checkbox"
				checked={searchState.customedCenter}
				onChange={onChange}
			/>
			탐색 기준 직접 설정
		</Label>
	);
};