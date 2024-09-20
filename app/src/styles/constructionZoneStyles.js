import styled, { keyframes } from "styled-components";
import { breakPoints } from "../data/styleData";

const scrollText = keyframes`
	from {
		transform: translateX(100%);
	}
	to {
		transform: translateX(-100%);
	}
`;

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	z-index: 10;
`;

const Tape = styled.div`
	position: absolute;
	top: 40%;
	left: -50%;
	width: 200%;
	height: 50px;
	background: repeating-linear-gradient(
		45deg,
		black,
		black 20px,
		yellow 20px,
		yellow 40px
	);
	transform: rotate(-45deg);
	z-index: 10;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (${breakPoints.mediumDevice}) {
		top: 45%;
	}
`;

const Text = styled.p`
	text-decoration-line: overline;
	text-shadow: 1px 1px 2px black, 0 0 25px black, 0 0 5px white;
	color: white;
	font-weight: bold;
	text-transform: uppercase;
	font-size: 2.5rem;
	white-space: nowrap;
	padding-left: 20px;
	display: inline-block;
	animation: ${scrollText} 10s linear infinite;

	:after {
		content: "🚨Under Contruction👷🏾‍♀️";
	}
`;

export const ConstructionStyles = {
	Container,
	Tape,
	Text,
};
