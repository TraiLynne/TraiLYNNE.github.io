import { useState } from "react";
import Footer from "./Footer";
import GlobalStyles from "./Global/GlobalStyles";
import Hero from "./HeroArea";

import Quotes from "./Quotes";
import { AppContainer } from "./style";
import HeaderComponent from "./Layout/Header";
import MainContentComponent from "./Layout/MainContent";
import FooterComponent from "./Layout/Footer";

const App = () => {
	const [mode, setMode] = useState(1); // Default to Mode 1 on load

	const openBook = () => setMode(2); // Switch to Mode 2
	const closeBook = () => setMode(3); // Switch to Mode 3

	return (
		<AppContainer>
			<HeaderComponent mode={mode} onOpenBook={openBook} />
			<MainContentComponent mode={mode} onCloseBook={closeBook} />
			<FooterComponent mode={mode} />
		</AppContainer>
	);
};

export default App;
