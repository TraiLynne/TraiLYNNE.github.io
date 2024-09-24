import { ownership, name } from "../assets/style";
import TitleGenerator from "./TitleGenerator";
import titleData from "../data/TitleData";

function Ownership(props) {
	return (
		<ownership.Container>
			<ownership.Text>
				This Corner of the Internet <br />
				Belongs to:
			</ownership.Text>
			<name.Container>
				<name.Written>Trai Lynne Compton</name.Written>
				<name.Print>Trai Lynne Compton</name.Print>
			</name.Container>

			<TitleGenerator titleData={titleData} />
		</ownership.Container>
	);
}

export default Ownership;
