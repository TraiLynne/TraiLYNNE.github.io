// src/components/Menu.js
import React from "react";
import { CloseButton, MenuBar, MenuItem, MenuItems } from "../../assets/style";

const Menu = ({ currentView, setCurrentView, totalViews, closeBook }) => {
	const handleMenuClick = (index) => {
		setCurrentView(index);
	};

	return (
		<MenuBar>
			<MenuItems>
				{Array.from({ length: totalViews }, (_, index) => (
					<MenuItem
						key={index}
						onClick={() => handleMenuClick(index)}
						className={currentView === index ? "active" : ""}>
						Page {index + 1}
					</MenuItem>
				))}
			</MenuItems>
			<CloseButton onClick={closeBook} className="close-button">
				Close Book
			</CloseButton>
		</MenuBar>
	);
};

export default Menu;
