import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${({ mode }) =>
		mode === 1 ? "100vh" : mode === 2 ? "20vh" : "80vh"};
	transition: height 0.5s ease;
`;
