import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	min-height: 100vh;
`;

export const NavWrapper = styled.div`
	position: absolute;
	height: 60px;
	width: 100%;
	z-index: 2;
	-webkit-transform: translate3d(0,0,1px);
`

export const ContentsWrapper = styled.div`
	position: relative;
	min-height: 90vh;
	padding-top: 60px;
	z-index: 1;
`;

export const FooterWrapper = styled.div`
	position: relative;
	margin: 0;
	padding: 0;
	height: 30px;
	width: 100%;
	z-index: 2;
	background-color: white;
`;