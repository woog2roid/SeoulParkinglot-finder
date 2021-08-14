import styled from 'styled-components';
import { WrapperUtil } from '../../utils/FixedContents';

export const Wrapper = styled(WrapperUtil)`
	height: 28%;
	text-align: left;
	@media all and (max-width:767px) {
    	width: 85%;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		width: 70%;
    }
    @media all and (min-width:1081px) {
    	width: 70%;
	}	
`

export const Intro = styled.h1`
	font-weight: bold;	
	@media all and (max-width:767px) {
    	font-size: 12px;  
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		font-size: 15px;
    }
    @media all and (min-width:1081px) {
    	font-size: 20px;
	}
	margin-bottom: 2px;
`;

export const Main = styled.h1`
	font-weight: bold;
	@media all and (max-width:767px) {
    	font-size: 25px;  
		margin-bottom: 3px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		font-size: 30px;
		margin-bottom: 5px;
    }
    @media all and (min-width:1081px) {
    	font-size: 40px;
		margin-bottom: 6px;
	}
`;

export const Comain = styled.div`
	@media all and (max-width:767px) {
    	font-size: 14px;
		line-height: 17px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		font-size: 18px;
		line-height: 21px;
    }
    @media all and (min-width:1081px) {
    	font-size: 22px;
		line-height: 25px;
	}
`;

export const Description = styled.div`
	font-weight: lighter;
	@media all and (max-width:767px) {
    	font-size: 8px;
		line-height: 13px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		font-size: 12px;
		line-height: 17px;
    }
    @media all and (min-width:1081px) {
    	font-size: 16px;
		line-height: 21px;
	}
`;