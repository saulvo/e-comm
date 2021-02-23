import { Box, Container } from "@material-ui/core";
import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

const ProdutListPage = lazy(() => import("./pages/List"));
const ProdutDetailPage = lazy(() => import("./pages/Detail"));
const ProdutAddEditPage = lazy(() => import("./pages/AddEdit"));
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
							path={`${match.path}/add-edit/:productID`}
							component={ProdutAddEditPage}
						/>
						<Route
							path={`${match.path}/add-edit`}
							component={ProdutAddEditPage}
						/>
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
