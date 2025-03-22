import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import successfulAnimation from "../../animation/successful.json"
import emailAnimation from "../../animation/email.json"

export default function Contact() {
  const [state, handleSubmit] = useForm("xzzebpyw");

  return (
    <section className="contact-us" id="Contact">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <p className="flex" style={{ fontSize: "1.2rem", marginTop: "25px", alignItems: "center"}}>
              <Lottie loop={false} style={{height: 50}} animationData={successfulAnimation} />
              Your message has been sent successfuly 👌
            </p>
          )}
        </form>

        <div style={{width: 380, marginLeft: "auto" }} className="border animation">
          <Lottie animationData={emailAnimation} />
        </div>
      </div>
    </section>
  );
}
