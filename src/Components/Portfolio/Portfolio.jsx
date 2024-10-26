import React from 'react';
import './Portfolio.css';
import Ecommerce from '../../assets/Ecommerce.png';
import Profile from '../../assets/Portfolio.png';

const Portfolio = ({ innerRef }) => {
	return (
		<section id="Portfolio">
			<h5>My Recent Work</h5>
			<h2>PortFolio</h2>

			<div className="container portfolio_container">

				<article className="portfolio_item">
					<div className="portfolio_item-img">
						<img src={Profile} alt="Portfolio" />
					</div>
					<h3>Portfolio Website</h3>
					<div className="portfolio_item-cta">
						<a
							href="https://github.com/AkshayPise1112/Portfolio/tree/main"
							target="_blank"
							className="btn"
						>
							GitHub
						</a>
						{/* <a href="#" className="btn btn-Primary">
							Live Demo
						</a> */}
					</div>
				</article>
				<article className="portfolio_item">
					<div className="portfolio_item-img">
						<img src={Ecommerce} alt="Portfolio" />
					</div>
					<h3>Ecommerce Website</h3>
					<div className="portfolio_item-cta">
						<a
							href="https://github.com/Adis2023/Ecommerce_website.git"
							target="_blank"
							className="btn"
						>
							GitHub
						</a>
						{/* <a href="#" className="btn btn-Primary">
							Live Demo
						</a> */}
					</div>
				</article>
			</div>
		</section>
	);
};

export default Portfolio;
