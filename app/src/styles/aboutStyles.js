import styled from "styled-components";
import Paper from "../assets/paper.png";

const Container = styled.section`
	position: relative;
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	background-image: url(${Paper});
	background-size: 100% auto;
	background-repeat: no-repeat;
`;

export const AboutStyles = {
	Container,
};
