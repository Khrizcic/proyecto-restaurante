import Authentication from "./routes/authentication/authentication.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom"
import SideMenu from "./routes/side-menu/side-menu.component";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Authentication/>}/>
        <Route path="/" element={<SideMenu/>}/>
      </Route>
    </Routes>
  )
}

export default App;