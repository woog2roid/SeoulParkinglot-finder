import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	min-height: 100vh;
`;

export const NavWrapper = styled.div`
	position: relative;
	z-index: 2;
`

export const ContentsWrapper = styled.div`
	padding-bottom: 2.5rem;
	z-index: 1;
`;

export const FooterWrapper = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 2.5rem;
	background-color: white;
`;