import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${({ mode }) =>
		mode === 1 ? "100vh" : mode === 2 ? "20vh" : "80vh"};
	background: #4caf50; /* Green background for visibility */
	color: white;
	transition: height 0.5s ease;
`;
