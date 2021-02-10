import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../features/Cart/cartSlice";
import "./index.scss";

QuantityButton.propTypes = {
	number: PropTypes.number,
	onChange: PropTypes.func,
	idxUpdate: PropTypes.number,
};

QuantityButton.defaultProps = {
	number: 1,
	onChange: null,
	idxUpdate: -1,
};

function QuantityButton({ number, onChange, idxUpdate }) {
	const [quantity, setQuantity] = useState(number);
	const dispatch = useDispatch();

	const handleIncreaseClick = () => {
		setQuantity((x) => x + 1);

		if (idxUpdate >= 0) {
			dispatch(updateQuantity({ idx: idxUpdate, newQuantity: quantity + 1 }));
		}
	};

	const handleDecreaseClick = () => {
		if (quantity <= 1) return;
		setQuantity((x) => x - 1);

		if (idxUpdate >= 0) {
			dispatch(updateQuantity({ idx: idxUpdate, newQuantity: quantity - 1 }));
		}
	};
	const inputEl = useRef(quantity);

	const handleInputChange = () => {
		const quantity = parseInt(inputEl.current.value);

		if (quantity < 1 || Number.isNaN(quantity)) {
			setQuantity(() => 1);
			return;
		}

		setQuantity(() => quantity);
		if (idxUpdate >= 0) {
			dispatch(updateQuantity({ idx: idxUpdate, newQuantity: quantity }));
		}
	};

	return (
		<Box display="flex" alignItems="center" justifyContent="center">
			<div className="quantity">
				<button onClick={handleDecreaseClick}>
					<FontAwesomeIcon icon="minus" />
				</button>
				<input
					type="number"
					ref={inputEl}
					value={quantity}
					onChange={handleInputChange}
				/>
				<button onClick={handleIncreaseClick}>
					<FontAwesomeIcon icon="plus" />
				</button>
			</div>
		</Box>
	);
}

export default QuantityButton;
