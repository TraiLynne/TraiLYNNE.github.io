import { useEffect, useState } from "react";
import { QuoteData } from "../data";
import { QuoteStyles } from "../styles/quoteStyles";

function Quote() {
	const [randomQuote, setRandomQuote] = useState(QuoteData[0]);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false); // Start fading out

			setTimeout(() => {
				const randomIndex = Math.floor(Math.random() * QuoteData.length);
				setRandomQuote(QuoteData[randomIndex]);
				setFade(true); // Start fading in after changing the quote
			}, 1000); // Wait for fade-out duration before changing the quote
		}, 10000); // Change every 30 seconds

		return () => clearInterval(interval); // Clean up the interval on component unmount
	}, []);

	return (
		<QuoteStyles.Container>
			<QuoteStyles.Quote fade={fade}>{randomQuote.quote}</QuoteStyles.Quote>

			{randomQuote.author && (
				<QuoteStyles.Author fade={fade}>
					- {randomQuote.author}
				</QuoteStyles.Author>
			)}
		</QuoteStyles.Container>
	);
}

export default Quote;
