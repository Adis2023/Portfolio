import React, { useState } from 'react';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FaInstagram } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import './Footer.css';

const Footer = () => {
	// footer
	return (
		<section id="Footer">
			<div className="footer_container">
				<h3>
					<span>Adinath Shinare</span> Portfolio
				</h3>
				<p>
					This Website Created With Technologies Like React, E-mailJS api, CSS,
					etc. For This Website we use the react features like Hooks very
					Effectively.
				</p>
				<div className="links">
					<a href="#">HOME</a>
					<a href="#About">ABOUT</a>
					<a href="#Experience">EXPERIENCE</a>
					<a href="#Portfolio">PORTFOLIO</a>
					<a href="#Contact">CONTACT</a>
				</div>
				<div className="appLinks">
					<a href="">
						<RiTwitterXLine />
					</a>
					<a href="https://www.instagram.com/adi.i_1416/profilecard/?igsh=dWw3MHVkZ3pyNzcz/">
						<FaInstagram />
					</a>
					<a href="https://www.linkedin.com/in/adinath-shinare-5a1946283/">
						<SlSocialLinkedin />
					</a>
				</div>
				<p>
					Created in 2024<sup>&#169;</sup>
				</p>
			</div>
		</section>
	);
};

export default Footer;
