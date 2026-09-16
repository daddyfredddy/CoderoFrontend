import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div>
        <img src="/assets/images/logo.png" alt="App logo" class="w-16 h-16" />
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>Logout</div>
      <img />
    </div>
  );
}

export default Navbar;
