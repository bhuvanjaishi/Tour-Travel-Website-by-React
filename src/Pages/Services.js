import React from "react";
import "../App.css";

const services = [
  {
    id: 1,
    title: "Customized Travel Packages",
    description: "Tailor-made trips according to your preferences, interests, and budget. Enjoy personalized itineraries and experiences.",
    icon: "🗺️"
  },
  {
    id: 2,
    title: "Adventure Tours",
    description: "Experience thrilling adventures like trekking, rafting, paragliding, and safaris in exotic destinations.",
    icon: "⛺"
  },
  {
    id: 3,
    title: "Luxury Vacations",
    description: "Indulge in luxury travel with premium accommodations, first-class transport, and exclusive experiences.",
    icon: "🏨"
  },
  {
    id: 4,
    title: "Honeymoon & Romantic Getaways",
    description: "Plan the perfect honeymoon or romantic trip with beautiful destinations and private experiences.",
    icon: "💖"
  },
  {
    id: 5,
    title: "Group & Corporate Travel",
    description: "Organize group trips, corporate retreats, or team-building tours with ease and professionalism.",
    icon: "👥"
  },
  {
    id: 6,
    title: "Flight & Hotel Booking",
    description: "Get the best deals on flights, hotels, and travel packages worldwide, with secure and easy booking options.",
    icon: "✈️"
  },
  {
    id: 7,
    title: "Visa Assistance",
    description: "We provide complete visa support and guidance to make your international travel hassle-free.",
    icon: "🛂"
  },
  {
    id: 8,
    title: "Travel Insurance",
    description: "Protect your journey with comprehensive travel insurance covering emergencies, accidents, and delays.",
    icon: "🛡️"
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <section className="services-intro">
        <h1>Our Services</h1>
        <p>
          At Tour & Travel, we offer a wide range of travel services to make your trips seamless, enjoyable, and unforgettable.
          Whether you are looking for adventure, luxury, or a romantic getaway, our expert team is here to plan everything for you.
        </p>
        <p>
          Our mission is to provide personalized travel solutions, ensuring every journey exceeds your expectations. Explore our services below:
        </p>
      </section>

      <section className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className="services-cta">
        <h2>Plan Your Journey Today</h2>
        <p>
          Contact TravelMate to start planning your dream trip. Our experts will guide you at every step, from booking to exploring.
        </p>
        <button className="cta-button">Book Now</button>
      </section>
    </div>
  );
};

export default Services;
