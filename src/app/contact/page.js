import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p>Feel free to reach out to us for any inquiries.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
