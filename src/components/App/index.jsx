import { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import NotFound from "../NotFound";
import RenderRoute from "../RenderRoute";
import "./index.scss";

const HomePage = lazy(() => import("../../features/Home"));
const ProductFeature = lazy(() => import("../../features/Product"));
const PromotionFeature = lazy(() => import("../../features/Promotion"));
const BlogFeature = lazy(() => import("../../features/Blog"));
const ContactFeature = lazy(() => import("../../features/Contact"));

function App() {
	const match = useRouteMatch();
	return (
		<>
			<Header />
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<RenderRoute exact path={match.path} component={HomePage} />
					<RenderRoute path={`${match.path}/products`} component={ProductFeature} title="products"/>
					<RenderRoute path={`${match.path}/promotion`} component={PromotionFeature} title="promotion"/>
					<RenderRoute path={`${match.path}/blog`} component={BlogFeature} title="blog"/>
					<RenderRoute path={`${match.path}/contact`} component={ContactFeature} title="contact"/>
					<RenderRoute component={NotFound} title="404" />
				</Switch>
			</Suspense>
			<Footer />
		</>
	);
}

export default App;
