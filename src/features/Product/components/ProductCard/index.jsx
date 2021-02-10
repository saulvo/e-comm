import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ultils from "../../../../components/ultils";
import "./index.scss";

ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
	addCart: PropTypes.func,
};

ProductCard.defaultProps = {
	addCart: null,
};

function ProductCard({ product, addCart }) {
	const { t } = useTranslation(["product"]);
	const currentLang = useSelector((state) => state.language.current);

	const isSale = product.salePrice === product.originalPrice;
	const promotionPercent =
		Math.round((100 - (product.salePrice * 100) / product.originalPrice) * 10) /
		10;

	const handleAddCartClick = (product) => {
		if (!addCart) return;
		addCart(product);
	};

	return (
		<div className="prod-card">
			<figure className="prod-card__thumb">
				<img src={product.images[0]} alt={product.name} />
				{!isSale && <span className="sale">{`-${promotionPercent}%`}</span>}
			</figure>
			<div className="prod-card__inf">
				<h3 className="prod-card__name">{product.name}</h3>
				<div className="prod-card__price">
					{isSale && ultils.formatPrice(product.originalPrice, currentLang)}
					{!isSale && (
						<>
							{ultils.formatPrice(product.salePrice, currentLang)}
							<span>
								{ultils.formatPrice(product.originalPrice, currentLang)}
							</span>
						</>
					)}
				</div>
				<button className="prod-card__btn" onClick={() => handleAddCartClick(product)}>
					{t("addCart")}
				</button>
			</div>
		</div>
	);
}

export default ProductCard;
