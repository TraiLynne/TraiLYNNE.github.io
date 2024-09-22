import styled, { keyframes } from "styled-components";
import Ripped from "../assets/ripped-paper.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled.section`
	background-image: url(${Ripped});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 75vw;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0;
`;

const Quote = styled.p`
	transition: opacity 1s ease-in-out;
	opacity: ${(props) => (props.fade ? 1 : 0)};
	animation: ${(props) => (props.fade ? fadeIn : fadeOut)} 1s ease-in-out;
	font-size: 1.5rem;
	width: 75vw;
	margin: 0;
	padding: 0;
`;

const Author = styled.p`
	transition: opacity 1s ease-in-out;
	opacity: ${(props) => (props.fade ? 1 : 0)};
	animation: ${(props) => (props.fade ? fadeIn : fadeOut)} 1s ease-in-out;
	font-size: 1.2rem;
	margin: 0;
	padding: 0;
	margin-top: 0.5rem;
	font-style: italic;
	text-align: right;
`;

export const QuoteStyles = {
	Container,
	Quote,
	Author,
};
