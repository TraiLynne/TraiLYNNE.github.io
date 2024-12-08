import styled from "styled-components";

export const MainContent = styled.main`
	flex-grow: 1; /* Allow the main content to occupy space between header and footer */
	display: ${({ mode }) => (mode === 1 || mode === 3 ? "none" : "flex")};
	justify-content: center;
	align-items: center;
	background: #f0f0f0; /* Light gray for visibility */
	transition: all 0.5s ease;
`;
