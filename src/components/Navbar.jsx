import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to="/"><h2>🎬 Movie Explorer</h2></Link>
      <Link to="/">Home</Link>
    </nav>
  )
}

export default Navbar