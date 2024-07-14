import { Stack } from "@mui/material"
import Home from "./pages/HomeData"
import { Link } from "react-router-dom"

const App = () => {
  return (
    <Stack>
      <Home />
      <Link to={"/signup"}>Signup</Link>
    </Stack>
  )
}

export default App
