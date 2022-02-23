import { Link, Outlet } from "react-router-dom";

export function HomePage() {
    return <div>
        <nav>
            <Link to="/task" style={{padding: "0.1em"}}>To Do</Link>
            <Link to="/task/instructions" style={{padding: "0.1.m"}}>To Do List with Instructions</Link>
            <Link to="/help" style={{padding: "0.1em"}}>Help</Link>
        </nav>
        <Outlet />
    </div>
}