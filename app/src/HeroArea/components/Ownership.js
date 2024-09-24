import { OwnershipStyle, NameStyle } from "../assets/style";
import TitleGenerator from "./TitleGenerator";
import titleData from "../data/TitleData";

function Ownership(props) {
	return (
		<OwnershipStyle.Container>
			<OwnershipStyle.Text>
				This Corner of the Internet <br />
				Belongs to:
			</OwnershipStyle.Text>
			<NameStyle.Container>
				<NameStyle.Written>Trai Lynne Compton</NameStyle.Written>
				<NameStyle.Print>Trai Lynne Compton</NameStyle.Print>
			</NameStyle.Container>

			<TitleGenerator titleData={titleData} />
		</OwnershipStyle.Container>
	);
}

export default Ownership;
