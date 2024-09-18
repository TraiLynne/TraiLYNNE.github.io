import { AppContainer } from "./styles/mainStyles";
import {
	About,
	Contact,
	Extra,
	Footer,
	Intro,
	Nav,
	Portfolio,
	Quote,
} from "./views";

function App() {
	return (
		<AppContainer>
			<Intro />
			{/* <Nav />
			<About />
			<Portfolio />
			<Quote />
			<Contact />
			<Extra />
			<Footer /> */}
		</AppContainer>
	);
}

export default App;
