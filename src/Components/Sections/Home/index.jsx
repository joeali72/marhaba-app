import AboutSection from "./About";
import BannerSection from "./Banner";
import ContactUsSection from "./ContactUs";
import GallerySection from "./Gallery";
import IntroductionSection from "./Introduction";
import TestimonialsSection from "./Testimonials";
import WhyusSection from "./WhyUs";

export default function HomeSections(props) {
  return (
    <>
      <BannerSection /> <IntroductionSection /> <WhyusSection />
      <AboutSection /> <GallerySection /> <TestimonialsSection />
      <ContactUsSection />
    </>
  );
}
