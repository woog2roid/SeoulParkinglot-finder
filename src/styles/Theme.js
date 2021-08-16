const displaySize = {
	mobile: "320px",
	tablet: "768px",
	desktop: "1280px"
}

const Theme = {
	mobile: `(min-width: ${displaySize.mobile})`,
	tablet: `(min-width: ${displaySize.tablet})`,
	desktop: `(min-width: ${displaySize.desktop})`
}

export default Theme;