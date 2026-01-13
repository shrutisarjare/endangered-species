import Hero from "./hero";
import Features from "./features";
import HowItWorks from "./work";
import Species from "./species";
import Contact from "./contact";

const MyApp = () => {
  return (
    <>
      <Hero />

      <div id="features"><Features /></div>
      <div id="work"><HowItWorks /></div>
      <div id="species"><Species /></div>
      <div id="contact"><Contact /></div>
    </>
  );
};

export default MyApp;
