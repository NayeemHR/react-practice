import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero'

const App = () => {
  const itemObj = {
    name:'nayeem',
    age: 23,
    city: 'dhaka'
  }
  return (
    <div>
      <Header item={itemObj} />
      <Footer/>
      <Hero title="React" des="We love React" />
    </div>
  );
};

export default App;