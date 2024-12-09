import { BarcodeStyles } from "../assets/style";
import Barcode from "./Barcode";
import Copyright from "./Copyright";
import MadeIn from "./MadeIn";

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
