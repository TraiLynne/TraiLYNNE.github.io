import { IntroStyles } from "../../styles/introStyles";

function TitleGenerator(props) {
	return <IntroStyles.Title>{props.titleData[0].title}</IntroStyles.Title>;
}

export default TitleGenerator;
