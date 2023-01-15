import { useRef } from "react"
import { useGsapFeatureLeftShutterUnveil, useGsapFeatureRightShutterUnveil } from "../hooks/gsap";

const Featured = () => {
  const featureRef = useRef(null);
  const featureLeftRef = useRef(null);
  const featureRightRef = useRef(null);

  useGsapFeatureLeftShutterUnveil(featureLeftRef, featureRef);
  useGsapFeatureRightShutterUnveil(featureRightRef, featureRef);
  
  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-tittle">Featured</h2>
      <div className="featureds">
        <div className="featured-l">
          <span className="featured-text">90'S TELEPHONE</span>
          <img src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="90'S TELEPHONE" />
          <span className="featured-shutter" ref={featureLeftRef}></span>
        </div>
        <div className="featured-r">
          <span className="featured-text">90'S CASSETTE PLAYER</span>
          <img src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="90'S CASSETTE PLAYER" />
          <span className="featured-shutter" ref={featureRightRef}></span>
        </div>
      </div>
    </section>
  ) 
}

export default Featured