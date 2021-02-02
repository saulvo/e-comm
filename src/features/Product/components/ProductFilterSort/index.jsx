import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState } from "react";
import "./index.scss";

library.add(faAngleDown);

ProductFilterSort.propTypes = {
	onChange: PropTypes.func.isRequired,
	sorts: PropTypes.array,
};
ProductFilterSort.defaultProps = {
	sorts: ["default"],
};

const sortName = {
	default: "Default Sorting",
	originalPrice: "Price",
	productName: "Product Name",
};
function ProductFilterSort({ onChange, sorts }) {
	const [selected, setSelected] = useState(sorts[0]);

	const handleClick = (e) => {
		setSelected(e.currentTarget.dataset.value);
		onChange(e.currentTarget.dataset.value);
	};
	return (
		<div className="custom-select">
			<span>{sortName[selected]}</span>
			<FontAwesomeIcon icon="angle-down" className="icon" />
			<ul>
				{sorts.map((item, idx) => (
					<li
						key={idx}
						className={selected === item ? "selected" : ""}
						data-value={item}
						onClick={handleClick}
					>
						{sortName[item]}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ProductFilterSort;
