import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${({ mode }) => (mode === 1 ? "100%" : mode === 2 ? "20%" : "80%")};
	transition: height 0.5s ease;
`;
