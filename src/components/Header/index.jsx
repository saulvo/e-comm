import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { updateLang } from "./languageSlice";

function Header(props) {
	const dispatch = useDispatch();
	const currentLang = useSelector((state) => state.language.current);
	const { i18n } = useTranslation(["common"]);

	useEffect(() => {
		i18n.changeLanguage(currentLang);
	}, [i18n, currentLang]);

	return (
		<header className="header">
			<div className="header__top">
				<Container fixed>
					<Grid container spacing={0}>
						<Grid item xs={12} sm={6}>
							<div className="header__top-left">
								<Trans i18nKey="common:header_slogan">
									free shipping on all u.s orders over $50
								</Trans>
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<div className="header__top-right">
								<div className="language">
									<div className="language__current">
										<Trans i18nKey={`common:${currentLang}`}>English</Trans>
									</div>
									<ul className="language__selection">
										<li
											className={`${currentLang === "en" ? "active" : ""}`}
											onClick={() => {
												dispatch(updateLang("en"));
											}}
										>
											<Trans i18nKey="common:en">English</Trans>
										</li>
										<li
											className={`${currentLang === "vi" ? "active" : ""}`}
											onClick={() => {
												dispatch(updateLang("vi"));
											}}
										>
											<Trans i18nKey="common:vi">Viet Nam</Trans>
										</li>
									</ul>
								</div>

								<div className="account">
									<Link to="#">
										<Trans i18nKey="common:account">My Account</Trans>
									</Link>
									<ul className="account__selection">
										<li>
											<Link to="#">
												<FontAwesomeIcon icon="sign-in-alt" />
												<Trans i18nKey="common:signin">Sign In</Trans>
											</Link>
										</li>
										<li>
											<Link to="#">
												<FontAwesomeIcon icon="user-plus" />
												<Trans i18nKey="common:register">Register</Trans>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className="header__bot">
				<Container fixed>
					<Grid container spacing={0} className="header__bot-container">
						<Grid item xs={12}>
							<div className="logo">
								<NavLink exact to={`/${currentLang}`}>
									Online <span>Shop</span>
								</NavLink>
							</div>
							<nav className="navbar">
								<div className="navbar__menu">
									<NavLink exact to={`/${currentLang}`}>
										<Trans i18nKey="common:home">Home</Trans>
									</NavLink>
									<NavLink to={`/${currentLang}/products`}>
										<Trans i18nKey="common:products">Products</Trans>
									</NavLink>
									<NavLink to={`/${currentLang}/promotion`}>
										<Trans i18nKey="common:promotion">Promotion</Trans>
									</NavLink>
									<NavLink to={`/${currentLang}/blog`}>
										<Trans i18nKey="common:blog">Blog</Trans>
									</NavLink>
									<NavLink to={`/${currentLang}/contact`}>
										<Trans i18nKey="common:contact">Contact</Trans>
									</NavLink>
								</div>

								<ul className="navbar__user">
									<li>
										<Link to="#">
											<FontAwesomeIcon icon="search" />
										</Link>
									</li>
									<li className="checkout">
										<Link to={`/${currentLang}/cart`}>
											<FontAwesomeIcon icon="shopping-cart" />
											<span className="checkout__items">0</span>
										</Link>
									</li>
								</ul>
							</nav>
						</Grid>
					</Grid>
				</Container>
			</div>
		</header>
	);
}

export default Header;
