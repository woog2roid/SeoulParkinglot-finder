import styled from 'styled-components';
import { WrapperUtil } from '../../styles/FixedContents';

export const Wrapper = styled(WrapperUtil)`
	height: 28%;
	text-align: left;
	@media ${(props) => props.theme.mobile} {
	    width: 85%;
	}
	@media ${(props) => props.theme.tablet} {
		width: 70%;
	}
	@media ${(props) => props.theme.desktop} {
    	width: 70%;
	}
`;

export const Intro = styled.h1`
	font-weight: bold;	
	margin-bottom: 2px;
	@media ${(props) => props.theme.mobile} {
    	font-size: 12px;  
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 15px;
	}
	@media ${(props) => props.theme.desktop} {
    	font-size: 20px;
	}
`;

export const Main = styled.h1`
	font-weight: bold;
	@media ${(props) => props.theme.mobile} {
		font-size: 25px;  
		margin-bottom: 3px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 30px;
		margin-bottom: 5px;
	}
	@media ${(props) => props.theme.desktop} {
    	font-size: 40px;
		margin-bottom: 6px;
	}
`;

export const Comain = styled.div`
	@media ${(props) => props.theme.mobile} {
		font-size: 14px;
		line-height: 17px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 18px;
		line-height: 21px;
	}
	@media ${(props) => props.theme.desktop} {
    	font-size: 22px;
		line-height: 25px;
	}
`;

export const Description = styled.div`
	font-weight: lighter;
	@media ${(props) => props.theme.mobile} {
		font-size: 8px;
		line-height: 13px;
	}
	@media ${(props) => props.theme.tablet} {
		font-size: 12px;
		line-height: 17px;
	}
	@media ${(props) => props.theme.desktop} {
    	font-size: 16px;
		line-height: 21px;
	}
`;