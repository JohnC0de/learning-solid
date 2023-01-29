import { Component, Show } from "solid-js"
import { useAuth } from "../context/auth"

type Props = { text: string }

const LogButton: Component<Props> = props => {
  const { isLogged, setIsLogged } = useAuth

  const btnStyle = "px-1 py-2 bg-blue-500 text-white rounded-xl"

  return (
    <button class={btnStyle} onClick={() => setIsLogged(!isLogged())}>
      <Show when={isLogged()} fallback={props.text}>
        {props.text}
      </Show>
    </button>
  )
}

export default LogButton
