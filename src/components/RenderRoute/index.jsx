import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Route, useHistory, useLocation } from "react-router-dom";
import content from "../../data/content";


function RenderRoute({ component: Component, title, ...rest }) {
	const currentLang = useSelector((state) => state.language.current);
	const history = useHistory();
	const location = useLocation();
	useEffect(() => {
		document.title = title
			? `${t(title)} | ${content.titlePage}`
			: content.titlePage;
	}, [currentLang, location.pathname, history]);

	const { t } = useTranslation(["common"]);

	return (
		<Route
			{...rest}
			render={(props) => {
				return (
					<div>
						<Component {...props} />
					</div>
				);
			}}
		/>
	);
}

export default RenderRoute;
