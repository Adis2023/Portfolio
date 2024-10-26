import React from 'react';
import highSchool from '../../assets/jay malhar high school.jpg';
import './Education.css';
import juniorCollege from '../../assets/shri vridheshwar junior college.jpg';
import BCS from '../../assets/dr. d. y. patil ACS college pimpri.jpeg';
import modern from '../../assets/S b patil collage.jpg';

function Education() {
	return (
		<div className="schoolSlider">
			<div className="schoolCard">
				<img
					className="schoolImage"
					src={highSchool}
					alt="Jay Malhar High School, Jambut"
				/>
				<div className="schoolName">
					<p>
						Jay Malhar High School,
						<br /> Jambut
					</p>
					<p>2019</p>
				</div>
				<p>X</p>
				<p>58.80%</p>
			</div>
			<div className="schoolCard">
				<img
					className="schoolImage"
					src={juniorCollege}
					alt="Shri Vridheshwar Junior College, Tisgaon"
				/>
				<div className="schoolName">
					<p>
						Shri Gurudev Datta Vidyalay ,
						<br /> Savindne
					</p>
					<p>2021</p>
				</div>
				<p>XII</p>
				<p>70.80%</p>
			</div>
			<div className="schoolCard">
				<img
					className="schoolImage"
					src={BCS}
					alt="Dr. D. Y. Patil Arts, Commerce and Science college, pimpri"
				/>
				<div className="schoolName">
					<p>
						Dr. D. Y. Patil ACS College, <br />
						pimpri
					</p>
					<p>2024</p>
				</div>
				<p>BSc(Computer Science)</p>
				<p>8.27 CGPA</p>
			</div>
			<div className="schoolCard">
				<img
					className="schoolImage"
					src={modern}
					alt="S B Patil College of Engineering, Pune"
				/>
				<div className="schoolName">
					<p>
						S B Patil College of Engineering, <br />
						Indapur
					</p>
					<p>2026</p>
				</div>
				<p>MCA</p>
				<p>NA</p>
			</div>
		</div>
	);
}

export default Education;
