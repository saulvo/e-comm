import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

function ResetLangURL() {
	const history = useHistory();
	const location = useLocation();

	const currentLang = useSelector((state) => state.language.current);
	console.log(location.pathname.length);
	useEffect(() => {
		if (location.pathname.length === 3) {
			history.push(`/${currentLang}`);
		} else {
			const newUrl = location.pathname.replace(/^\/.{2}\//, `/${currentLang}/`);
			history.push(newUrl);
		}
	}, [currentLang]);
}

export default ResetLangURL;
