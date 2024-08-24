import { Logo } from "../assets";

function Intro() {
	return (
		<>
			<img
				src={Logo}
				alt={"Trai Lynne Logo"}
				style={{ height: "500px", width: "auto" }}
			/>
			<div>
				<h1>Trai Lynne Compton</h1>
				<p>Title Placebholder</p>
			</div>
		</>
	);
}

export default Intro;
