import { Component, For } from "solid-js"
import { useGlobalContext } from "../../context/global"
import TabContainer from "../Tab/TabContainer"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

const TodoDisplay: Component = () => {
  const { todoStore } = useGlobalContext
  const [todos, setTodos] = todoStore

  const addTodo = (text: string) => setTodos([...todos, { id: Date.now(), text, isCompleted: false }])

  return (
    <TabContainer isActive>
      <TodoForm addTodo={addTodo} />

      <div class="flex flex-col gap-1">
        <For each={todos}>{(todo, index) => <TodoItem todo={todo} index={index} />}</For>
      </div>
    </TabContainer>
  )
}

export default TodoDisplay
