import { Logo } from "../../assets";
import { IntroStyles } from "../../styles/introStyles";

function LogoContainer() {
	return (
		<IntroStyles.LogoContainer>
			<img
				src={Logo}
				alt={"Trai Lynne Logo"}
				style={{ height: "75%", width: "auto" }}
			/>
		</IntroStyles.LogoContainer>
	);
}

export default LogoContainer;
