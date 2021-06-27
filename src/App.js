import Header from './views/Header';
import Footer from './views/Footer';
import Plant from './views/Plant';
import './App.css';
import ProductHero from './views/ProductHero';
import AppAppBar from './views/AppAppBar';
import ProductCTA from './views/ProductCTA';
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <AppAppBar />
      <ProductHero />
      <ProductCTA />
      <main>
        {/* <Plant /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
