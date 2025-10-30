import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
};

export default function Resources() {
  return (
    <>
      <section className="nav">
        <h1>Resources</h1>

        <a href="/resources/new">Submit a New Resource</a>

        <ul>
          <li></li>
          <li></li>
        </ul>
      </section>

      <section className="content"></section>
    </>
  );
}
