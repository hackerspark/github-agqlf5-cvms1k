import * as React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

let pages = ['/invoices', '/expenses', '/test'];

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{ border: 'solid 1px', paddingBottom: '1rem' }}>
        {/* {pages.map((page) => (<>
          <Link to={page}>{page}</Link>
          <br/>
          </>
        ))} */}

        {pages.map((page) => (
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? 'red' : '',
              };
            }}
            to={page}
          >
            {page}
          </NavLink>
        ))}
      </nav>
      <div style={{ border: 'solid 1px;' }}>
        <Outlet />
      </div>
    </div>
  );
}
