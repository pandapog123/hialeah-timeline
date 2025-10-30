import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <ul>
          <li className="no-opacity">
            <h2>Resources</h2>
          </li>
          <li className="no-opacity">
            <hr />
          </li>

          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Events</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">References</Link>
          </li>
        </ul>
        <ul>
          <li className="no-opacity">
            <h2>Information</h2>
          </li>
          <li className="no-opacity">
            <hr />
          </li>

          <li>
            Hialeah Gardens, FL | 10001 NW 87 Avenue, Hialeah Gardens, FL 33016
          </li>
          <li>
            <Link href="tel: (305) 558-4114">(305) 558-4114</Link>
          </li>
        </ul>
      </div>

      <hr />

      <div className="site-information">
        <p>© 2025, Gardens Connect • Established 2025</p>
      </div>
    </footer>
  );
}
