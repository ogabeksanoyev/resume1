import './Footer.css';

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	ArrowRight,
	Facebook,
	Instagram,
	LinkedIn,
	Twitter,
	YouTube,
} from '@material-ui/icons';
import { Button } from '@material-ui/core';
import FooterWrapper from './footerWrapper';
import ThemeContext from '../../ThemeContext';

const data = {
	ul_1: [
		{ link: 'Email marketing', to: '/' },
		{ link: 'Website builder', to: '/' },
		{ link: 'Marketing automation', to: '/' },
		{ link: 'Conversion funnel', to: '/' },
		{ link: 'All features', to: '/' },
	],
	ul_1_1: [
		{ link: 'Pricing', to: '/' },
		{ link: 'Integrations', to: '/' },
		{ link: 'Affiliate Programs', to: '/' },
		{ link: 'Agency Partners', to: '/' },
	],
	ul_2: [
		{ link: 'Generate leads', to: '/' },
		{ link: 'Sell knowledge', to: '/' },
		{ link: 'Work from home', to: '/' },
		{ link: 'Engage customers ', to: '/' },
		{ link: 'Boost online sales', to: '/' },
	],
	ul_2_1: [
		{ link: 'Entrepreneur', to: '/' },
		{ link: ' Online marketer', to: '/' },
		{ link: 'Marketing manager', to: '/' },
		{ link: 'Mid & Large Companies', to: '/' },
	],

	ul_3: [
		{ link: 'Help Center', to: '/' },
		{ link: 'Resources', to: '/' },
		{ link: 'Case studies', to: '/' },
		{ link: 'Compare software ', to: '/' },
		{ link: 'Contact support', to: '/' },
	],
	ul_3_1: [
		{ link: 'About GetResponse', to: '/' },
		{ link: 'Careers', to: '/' },
		{ link: 'API Docs', to: '/' },
		{ link: 'Accessibility', to: '/' },
	],
};

const Footer = () => {
	const [color, setColor] = useState(-1);
	const { theme, toggleTheme, colors } = useContext(ThemeContext)
	console.log(theme, colors);
	return (
		<FooterWrapper colors={colors} className='p-1 mt-5' style={{ backgroundColor: "#f5f5f5" }} >
			<div className='footer-sites container'>
				<div className='link-list'>
					<h3>Product</h3>
					<ul className='sites'>
						{data.ul_1.map((v, i) => (
							<li>
								<Link to={v.to}>{v.link}</Link>
							</li>
						))}
					</ul>
					<ul className='sites'>
						{data.ul_1_1.map((v, i) => (
							<li>
								<Link to={v.to}>{v.link}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='link-list'>
					<h3>SOLUTIONS</h3>
					<ul className='sites'>
						{data.ul_2.map((v, i) => (
							<li>
								<Link to={v.to}>{v.link}</Link>
							</li>
						))}
					</ul>
					<ul className='sites'>
						{data.ul_2_1.map((v, i) => (
							<li>
								<Link to={v.to}>{v.link}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='link-list'>
					<h3>SUPPORT</h3>
					<ul className='sites'>
						{data.ul_3.map((v, i) => (
							<li>
								<Link to={v.to}>{v.link}</Link>
							</li>
						))}
					</ul>
					<ul className='sites'>
						{data.ul_3_1.map((v, i) => (
							<li>
								<Link to={v.to}>{v.link}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='link-list'>
					<h3>Blog</h3>
					<ul className='blog-posts'>
						<li className='single_post'>
							<div className='post_img'>
								<img src='https://us-rd.gr-cdn.com/106x70/https://us-wd.gr-cdn.com/blog/sites/5/2021/08/0609/email-marketing-beginners.jpg'></img>
							</div>
							<div className='post_meta'>
								<Link to='/'>
									<p className='m-0'>Email Marketing for Beginners</p>
									<p className='readmore m-0'>
										Read more <ArrowRight />{' '}
									</p>
								</Link>
							</div>
						</li>
						<li className='single_post'>
							<div className='post_img'>
								<img src='https://us-rd.gr-cdn.com/106x70/https://us-wd.gr-cdn.com/blog/sites/5/2019/10/1125/how-to-use-email-marketing-for-ecommerce.jpg'></img>
							</div>
							<div className='post_meta'>
								<Link to='/'>
									<p className='m-0'>
										Essential Guide to Ecommerce Email Marketing for 2021
									</p>
									<p className='readmore m-0'>
										Read more <ArrowRight />{' '}
									</p>
								</Link>
							</div>
						</li>
						<li className='single_post'>
							<div className='post_img'>
								<img src='https://us-rd.gr-cdn.com/106x70/https://us-wd.gr-cdn.com/blog/sites/5/2021/04/1516/cropped-landing-pages-explained.jpg'></img>
							</div>
							<div className='post_meta'>
								<Link to='/'>
									<p className='m-0'>
										What Are Landing Pages? Data-Backed Tips & Examples
									</p>
									<p className='readmore m-0'>
										Read more <ArrowRight />{' '}
									</p>
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className='mfooter-supplemental container'>
				<div className='mfooter-social'>
					<ul className='social-list'>
						<li>
							<a
								data-test='footerSocialLink'
								href='https://www.facebook.com/GetResponse'
								aria-label='Facebook'
							>
								<Facebook />
							</a>
						</li>

						<li>
							<a
								data-test='footerSocialLink'
								href='https://www.instagram.com/getresponse'
								aria-label='Facebook'
							>
								<Instagram />
							</a>
						</li>

						<li>
							<a
								data-test='footerSocialLink'
								href='https://www.linkedin.com/company/getresponse'
								aria-label='Facebook'
							>
								<LinkedIn />
							</a>
						</li>

						<li>
							<a
								data-test='footerSocialLink'
								href='https://twitter.com/getresponse'
								aria-label='Facebook'
							>
								<Twitter />
							</a>
						</li>

						<li>
							<a
								data-test='footerSocialLink'
								href='https://www.youtube.com/user/NewGetResponse'
								aria-label='Facebook'
							>
								<YouTube />
							</a>
						</li>
					</ul>
				</div>
				<div className='mfooter-lang-wrap'>
					<Button variant='outlined' color='primary'>
						{' '}
						<Link to='/solution/weather' className='text-dark'>
							Weather
						</Link>{' '}
					</Button>
				</div>
				<div className='mfooter-legal'>
					<ul className='sites'>
						<li>
							<a href='https://www.getresponse.com/legal/privacy'>
								Privacy Policy
							</a>
						</li>
						<li>
							<a href='https://www.getresponse.com/security'>
								Security Information
							</a>
						</li>
						<li>
							<a href='https://www.getresponse.com/legal/antispam'>
								Anti-Spam Policy
							</a>
						</li>
						<li>
							<a href='https://www.getresponse.com/legal'>Terms of Service</a>
						</li>
						<li>
							<a href='https://www.getresponse.com/legal/standard-contractual-clauses'>
								Standard Contractual Clauses
							</a>
						</li>
					</ul>
				</div>
				<div className='mfooter-info'>
					<p className='mfooter-copyright'>
						<span className='mfooter-text'>
							Copyright © 2021 GetResponse. Email Marketing. Solved<sup>®</sup>
						</span>
					</p>
				</div>
			</div>
		</FooterWrapper>
	);
};

export default Footer;
