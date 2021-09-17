import styled from 'styled-components';
import { PopoverBody } from 'reactstrap';

export const Wrapper = styled.form`
	width: 100%;
	text-align: center;
	@media ${(props) => props.theme.mobile} {
		height: 130px;
		margin-top: 20px;
		margin-bottom: 15px;
	}
	@media ${(props) => props.theme.tablet} {
		height: 200px;
		margin-top: 30px;
		margin-bottom: 20px;
	}
	@media ${(props) => props.theme.desktop} {
		height: 230px;
		margin-top: 40px;
		margin-bottom: 25px;
	}
`;

export const FormGroup = styled.div`
	display: inline-block;
	vertical-align: middle;
	text-align: left;
	padding-left: 27px;
	@media ${(props) => props.theme.mobile} {
		margin-right: 1%;
	}
	@media ${(props) => props.theme.tablet} {
		margin-right: 15px;
	}
	@media ${(props) => props.theme.desktop} {
		margin-right: 20px;
	}
`;

export const Label = styled.label`
	display: inline-block;
	@media ${(props) => props.theme.mobile} {
		font-size: 13px;
		margin: 0;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 15px;
		margin: 3px 0px 3px 0px;
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 18px;
		margin: 3px 0px 3px 0px;
	}
`;

export const Help = styled.span`
	background-color: gray;
	color: white;
	border-radius: 20%;
	@media ${(props) => props.theme.mobile} {
		font-size: 10px;
		padding: 0px 5px 0px 5px;
		margin-left: 3px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 13px;
		padding: 0px 7px 0px 7px;
		margin-left: 5px;
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 15px;
		padding: 0px 7px 0px 7px;
		margin-left: 7px;
	}
`;

export const PopoverText = styled(PopoverBody)`
	font-family: 'Noto Sans KR', sans-serif;
	@media ${(props) => props.theme.mobile} {
		font-size: 10px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 14px;
	}
	@media ${(props) => props.theme.desktop} {
		font-size: 14px;
	}
`;

export const CircleSubmit = styled.input`
	display: inline-block;
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
	@media ${(props) => props.theme.mobile} {
		width: 130px;
		height: 130px;
		line-height: 110px;
		font-size: 13px;
	}
	@media ${(props) => props.theme.tablet} {
		width: 200px;
		height: 200px;
		line-height: 180px;
		font-size: 18px;
	}
	@media ${(props) => props.theme.desktop} {
		width: 230px;
		height: 230px;
		line-height: 210px;
		font-size: 25px;
	}
`;