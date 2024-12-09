import styled from "styled-components";

const GlobalStyles = {
	Container: styled.div`
		text-align: center;
		margin-left: 2.5%;
		z-index: 2;
	`,
	Binding: styled.div`
		background-color: black;
		width: 2.5%;
		height: var(--app-height, 100vh);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	`,
};

export default GlobalStyles;
