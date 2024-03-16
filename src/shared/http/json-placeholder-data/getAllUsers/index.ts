import { userData } from ".."
import { User } from "../../../../interfaces/users"

export const getAllUsers = async () => {
  const {data} = await userData.get<User[]>("https://jsonplaceholder.typicode.com/users")
  
  return data
}