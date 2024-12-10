import styled from "styled-components";
import { Fonts } from "../../../../../Global/assets";

const BarcodeStyles = {
	Container: styled.section`
		border: black 5px solid;
		background: white;
		max-height: 85%;
		max-width: 50%;
		padding: 2%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	`,
	Barcode: styled.p`
		${Fonts.Encoded}
		font-size: 2em;
	`,
	MadeIn: styled.p`
		${Fonts.Monospace}
	`,
	Copyright: styled.p``,
};

export default BarcodeStyles;
