import { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import NotFound from "../NotFound";
import './index.scss'

const HomePage = lazy(() => import("../../features/Home"));
const ProductFeature = lazy(() => import("../../features/Product"));
function App() {
	const match = useRouteMatch();
	return (
		<>
			<Header />
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path={match.path} component={HomePage} />
					<Route path={`${match.path}/products`} component={ProductFeature} />
					<Route component={NotFound} />
				</Switch>
			</Suspense>
			<Footer />
		</>
	);
}

export default App;