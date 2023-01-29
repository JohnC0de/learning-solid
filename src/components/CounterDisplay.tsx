import { Accessor, Component, Setter, Show } from "solid-js"
import { btnStyle } from "../App"
import Counter from "./Counter"

type CounterProps = {
  showCounter: Accessor<boolean>
  setShowCounter: Setter<boolean>
}

const CounterDisplay: Component<CounterProps> = props => {
  return (
    <>
      <button class={btnStyle} onClick={() => props.setShowCounter(!props.showCounter())}>
        {props.showCounter() ? "Hide Counter ⌛" : "Show Counter ⌛"}
      </button>
      <Show when={props.showCounter()}>
        <Counter />
      </Show>
    </>
  )
}
export default CounterDisplay
