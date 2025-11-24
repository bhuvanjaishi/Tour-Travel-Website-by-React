import React from "react";
import "../App.css";

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Emily Johnson",
    position: "Tour Manager",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Travel Consultant",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "Sophia Lee",
    position: "Marketing Head",
    image: "https://macmillan.yale.edu/sites/default/files/styles/portrait_360/public/2024-09/Sophia%20Lee%20Headshot_1.jpg?h=c66bb102&itok=oCsbvgUR"
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Operations Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVrHGsqgvMRBX-bKM9_nGzcsyLfpsE8mYYQ&s"
  }
];

const About = () => {
  return (
    <div className="about-container">
      
      {/* Intro Section */}
      <section className="about-intro">
        <h1>About Tour & Travel</h1>
        <p>
          Tour & Travel is a professional tour and travel company dedicated to providing unforgettable travel experiences. 
          Our team of passionate travel experts ensures that every journey is smooth, safe, and filled with memorable moments. 
          We specialize in customized travel packages, luxury vacations, adventure tours, and cultural experiences.
        </p>
        <p>
          Founded in 2010, Tour & Travel has grown to become one of the most trusted travel agencies, serving thousands of travelers worldwide. 
          With a strong commitment to excellence and customer satisfaction, we aim to make travel planning easy, enjoyable, and unforgettable.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create extraordinary travel experiences that connect people with the beauty and culture of the world. 
            We aim to provide exceptional services, ensuring every journey is personalized and stress-free.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be the leading travel company recognized for innovation, reliability, and unparalleled customer satisfaction. 
            We aspire to inspire a love for travel and exploration across all generations.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="about-services">
        <h2>Our Services</h2>
        <ul>
          <li>Customized Travel Packages tailored to individual needs</li>
          <li>Luxury and Budget Vacation Planning</li>
          <li>Adventure Tours including trekking, rafting, and safaris</li>
          <li>Honeymoon and Romantic Getaways</li>
          <li>Group Tours and Corporate Travel Management</li>
          <li>Flight and Hotel Bookings with Best Deals</li>
          <li>Visa Assistance and Travel Insurance</li>
        </ul>
      </section>

      {/* Achievements Section */}
      <section className="about-achievements">
        <h2>Our Achievements</h2>
        <p>
          Over the past decade, Tour & Travel has achieved remarkable milestones, including:
        </p>
        <ul>
          <li>Served over 50,000 happy travelers worldwide.</li>
          <li>Partnered with 500+ hotels and resorts globally.</li>
          <li>Recognized as the “Best Travel Agency” in multiple awards.</li>
          <li>Successfully organized international tours for corporate clients.</li>
          <li>Maintained a 98% customer satisfaction rate.</li>
        </ul>
      </section>

      {/* Meet Our Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <p>
          Our team is composed of experienced travel consultants, tour managers, and customer support specialists. 
          We believe in delivering excellence and personalized care for every traveler.
        </p>
        <div className="team-members">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Call to Action */}
      <section className="about-contact">
        <h2>Get in Touch</h2>
        <p>
          Whether you're planning a solo adventure, a family vacation, or a corporate trip, TravelMate is here to assist you. 
          Reach out today and start your journey with us!
        </p>
      </section>

    </div>
  );
};

export default About;
