import { createEffect, createSignal } from "solid-js"

export default function Counter() {
  const [count, setCount] = createSignal(0)

  createEffect(() => {
    // Show the counter only when it's divisible by 3
    if (count() % 3 === 0) console.log(count())
  })

  const doubleCount = () => count() * 2

  setInterval(() => setCount(count() + 1), 1000)

  return (
    <div>
      <h1>This counter will increase after each second: {count() ?? `0`}</h1>
      <h1>The double of the counter is: {doubleCount ?? `0`}</h1>
    </div>
  )
}
