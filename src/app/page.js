import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';

const Home = () => {
  const products = [
    { name: 'Amplifier', description: 'High quality sound amplifier', price: 50 },
    { name: 'DJ', description: 'Professional DJ services', price: 100 },
    // Add more products as needed
  ];

  return (
    <div>
      <Header />
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Available Equipment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
