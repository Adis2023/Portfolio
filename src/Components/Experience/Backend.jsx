import React from 'react';
import { TbDiscountCheckFilled } from 'react-icons/tb';

const Backend = () => {
	return (
		<div className="experience_backend">
			<h3>Overall Skills</h3>
			<div className="experience_content">
				<article className="experience_details">
					<div className="experience_details2">
						<TbDiscountCheckFilled className="experience_details-icon" />
						<div>
							<h4>Git lab</h4>
							<small className="text-light">Experienced</small>
						</div>
					</div>
					<div className="progressbar">
						<div className="bar_DSA"></div>
					</div>
				</article>
				<article className="experience_details">
					<div className="experience_details2">
						<TbDiscountCheckFilled className="experience_details-icon" />
						<div>
							<h4>Sonar Cloud</h4>
							<small className="text-light">Experienced</small>
						</div>
					</div>
					<div className="progressbar">
						<div className="bar_OOP"></div>
					</div>
				</article>

				<article className="experience_details">
					<div className="experience_details2">
						<TbDiscountCheckFilled className="experience_details-icon" />
						<div>
							<h4>Jira Tool</h4>
							<small className="text-light">Experienced</small>
						</div>
					</div>
					<div className="progressbar">
						<div className="bar_OOP"></div>
					</div>
				</article>

				<article className="experience_details">
					<div className="experience_details2">
						<TbDiscountCheckFilled className="experience_details-icon" />
						<div>
							<h4>Github</h4>
							<small className="text-light">Experienced</small>
						</div>
					</div>
					<div className="progressbar">
						<div className="bar_GH"></div>
					</div>
				</article>
				<article className="experience_details">
					<div className="experience_details2">
						<TbDiscountCheckFilled className="experience_details-icon" />
						<div>
							<h4>Git</h4>
							<small className="text-light">Intermediate</small>
						</div>
					</div>
					<div className="progressbar">
						<div className="bar_GIT"></div>
					</div>
				</article>
			</div>
		</div>
	);
};

export default Backend;
