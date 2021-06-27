import Footer from './views/Footer';
import './App.css';
import ProductHero from './views/ProductHero';
import AppAppBar from './views/AppAppBar';
import ProductCTA from './views/ProductCTA';
function App() {
  return (
    <div className="App">
      <header>
        <AppAppBar />
      </header>
      <main>
        <ProductHero />
        <ProductCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
