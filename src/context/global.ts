import { createRoot, createSignal } from "solid-js"
import { createStore } from "solid-js/store"
import { Todo } from "../components/Todo/TodoItem"

function globalContext() {
  const isLoggedSignal = createSignal(false)
  const showCounterSignal = createSignal(false)
  const showTodoSignal = createSignal(false)

  const initialTodos: Todo[] = [
    { id: 1, text: "Learn Solid", isCompleted: false },
    { id: 2, text: "Learn Typescript", isCompleted: false },
    { id: 3, text: "Learn SSR", isCompleted: false }
  ]
  const todoStore = createStore<Todo[]>(initialTodos)

  return { isLoggedSignal, showCounterSignal, showTodoSignal, todoStore }
}

export const useGlobalContext = createRoot(globalContext)
