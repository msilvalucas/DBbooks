import { createBrowserRouter } from "react-router";

import { HomePage } from "../Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
]);
