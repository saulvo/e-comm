import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

function ResetLang() {
	const history = useHistory();
	const location = useLocation();

  const currentLang = useSelector((state) => state.language.current);

	useEffect(() => {
		const newUrl = location.pathname.replace(/^\/.{2}\//, `/${currentLang}/`);
		history.push(newUrl);
	}, [currentLang]);
}

export default ResetLang;
