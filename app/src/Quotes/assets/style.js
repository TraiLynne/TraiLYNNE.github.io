import styled from "styled-components";
import Background from "./background.png";
import Keyframes from "../../Global/assets/styleData/Keyframes";

export const QuotesStyle = {
	Container: styled.section`
		background-image: url(${Background});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0;
		text-align: center;
	`,
	Text: styled.p`
		transition: opacity 1s ease-in-out;
		opacity: ${(props) => (props.fade ? 1 : 0)};
		animation: ${(props) => (props.fade ? Keyframes.fadeIn : Keyframes.fadeOut)}
			1s ease-in-out;
		font-size: 1.5rem;
		width: 75vw;
		margin: 0;
		padding: 0;
	`,
	Author: styled.p`
		transition: opacity 1s ease-in-out;
		opacity: ${(props) => (props.fade ? 1 : 0)};
		animation: ${(props) => (props.fade ? Keyframes.fadeIn : Keyframes.fadeOut)}
			1s ease-in-out;
		font-size: 1.2rem;
		margin: 0;
		padding: 0;
		margin-top: 0.5rem;
		font-style: italic;
		text-align: right;
	`,
};
