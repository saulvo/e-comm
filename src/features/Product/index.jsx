import { Box, Container } from "@material-ui/core";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ResetLangURL from "../../ResetLangURL";

function ProductFeatures(props) {
	ResetLangURL();

	return (
		<Box mt={2}>
			<Container>
				<Breadcrumb />
				ProductFeatures
			</Container>
		</Box>
	);
}

export default ProductFeatures;
