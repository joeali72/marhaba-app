import BannerContainer from '../../../../Containers/Home/Banner';
import Classes from './banner.module.scss';

export default function BannerSection(props) {
  return (
    <section className={Classes.Banner}>
    <BannerContainer />
    </section>
  );
}
