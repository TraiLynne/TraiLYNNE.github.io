import { IntroStyles } from "../../styles/introStyles";
import TitleGenerator from "./TitleGenerator";

function OwnershipBlock(props) {
	return (
		<IntroStyles.OwnershipBlock>
			<IntroStyles.Ownership>
				This Corner of the Internet <br />
				Belongs to:
			</IntroStyles.Ownership>
			<div>
				<IntroStyles.NameCursive>Trai Lynne Compton</IntroStyles.NameCursive>
				<IntroStyles.NamePrint>Trai Lynne Compton</IntroStyles.NamePrint>
			</div>

			<IntroStyles.Title>Under Construction. More on The Way</IntroStyles.Title>
			{/* <TitleGenerator titleData={props.titleData} /> */}
		</IntroStyles.OwnershipBlock>
	);
}

export default OwnershipBlock;
