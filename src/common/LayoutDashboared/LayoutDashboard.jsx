// Layout.js

import { Link, Outlet } from 'react-router-dom';

function LayoutDashboard() {
  return (
    <div>

      <nav>
        <ul>
          <li><Link to="myboard">My Board</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="tasks">Tasks</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default LayoutDashboard;
