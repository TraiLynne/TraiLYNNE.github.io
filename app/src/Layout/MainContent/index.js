// src/components/MainContent.js
import React from "react";
import { MainContent, ViewContainer } from "./assets/style";

import views from "./views";
import Menu from "./components/Menu";

const MainContentComponent = ({
	currentView,
	setCurrentView,
	totalViews,
	closeBook,
	mode,
}) => {
	return mode === 2 ? (
		<MainContent mode={mode}>
			{/* Menu Bar at the Top of Main Content */}
			<Menu
				currentView={currentView}
				setCurrentView={setCurrentView}
				totalViews={totalViews}
				closeBook={closeBook}
			/>
			{/* Display the current view */}
			<ViewContainer>{views[currentView]}</ViewContainer>
		</MainContent>
	) : null;
};

export default MainContentComponent;
