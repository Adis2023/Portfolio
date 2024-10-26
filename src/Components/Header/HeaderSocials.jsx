import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa6';

const HeaderSocials = () => {
	return (
		<div className="header_social">
			<a
				href="https://www.linkedin.com/in/adinath-shinare-5a1946283/"
				target="_blank"
				className="links"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://github.com/Adis2023"
				target="_blank"
				className="links"
			>
				<BsGithub />
			</a>
			<a
				href="https://www.instagram.com/adi.i_1416/profilecard/?igsh=dWw3MHVkZ3pyNzcz/"
				target="_blank"
				className="links"
			>
				<FaInstagram />
			</a>
		</div>
	);
};

export default HeaderSocials;
