import styled from "styled-components";
import { BreakPoints, Fonts } from "../../Global/assets";

export const HeroStyle = {
	Container: styled.section`
		width: 100%;
		height: 100vh;
	`,
};

export const LogoStyle = {
	Container: styled.div`
		display: flex;
		height: 50vh;
		justify-content: center;
		align-items: center;
	`,
	Image: styled.img`
		height: 75%;
		width: auto;
	`,
};

export const OwnershipStyle = {
	Container: styled.div`
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		border: black double;
		border-width: 20px;
		border-radius: 5px;
		max-width: 75%;
		margin: auto;
		background-color: rgba(255, 255, 255, 0.8);

		@media (${BreakPoints.mediumDevice}) {
			width: 50%;
		}
	`,
	Text: styled.p`
		font-weight: bold;
		padding: 5%;
		@media (${BreakPoints.mediumDevice}) {
			padding: 2%;
		}
	`,
	TitleText: styled.h2`
		font-size: 2rem;
		${Fonts.typed}
		align-text: center;
	`,
};

export const NameStyle = {
	Container: styled.div`
		padding: 5%;
		@media (${BreakPoints.mediumDevice}) {
			padding: 2%;
		}
	`,
	Print: styled.p`
		font-size: 1.5rem;
		${Fonts.Written.Print}
	`,
	Written: styled.h1`
		font-size: 2rem;
		${Fonts.Written.Cursive}
	`,
};

export const TitleStyle = {
	Container: styled.div`
		min-width: ${(props) => props.longestTitleLength}ch;
		text-align: center;
		white-space: nowrap;
		padding: 2%;
	`,
	Text: styled.h2`
		font-size: 2rem;
		${Fonts.monospace}
		align-text: center;
	`,
};
