import React from "react";
import { Footer } from "./assets/style";

const FooterComponent = ({ mode }) => (
	<Footer mode={mode}>{mode !== 1 && <h3>Footer</h3>}</Footer>
);

export default FooterComponent;
