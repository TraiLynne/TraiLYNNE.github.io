import SocialMedia from "../components/global/SocialMedia";
import { FooterStyles } from "../styles/footerStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
	return (
		<FooterStyles.Container>
			<FooterStyles.Barcode>Trai Lynne</FooterStyles.Barcode>
			<FooterStyles.MadeIn>
				<FontAwesomeIcon icon={faCopyright} /> 2024
			</FooterStyles.MadeIn>
			<FooterStyles.Copyright>Made in USA</FooterStyles.Copyright>
		</FooterStyles.Container>
	);
}

export default Footer;
