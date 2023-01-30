import { Component } from "solid-js"

type TodoFormProps = {
  addTodo: (text: string) => void
}

const TodoForm: Component<TodoFormProps> = props => {
  let inputRef: HTMLInputElement | undefined
  const handleAddTodo = () => {
    if (inputRef) {
      const text = inputRef.value.trim()
      if (text) props.addTodo(text)
      inputRef.value = ""
    }
  }
  return (
    <div class="flex flex-col mx-2 mt-2 mb-4 gap-2 items-center">
      <label class="font-medium text-sm text-zinc-600 block">Todo List</label>

      <div class="flex rounded-2xl shadow-md  w-full">
        <input type="text" class="border rounded-l-xl w-full p-2" ref={inputRef} />
        <button class="rounded-r-xl bg-blue-500 text-white p-2 hover:bg-blue-600" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  )
}

export default TodoForm
