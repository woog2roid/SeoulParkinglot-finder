import React from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from 'reactstrap';
import { Wrapper, FormWrapper, FormGroup, Label, CircleSubmit } from './Style';

const InitiateSearch = () => {
	const history = useHistory();

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
		<Wrapper>
			<FormWrapper onSubmit={onSubmit}>
				<FormGroup>
					<Label><Input type="checkbox" name="alwaysfree" />무료 주차장</Label><br />
					<Label><Input type="checkbox" name="nightfree" />야간 무료개장</Label><br />
					<Label><Input type="checkbox" name="satfree" />토요일 무료개장</Label><br />
					<Label><Input type="checkbox" name="holidayfree" />공휴일 무료개장</Label>
				</FormGroup>
				<CircleSubmit type="submit" value="빠르게 찾아보기" />
			</FormWrapper>
		</Wrapper>
	);
};

export default InitiateSearch;