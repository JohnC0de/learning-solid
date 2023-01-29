import { Component, createSignal, Show } from "solid-js"
import Counter from "./components/Counter"
import LogButton from "./components/LogButton"
import { useAuth } from "./context/auth"

const App: Component = () => {
  const { isLogged } = useAuth
  const [showCounter, setShowCounter] = createSignal()

  const btnStyle = "p-2 bg-blue-500 text-white rounded-xl"

  return (
    <main class="flex flex-col h-screen mx-auto justify-center items-center w-300px">
      <div class="border flex flex-col bg-zinc-100 rounded-2xl shadow-inner text-center p-4 gap-4 w-80">
        <h1 class=" text-2xl">Hello, world!</h1>
        <Show when={isLogged()} fallback={<LogButton text="Log In" />}>
          <LogButton text="Log Out" />
        </Show>

        <Show when={isLogged()}>
          <button class={btnStyle} onClick={() => setShowCounter(!showCounter())}>
            Toggle counter {showCounter() ? `off` : `on`}
          </button>
          <Show when={showCounter()}>
            <Counter />
          </Show>
        </Show>
      </div>
    </main>
  )
}
export default App
