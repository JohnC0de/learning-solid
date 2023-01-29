import { createRoot, createSignal } from "solid-js"

function useAuthContext() {
  const [isLogged, setIsLogged] = createSignal(false)

  return { isLogged, setIsLogged }
}

export const useAuth = createRoot(useAuthContext)
