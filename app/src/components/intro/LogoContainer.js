import { Logo } from "../../assets";

function LogoContainer() {
	return (
		<>
			<img
				src={Logo}
				alt={"Trai Lynne Logo"}
				style={{ height: "auto", width: "50vw" }}
			/>
		</>
	);
}

export default LogoContainer;
