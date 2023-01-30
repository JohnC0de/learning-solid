import { Component, Show } from "solid-js"
import { useGlobalContext } from "../../context/global"
import TabButton from "../Tab/TabButton"
import TabContainer from "../Tab/TabContainer"
import Counter from "./Counter"

const CounterDisplay: Component = () => {
  const { showCounterSignal } = useGlobalContext
  const [isActive] = showCounterSignal

  const getTogglingText = () => (isActive() ? "Hide Counter ⌛" : "Show Counter ⌛")

  return (
    <TabContainer isActive={isActive()}>
      <TabButton signal={showCounterSignal} text={getTogglingText()} />

      <Show when={isActive()}>
        <Counter />
      </Show>
    </TabContainer>
  )
}
export default CounterDisplay
