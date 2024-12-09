import styled from "styled-components";
import { BreakPoints, Fonts } from "../../../Global/assets";

export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute; /* Anchor the footer at the bottom */
	bottom: 0; /* Stay at the bottom of the container */
	left: 0;
	right: 0;
	height: ${({ mode }) => (mode === 2 ? "10vh" : mode === 3 ? "20vh" : "0")};
	transition: height 0.5s ease;
`;

export const BarcodeStyles = {
	Container: styled.section`
		border: black 5px solid;
		background: white;
		max-height: 85%;
		max-width: 50%;
		padding: 2%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	`,
	Barcode: styled.p`
		${Fonts.Encoded}
		font-size: 2em;
		// margin: 1%;
	`,
	MadeIn: styled.p`
		${Fonts.Monospace}// margin: 1%;
	`,
	Copyright: styled.p`
		// margin: 1%;
	`,
};
