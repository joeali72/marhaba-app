import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Img(props) {
  return (
    <LazyLoadImage
      alt={props.alt}
      src={props.src}
      className={`img-fluid ${props.className}`}
      width={props.width}
      height={props.height}
      style={props.style}
    />
  );
}
