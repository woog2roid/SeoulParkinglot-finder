import styled from 'styled-components';
import { Button } from 'reactstrap';

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
		margin-bottom: 4px;
	}
	@media ${(props) => props.theme.tablet} {
		width: 80%;
		height: 600px;
		margin-bottom: 8px;
	}
	@media ${(props) => props.theme.desktop} {
		width: 60%;
		height: 720px;
		margin-bottom: 15px;
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