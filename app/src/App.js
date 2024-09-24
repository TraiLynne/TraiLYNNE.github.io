import Hero from "./HeroArea";
import { AppContainer } from "./styles/mainStyles";
import { Footer } from "./views";
import Quotes from "./Quotes";

function App() {
	return (
		<AppContainer>
			<Hero />
			<Quotes />
			<Footer />
		</AppContainer>
	);
}

export default App;
