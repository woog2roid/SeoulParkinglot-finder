import React from 'react';
import { Input } from 'reactstrap';
import { Wrapper, FormWrapper, FormGroup, Label, CircleSubmit } from './Style';

const InitiateSearch = () => {
	return (
		<Wrapper>
			<FormWrapper action='./search'>
				<FormGroup>
					<Label><Input type="checkbox" name="alwaysfree"/>무료 주차장</Label><br />
					<Label><Input type="checkbox" name="nightfree"/>야간 무료개장</Label><br />
					<Label><Input type="checkbox" name="satfree"/>토요일 무료개장</Label><br />
					<Label><Input type="checkbox" name="holidayfree"/>공휴일 무료개장</Label>
				</FormGroup>
				<CircleSubmit type="submit" value="빠르게 찾아보기" />
			</FormWrapper>
		</Wrapper>
	);
};

export default InitiateSearch;