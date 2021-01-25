import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import content from "../../data/content";

function RenderRoute({ component: Component, title, ...rest }) {
	const currentLang = useSelector((state) => state.language.current);
	const { t } = useTranslation(["common"]);

	useEffect(() => {
		document.title = title
			? `${t(title)} | ${content.titlePage}`
			: content.titlePage;
	}, [currentLang,t,title]);


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
