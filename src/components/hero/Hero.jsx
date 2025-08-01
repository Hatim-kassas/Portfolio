
import "./hero.css";
import Lottie from "lottie-react";
import dev from "../../animation/dev.json";

export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="/img/imgProfile.jpg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
        Full Stack Developer & Content Creator
        </h1>
        <p className="sub-title">
          Hi, I&apos;m Hatim, a Full Stack Developer and Creative Designer from Tangier, Morocco. 
          With over 7 years of experience since 2017, I specialize in modern interface design, 
          professional video editing, and web/mobile app development. I earned my Full Stack 
          Developer Diploma from WebForce3 School and I&apos;m certified in JavaScript and Responsive 
          Web Design from FreeCodeCamp. I transform creative ideas into innovative digital solutions 
          using HTML, CSS, JavaScript, React.js, PHP, Laravel, Flutter, Firebase, Adobe Creative Suite 
          (After Effects, Premiere Pro, Photoshop, Illustrator), Figma for UI/UX design, APIs for 
          integration, and Git for version control. I&apos;m passionate about creating both functional 
          and aesthetically pleasing digital experiences.
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
