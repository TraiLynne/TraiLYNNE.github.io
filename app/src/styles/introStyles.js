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
	width: 75%;
	height: 25vh;
	margin: auto;
	background-color: rgba(255, 255, 255, 0.8);

	@media (${breakPoints.mediumDevice}) {
		width: 50%;
	}
`;
const Ownership = styled.p`
	font-weight: bold;
`;

const NameCursive = styled.h1`
	font-size: 2rem;
	${fonts.cursive}
`;
const NamePrint = styled.p`
	font-size: 150%;
	// ${fonts.written}
`;
const Title = styled.h2`
	font-size: 150%;
	${fonts.written}
`;
export const IntroStyles = {
	IntroContainer,
	LogoContainer,
	OwnershipBlock,
	Ownership,
	NameCursive,
	NamePrint,
	Title,
};
