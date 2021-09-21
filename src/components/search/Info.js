const width = window.screen.availWidth;
const mobile = 320, tablet = 768, desktop = 1280;

const wrapperStyle = `
	text-align: left;
	z-index: 1;
	padding: 5% 5% 5% 5%;
	${mobile < width && width < tablet ?
	//MOBILE style
	`
		width: 190px;
	`
	: width < desktop ?
	//TABLET style
	`
		width: 210px;
	`
	:
	//DESKTOP style
	`
		width: 250px;
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

const addrStyle = `
	${mobile < width && width < tablet ?
	//MOBILE style
	`
		font-size: 6px;
	`
	: width < desktop ?
	//TABLET style
	`
		font-size: 11px;
	`
	:
	//DESKTOP style
	`
		font-size: 13px;
	`}
`;

const timeStyle = `
	${mobile < width && width < tablet ?
	//MOBILE style
	`
		font-size: 10px;
	`
	: width < desktop ?
	//TABLET style
	`
		font-size: 13px;
	`
	:
	//DESKTOP style
	`
		font-size: 15px;
	`}
`;

const payStyle = `
	${mobile < width && width < tablet ?
	//MOBILE style
	`
		font-size: 8px;
	`
	: width < desktop ?
	//TABLET style
	`
		font-size: 11px;
	`
	:
	//DESKTOP style
	`
		font-size: 13px;
	`}
`;

const Info = (data) => {
	const wrapper = document.createElement('div');
	wrapper.style.cssText = wrapperStyle;
	
	const name = document.createElement('div');
	let parking_name = data.PARKING_NAME;
	if(parking_name.length > 10) parking_name = parking_name.substr(0, 10) + "...";
	name.innerHTML =  parking_name;
	name.style.cssText = titleStyle;
	wrapper.appendChild(name);

	const address = document.createElement('div');
	address.innerHTML = `(${data.ADDR})`;
	address.style.cssText = addrStyle;
	wrapper.appendChild(address);
	
	const isOpen = (data.WEEKDAY_END_TIME !== "0000");
	const isOpenOnWeekend = (data.WEEKEND_END_TIME !== "0000");
	const isOpenOnHoliday = (data.HOLIDAY_END_TIME !== "0000");
	
	const time = document.createElement('div');
	time.innerHTML = 
		`평일: ${isOpen ? `${data.WEEKDAY_BEGIN_TIME}~${data.WEEKDAY_END_TIME}</br>` : `운영 안함</br>`}` + 
		`주말: ${isOpenOnWeekend ? `${data.WEEKEND_BEGIN_TIME}~${data.WEEKEND_END_TIME}</br>` : `운영 안함</br>`}` +
		`공휴일: ${isOpenOnHoliday ? `${data.HOLIDAY_BEGIN_TIME}~${data.HOLIDAY_END_TIME}` : `운영 안함`}`;
	time.style.cssText = timeStyle;
	wrapper.appendChild(time);
	
	const pay = document.createElement('div');
	pay.innerHTML =
		`${isOpen ? `유료: ${data.PAY_YN}` : ""}` +
		`${isOpenOnWeekend ? ` / 토요일유료: ${data.SATURDAY_PAY_YN} `: ""}` +
		`${isOpenOnHoliday ? ` / 공휴일유료: ${data.HOLIDAY_PAY_YN} ` : ""}`;
	pay.style.cssText = payStyle;
	wrapper.appendChild(pay);
	
	return wrapper;
};

export default Info;