import { useState, useEffect } from 'react'

type User = { id: number; name: string }
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])

  return { users }
}
