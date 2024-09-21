import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
	return (
		<div>
			<p>
				<FontAwesomeIcon icon={faInstagram} />
				<FontAwesomeIcon icon={faLinkedinIn} />
				<FontAwesomeIcon icon={faGithub} />
			</p>
		</div>
	);
}

export default SocialMedia;
