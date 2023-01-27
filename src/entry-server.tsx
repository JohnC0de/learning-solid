import { renderToStream } from "solid-js/web"
import App from "./App"

export function render() {
  const html = renderToStream(() => <App />)
  return { html }
}
