import styled from "styled-components";
import { breakPoints, fonts } from "../data/styleData";

const IntroContainer = styled.section`
	width: 100%;
	height: 100vh;
`;
const LogoContainer = styled.div`
	display: flex;
	height: 50vh;
	justify-content: center;
	align-items: center;
`;
const OwnershipBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border: black double;
	border-width: 20px;
	border-radius: 5px;
	max-width: 75%;
	margin: auto;
	background-color: rgba(255, 255, 255, 0.8);

	@media (${breakPoints.mediumDevice}) {
		width: 50%;
		// max-height: 25vh;
	}
`;
const OwnershipText = styled.p`
	font-weight: bold;
	padding: 5%;
	@media (${breakPoints.mediumDevice}) {
		padding: 2%;
	}
`;
const NameBlock = styled.div`
	padding: 5%;
	@media (${breakPoints.mediumDevice}) {
		padding: 2%;
	}
`;

const NameCursive = styled.h1`
	font-size: 2rem;
	${fonts.cursive}
`;
const NamePrint = styled.p`
	font-size: 1.5rem;
	${fonts.written}
`;
const Title = styled.h2`
	font-size: 2rem;
	${fonts.typed}
	align-text: center;
`;
export const IntroStyles = {
	IntroContainer,
	LogoContainer,
	OwnershipBlock,
	OwnershipText,
	NameBlock,
	NameCursive,
	NamePrint,
	Title,
};
