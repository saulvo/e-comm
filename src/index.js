import { CssBaseline } from "@material-ui/core";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import App from "./components/App";
import NotFound from "./components/NotFound";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
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
	</React.StrictMode>,
	document.getElementById("root"),
);

reportWebVitals();
