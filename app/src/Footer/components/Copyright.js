import Icons from "../../Global/assets/Icons";
import FooterStyle from "../assets/style";

function Copyright() {
	// Return today's date and time
	var currentTime = new Date();

	// returns the year (four digits)
	var year = currentTime.getFullYear();

	return (
		<FooterStyle.Copyright>
			{Icons.Copyright} {year}
		</FooterStyle.Copyright>
	);
}

export default Copyright;
