import LogoContainer from "../components/intro/LogoContainer";
import OwnershipBlock from "../components/intro/OwnershipBlock";
import { TitleData } from "../data";

function Intro() {
	return (
		<>
			<LogoContainer />
			<OwnershipBlock titleData={TitleData} />
		</>
	);
}

export default Intro;
