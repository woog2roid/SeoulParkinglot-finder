import styled from 'styled-components';

export const Wrapper = styled.div`
	@media all and (max-width:767px) {
		height: 130px;
    	margin-top: 20px;
		margin-bottom: 15px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
		height: 200px;
		margin-top: 30px;
		margin-bottom: 20px;
    }
    @media all and (min-width:1081px) {
		height: 230px;
		margin-top: 40px;
		margin-bottom: 25px;
    }
`;

export const FormWrapper = styled.form`
	width: 100%;
	text-align: center;
`;

export const FormGroup = styled.div`
	display: inline-block;
	vertical-align: middle;
	text-align: left;
	@media all and (max-width:767px) {
		margin-right: 20px;
	}
    @media all and (min-width:768px) and (max-width:1080px) {
		margin-right: 30px;
	}
    @media all and (min-width:1081px) {
		margin-right: 35px;
    }
`

export const Label = styled.label`
	@media all and (max-width:767px) {
		font-size: 13px;
		margin: 2px;
	}
    @media all and (min-width:768px) and (max-width:1080px) {
		font-size: 15px;
		margin: 4px;
	}
    @media all and (min-width:1081px) {
		font-size: 18px;
    }
`;

export const CircleSubmit = styled.input`
	//bootstrap primary color
	display: inline-block;
	color: #007BFF;
	background-color: white;
	border-color: #007BFF;
	border-width: thin;
	border-style: solid;
	&:hover{
		color: white;
		background-color: #007BFF;
	}

	border-radius: 50%;
	@media all and (max-width:767px) {
        width: 130px;
		height: 130px;
		line-height: 110px;
		font-size: 13px;
	}
    @media all and (min-width:768px) and (max-width:1080px) {
        width: 200px;
		height: 200px;
		line-height: 180px;    
		font-size:18px;
	}
    @media all and (min-width:1081px) {
        width: 230px;
		height: 230px;
		line-height: 210px;
		font-size: 25px;
    }
`;