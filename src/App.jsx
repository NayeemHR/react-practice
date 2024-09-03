import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <Header/>
      <Footer/>
      <Hero title="React" des="We love React" />
    </div>
  );
};

export default App;