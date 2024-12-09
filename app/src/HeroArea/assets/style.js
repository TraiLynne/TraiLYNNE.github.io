import styled from "styled-components";
import { BreakPoints, Fonts } from "../../Global/assets";

export const HeroStyle = {
	Container: styled.section`
		width: 100%;
		height: 100%;
	`,
	Top: styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		height: ${({ mode }) => (mode === 2 ? "100%" : "45%")};
	`,
	Middle: styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		height: 45%;
	`,
	Bottom: styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		height: 10%;
	`,
};

export const LogoStyle = {
	Container: styled.div`
		display: flex;
		height: 100%;
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
		width: 80%;
		border: 20px double black;
		background: rgba(255, 255, 255, 0.8);
		text-align: center;

		@media (${BreakPoints.mediumDevice}) {
			width: 70%;
		}

		@media (${BreakPoints.largeDevice}) {
			width: 50%;
		}
	`,
	Text: styled.p`
		font-weight: bold;
		padding: 0.5%;
		@media (${BreakPoints.mediumDevice}) {
			padding: 1%;
		}
	`,
	TitleText: styled.h2`
		font-size: 2rem;
		${Fonts.typed}
		text-align: center; /* Fixed typo from align-text to text-align */
	`,
};

export const NameStyle = {
	Container: styled.div`
		padding: 2%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

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
		min-width: ${({ longestTitleLength }) => longestTitleLength}ch;
		text-align: center;
		white-space: nowrap;
		padding: 2%;
	`,
	Text: styled.h2`
		font-size: 2rem;
		${Fonts.Monospace}
		align-text: center;
	`,
};