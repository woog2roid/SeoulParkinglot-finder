import { createContext, useState } from 'react';

const SearchConditionContext = createContext({
	state: {
		free: false,
		nightFree: false,
		satFree: false,
		holidayFree: false,
		customedCenter: false,
	},
	actions:{
		setFree: () => {},
		setNightFree: () => {},
		setSatFree: () => {},
		setHolidayFree: () => {},
		setCustomedCenter: () => {},
	},
});

export const SearchConditionProvider = ({ children }) => {
	/*상태 목록*/
	const [free, setFree] = useState(false);
	const [nightFree, setNightFree] = useState(false);
	const [satFree, setSatFree] = useState(false);
	const [holidayFree, setHolidayFree] = useState(false);
	const [customedCenter, setCustomedCenter] = useState(false);
	
	const value = {
		searchState: { free, nightFree, satFree, holidayFree, customedCenter },
		searchActions: { setFree, setNightFree, setSatFree, setHolidayFree, setCustomedCenter }
	};
	
	return (
		<SearchConditionContext.Provider value={value}>
			{children}
		</SearchConditionContext.Provider>
	);
};

export const SearchConditionConsumer = SearchConditionContext.Consumer;

export default SearchConditionContext;