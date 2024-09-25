import Hero from "./HeroArea";
import Quotes from "./Quotes";
import Footer from "./Footer";
import GlobalStyles from "./Global/GlobalStyles";

function App() {
	return (
		<GlobalStyles.Container>
			<Hero />
			<Quotes />
			<Footer />
		</GlobalStyles.Container>
	);
}

export default App;
