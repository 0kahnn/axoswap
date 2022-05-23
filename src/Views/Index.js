import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header";
import HeroBanner from "../Components/Index/HeroBanner";
import Counter from "../Components/Index/Counter";
import Protocol from "../Components/Index/Protocol";
import ProtocolGovernance from "../Components/Index/ProtocolGovernance";

const Index = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Counter />
      <Protocol />
      <ProtocolGovernance />
      <Footer />
    </>
  );
};
export default Index;
