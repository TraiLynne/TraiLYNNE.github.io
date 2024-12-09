import React from "react";
import { Header } from "./assets/style";
import Hero from "../../HeroArea";

const HeaderComponent = ({ mode, onOpenBook }) => (
	<Header mode={mode}>
		<Hero mode={mode} onOpenBook={onOpenBook} />
	</Header>
);

export default HeaderComponent;
