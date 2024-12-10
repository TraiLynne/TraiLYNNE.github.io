import React from "react";
import { Header } from "./assets/style";
import Hero from "./components/HeroArea";

const HeaderComponent = ({ mode, openBook, openBookFromMode3 }) => (
	<Header mode={mode}>
		<Hero
			mode={mode}
			openBook={openBook}
			openBookFromMode3={openBookFromMode3}
		/>
	</Header>
);

export default HeaderComponent;
