import titleData from "./data/TitleData";
import { heroArea } from "./assets/style";
import Logo from "./components/Logo";
import Ownership from "./components/Ownership";

function Hero() {
	return (
		<heroArea.Container>
			<Logo />
			<Ownership titleData={titleData} />
		</heroArea.Container>
	);
}

export default Hero;
