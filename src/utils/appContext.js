import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	//**************** variables ****************//
	const [isOpen, setOpen] = useState(false);


	//**************** functions ****************//
	const handleClick = () => {
		setOpen(!isOpen);
	};
	const closeMenu = () => {
		setOpen(false);
	};
   



	return (
		<AppContext.Provider
			value={{
				isOpen,
				handleClick,
				closeMenu,


			}}
		>
			{children}
		</AppContext.Provider>
	);
};
//custom hook useGlobalContext
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
