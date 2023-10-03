import './home.css';
function HomePage() {
  return (
    <div className="home">
      <div className="header">
        <h1 className="title">Welcome to My React Homepage</h1>
        <p className="subtitle">A beautifully designed homepage created with React.</p>
      </div>
      <div className="sample-content">
        <h2>Sample Content</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
          <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
