import { CssBaseline } from "@material-ui/core";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import store from "./app/store";
import App from "./components/App";
import NotFound from "./components/NotFound";
import "./i18n";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<CssBaseline />
				<Suspense fallback={<div>Loading</div>}>
					<Switch>
						<Redirect exact from="/" to="/en" />
						<Route path="/:lng" component={App} />
						<Route component={NotFound} />
					</Switch>
				</Suspense>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);

reportWebVitals();
