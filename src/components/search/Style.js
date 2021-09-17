/*
loading 중일 때: loading이 prefix로 붙는다.
*/
import styled from 'styled-components';
import { Button, Spinner } from 'reactstrap';

export const Wrapper = styled.div`
	text-align: center;
	@media ${(props) => props.theme.mobile} {
		margin-top: 5%;
	}
	@media ${(props) => props.theme.tablet} {
		margin-top: 10%;
	}
	@media ${(props) => props.theme.desktop} {
		margin-top: 30px;
	}
`;

export const Main = styled.div`
	margin-bottom: 2px;
	@media ${(props) => props.theme.mobile} {
		font-size: 20px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 25px;
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 30px;
	}
`;

export const Line = styled.hr`
	background-color: black;
	opacity: 0.25;
`;

export const Maps = styled.div`
	display: inline-block;
	@media ${(props) => props.theme.mobile} {
		width: 90%;
		height: 360px;
		margin-bottom: 10px;
	}
	@media ${(props) => props.theme.tablet} {
		width: 80%;
		height: 600px;
		margin-bottom: 15px;
	}
	@media ${(props) => props.theme.desktop} {
		width: 60%;
		height: 720px;
		margin-bottom: 20px;
	}
`;

export const Buttons = styled(Button)`
	@media ${(props) => props.theme.mobile} {
		width: 300px;
	}
	@media ${(props) => props.theme.tablet} {
		width: 500px;
	}
	@media ${(props) => props.theme.desktop} {
		width: 600px;
	}
`;

export const Description = styled.div`
	text-align: center;
	display: inline-block;
	@media ${(props) => props.theme.mobile} {
		font-size: 10px;
		width: 300px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 14px;
		width: 500px;
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 16px;
		width: 600px;
	}
`;

/*LOADING*/
export const LoadingWrapper = styled.div`
	position: relative;
	opacity: 0.8;
	@media ${(props) => props.theme.mobile} {
		height: 370px;
	}
	@media ${(props) => props.theme.tablet} {
		height: 615px;
	}
	@media ${(props) => props.theme.desktop} {
		height: 740px;
	}
`;

export const Progress = styled(Spinner)`
	position: absolute;
	width: 90px;
	height: 90px;
	bottom: calc(50% - 45px);
	left: calc(50% - 45px);
	z-index: 1;
	opacity: 1;
`;