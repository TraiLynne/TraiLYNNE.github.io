import styled from "styled-components";
import Paper from "../assets/paper.png";

const Container = styled.section`
	width: 100%;
	margin: 0;
	padding: 0;
	background-image: url(${Paper});
	background-size: 100% auto;
	background-repeat: no-repeat;
`;

export const AboutStyles = {
	Container,
};
