import TitleData from "./data/TitleData";
import { HeroStyle } from "./assets/style";
import Logo from "./components/Logo";
import Ownership from "./components/Ownership";

function Hero({ mode, onOpenBook }) {
	return (
		<HeroStyle.Container>
			<HeroStyle.Top mode={mode}>
				<Logo />
			</HeroStyle.Top>
			{mode !== 2 && (
				<HeroStyle.Middle>
					<Ownership titleData={TitleData} />
				</HeroStyle.Middle>
			)}
			{mode !== 2 && (
				<HeroStyle.Bottom>
					<button onClick={onOpenBook}>Open Book</button>
				</HeroStyle.Bottom>
			)}
		</HeroStyle.Container>
	);
}

export default Hero;
