import LogoContainer from "../components/intro/LogoContainer";
import OwnershipBlock from "../components/intro/OwnershipBlock";
import { TitleData } from "../data";
import { IntroStyles } from "../styles/introStyles";

function Intro() {
	return (
		<IntroStyles.IntroContainer>
			<LogoContainer />
			<OwnershipBlock titleData={TitleData} />
		</IntroStyles.IntroContainer>
	);
}

export default Intro;
