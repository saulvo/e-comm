import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import "./index.scss";


ProductFilterLimit.propTypes = {
	onChange: PropTypes.func.isRequired,
	limits: PropTypes.array,
	loading: PropTypes.bool,
};

ProductFilterLimit.defaultProps = {
	limits: [12],
	loading: false,
};
function ProductFilterLimit({ onChange, limits, loading }) {
	const [selected, setSelected] = useState(limits[0]);
	const { i18n } = useTranslation(["productFilter"]);

	const handleClick = (e) => {
		setSelected(e.currentTarget.dataset.value);
		onChange(e.currentTarget.dataset.value);
	};
	return (
		<div className="custom-select">
			<span>
				<Trans i18nKey="productFilter:show">Show</Trans>
				&nbsp;{selected}
			</span>
			<FontAwesomeIcon icon="angle-down" className="icon" />
			{!loading && (
				<ul>
					{limits.map((item, idx) => (
						<li
							key={idx}
							className={parseInt(selected) === item ? "selected" : ""}
							data-value={item}
							onClick={handleClick}
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default ProductFilterLimit;
