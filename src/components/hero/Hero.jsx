
import "./hero.css";
import Lottie from "lottie-react";
import dev from "../../animation/dev.json";

export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="/img/imgPortfolio_y.jpg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
        Full Stack Developer
        </h1>
        <p className="sub-title">
          Hi, I’m Hatim, a Full Stack Developer from Tangier, Morocco. 
          I got my Full Stack Developer Diploma after 2 years of studying at WebForce3 School, 
          and I’m certified in JavaScript and Responsive Web Design from FreeCodeCamp. 
          I build web and mobile solutions with a focus on UI/UX, using HTML, CSS, JavaScript, React.js, PHP, Laravel, Flutter, Firebase, Figma for design, 
          APIs for integration, and Git for version control.
        </p>

        <div className="all-icons flex">
          <a href="" target="_blank" className="icon icon-instagram"></a>
          <a href="https://github.com/Hatim-kassas" target="_blank" className="icon icon-github"></a>
          <a href="https://www.linkedin.com/in/hatim-kassas-2a9837203/" target="_blank" className="icon icon-linkedin"></a>
        </div>
      </div>

      <div style={{ width: 400 , marginLeft: "auto" }} className="right-section animation border">
        <Lottie animationData={dev} />
      </div>
    </section>
  )
}
