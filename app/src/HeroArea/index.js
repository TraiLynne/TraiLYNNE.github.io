import TitleData from "./data/TitleData";
import { HeroStyle } from "./assets/style";
import Logo from "./components/Logo";
import Ownership from "./components/Ownership";

function Hero() {
	return (
		<HeroStyle.Container>
			<Logo />
			<Ownership titleData={TitleData} />
		</HeroStyle.Container>
	);
}

export default Hero;
