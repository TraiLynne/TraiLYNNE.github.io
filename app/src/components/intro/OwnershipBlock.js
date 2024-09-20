import { IntroStyles } from "../../styles/introStyles";
import TitleGenerator from "./TitleGenerator";

function OwnershipBlock(props) {
	return (
		<IntroStyles.OwnershipBlock>
			<IntroStyles.OwnershipText>
				This Corner of the Internet <br />
				Belongs to:
			</IntroStyles.OwnershipText>
			<IntroStyles.NameBlock>
				<IntroStyles.NameCursive>Trai Lynne Compton</IntroStyles.NameCursive>
				<IntroStyles.NamePrint>Trai Lynne Compton</IntroStyles.NamePrint>
			</IntroStyles.NameBlock>

			<TitleGenerator titleData={props.titleData} />
		</IntroStyles.OwnershipBlock>
	);
}

export default OwnershipBlock;
