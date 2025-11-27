import "./Contact.css";

const Contact = () => {
  return (
    <div className="content contact-card fade-page">
      <h2 className="section-heading">Contact</h2>
      <p className="contact-text">If you would like to get in touch, you can reach out using the details below:</p>

      <div className="contact-info">
        <div className="contact-item">
          <strong>Email:</strong>
          <p className="contact-detail">rahatawais6@gmail.com</p>
        </div>

        <div className="contact-item">
          <strong>Phone:</strong>
          <p className="contact-detail">+92-300-1893558</p>
        </div>

        <div className="contact-item">
          <strong>Location:</strong>
          <p className="contact-detail">Lahore, Pakistan</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
