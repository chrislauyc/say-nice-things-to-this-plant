import Header from './views/Header';
import Footer from './views/Footer';
import Plant from './views/Plant';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Plant />
      </main>
      <Footer />
    </div>
  );
}

export default App;
