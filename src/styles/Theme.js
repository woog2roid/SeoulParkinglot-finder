const displaySize = {
	mobile: "320px",
	tablet: "768px",
	desktop: "1280px"
};

const color = {
	primary: "#007BFF"
};

const Theme = {
	primary: `${color.primary}`,
	mobile: `(min-width: ${displaySize.mobile})`,
	tablet: `(min-width: ${displaySize.tablet})`,
	desktop: `(min-width: ${displaySize.desktop})`
};

export default Theme;