import FooterStyle from "./assets/style";
import Barcode from "./components/Barcode";
import Copyright from "./components/Copyright";
import MadeIn from "./components/MadeIn";

function Footer() {
	return (
		<FooterStyle.Container>
			<Barcode />
			<Copyright />
			<MadeIn />
		</FooterStyle.Container>
	);
}

export default Footer;
