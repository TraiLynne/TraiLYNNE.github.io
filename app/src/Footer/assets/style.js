import styled from "styled-components";
import { BreakPoints, Fonts } from "../../Global/assets";

const FooterStyle = {
	Container: styled.section`
		background-color: white;
		max-width: 50vw;
		margin: 2% auto;
		padding: 1%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		border: solid 5px black;

		@media (${BreakPoints.mediumDevice}) {
			max-width: 25vw;
		}

		@media (${BreakPoints.largeDevice}) {
			max-width: 20vw;
		}
	`,
	Barcode: styled.p`
		${Fonts.Encoded}
		font-size: 2em;
		margin: 2%;
	`,
	MadeIn: styled.p`
		${Fonts.Monospace}
		margin: 2%;
	`,
	Copyright: styled.p`
		margin: 2%;
	`,
};

export default FooterStyle;
