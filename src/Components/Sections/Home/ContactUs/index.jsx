import ContactUsContainer from "../../../../Containers/Home/ContactUs";

export default function ContactUsSection(props) {
  return (
    <section className="section_black_border" style={{ position: "relative" }}>
      <div className="hash_div" id="contactSection"></div>
      <ContactUsContainer />
    </section>
  );
}
