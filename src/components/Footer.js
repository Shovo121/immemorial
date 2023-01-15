import { useRef } from "react"
import { useGsapFooterHadingDown } from "../hooks/gsap"

const Footer = () => {
  const footerRef = useRef(null)
  const footerHadingRef = useRef(null)

  useGsapFooterHadingDown(footerHadingRef, footerRef)
  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHadingRef}>Bonjout</h1>
      <p>© {new Date().getFullYear()} Immemorial. Crafted by yours truly</p>
    </section>
  )
}

export default Footer