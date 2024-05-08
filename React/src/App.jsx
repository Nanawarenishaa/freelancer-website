
import Catagory from "./Components/Catagory";
import Footer from "./Components/Footer";
import HeroPage from "./Components/HeroPage";
import Index from "./Components/Index";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";
import Work from "./Components/Work";

const App = () => {

  const testimonials = [
    {
      Image: "https://randomuser.me/api/portraits/men/22.jpg",
      title: 'Great Service',
      message: 'I had a wonderful experience with this company. The service was excellent!',
      author: 'John Doe',
    },
    {
      Image: "https://randomuser.me/api/portraits/men/15.jpg",
      title: 'Highly Recommended',
      message: 'I would highly recommend this product to anyone looking for quality.',
      author: 'Jane Smith',
    },
  ]; 

  return (
    <div className=" ">
      <Navbar />
      <HeroPage />
      <Catagory />
      <Work />
      <Index />
      <Testimonial testimonials={testimonials} /> 
      <Footer />

      {/* Render page components based on current page state */}
    </div>
  );
};

export default App;
