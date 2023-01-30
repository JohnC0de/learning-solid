import { Accessor, Component } from "solid-js"
import { useGlobalContext } from "../../context/global"

export type Todo = {
  id: number
  text: string
  isCompleted: boolean
}

type TodoItemProps = {
  todo: Todo
  index: Accessor<number>
}

const TodoItem: Component<TodoItemProps> = props => {
  const { todoStore } = useGlobalContext
  const [todos, setTodos] = todoStore

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)))
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const isCompletedClass = props.todo.isCompleted ? "line-through text-gray-400" : ""

  return (
    <div class="flex-grow px-2 select-none">
      <div
        class="border rounded-xl cursor-pointer flex shadow-md w-full items-center hover:shadow-inner"
        onClick={() => toggleTodo(props.todo.id)}
      >
        <p class="m-1 p-1">{props.index() + 1}</p>
        <p class={`animate flex-grow text-sm tracking-tighter font-medium ${isCompletedClass}`}>{props.todo.text}</p>
        <button class="rounded-full cursor-pointer m-1 p-1 hover:bg-red-100" onClick={() => removeTodo(props.todo.id)}>
          ❌
        </button>
      </div>
    </div>
  )
}

export default TodoItem
