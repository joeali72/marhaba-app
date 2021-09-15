import AboutContainer from "../../../../Containers/Home/About";

export default function AboutSection(props) {
  return (
    <section style={{ position: "relative" }}>
      <div className="hash_div" id={`aboutSection`}></div>
      <AboutContainer />
    </section>
  );
}
