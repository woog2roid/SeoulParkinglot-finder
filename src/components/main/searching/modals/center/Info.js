const width = window.screen.availWidth;
const mobile = 320, tablet = 768, desktop = 1280;

const wrapperStyle = `
	z-index: 1;
	${mobile < width && width < tablet ?
	//MOBILE style
	`
		width: 230px;
		padding: 1px;
	`
	: width < desktop ?
	//TABLET style
	`
		width: 350px;
	`
	:
	//DESKTOP style
	`
		width: 20vw;
		padding: 6px;
	`}
`;

const titleStyle = `
	${mobile < width && width < tablet ?
	//MOBILE style
	`
		font-size: 13px;
	`
	: width < desktop ?
	//TABLET style
	`
		font-size: 18px;
	`
	:
	//DESKTOP style
	`
		font-size: 20px;
	`}
`;

const buttonStyle = `
	border: none;
	background-color: #007BFF;
	color: white;
	opacity: 0.8;
	${mobile < width && width < tablet ?
	//MOBILE style
	`
		font-size: 10px;
		line-height: 13px;
	`
	: width < desktop ?
	//TABLET style
	`
		font-size: 15px;
		line-height: 18px;
	`
	:
	//DESKTOP style
	`
		font-size: 16px;
		line-height: 20px;
	`}
`;

const Info = (data, isActivated, toggle) => {
	let title = data.place_name;
	if(title.length > 10) title = title.substr(0, 10) + "...";

	let wrapper = document.createElement('div');
	wrapper.style.cssText = wrapperStyle;
	
	let content = document.createElement('span');
	content.innerHTML =  title;
	content.style.cssText = titleStyle;
	wrapper.appendChild(content);

	let button = document.createElement('button');
	button.innerHTML = '여기로 설정';
	button.style.cssText = buttonStyle;
	wrapper.appendChild(button);

	return wrapper;
};

export default Info;