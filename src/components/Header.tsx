import Link from "next/link";

export default function Header() {
  return (
    <div className="header-wrapper">
      <header>
        <Link href="/" className="header-title">
          Gardens Connect
        </Link>

        <ul>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/references">References</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
