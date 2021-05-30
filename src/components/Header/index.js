import {Link} from 'react-router-dom'

const Header = () => (
  <>
    <Link to="/" className="link-item">
      Home
    </Link>
    <Link to="/about" className="link-item">
      About
    </Link>
  </>
)

export default Header
