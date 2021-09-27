const breakpoint = {
	mobile: `(min-width: 320px)`,
	tablet: `(min-width: 768px)`,
	desktop: `(min-width: 1280px)`,
};

const color = {
	primary: "#007BFF",
};

const fontSize = {
	xxl:
	`@media ${breakpoint.mobile} {
		font-size: 25px;
	}
	@media ${breakpoint.tablet} {
		font-size: 30px;
	}
	@media ${breakpoint.desktop} {
		font-size: 40px;
	}`,
	
	xl:
	`@media ${breakpoint.mobile} {
		font-size: 20px;
	}
	@media ${breakpoint.tablet} {
		font-size: 25px;
	}
	@media ${breakpoint.desktop} {
		font-size: 30px;
	}`,
	
	l:
	`@media ${breakpoint.mobile} {
		font-size: 14px;
	}
	@media ${breakpoint.tablet} {
		font-size: 18px;
	}
	@media ${breakpoint.desktop} {
		font-size: 23px;
	}`,
	
	m:
	`@media ${breakpoint.mobile} {
		font-size: 12px;
	}
	@media ${breakpoint.tablet} {
		font-size: 15px;
	}
	@media ${breakpoint.desktop} {
		font-size: 20px;
	}`,
	
	s:
	`@media ${breakpoint.mobile} {
		font-size: 10px;
	}
	@media ${breakpoint.tablet} {
		font-size: 15px;
	}
	@media ${breakpoint.desktop} {
		font-size: 18px;
	}`,
	
	xs:
	`@media ${breakpoint.mobile} {
		font-size: 9px;
	}
	@media ${breakpoint.tablet} {
		font-size: 12px;
	}
	@media ${breakpoint.desktop} {
		font-size: 15px;
	}`,
};

const Theme = {
	//display
	mobile: breakpoint.mobile,
	tablet: breakpoint.tablet,
	desktop: breakpoint.desktop,
	//color
	primary: color.primary,
	//fontSize
	xxl: fontSize.xxl,
	xl: fontSize.xl,
	l: fontSize.l,
	m: fontSize.m,
	s: fontSize.s,
	xs: fontSize.xs,
};

export default Theme;