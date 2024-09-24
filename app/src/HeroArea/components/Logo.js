import { logo } from "../assets/style";
import LogoImage from "../assets/TLCLogo-lg.png";

function Logo() {
	return (
		<logo.Container>
			<logo.Image src={LogoImage} alt={"Trai Lynne Logo"} />
		</logo.Container>
	);
}

export default Logo;
