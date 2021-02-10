import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TableCell, TableRow } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import QuantityButton from "../../../../components/QuantityButton";
import ultils from "../../../../components/ultils";
import "./index.scss";
CartItem.propTypes = {
	itemCart: PropTypes.object.isRequired,
	onClick: PropTypes.func,
	onChange: PropTypes.func,
	idxUpdate: PropTypes.number,
};

CartItem.defaultProps = {
	onClick: null,
	onChange: null,
	idxUpdate: -1,
};

function CartItem({ itemCart, onClick, idxUpdate }) {
	const currentLang = useSelector((state) => state.language.current);

	const handleRemoveClick = (id) => {
		if (!onClick) return;

		onClick(id);
	};

	return (
		<TableRow>
			<TableCell>
				<img src={itemCart.image} alt={itemCart.info} />
			</TableCell>
			<TableCell>{itemCart.info}</TableCell>
			<TableCell align="center">
				{ultils.formatPrice(itemCart.price, currentLang)}
			</TableCell>
			<TableCell align="center">
				<QuantityButton number={itemCart.quantity} idxUpdate={idxUpdate}/>
			</TableCell>
			<TableCell align="center">
				{ultils.formatPrice(itemCart.money, currentLang)}
			</TableCell>
			<TableCell align="center">
				<button
					type="button"
					className="btn-remove"
					onClick={() => handleRemoveClick(itemCart.prodID)}
				>
					<FontAwesomeIcon icon="times-circle" />
				</button>
			</TableCell>
		</TableRow>
	);
}

export default CartItem;
