import React from "react";
import "../App.css";

const packages = [
  {
    id: 1,
    name: "Himalayan Adventure",
    duration: "7 Days / 6 Nights",
    price: "$1200",
    description: "Explore the majestic Himalayas with guided trekking, camping, and cultural experiences in the mountains.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Beach Paradise",
    duration: "5 Days / 4 Nights",
    price: "$900",
    description: "Relax on pristine beaches, enjoy water sports, and savor tropical cuisine in this sun-soaked getaway.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Cultural Escape",
    duration: "6 Days / 5 Nights",
    price: "$1100",
    description: "Immerse yourself in local culture, heritage sites, and traditional cuisine with guided city tours.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Romantic Getaway",
    duration: "4 Days / 3 Nights",
    price: "$1500",
    description: "Enjoy an intimate vacation with luxury accommodations, private dinners, and scenic excursions.",
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Adventure Thrills",
    duration: "8 Days / 7 Nights",
    price: "$1400",
    description: "Experience thrilling adventures like rafting, paragliding, mountain climbing, and jungle safaris.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Family Fun Trip",
    duration: "6 Days / 5 Nights",
    price: "$1000",
    description: "Perfect for families, enjoy theme parks, excursions, cultural tours, and kid-friendly activities.",
    image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2023/03/Indian-Holiday.jpg"
  }
];

const Packages = () => {
  return (
    <div className="packages-container">
      <section className="packages-intro">
        <h1>Our Travel Packages</h1>
        <p>
          Explore our wide range of travel packages designed for adventure, relaxation, cultural experiences, and family fun. 
          Each package is crafted to offer unforgettable memories and stress-free travel.
        </p>
      </section>

      <section className="packages-list">
        {packages.map(pkg => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.name} />
            <div className="package-info">
              <h3>{pkg.name}</h3>
              <p><strong>Duration:</strong> {pkg.duration}</p>
              <p><strong>Price:</strong> {pkg.price}</p>
              <p>{pkg.description}</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        ))}
      </section>

      <section className="packages-cta">
        <h2>Plan Your Dream Trip</h2>
        <p>
          Choose your favorite package or contact our travel experts to customize your own. 
          Start your journey with TravelMate today!
        </p>
      </section>
    </div>
  );
};

export default Packages;
