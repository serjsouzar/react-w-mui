import { useEffect, useState } from "react"
import { User } from "./interfaces/users"
import { getAllUsers } from "./shared/http/json-placeholder-data/getAllUsers"

function App() {
  
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const [
          Users,
        ] = await Promise.all([getAllUsers()])
  
        setUsers(Users)
      } catch (error) {
        console.log("Error", error)
      }    
    }

    fetchData()
  },[])


  console.log(users)

  return (
    <>
      <h1>hello world</h1>
    </>
  )
}

export default App
