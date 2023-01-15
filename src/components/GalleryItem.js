import { useRef } from "react";
import { useGsapGalleryTitle, useGsapGalleryCategory,  useGsapGalleryImg} from "../hooks/gsap";

const GalleryItem = ( {image} ) => {
  const galleryTitleRef = useRef(null);
  const galleryCategoryRef = useRef(null);
  const galleryImgRef = useRef(null);

  useGsapGalleryTitle(galleryTitleRef, galleryImgRef)
  useGsapGalleryCategory(galleryCategoryRef, galleryImgRef)
  useGsapGalleryImg(galleryImgRef)


  return (
    <div className="gallery-item">
      <h1 className="gallery-item-title" ref={galleryTitleRef}>
        {image.title}
      </h1>
      <p className="gallery-item-category" ref={galleryCategoryRef}>
        {image.category}
      </p>
      <div className="gallery-item-img" ref={galleryImgRef} style={{backgroundImage: `url(${image.src})`}}></div>
    </div>
  )
}

export default GalleryItem