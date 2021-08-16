import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const FormWrapper = styled.form`
	width: 100%;
	text-align: center;
`;

export const FormGroup = styled.div`
	display: inline-block;
	vertical-align: middle;
	text-align: left;
	@media ${(props) => props.theme.mobile} {
		margin-right: 20px;
	}
	@media ${(props) => props.theme.tablet} {
		margin-right: 30px;
	}
	@media ${(props) => props.theme.desktop} {
		margin-right: 35px;
	}
`;

export const Label = styled.label`
	font-size: 13px;
	margin: 2px;
	@media ${(props) => props.theme.tablet} {
		font-size: 15px;
		margin: 4px;
	}
	@media ${(props) => props.theme.desktop} {
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
	border-radius: 50%;
	&:hover{
		color: white;
		background-color: #007BFF;
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
		font-size:18px;
	}
	@media ${(props) => props.theme.desktop} {
        width: 230px;
		height: 230px;
		line-height: 210px;
		font-size: 25px;
	}
`;