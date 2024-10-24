import React from "react";
import './ContactMe.css';

const ContactMe = () => {
    const contactInfo = {
        email: "alejandroeduard2019@gmail.com", 
        phone: "+57 3012346787" 
    };

    return (
        <section className="contact-container">
            <h3>Contact Me</h3>
            <div className="contact-content">
                <div className="contact-item">
                    <div className="contact-card">
                        <h4>Email</h4>
                        <a href={`mailto:${contactInfo.email}`}>
                            {contactInfo.email}
                        </a>
                    </div>
                </div>
                
                <div className="contact-item">
                    <div className="contact-card">
                        <h2>Teléfono</h2>
                        <a href={`tel:${contactInfo.phone}`}>
                            {contactInfo.phone}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;