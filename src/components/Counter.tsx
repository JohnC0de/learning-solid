import { createSignal } from "solid-js"

export default function Counter() {
  const [count, setCount] = createSignal(0)

  setInterval(() => setCount(count() + 1), 1000)

  return <div>This counter will increase after each second: {count() ?? `0`}</div>
}
