import React, { useContext } from 'react';
import styled from 'styled-components';
import { Input } from 'reactstrap';
import SearchOptionContext from '../../../contexts/SearchOptionContext';

const Label = styled.label`
	display: inline-block;
	vertical-align: middle;
	${(props) => props.theme.m}
	@media ${(props) => props.theme.mobile} {
		height: 15px;
	}
	@media ${(props) => props.theme.tablet} {
		height: 21px; 
	}
	@media ${(props) => props.theme.desktop} {
		height: 25px; 
	}
`;

const InputBox = styled(Input)`
	@media ${(props) => props.theme.mobile} {
		margin-top: 1px;
		margin-bottom: 1px;
	}
	@media ${(props) => props.theme.tablet} {
		margin-top: 4px;
		margin-bottom: 4px;
	}
	@media ${(props) => props.theme.desktop} {
		margin-top: 6px;
		margin-bottom: 6px;
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
		<Label className="text-muted">
			<InputBox
				disabled
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

export const IsCenterSet = ({ popover, onChange }) => {
	const { searchState } = useContext(SearchOptionContext);
	return (
		<Label>
			<InputBox
				id={popover} 
				type="checkbox"
				checked={searchState.customedCenter}
				onChange={onChange}
			/>
			탐색 기준 직접 설정
		</Label>
	);
};