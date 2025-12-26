
const HomePage: React.FC = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Website</h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover amazing content and connect with a vibrant community.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
      
    </section>
  );
};

export default HomePage;
