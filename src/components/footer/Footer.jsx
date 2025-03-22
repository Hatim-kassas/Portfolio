import "./footer.css";

export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#Profile">Profile</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="#Project">Projects</a>
        </li>
        <li>
          <a href="">Articles</a>
        </li>
        
      </ul>

      <p>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
}
