import BarcodeStyles from "./assets/style";
import Barcode from "./subComponents/Barcode";
import Copyright from "./subComponents/Copyright";
import MadeIn from "./subComponents/MadeIn";

function BarcodeContainer({ mode }) {
	return (
		<BarcodeStyles.Container>
			<Barcode />
			{mode === 3 && <Copyright />}
			{mode === 3 && <MadeIn />}
		</BarcodeStyles.Container>
	);
}

export default BarcodeContainer;
