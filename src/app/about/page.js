import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p>We provide high-quality DJ and sound equipment for rent.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
