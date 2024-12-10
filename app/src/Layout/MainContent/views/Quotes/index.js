import { useEffect, useState } from "react";
import { QuotesStyle } from "./assets/style";
import quoteData from "./data/QuoteData";

function Quotes() {
	const [randomQuote, setRandomQuote] = useState(quoteData[0]);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false); // Start fading out

			setTimeout(() => {
				const randomIndex = Math.floor(Math.random() * quoteData.length);
				setRandomQuote(quoteData[randomIndex]);
				setFade(true); // Start fading in after changing the quote
			}, 1000); // Wait for fade-out duration before changing the quote
		}, 10000); // Change every 10 seconds

		return () => clearInterval(interval); // Clean up the interval on component unmount
	}, []);

	return (
		<QuotesStyle.Container>
			<QuotesStyle.Text fade={fade}>{randomQuote.quote}</QuotesStyle.Text>

			{randomQuote.author && (
				<QuotesStyle.Author fade={fade}>
					- {randomQuote.author}
				</QuotesStyle.Author>
			)}
		</QuotesStyle.Container>
	);
}

export default Quotes;
