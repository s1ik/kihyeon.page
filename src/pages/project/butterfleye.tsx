// Components
import IntroSection from '@template/butterfleye/intro';
import Shot from '@template/butterfleye/shot';

const Butterfleye = () => (
  <>
    <IntroSection />
    <Shot />
  </>
);

export default Butterfleye;
export async function getStaticProps() {
  return {
    props: {},
  };
}
