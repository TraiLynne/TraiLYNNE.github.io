import styled from "styled-components";

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
	justify-content: center;
	align-items: center;
	border: black double;
	border-width: 20px;
	border-radius: 5px;
	width: 75%;
	height: 25vh;
	margin: auto;
	background-color: rgba(255, 255, 255, 0.8);
`;

export const IntroStyles = {
	IntroContainer,
	LogoContainer,
	OwnershipBlock,
};
