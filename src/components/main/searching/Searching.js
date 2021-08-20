import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from 'reactstrap';
import { Wrapper, FormWrapper, FormGroup, Label, CircleSubmit } from './Style';

const InitiateSearch = () => {
	const history = useHistory();

	const makeUrl = (condition, url) => {
		if (condition.checked) {
			url += `&${condition.name}=${condition.value}`;
		}
		return url;
	};

	const onSubmit = (e) => {
		e.preventDefault();
		let url = '';
		url = makeUrl(e.target.alwaysfree, url);
		url = makeUrl(e.target.nightfree, url);
		url = makeUrl(e.target.satfree, url);
		url = makeUrl(e.target.holidayfree, url);
		url = url.slice(1, url.length);
		history.push('/saerch?' + url);
	};

	return (
		<Wrapper>
			<FormWrapper onSubmit={onSubmit}>
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
				</FormGroup>
				<CircleSubmit type="submit" value="빠르게 찾아보기" />
			</FormWrapper>
		</Wrapper>
	);
};

export default InitiateSearch;