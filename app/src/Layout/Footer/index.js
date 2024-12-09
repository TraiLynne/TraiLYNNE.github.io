import React from "react";
import { Footer } from "./assets/style";
import BarcodeContainer from "./components/BarcodeContainer";

const FooterComponent = ({ mode }) => (
	<Footer mode={mode}>{mode !== 1 && <BarcodeContainer mode={mode} />}</Footer>
);

export default FooterComponent;
