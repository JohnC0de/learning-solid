import { Component, Show, Signal } from "solid-js"
import CounterDisplay from "./components/Counter/CounterDisplay"
import Divider from "./components/Divider"
import TabButton from "./components/Tab/TabButton"
import TodoDisplay from "./components/Todo/TodoDisplay"
import { useGlobalContext } from "./context/global"

const LoginButton: Component<{ signal: Signal<boolean> }> = ({ signal }) => {
  const [isLogged] = signal

  return (
    <Show when={isLogged()} fallback={<TabButton signal={signal} text={"Log In ✅"} />}>
      <TabButton signal={signal} text={"Log Out ❌"} />
    </Show>
  )
}

const App: Component = () => {
  const { isLoggedSignal } = useGlobalContext
  const [isLogged] = isLoggedSignal

  return (
    <main class="flex flex-col h-screen mx-auto w-300px justify-center items-center">
      <div class="border flex flex-col bg-zinc-100 rounded-2xl shadow-inner text-center p-4 w-80 gap-4">
        <h1 class="font-medium tracking-tighter text-zinc-600 text-3xl">Learning Solid</h1>

        <Divider />

        <LoginButton signal={isLoggedSignal} />

        <Divider />

        <Show when={isLogged()}>
          <CounterDisplay />

          <Divider />

          <TodoDisplay />
        </Show>
      </div>
    </main>
  )
}
export default App
