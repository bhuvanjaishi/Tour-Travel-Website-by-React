import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const featuredPackages = [
  {
    id: 1,
    title: "Bali Adventure",
    location: "Bali, Indonesia",
    price: "$1200",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVJDpKgq6mukncKNye8L0ouMRrhJDTCdVWw&s"
  },
  {
    id: 2,
    title: "Santorini Getaway",
    location: "Santorini, Greece",
    price: "$1500",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Swiss Alps Skiing",
    location: "Swiss Alps",
    price: "$1800",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const services = [
  { id: 1, icon: "fas fa-plane", title: "Flight Booking", description: "Book domestic and international flights easily." },
  { id: 2, icon: "fas fa-hotel", title: "Hotel Booking", description: "Best deals on luxury and budget hotels." },
  { id: 3, icon: "fas fa-globe", title: "Tour Packages", description: "Tailored tours for every traveler." },
  { id: 4, icon: "fas fa-car", title: "Transportation", description: "Reliable transport for hassle-free travel." }
];

const destinations = [
  { id: 1, name: "Maldives", image: "https://www.eligasht.co.uk/Blog/wp-content/uploads/2022/12/Complete-Guide-for-the-Trip-to-the-Maldives.jpg" },
  { id: 2, name: "Paris, France", image: "https://mandstravelmoney.com/media/3qdbyp3p/adobestock_147497684.jpeg?width=1100&height=720&v=1db508c83fd7130" },
  { id: 3, name: "Tokyo, Japan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AoG4tFGOf2ntoxY1jdoDVml8i8MALlAbqQ&s" },
  { id: 4, name: "New Zealand", image: "https://www.travelsmantra.com/site/wp-content/uploads/2017/07/newzealand_main_01.jpg" }
];

const testimonials = [
  { id: 1, name: "Alice Johnson", text: "TravelMate made our honeymoon unforgettable. Highly recommended!", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 2, name: "Mark Wilson", text: "Amazing tour packages with excellent customer service.", image: "https://randomuser.me/api/portraits/men/75.jpg" },
  { id: 3, name: "Sara Lee", text: "Everything was seamless and well organized. Loved it!", image: "https://randomuser.me/api/portraits/women/65.jpg" }
];

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Explore The World With Tour & Travel </h1>
          <p>Your journey to unforgettable experiences starts here.</p>
          <Link to="/packages" className="btn btn-primary">View Packages</Link>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="featured-packages">
        <div className="container">
          <h2>Featured Packages</h2>
          <div className="package-grid">
            {featuredPackages.map(pkg => (
              <div key={pkg.id} className="package-card">
                <img src={pkg.image} alt={pkg.title} />
                <div className="package-info">
                  <h3>{pkg.title}</h3>
                  <p>{pkg.location}</p>
                  <span className="price">{pkg.price}</span>
                  <Link to="/packages" className="btn btn-secondary">Book Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <i className={service.icon}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="destinations">
        <div className="container">
          <h2>Popular Destinations</h2>
          <div className="destinations-grid">
            {destinations.map(dest => (
              <div key={dest.id} className="destination-card">
                <img src={dest.image} alt={dest.name} />
                <div className="destination-overlay">
                  <h3>{dest.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map(test => (
              <div key={test.id} className="testimonial-card">
                <img src={test.image} alt={test.name} />
                <p>"{test.text}"</p>
                <h4>{test.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready for Your Next Adventure?</h2>
          <p>Discover amazing destinations and book your dream trip today.</p>
          <Link to="/packages" className="btn btn-primary">Explore Packages</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
