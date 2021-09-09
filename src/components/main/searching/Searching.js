import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Popover } from 'reactstrap';
import { Wrapper, FormGroup, Label, Help, PopoverText, CircleSubmit } from './Style';
import Center from './modals/center/Center';

const InitiateSearch = () => {
	const history = useHistory();
	
	//popOver (help popover): 알아서 자동으로 닫히게
	const [popoverOpen, setPopoverOpen] = useState(false);
	const togglePopover = () => {
		setPopoverOpen(true);
		setTimeout(() => setPopoverOpen(false), 2500);
	}
	
	//modal 관련해서
	const [centerModal, setCenterModal] = useState(false);
	const toggleModal = () => setCenterModal(!centerModal);
	//특정 장소 기준 검색 기능이 눌렸는지 ㅇㅇ... 
	const [isChecked, setIsChecked] = useState(false);
	const onClickedCtrChange = () => {
		//modal 열기
		if(!isChecked) setCenterModal(true);
		if(isChecked) setIsChecked(false);
	};
	
	const onSubmit = (e) => {
		let url = '';
		const makeUrl = (condition) => {
			url += `&${condition.name}=${condition.checked}`;
		};
		
		e.preventDefault();
		makeUrl(e.target.alwaysfree, url);
		makeUrl(e.target.nightfree, url);
		makeUrl(e.target.satfree, url);
		makeUrl(e.target.holidayfree, url);
		url = url.slice(1, url.length);
		history.push('/seoul-parking-lot-finder/search?' + url);
	};

	return (
		<>
			<Wrapper onSubmit={onSubmit}>
					<FormGroup>
						<Label><Input type="checkbox" name="alwaysfree" />무료 주차장</Label><br />
						<Label><Input type="checkbox" name="nightfree" />야간 무료개장</Label><br />
						<Label><Input type="checkbox" name="satfree" />토요일 무료개장</Label><br />
						<Label><Input type="checkbox" name="holidayfree" />공휴일 무료개장</Label><br />
						<Label>
							<Input type="checkbox" checked={isChecked} onClick={onClickedCtrChange} readOnly/>
							탐색 위치 직접 설정
						</Label>
						<Help id="PopoverCenter">?</Help>
						<Popover placement="bottom" isOpen={popoverOpen}
							target="PopoverCenter" toggle={togglePopover}>
							<PopoverText>
								현재 위치가 아닌 특정한 장소를 기준으로 하여 주변의 주차장을 검색할 수 있습니다.
							</PopoverText>
						</Popover>
					</FormGroup>
					<CircleSubmit type="submit" value="빠르게 찾아보기" />
			</Wrapper>
			{/*modal내부에서도 onSubmit이 있어서 formgroup을 분리해야함*/}
			<Center isOpen={centerModal} toggle={toggleModal}
				isActivated={()=>setIsChecked(true)}/>
		</>
	);
};

export default InitiateSearch;