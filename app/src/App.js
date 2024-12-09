import { useState } from "react";
import GlobalStyles from "./Global/GlobalStyles";
import Hero from "./HeroArea";

import Quotes from "./Quotes";
import { AppContainer } from "./style";
import HeaderComponent from "./Layout/Header";
import MainContentComponent from "./Layout/MainContent";
import FooterComponent from "./Layout/Footer";

const App = () => {
	const [mode, setMode] = useState(1); // Modes: 1, 2, 3
	const [currentView, setCurrentView] = useState(0);
	const totalViews = 1; // Update this if you add more views

	// Function to open the book (Mode 1 -> Mode 2)
	const openBook = () => {
		setMode(2);
	};

	// Function to close the book (Mode 2 -> Mode 3)
	const closeBook = () => {
		setMode(3);
	};

	// Function to open the book from Mode 3 back to Mode 2
	const openBookFromMode3 = () => {
		setMode(2);
	};

	return (
		<div className={`app mode${mode}`}>
			<HeaderComponent
				mode={mode}
				openBook={openBook}
				openBookFromMode3={openBookFromMode3}
			/>

			<MainContentComponent
				currentView={currentView}
				setCurrentView={setCurrentView}
				totalViews={totalViews}
				closeBook={closeBook}
				mode={mode}
			/>
			<FooterComponent mode={mode} />
		</div>
	);
};

export default App;
