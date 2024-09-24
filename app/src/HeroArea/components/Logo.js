import { LogoStyle } from "../assets/style";
import LogoImage from "../../Global/Assets/Images/TLCLogo-lg.png";

function Logo() {
	return (
		<LogoStyle.Container>
			<LogoStyle.Image src={LogoImage} alt={"Trai Lynne Logo"} />
		</LogoStyle.Container>
	);
}

export default Logo;
