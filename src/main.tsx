import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import "./index.css";

const root = document.getElementById("root");
root?.classList.add(
	"max-w-screen-2xl",
	"min-h-screen",
	"mx-auto",
	"grid",
	"grid-cols-1",
	"grid-rows-layout",
	"gap-8",
	"p-3"
);

ReactDOM.createRoot(root as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
