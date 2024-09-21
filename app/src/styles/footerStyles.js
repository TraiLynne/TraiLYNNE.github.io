import styled from "styled-components";
import { breakPoints, fonts } from "../data/styleData";

const Container = styled.section`
	background-color: white;
	max-width: 50vw;
	margin: 2% auto;
	padding: 1%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	border: solid 5px black;

	@media (${breakPoints.mediumDevice}) {
		max-width: 25vw;
	}

	@media (${breakPoints.largeDevice}) {
		max-width: 20vw;
	}
`;

const Barcode = styled.p`
	${fonts.encoded}
	font-size: 2em;
	margin: 2%;
`;
const Copyright = styled.p`
	${fonts.typed}
	margin: 2%;
`;

const MadeIn = styled.p`
	margin: 2%;
`;

export const FooterStyles = {
	Container,
	Barcode,
	Copyright,
	MadeIn,
};
