import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import CONTANT from "../../../../Constants";
import "./index.scss";

ProductFilterSort.propTypes = {
	onChange: PropTypes.func.isRequired,
	sorts: PropTypes.array,
	loading: PropTypes.bool,
};
ProductFilterSort.defaultProps = {
	sorts: ["default"],
	loading: true,
};

function ProductFilterSort({ onChange, sorts, loading }) {
	const [selected, setSelected] = useState(sorts[0]);
	const { i18n } = useTranslation(["productFilter"]);

	const handleClick = (e) => {
		setSelected(e.currentTarget.dataset.value);
		onChange(e.currentTarget.dataset.value);
	};
	return (
		<div className="custom-select">
			<span>
				<Trans i18nKey={`productFilter:${selected}`}>
					{CONTANT.SORT[selected]}
				</Trans>
			</span>
			<FontAwesomeIcon icon="angle-down" className="icon" />
			{!loading && (
				<ul>
					{sorts.map((item, idx) => (
						<li
							key={idx}
							className={selected === item ? "selected" : ""}
							data-value={item}
							onClick={handleClick}
						>
							<Trans i18nKey={`productFilter:${item}`}>
								{CONTANT.SORT[item]}
							</Trans>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default ProductFilterSort;
