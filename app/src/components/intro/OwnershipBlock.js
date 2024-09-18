import { IntroStyles } from "../../styles/introStyles";
import TitleGenerator from "./TitleGenerator";

function OwnershipBlock(props) {
	return (
		<IntroStyles.OwnershipBlock>
			<h1>Trai Lynne Compton</h1>
			<TitleGenerator titleData={props.titleData} />
		</IntroStyles.OwnershipBlock>
	);
}

export default OwnershipBlock;
