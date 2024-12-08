import styled from "styled-components";

export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute; /* Anchor the footer at the bottom */
	bottom: 0; /* Stay at the bottom of the container */
	left: 0;
	right: 0;
	height: ${({ mode }) => (mode === 2 ? "10vh" : mode === 3 ? "20vh" : "0")};
	background: #2196f3; /* Blue background for visibility */
	color: white;
	transition: height 0.5s ease;
`;
