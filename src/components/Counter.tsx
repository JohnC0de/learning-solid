import { createEffect, createMemo, createSignal } from "solid-js"

function fibonacci(num: number) {
  if (num <= 1) return 1

  return fibonacci(num - 1) + fibonacci(num - 2)
}

export default function Counter() {
  const [count, setCount] = createSignal(0)

  createEffect(() => {
    // Show the counter only when it's divisible by 3
    if (count() % 3 === 0) console.log(count())
  })

  const fibMemo = createMemo(() => {
    // Stop the calculation after 10 to prevent freezing the browser
    console.log("called")
    if (count() > 10) return `Limit reached, stopping for performance reasons`
    return fibonacci(count())
  })

  const doubleCount = () => count() * 2

  setInterval(() => setCount(count() + 1), 1000)

  return (
    <div>
      <h1>This counter will increase after each second: {count() ?? `0`}</h1>
      <h1>The double of the counter is: {doubleCount ?? `0`}</h1>
      <h1>The fibonacci of the counter is: {fibMemo() ?? `0`}</h1>
    </div>
  )
}
