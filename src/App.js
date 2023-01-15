import {Routes, Route} from "react-router-dom"
import Abouts from "./components/Abouts"
import Blog from "./components/Blog"
import Featured from "./components/Featured"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Home from "./components/Home"
import Navbar from './components/Navbar'
import NotFound from "./components/NotFound"
import { useSmoothScroll } from "./hooks/useSmoothScroll"

const App = () => {
  useSmoothScroll()
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/featured" element={<Featured />}/>
        <Route path="/about" element={<Abouts />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App