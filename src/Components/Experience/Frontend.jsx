import React from 'react';
import { TbDiscountCheckFilled } from 'react-icons/tb';

const Frontend = () => {
	return (
		<div className="experience_frontend">
			<h3>Language Skills</h3>
			<div className="experience_content">
				
				<article className="experience_details">
					<div className="experience_details2">
						<TbDiscountCheckFilled className="experience_details-icon" />
						<div>
							<h4>HTML / CSS</h4>
							<small className="text-light">Experienced</small>
						</div>
					</div>
					<div className="progressbar">
						<div className="bar_HTML"></div>
					</div>
				</article>
				<article className="experience_details">
					<div className="experience_details2">
						<TbDiscountCheckFilled className="experience_details-icon" />
						<div>
							<h4>JavaScript</h4>
							<small className="text-light">Experienced</small>
						</div>
					</div>
					<div className="progressbar">
						<div className="bar_JS"></div>
					</div>
				</article>
				<article className="experience_details">
					<div className="experience_details2">
						<TbDiscountCheckFilled className="experience_details-icon" />
						<div>
							<h4>React.js</h4>
							<small className="text-light">Intermediate</small>
						</div>
					</div>
					<div className="progressbar">
						<div className="bar_JS"></div>
					</div>
				</article>
				
				<article className="experience_details">
					<div className="experience_details2">
						<TbDiscountCheckFilled className="experience_details-icon" />
						<div>
							<h4>Node.js</h4>
							<small className="text-light">Intermediate</small>
						</div>
					</div>
					<div className="progressbar">
						<div className="bar_JS"></div>
					</div>
				</article>
		
			
				<article className="experience_details">
					<div className="experience_details2">
						<TbDiscountCheckFilled className="experience_details-icon" />
						<div>
							<h4>Express.js</h4>
							<small className="text-light">Intermediate</small>
						</div>
					</div>
					<div className="progressbar">
						<div className="bar_PY"></div>
					</div>
				</article>
				<article className="experience_details">
					<div className="experience_details2">
						<TbDiscountCheckFilled className="experience_details-icon" />
						<div>
							<h4>MongoDB</h4>
							<small className="text-light">Intermediate</small>
						</div>
					</div>
					<div className="progressbar">
						<div className="bar_JSX"></div>
					</div>
				</article>
			</div>
		</div>
	);
};

export default Frontend;
