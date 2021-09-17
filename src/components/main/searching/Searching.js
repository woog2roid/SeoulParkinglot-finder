import React, { useState, useContext } from 'react';
import MapOptionContext from '../../../contexts/MapOptionContext';
import { useHistory } from 'react-router-dom';
import { Input, Popover } from 'reactstrap';
import { Wrapper, FormGroup, Label, Help, PopoverText, CircleSubmit } from './Style';
import Center from './modals/center/Center';

const InitiateSearch = () => {
	const { state } = useContext(MapOptionContext);
	const history = useHistory();

	//HELP popover: 알아서 자동으로 닫히게
	const [helpOpen, setHelpOpen] = useState(false);
	const toggleHelp = () => {
		setHelpOpen(true);
		setTimeout(() => setHelpOpen(false), 2500);
	};
	//기준점 설정 popover: 자동(설정이 완료되면)으로 열리고 자동(시간이 지나면)으로 닫히게
	const [locationOpen, setLocationOpen] = useState(false);
	const toggleLocation = () => {
		setLocationOpen(true);
		setTimeout(() => setLocationOpen(false), 2500);
	};

	//modal 관련해서
	const [centerModal, setCenterModal] = useState(false);
	const toggleModal = () => setCenterModal(!centerModal);

	//특정 장소 기준 검색 기능이 눌렸는지 ㅇㅇ...
	const [isChecked, setIsChecked] = useState(false);
	const onClickedCtrChange = () => {
		//modal 열기
		if (!isChecked) setCenterModal(true);
		if (isChecked) setIsChecked(false);
	};

	const onSubmit = (e) => {
		let url = '';
		e.preventDefault();
		url += `alwaysfree=${e.target.alwaysfree.checked}`;
		url += `&nightfree=${e.target.nightfree.checked}`;
		url += `&satfree=${e.target.satfree.checked}`;
		url += `&holidayfree=${e.target.holidayfree.checked}`;
		url += `&lat=${state.latitude}`;
		url += `&lng=${state.longitude}`;
		history.push('/seoul-parking-lot-finder/search?' + url);
	};

	return (
		<>
			<Wrapper onSubmit={onSubmit}>
				<FormGroup>
					<Label>
						<Input type="checkbox" name="alwaysfree" />
						무료 주차장
					</Label>
					<br />
					<Label>
						<Input type="checkbox" name="nightfree" />
						야간 무료개장
					</Label>
					<br />
					<Label>
						<Input type="checkbox" name="satfree" />
						토요일 무료개장
					</Label>
					<br />
					<Label>
						<Input type="checkbox" name="holidayfree" />
						공휴일 무료개장
					</Label>
					<br />
					<Label>
						<Input
							id="PopoverLocation"
							type="checkbox"
							checked={isChecked}
							onClick={onClickedCtrChange}
							readOnly
						/>
						탐색 기준 직접 설정
					</Label>
					<Help id="PopoverHelp">?</Help>
					{/*도움말 팝오버(Help Popover)*/}
					<Popover
						placement="bottom"
						isOpen={helpOpen}
						target="PopoverHelp"
						toggle={toggleHelp}
					>
						<PopoverText>
							현재 위치가 아닌 특정한 장소를 기준으로 하여 주변의 주차장을 검색할 수
							있습니다.
						</PopoverText>
					</Popover>
					{/*위치 팝오버(Location Popover)*/}
					<Popover placement="bottom" isOpen={locationOpen} target="PopoverLocation">
						<PopoverText>
							탐색 기준(지도의 중앙)이 "{state.location}"으로 설정되었습니다.
						</PopoverText>
					</Popover>
				</FormGroup>
				<CircleSubmit type="submit" value="빠르게 찾아보기" />
			</Wrapper>
			{/*modal내부에서도 onSubmit이 있어서 formgroup을 분리해야함*/}
			<Center
				isOpen={centerModal}
				toggleModal={toggleModal}
				toggleLocation={toggleLocation}
				isActivated={() => setIsChecked(true)}
			/>
		</>
	);
};

export default InitiateSearch;