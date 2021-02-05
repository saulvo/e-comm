import { Box, Container } from "@material-ui/core";
import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import ResetLangURL from "../../components/ultils/ResetLangURL";

const ProdutListPage = lazy(() => import("./pages/List"));
const ProdutDetailPage = lazy(() => import("./pages/Detail"));
function ProductFeatures(props) {
	;

	const match = useRouteMatch();

	return (
		<Box mt={2}>
			<Container fixed>
				<Breadcrumb />
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path={`${match.path}`} component={ProdutListPage} />
						<Route
							path={`${match.path}/:productID`}
							component={ProdutDetailPage}
						/>
					</Switch>
				</Suspense>
			</Container>
		</Box>
	);
}

export default ProductFeatures;
