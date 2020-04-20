import React from 'react';

function HomePage() {
  return <div>

    <h1>Hello User!</h1>

    <nav>
          <ul>
            <li>
              <a href="/login"><i className="fas fa-home">Login</i></a>
            </li>
            <li>
              <a href="/register"><i className="fas fa-enter">Register</i></a>
            </li>
          </ul>
        </nav>

  </div>;
}

export default HomePage;