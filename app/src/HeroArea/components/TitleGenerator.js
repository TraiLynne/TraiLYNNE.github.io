import { useState, useEffect } from "react";
import { TitleStyle } from "../assets/style";

const TitleGenerator = (props) => {
	const [currentTitle, setCurrentTitle] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [letterIndex, setLetterIndex] = useState(0); // Index of the letter being typed or deleted
	const [speed, setSpeed] = useState(150); // Typing speed
	const [randomIndex, setRandomIndex] = useState(
		Math.floor(Math.random() * props.titleData.length)
	); // Randomly select the first title

	const titles = props.titleData;

	// Find the longest title for min-width
	const longestTitleLength = Math.max(...titles.map((title) => title.length));

	useEffect(() => {
		let typingTimeout;

		if (!isDeleting && letterIndex < titles[randomIndex].length) {
			// Typing letters one by one
			typingTimeout = setTimeout(() => {
				setCurrentTitle(
					(prev) => prev + titles[randomIndex].charAt(letterIndex)
				);
				setLetterIndex(letterIndex + 1);
			}, speed);
		} else if (isDeleting && letterIndex > 0) {
			// Deleting letters one by one
			typingTimeout = setTimeout(() => {
				setCurrentTitle((prev) => prev.slice(0, -1));
				setLetterIndex(letterIndex - 1);
			}, speed);
		} else if (!isDeleting && letterIndex === titles[randomIndex].length) {
			// Start deleting after a brief pause
			setTimeout(() => setIsDeleting(true), 1000);
		} else if (isDeleting && letterIndex === 0) {
			// Pick a new random title after deleting the current one
			setIsDeleting(false);
			const newRandomIndex = Math.floor(Math.random() * titles.length);
			setRandomIndex(newRandomIndex);
			setLetterIndex(0);
		}

		return () => clearTimeout(typingTimeout);
	}, [letterIndex, isDeleting, titles, randomIndex, speed]);

	return (
		<TitleStyle.Container longestTitleLength={longestTitleLength}>
			<TitleStyle.Text>
				{
					currentTitle ||
						"\u00A0" /* Use a non-breaking space when title is empty */
				}
			</TitleStyle.Text>
		</TitleStyle.Container>
	);
};

export default TitleGenerator;
