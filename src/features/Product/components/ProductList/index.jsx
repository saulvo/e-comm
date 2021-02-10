import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import ProductCard from "../ProductCard";

ProductList.propTypes = {
	list: PropTypes.array,
	addCart: PropTypes.func,
};

ProductList.defaultProps = {
	list: [],
	addCart: null,
};

function ProductList({ list, addCart }) {
	return (
		<>
			<Grid container spacing={0}>
				{list.map((prod) => (
					<Grid item xs={12} sm={6} md={3} key={prod.id}>
						<ProductCard product={prod}  addCart={addCart}/>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default ProductList;
