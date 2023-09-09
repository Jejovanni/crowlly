import { NavLink, Outlet } from "react-router-dom"
import App from "../App"

function RootLayouts() {
  return (
    <div className="root-layout">
        <App/>
<Outlet/>
    </div>
  )
}

export default RootLayouts