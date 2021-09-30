import React from 'react';
import styled from 'styled-components';

const Button = styled.input`
	display: inline-block;
	
	//color를 맞춤(hover시 반전)
	color: ${(props) => props.theme.primary};
	background-color: white;
	border-color: ${(props) => props.theme.primary};
	border-width: thin;
	border-style: solid;
	border-radius: 50%;
	&:hover {
		color: white;
		background-color: ${(props) => props.theme.primary};
	}

	//중앙에 위치할 수 있도록.
	${(props) => props.theme.m}
	@media ${(props) => props.theme.mobile} {
		width: 130px;
		height: 130px;
		line-height: 110px;
	}
	@media ${(props) => props.theme.tablet} {
		width: 200px;
		height: 200px;
		line-height: 180px;
	}
	@media ${(props) => props.theme.desktop} {
		width: 230px;
		height: 230px;
		line-height: 210px;
	}
`;

const SearchButton = () => {
	return (
		<Button type="submit" value="빠르게 찾아보기" />
	);
};

export default SearchButton;