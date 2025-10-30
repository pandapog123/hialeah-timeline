import Image from "next/image";
import "./home.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="home-section">
        <div className="home-section-content">
          <h2>Welcome!</h2>

          <p>
            Our mission with Gardens Connect was to provide a simple and easy to
            use platform with all the resources anyone living in Hialeah Gardens
            would need online. We serve as the gateway to all the useful tools
            our people need.
          </p>
        </div>

        <Image
          src="/gardens/City Hall.jpeg"
          alt="Hialeah Gardens City Hall"
          // fill={true}
          height={1000}
          width={1000}
        />
      </section>

      <section className="home-section home-section-reverse">
        <div className="home-section-content">
          <h2>Resources</h2>

          <p>
            Feel free to use the resources in our website. Look into{" "}
            <Link href="/events">our events</Link>,{" "}
            <Link href="/faq">our frequently asked questions</Link>, and{" "}
            <Link href="/references">our references</Link>.
          </p>
        </div>

        <Image
          src="/gardens/Clock.png"
          alt="Hialeah Gardens City Clock"
          // fill={true}
          height={10000}
          width={10000}
        />
      </section>
    </>
  );
}
