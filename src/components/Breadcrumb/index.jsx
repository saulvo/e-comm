import { Box } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import { Trans } from "react-i18next";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

Breadcrumb.propTypes = {};

const useStyles = makeStyles((theme) => ({
	beadcrumb: {
		textTransform: "capitalize",
	},
	link: {
		display: "flex",
		fontSize: "0.9rem",
	},
	icon: {
		marginRight: theme.spacing(0.5),
		width: 20,
		height: 20,
	},
}));

function Breadcrumb(props) {
	const { url } = useRouteMatch();
	const currentLang = useSelector((state) => state.language.current);
	const classes = useStyles();

	return (
		<>
			<Breadcrumbs aria-label="breadcrumb" className={classes.beadcrumb}>
				<Link color="inherit" href={`/${currentLang}`} className={classes.link}>
					<HomeIcon className={classes.icon} />
					<Trans i18nKey="common:home">Home</Trans>
				</Link>
				<Typography color="textPrimary">
					<Box fontSize="0.9rem">{url.slice(4)}</Box>
				</Typography>
			</Breadcrumbs>
		</>
	);
}

export default Breadcrumb;
