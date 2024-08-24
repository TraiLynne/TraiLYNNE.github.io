import "./App.css";
import { About, Contact, Footer, Intro, Nav, Portfolio } from "./views";

function App() {
	return (
		<div className="App">
			<Intro />
			<Nav />
			<About />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
