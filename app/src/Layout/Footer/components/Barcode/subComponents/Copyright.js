import Icons from "../../../../../Global/assets/Icons";
import BarcodeStyles from "../assets/style";

function Copyright() {
	// Return today's date and time
	var currentTime = new Date();

	// returns the year (four digits)
	var year = currentTime.getFullYear();

	return (
		<BarcodeStyles.Copyright>
			{Icons.Copyright} {year}
		</BarcodeStyles.Copyright>
	);
}

export default Copyright;
