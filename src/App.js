import { 
  AboutSection, 
  AnnualReport, 
  ContactSection, 
  HeroSection, 
  HumanPoweredNetwork, 
  OnePortalEveryTransaction, 
  SectorsWeServe, 
  ServicesSection,
  Footer 
  
} from "./components";


function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <HumanPoweredNetwork />
      <ServicesSection />
      <OnePortalEveryTransaction />
      <SectorsWeServe />
      <AnnualReport />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
