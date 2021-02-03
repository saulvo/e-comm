import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

ProductFilterCat.propTypes = {
	categoryId: PropTypes.string,
	onClick: PropTypes.func,
};

ProductFilterCat.defaultProps = {
	categoryId: "",
	onClick: null,
};

const productCat = [
	{
		id: "c45eca94-70ef-4264-8714-df482e3d0eff",
		name: "Thời trang",
		searchTerm: "ao so mi nu",
		createdAt: 1602668951027,
		updatedAt: 1602668951027,
	},
	{
		id: "3ab235d3-7b26-49ad-a5c1-0d4b2f91056e",
		name: "Khẩu trang",
		searchTerm: "khau trang",
		createdAt: 1602668951028,
		updatedAt: 1602668951028,
	},
	{
		id: "641710c1-5db5-4651-8fad-58ae8f7c7a34",
		name: "Làm đẹp",
		searchTerm: "lam dep",
		createdAt: 1602668951028,
		updatedAt: 1602668951028,
	},
	{
		id: "7922f29f-32eb-4e88-bde8-c283a26da4ba",
		name: "Laptop",
		searchTerm: "macbook",
		createdAt: 1602668951028,
		updatedAt: 1602668951028,
	},
	{
		id: "ea0cfab5-ecac-48fc-a84a-16e869c37620",
		name: "Ổ cứng",
		searchTerm: "o cung ssd",
		createdAt: 1602668951028,
		updatedAt: 1602668951028,
	},
	{
		id: "b4fce5af-d6d5-4438-876d-a7d436087097",
		name: "Điện thoại",
		searchTerm: "iphone",
		createdAt: 1602668951028,
		updatedAt: 1602668951028,
	},
];

function ProductFilterCat({ onClick, categoryId }) {
	const handleCatClick = (e) => {
		if (!onClick) return;
		onClick(e.currentTarget.dataset.value);
	};
	return (
		<div>
			<Typography variant="h6" component="h5">
				Product Category
			</Typography>
			<ul className="prod-cat">
				{productCat.map((cat) => (
					<li data-value={cat.id} onClick={handleCatClick} className={categoryId === cat.id ? 'is-active' : ''}>
						{categoryId === cat.id && (
							<FontAwesomeIcon icon="angle-double-right" className="icon" />
						)}
						{cat.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ProductFilterCat;
