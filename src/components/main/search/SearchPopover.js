import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Popover, PopoverBody } from 'reactstrap';
import MapOptionContext from '../../../contexts/MapOptionContext';

const PopoverText = styled(PopoverBody)`
	font-family: 'Noto Sans KR', sans-serif;
	${(props) => props.theme.xs}
`;

export const LocationPopover = ({isOpen, toggle}) => {
	const { mapState } = useContext(MapOptionContext);

	return (
		<Popover placement="bottom" isOpen={isOpen} target="PopoverLocation">
			<PopoverText>
				탐색 기준(지도의 중앙)이 "{mapState.location}"으로 설정되었습니다.
			</PopoverText>
		</Popover>
	);
};

export const CenterHelpPopover = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(true);
		setTimeout(() => setIsOpen(false), 2500);
	};

	return (
		<Popover placement="bottom" isOpen={isOpen} target="PopoverHelp" toggle={toggle}>
			<PopoverText>
				현재 위치가 아닌 특정한 장소를 기준으로 하여 주변의 주차장을 검색할 수 있습니다.
			</PopoverText>
		</Popover>
	);
};