import React from "react";
import { Header } from "./assets/style";

const HeaderComponent = ({ mode, onOpenBook }) => (
	<Header mode={mode}>
		{mode === 1 ? (
			<button onClick={onOpenBook}>Open Book</button>
		) : mode === 3 ? (
			<button onClick={onOpenBook}>Open Book</button>
		) : (
			<h1>Header</h1>
		)}
	</Header>
);

export default HeaderComponent;
