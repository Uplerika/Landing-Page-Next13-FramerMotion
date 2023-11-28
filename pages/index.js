import { Navbar, Footer } from '../components';
import {
  About,
  Explore,
  GetStarted,
  Hero,
  WhatsNew,
  World,
  Insights,
  Feedback,
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-03 z-0" />
      <WhatsNew />
    </div>
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
