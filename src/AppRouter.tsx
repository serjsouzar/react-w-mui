import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Layout } from "./layout"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter