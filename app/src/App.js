import Hero from "./HeroArea";
import { AppContainer } from "./styles/mainStyles";
import { About, Contact, Extra, Footer, Nav, Portfolio, Quote } from "./views";

function App() {
	return (
		<AppContainer>
			<Hero />
			{/* <Nav /> */}
			{/* <About /> */}
			{/* <Portfolio /> */}
			<Quote />
			{/* <Contact /> */}
			{/* <Extra /> */}
			<Footer />
		</AppContainer>
	);
}

export default App;
