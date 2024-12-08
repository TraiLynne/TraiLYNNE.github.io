import React from "react";
import { MainContent } from "./assets/style";

const MainContentComponent = ({ mode, onCloseBook }) => (
	<MainContent mode={mode}>
		{mode === 2 && (
			<div>
				<h1>Main Content</h1>
				<nav>
					<ul>
						<li>
							<a href="#page1">Page 1</a>
						</li>
						<li>
							<a href="#page2">Page 2</a>
						</li>
					</ul>
				</nav>
				<button onClick={onCloseBook}>Close Book</button>
			</div>
		)}
	</MainContent>
);

export default MainContentComponent;
