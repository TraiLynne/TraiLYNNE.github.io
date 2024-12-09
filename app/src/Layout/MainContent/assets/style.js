import styled from "styled-components";

export const MainContent = styled.div`
	display: flex;
	height: 70vh;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow: hidden;
	transition: height 0.5s ease, opacity 0.5s ease;
	// background-color: white;
`;

export const ViewContainer = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	transition: opacity 0.5s ease;
`;

export const MenuBar = styled.div`
	background: #ffffffaa;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 800px;
	margin-bottom: 10px;
	transition: all 0.5s ease;
`;

export const MenuItems = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	background: #ffffffaa;
`;

export const MenuItem = styled.li`
	padding: 5px 15px;
	cursor: pointer;
	color: white;
	transition: color 0.3s ease;
	text-shadow: 2px 2px 5px black;

	&:hover,
	&.active {
		color: black;
		font-weight: bold;
		text-shadow: 2px 2px 5px red;
	}
`;

export const CloseButton = styled.button`
	margin-left: auto;
	padding: 5px 10px;
	font-size: 1em;
	cursor: pointer;
	border: none;
	border-radius: 5px;
	transition: background-color 0.3s ease;

	margin-left: auto;
	font-family: "Courier New", Courier, monospace; /* Matches the notebook theme */
	cursor: pointer;
	border: 2px solid black;
	border-radius: 8px;
	background-color: #ffffff;
	color: black;
	transition: all 0.3s ease;

	/* Add subtle box shadow for a 3D effect */
	box-shadow: 2px 2px 0px black;

	/* Hover effect to make it stand out */
	&:hover {
		background-color: #ffcccc;
		box-shadow: 2px 2px 0px #ffcccc;
	}

	/* Active state for "pressed" effect */
	&:active {
		transform: translate(2px, 2px);
		box-shadow: 0px 0px 0px black;
	}
`;

export const View = styled.div`
	flex-grow: 1;
	display: flex;
	height: 100%;
	min-width: 100%;
	justify-content: center;
	align-items: center;
	font-size: 1.5em;
	transition: opacity 0.5s ease;
	border: red 1px solid;
`;
