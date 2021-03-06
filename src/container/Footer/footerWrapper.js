import styled from "styled-components";

const FooterWrapper = styled.footer`
background-color: ${p => p.colors.fbgColor};
color:${p => p.colors.color};
.footer-sites {
	font-size: 16px;
	line-height: 1.2;
	padding: 0 10px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
	margin-top: 100px;
}
.link-list {
	margin-right: 10px;
	margin-bottom: 20px;
}
.link-list h3 {
	font-weight: 700;
	font-size: 18px;
	line-height: 1.2;
	color: #202730;
	text-align: left;
	text-transform: uppercase;
	letter-spacing: 0.8px;
	margin: 0 0 25px;
	padding: 0;
}
.footer-sites .sites {
	margin-bottom: 15px;
}
ul.sites {
	padding: 0;
	margin: 0;
	list-style: none;
}
.footer-sites .sites li {
	margin-bottom: 14px;
	font-size: inherit;
	line-height: inherit;
}
.footer-sites .sites li a {
	font-weight: 400;
	font-size: 14px;
	line-height: 1.2;
	letter-spacing: normal;
	color: #656f7a;
	text-decoration: none;
	display: inline-block;
}
.footer-sites .sites li a:hover {
	color: #1976d2;
}
.single_post {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 20px;
}
.single_post .post_img {
	width: 106px;
	height: 70px;
	margin-right: 22px;
	margin-bottom: 5px;
}
.single_post .post_img img {
	border-radius: 3px;
	border: 3px solid rgba(31, 38, 47, 0.25098039215686274);
	vertical-align: middle;
	width: 100%;
}
.single_post .post_meta a p:nth-child(1) {
	letter-spacing: 0.4px;
	font-size: 14px;
	font-weight: 500;
	color: #202730;
	text-align: left;
	line-height: 20px;
	margin: 0;
	padding: 0;
	box-orient: vertical;
}
.single_post .post_meta a p:nth-child(2) {
	font-weight: 700;
	font-size: 14px;
	text-transform: uppercase;
	letter-spacing: 2.4px;
	color: var(--light-text-primary-color);
	padding-top: 5px;
	text-decoration: none;
}
.single_post .post_meta:hover a p:nth-child(2) {
	color: var(--primary-brand-color-800);
}
.mfooter-supplemental {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
}
.mfooter-social .social-list {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	max-width: 195px;
	margin: 0 auto;
	flex-grow: 1;
	flex-basis: 100%;
}
.mfooter-social .social-list .MuiSvgIcon-root {
	display: inline-block;
	fill: #526b7b;
}
.mfooter-social .social-list li {
	margin-right: 20px;
}
.mfooter-social .social-list li a:hover .MuiSvgIcon-root {
	fill: #1976d2 ;
}
.mfooter-social {
	flex-basis: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	order: 1;
	text-align: center;
	padding: 0;
	margin: 10px 0;
	box-sizing: border-box;
}
.mfooter-lang-wrap {
	flex-basis: 50%;
	flex-grow: 1;
	display: flex;
	flex-direction: row;
	justify-content: center;
	order: 3;
}
.mfooter-legal {
	display: flex;
	order: 2;
	justify-content: center;
	align-items: center;
	flex-flow: row wrap;
	flex-basis: 100%;
	margin: 24px auto 30px;
}
.mfooter-legal .sites {
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 0;
	flex-basis: 100%;
	align-items: center;
	flex-flow: row wrap;
	list-style-type: none;
}
.mfooter-legal .sites li {
	font-size: 14px;
	font-weight: 400;
	line-height: 1.2;
	letter-spacing: 0.025em;
	margin: 10px;
	flex-basis: 100%;
	text-align: center;
}
.mfooter-legal .sites li a {
	color: #656f7a;
}

.mfooter-info {
	box-sizing: border-box;
	margin: 22px 0 0;
	text-align: center;
	flex-basis: auto;
	flex-grow: 1;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	order: 4;
}
.mfooter-copyright {
	padding: 0;
	font-size: 14px;
	font-weight: 400;
	line-height: 1.4;
	color: #656f7a;
	margin: 0;
	letter-spacing: 0.025em;
}

@media screen and (min-width: 480px) {
	.mfooter-social .social-list {
		max-width: 215px;
	}
}
@media screen and (min-width: 768px) {
	.mfooter-lang-wrap {
		padding: 10px 10px;
		display: flex;
		order: 2;
		flex-basis: auto;
		justify-content: flex-end;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
	}
	.mfooter-legal .sites li {
		flex-basis: auto;
		text-align: left;
	}
	.mfooter-social {
		flex-basis: auto;
	}
	.mfooter-info {
		margin: 0;
		flex-basis: 100%;
		justify-content: center;
		display: flex;
		align-items: center;
		flex-flow: row nowrap;
		text-align: left;
	}
}

`
export default FooterWrapper