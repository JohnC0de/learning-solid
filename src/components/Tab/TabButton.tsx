import { Component, Signal } from "solid-js"

type TabButtonProps = {
  signal: Signal<boolean>
  text: string
}

function toggleBooleanSignal(signal: Signal<boolean>): void {
  const [acessor, setter] = signal
  setter(!acessor())
}

const TabButton: Component<TabButtonProps> = props => {
  return (
    <button
      class={"p-2 bg-blue-500 text-white rounded-xl w-full hover:bg-blue-600 focus:outline-blue-600"}
      onClick={() => toggleBooleanSignal(props.signal)}
    >
      {props.text}
    </button>
  )
}

export default TabButton
