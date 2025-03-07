import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title="contact-us" description="this is the contact us page" keywords="ecommerce jobs,ecommerce solutions">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-md-6 text-center">
            <img
              src="images/contactus.jpg"
              alt="Contact Us"
              className="img-fluid rounded"
            />
          </div>

          {/* Right Side: Contact Information */}
          <div className="col-md-6">
            <h2 className="mb-4">Contact Us</h2>
            <ul className="list-unstyled text-muted">
              <li className="mb-3">
                <strong>Email:</strong> contact@company.com
              </li>
              <li className="mb-3">
                <strong>Mobile:</strong> +1 234 567 890
              </li>
              <li className="mb-3">
                <strong>Address:</strong> 123 Business Street, City, Country
              </li>
              <li className="mb-3">
                <strong>Office Time:</strong> Mon - Fri, 9:00 AM - 6:00 PM
              </li>
              <li className="mb-3">
                <strong>Holidays:</strong> Saturday & Sunday
              </li>
            </ul>
            <button className="btn btn-primary mt-3">Get in Touch</button>
          </div>
        </div>

        <div className="rounded overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094175!2d144.95373631531684!3d-37.81627974202117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774c3d7f2b0a4d!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1614553953456!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
