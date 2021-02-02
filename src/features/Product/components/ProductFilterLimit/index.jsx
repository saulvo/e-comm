import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState } from "react";
import "./index.scss";

library.add(faAngleDown);

ProductFilterLimit.propTypes = {
	onChange: PropTypes.func.isRequired,
	limits: PropTypes.array,
};

ProductFilterLimit.defaultProps = {
	limits: [12],
};
function ProductFilterLimit({ onChange, limits }) {
	const [selected, setSelected] = useState(limits[0]);

	const handleClick = (e) => {
		setSelected(e.currentTarget.dataset.value);
		onChange(e.currentTarget.dataset.value);
	};
	return (
		<div className="custom-select">
			<span>Show {selected}</span>
			<FontAwesomeIcon icon="angle-down" className="icon" />
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
		</div>
	);
}

export default ProductFilterLimit;
