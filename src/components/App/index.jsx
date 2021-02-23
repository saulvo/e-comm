import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faAngleDoubleRight,
	faAngleDown,
	faLongArrowAltLeft,
	faLongArrowAltRight,
	faMinus,
	faPlus,
	faSearch,
	faShoppingCart,
	faSignInAlt,
	faTimesCircle,
	faUserPlus,
	faPlug,
} from "@fortawesome/free-solid-svg-icons";
import { lazy, Suspense } from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Switch, useRouteMatch } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import NotFound from "../NotFound";
import RenderRoute from "../RenderRoute";
import "./index.scss";

library.add(
	faSignInAlt,
	faUserPlus,
	faSearch,
	faShoppingCart,
	faAngleDown,
	faAngleDoubleRight,
	faLongArrowAltRight,
	faLongArrowAltLeft,
	faPlus,
	faMinus,
	faTimesCircle,
	faPlug,
);

const HomePage = lazy(() => import("../../features/Home"));
const ProductFeature = lazy(() => import("../../features/Product"));
const PromotionFeature = lazy(() => import("../../features/Promotion"));
const BlogFeature = lazy(() => import("../../features/Blog"));
const ContactFeature = lazy(() => import("../../features/Contact"));
const CartFeature = lazy(() => import("../../features/Cart"));


function App() {
	const match = useRouteMatch();

	return (
		<>
			<Header />
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<RenderRoute exact path={match.path} component={HomePage} />
					<RenderRoute
						path={`${match.path}/products`}
						component={ProductFeature}
						title="products"
					/>
					<RenderRoute
						path={`${match.path}/promotion`}
						component={PromotionFeature}
						title="promotion"
					/>
					<RenderRoute
						path={`${match.path}/blog`}
						component={BlogFeature}
						title="blog"
					/>
					<RenderRoute
						path={`${match.path}/contact`}
						component={ContactFeature}
						title="contact"
					/>
					<RenderRoute
						path={`${match.path}/cart`}
						component={CartFeature}
						title="cart"
					/>
				
					<RenderRoute component={NotFound} title="404" />
				</Switch>
			</Suspense>
			<Footer />

			<ReactNotification className="top-0" />
		</>
	);
}

export default App;
