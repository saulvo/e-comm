import { Container } from "@material-ui/core";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ResetLangURL from "../../ResetLangURL";

ProductFeatures.propTypes = {};

function ProductFeatures(props) {
  ResetLangURL()
	return (
		<>
			<Container>
        <Breadcrumb/>
				ProductFeatures
			</Container>
		</>
	);
}

export default ProductFeatures;
