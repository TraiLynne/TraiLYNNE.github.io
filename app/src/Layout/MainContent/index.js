// src/components/MainContent.js
import React from "react";
import Menu from "../Menu";
import { MainContent, View, ViewContainer } from "./assets/style";
import Quotes from "../../Quotes";

const views = [
	<View key="1" className="view">
		<Quotes />
	</View>,
	// <View key="2" className="view">
	// 	<h1>More on the way</h1>
	// </View>,
	// <View key="3" className="view">
	// 	View 3 Content
	// </View>,
	// Add more views as needed
];

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
