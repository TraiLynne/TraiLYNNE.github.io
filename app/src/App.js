import { useEffect, useState } from "react";

import FooterComponent from "./Layout/Footer";
import HeaderComponent from "./Layout/Header";
import MainContentComponent from "./Layout/MainContent";
import { AppContainer } from "./style";

const App = () => {
	const [mode, setMode] = useState(1); // Modes: 1, 2, 3
	const [currentView, setCurrentView] = useState(0);
	const totalViews = 1; // Update this to add more views

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

	useEffect(() => {
		const setAppHeight = () => {
			document.documentElement.style.setProperty(
				"--app-height",
				`${window.innerHeight}px`
			);
		};

		// Set height on load and update on resize
		window.addEventListener("resize", setAppHeight);
		setAppHeight();

		// Cleanup event listener
		return () => window.removeEventListener("resize", setAppHeight);
	}, []);

	return (
		<AppContainer>
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
		</AppContainer>
	);
};

export default App;
