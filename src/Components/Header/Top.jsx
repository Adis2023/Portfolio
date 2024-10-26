import React from 'react';
import Symbol from '../../assets/logo.png';
import resume from './../../assets/Adinath Shinare(BCS)2024.pdf';

const Top = () => {
	return (
		<div className="top">
			<div className="symbol">
				<img src={Symbol} alt="A" className="logo" />
				<h1 className="logoName">Dinath Shinare</h1>
			</div>
			<a href={resume} download={resume.pdf} target="blank" className="btn">
				Download CV
			</a>
		</div>
	);
};

export default Top;
