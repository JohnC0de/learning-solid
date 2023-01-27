/* @refresh reload */
import "@unocss/reset/tailwind.css"
import { hydrate } from "solid-js/web"
import "uno.css"
import App from "./App"

hydrate(() => <App />, document.getElementById("root") as HTMLElement)
