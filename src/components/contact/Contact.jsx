// Contact.jsx
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import successfulAnimation from "../../animation/successful.json";
import emailAnimation from "../../animation/email.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzzebpyw");

  return (
    <section className="contact-section" id="Contact">
      <div className="contact-header">
        <h1 className="contact-title">
          <span className="contact-icon-envelope"></span>
          Get in Touch
        </h1>
        <p className="contact-subtitle">
          Reach out for inquiries or subscribe to stay updated with my latest content
        </p>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="email" className="contact-form-label">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message" className="contact-form-label">
              Your Message
            </label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Type your message here..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            className="contact-submit-btn"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? (
              <span className="loading">Sending...</span>
            ) : (
              "Send Message"
            )}
          </button>

          {state.succeeded && (
            <div className="contact-success-message">
              <Lottie
                loop={false}
                style={{ height: 60 }}
                animationData={successfulAnimation}
              />
              <p>Message sent successfully! We&apos;ll get back to you soon.</p>
            </div>
          )}
        </form>

        <div className="contact-animation-container">
          <Lottie animationData={emailAnimation} />
        </div>
      </div>
    </section>
  );
}