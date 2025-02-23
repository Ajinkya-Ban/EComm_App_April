import React from "react";
import Layout from "../components/Layout/Layout.jsx";

const About = () => {
  return (
    <Layout
      title="About us-Ecommerce App"
      description="This is about us page"
      keywords="ecommerce, ecommerce store, ecommerce marketing"
    >
      <div className="container py-3">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-md-6 text-center">
            <img
              src="/images/about1.jpg"
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>

          {/* Right Side: Content */}
          <div className="col-md-6">
            <h2 className="mb-4">About Us</h2>
            <p className="text-muted">
              Welcome to our company! We are dedicated to providing the best
              services to our clients. With years of experience in the industry,
              we prioritize quality, innovation, and customer satisfaction.
            </p>
            <p className="text-muted">
              Our team of experts works tirelessly to bring your ideas to life
              and ensure that your needs are met with the highest standards.
              Thank you for choosing us!
            </p>

            <ul className="text-muted">
            <li>Committed to excellence</li>
            <li>Innovative solutions</li>
            <li>Customer-centric approach</li>
            <li>Experienced professionals</li>
          </ul>
            <button className="btn btn-primary mt-3">Learn More</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
