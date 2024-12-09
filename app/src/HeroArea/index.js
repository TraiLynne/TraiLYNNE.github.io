import TitleData from "./data/TitleData";
import { HeroStyle, OpenButton } from "./assets/style";
import Logo from "./components/Logo";
import Ownership from "./components/Ownership";

function Hero({ mode, openBook, openBookFromMode3 }) {
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
			{mode === 1 && (
				<HeroStyle.Bottom>
					<OpenButton onClick={openBook}>Open Book</OpenButton>
				</HeroStyle.Bottom>
			)}

			{mode === 3 && (
				<HeroStyle.Bottom>
					<OpenButton onClick={openBookFromMode3}>Open Book</OpenButton>
				</HeroStyle.Bottom>
			)}
		</HeroStyle.Container>
	);
}

export default Hero;
