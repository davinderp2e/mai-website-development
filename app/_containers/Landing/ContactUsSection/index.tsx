import React from 'react';
import './contact-us.scss';
import VerticalTabs from './verticalTabs';

const ContactUsSection = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="heading">The internet never sleeps</div>
        <div className="sections">
          <div className="left-section">
            <VerticalTabs />
          </div>
          <div className="right-section">
            <div className="form-wrapper">
              <div className="form-heading">Contact Us</div>
              <div className="form">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="email" placeholder="Email" />
                <textarea name="message" placeholder="Message" rows={3} cols={5} />
                <div className="checkbox-wrapper">
                  <input type="checkbox" name="checkbox" />
                  <label>I&apos;m not a robot</label>
                </div>
                <div className="send-message">Send Message</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ContactUsSection;
