import { Container } from "@material-ui/core";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ResetLang from "../../ResetLang";

ProductFeatures.propTypes = {};

function ProductFeatures(props) {
  ResetLang()
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
