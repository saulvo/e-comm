import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faSearch,
	faShoppingCart,
	faSignInAlt,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import {
	Link,
	useHistory,
	useLocation,
	useParams,
	useRouteMatch,
} from "react-router-dom";
import "./index.scss";

library.add(faSignInAlt, faUserPlus, faSearch, faShoppingCart);

function Header(props) {
	const { t, i18n } = useTranslation(["common"]);
	const {
		params: { lng },
	} = useRouteMatch();

	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		i18n.changeLanguage(lng);
	}, [i18n, lng]);

	const handleLanguageChange = (e) => {
		const selectedLng = "vi";
		// save current language to redux...

		
		const newUrl = location.pathname.replace(/^\/.{2}\//, `/${selectedLng}/`);
		history.push(newUrl);
	};

	return (
		<header className="header">
			<Box className="header__top">
				<Container fixed>
					<Grid container spacing={0}>
						<Grid item xs={12} sm={6}>
							<Box className="header__top-left">
								free shipping on all u.s orders over $50
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box className="header__top-right">
								<button onClick={handleLanguageChange}>CHANGE LANG</button>
								<Box className="language">
									<Box className="language__current">English</Box>
									<Box component="ul" className="language__selection">
										<Box component="li">English</Box>
										<Box component="li">Viet Nam</Box>
										<Box component="li">Japan</Box>
										<Box component="li">French</Box>
									</Box>
								</Box>

								<Box className="account">
									<Link to="#">My Account</Link>
									<Box component="ul" className="account__selection">
										<Box component="li">
											<Link to="#">
												<FontAwesomeIcon icon="sign-in-alt" />
												Sign In
											</Link>
										</Box>
										<Box component="li">
											<Link to="#">
												<FontAwesomeIcon icon="user-plus" />
												Register
											</Link>
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box className="header__bot">
				<Container fixed>
					<Grid container spacing={0} className="header__bot-container">
						<Grid item xs={12}>
							<Box className="logo">
								<Link to="/">
									Online <span>Shop</span>
								</Link>
							</Box>
							<Box component="nav" className="navbar">
								<Box component="ul" className="navbar__menu">
									<Box component="li">
										<Link to="/">
											<Trans i18nKey="common:home">Home</Trans>
										</Link>
									</Box>
									<Box component="li">
										<Link to="/en/products">
											<Trans i18nKey="common:shop">Shop</Trans>
										</Link>
									</Box>
									<Box component="li">
										<Link to="#">
											<Trans i18nKey="common:promotion">Promotion</Trans>
										</Link>
									</Box>
									<Box component="li">
										<Link to="#">
											<Trans i18nKey="common:blog">Blog</Trans>
										</Link>
									</Box>
									<Box component="li">
										<Link to="#">
											<Trans i18nKey="common:contact">Contact</Trans>
										</Link>
									</Box>
								</Box>

								<Box component="ul" className="navbar__user">
									<Box component="li">
										<Link to="#">
											<FontAwesomeIcon icon="search" />
										</Link>
									</Box>
									<Box component="li" className="checkout">
										<Link to="#">
											<FontAwesomeIcon icon="shopping-cart" />
											<Box component="span" className="checkout__items">
												2
											</Box>
										</Link>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</header>
	);
}

export default Header;
