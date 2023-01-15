import { useRef } from "react"
import { Link } from "react-router-dom"
import { useGsapNavDown } from "../hooks/gsap"

const Navbar = () => {
  const li1 = useRef(null)
  const li2 = useRef(null)
  const li3 = useRef(null)
  const logoRef = useRef(null)
  const blogRef = useRef(null)

  const liArray = [li1, li2, li3]
  const logoArray = [logoRef]
  const favArry = [blogRef]

  useGsapNavDown(liArray, 0.3);
  useGsapNavDown(logoArray, 0.8);
  useGsapNavDown(favArry, 1.3);


  return (
    <nav className="navbar wrapper">
      <ul className='links'>
        <li ref={li1}>
          <Link to="/">featured</Link>
        </li>
        <li ref={li2}>
          <Link to="/about">about</Link>
        </li>
        <li ref={li3}>
          <Link to="/gallery">gallery</Link>
        </li>
      </ul>
      <div className="logo" ref={logoRef}>
        <Link to="/">
           <h2>immemorial</h2>
        </Link>
      </div>
      <div className="blog" ref={blogRef}>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  )
}

export default Navbar