import GalleryContainer from "../../../../Containers/Home/Gallery";
import Classes from "./gallery.module.scss";

export default function GallerySection(props) {
  return (
    <section className={`${Classes.GallerySection}`}>
      <GalleryContainer />
    </section>
  );
}
