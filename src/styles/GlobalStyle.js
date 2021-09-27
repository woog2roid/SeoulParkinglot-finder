import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: 'Noto Sans KR', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	@media (min-width: 320px) {
		body {
			margin-left: 0%;
			margin-right: 0%;
		}
	}
	@media (min-width: 768px) {
		body {
			margin-left: 8%;
			margin-right: 8%;
		}
	}
	@media (min-width: 1280px) {
		body {
			margin-left: 15%;
			margin-right: 15%;
		}
	}
`;

export default GlobalStyle;