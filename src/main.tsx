import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import "./index.css";

const root = document.getElementById("root");
root?.classList.add("max-w-screen-2xl", "h-screen", "mx-auto", "flex", "flex-col", "gap-10", "px-3");

ReactDOM.createRoot(root as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
