import { Component, createSignal, Show } from "solid-js"
import CounterDisplay from "./components/CounterDisplay"
import Divider from "./components/Divider"
import LogButton from "./components/LogButton"
import { useAuth } from "./context/auth"

export const btnStyle = "p-2 bg-blue-500 text-white rounded-xl"

const App: Component = () => {
  const { isLogged } = useAuth
  const [showCounter, setShowCounter] = createSignal(false)
  const counterState = { showCounter, setShowCounter }

  return (
    <main class="flex flex-col h-screen mx-auto justify-center items-center w-300px">
      <div class="border flex flex-col bg-zinc-100 rounded-2xl shadow-inner text-center p-4 gap-4 w-80">
        <h1 class=" text-2xl">Hello, world!</h1>

        <Divider />

        <Show when={isLogged()} fallback={<LogButton text="Log In ✅" />}>
          <LogButton text="Log Out ❌" />
        </Show>

        <Divider />

        <Show when={isLogged()}>
          <CounterDisplay {...counterState} />
        </Show>
      </div>
    </main>
  )
}
export default App
