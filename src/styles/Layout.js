import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	min-height: 100vh;
`;

export const NavWrapper = styled.div`
	position: absolute;
	min-height: 60px;
	width: 100%;
	z-index: 2;
	-webkit-transform: translate3d(0,0,1px);
`

export const ContentsWrapper = styled.div`
	position: relative;
	height: 100vh;
	padding-top: 60px;
	margin-bottom: 20px;
	z-index: 1;
`;

export const FooterWrapper = styled.div`
	position: fixed;
	right: 0;
	left: 0;
	bottom: 0;
	min-height: 20px;
	width: 100%;
	z-index: 2;
	background-color: white;
`;