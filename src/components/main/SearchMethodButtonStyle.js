import styled from 'styled-components';
import { Button } from 'reactstrap';

export const Wrapper = styled.div`
	@media all and (max-width:767px) {
    	margin-top: 20px;
		margin-bottom: 15px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
    	margin-top: 30px;
		margin-bottom: 20px;
    }
    @media all and (min-width:1081px) {
		margin-top: 40px;
		margin-bottom: 25px;
    }
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: inline-block;
	text-align: center;
`;

export const CircleButton = styled(Button)`
	border-radius: 50%;
	@media all and (max-width:767px) {
        width: 130px;
		height: 130px;
		line-height: 110px;
		font-size: 13px;
		& + & {
			margin-left: 20px;
		}
	}
    @media all and (min-width:768px) and (max-width:1080px) {
        width: 200px;
		height: 200px;
		line-height: 180px;    
		font-size:18px;
		& + & {
			margin-left: 100px;
		}
	}
    @media all and (min-width:1081px) {
        width: 250px;
		height: 250px;
		line-height: 230px;
		font-size: 25px;
		& + & {
			margin-left: 200px;
		}
    }
`;