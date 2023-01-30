import { ParentComponent } from "solid-js"

type TabContainerProps = {
  isActive: boolean
}

const TabContainer: ParentComponent<TabContainerProps> = props => {
  return (
    <div class="bg-white border rounded-2xl shadow-inner">
      <div class={`flex flex-col ${props.isActive ? "pb-4 gap-2" : ""}`}>{props.children}</div>
    </div>
  )
}

export default TabContainer
