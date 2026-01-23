<script lang="ts">
  // Code
</script>

<section class="hero">
  <div class="overlay"></div>

  <div class="hero-content">
    <div class="hero-title">
      <h1>Connecting our Community</h1>

      <p>
        Gardens Connect is committed to our mission. We seek to get the people
        of Hialeah in touch with all their needs.
      </p>
    </div>

    <div class="hero-links">
      <a href="/resources" class="accent-link">Get Started</a>
      <a href="/contact">Contact Us</a>
    </div>
  </div>

  <img src="/gardens/City Hall.jpeg" alt="Hialeah Gardens City Hall" />
</section>

<section class="resources">
  <div class="content">
    <h1>Community Hub</h1>

    <p>
        &nbsp;&nbsp;&nbsp;&nbsp;We are a community hub that aims to connect the people of Hialeah and Hialeah Gardens with trusted resources,
       events, and opportunities to get involved. Our purpose is to provide information that is easily accessible 
       and easily found, especially with regards to information about resources that can provide assistance with regards to food, 
       events, opportunities to get involved, and opportunities to support your fellow community members.
    </p>
  </div>

  <img src="/gardens/Clock.png" alt="Hialeah Gardens Clock" />
</section>

<section class="affirmations">
  <h1>Help your Neighbor</h1>

  <ul class="affirmations-list">
    <li>
      <div class="affirmation-content">
        <h1>Fund your community!</h1>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Get involved in your community through the resources we've partnered with. 
          Contributions and support go back directly into the local community, 
          helping those in need through various community resources.
        </p>
      </div>

      <a href="/resources">Learn More</a>
    </li>
    <li>
      <div class="affirmation-content">
        <h1>Become a Volunteer!</h1>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Getting involved can be done by attending, as well as supporting, 
          various activities that take place in the community. 
          Volunteers are essential to ensuring that various activities, 
          like food drives, take place, thereby fostering a sense of connection to the community.
        </p>
      </div>

      <a href="/events">Get Started</a>
    </li>
    <li>
      <div class="affirmation-content">
        <h1>Make Your Voice Heard!</h1>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Have some feedback, concern, or local resource to share with us? 
          Your input will help us improve this platform to better serve the needs of our community.
        </p>
      </div>

      <a href="/contact">Contact Us</a>
    </li>
  </ul>
</section>

<section class="community-event">
  <img src="/community/Community Activity.jpg" alt="Community Activity" />

  <div class="overlay"></div>

  <div class="overlay-content">
    <img src="/branding/Logo-dark.png" alt="Gardens Connect Logo Dark Mode" />

    <div class="content">
      <h1>Join our next community event!</h1>

      <p>Volunteer and bring improvement to our "City of Progress".</p>
    </div>
  </div>
</section>

<style>
  * {
    margin: 0;
  }

  /* #region hero */
  .hero {
    position: relative;
    padding: 7rem 1rem;
  }

  .hero img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -20;
  }

  .hero .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -10;
  }

  .hero-content {
    color: var(--off-neutral);
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .hero-links {
    display: flex;
    gap: 1rem;
  }

  .hero-links a {
    padding: 0.5rem 1.5rem;
    background-color: var(--off-neutral);
    text-decoration: none;
    color: var(--neutral);
    border-radius: 100rem;
    flex: 1;
    text-align: center;
    font-weight: 500;
    position: relative;
  }

  .hero-links a::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.1);
    pointer-events: none;
    transition: opacity 150ms ease-in-out;
    opacity: 0;
  }

  .hero-links a:hover::after,
  .hero-links a:focus::after {
    opacity: 1;
  }

  .hero-links .accent-link {
    background-color: var(--accent);
    color: var(--off-neutral);
  }

  .hero-title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .hero-title * {
    text-align: center;
  }

  .hero-title h1 {
    font-size: 3rem;
    line-height: 3.25rem;
  }

  .hero-title p {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  @media (min-width: 550px) {
    .hero-title {
      align-items: center;
    }

    .hero-title h1 {
      font-size: 4rem;
      line-height: 4.25rem;
    }

    .hero-title p {
      font-size: 1.25rem;
      line-height: 1.75rem;
      max-width: 40rem;
    }

    .hero-links {
      justify-content: center;
    }

    .hero-links a {
      padding: 0.5rem 2rem;
      font-size: 1.2rem;
      flex: 0 auto;
    }
  }
  @media (min-width: 800px) {
    .hero {
      padding: 10rem 10rem;
      padding-bottom: 13rem;
    }
  }
  /* #endregion */

  /* #region resources */

  .resources {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1rem;
  }

  .resources .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .resources .content h1 {
    font-size: 2rem;
  }

  .resources img {
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
    height: 17rem;
    object-fit: cover;
  }

  @media (min-width: 750px) {
    .resources {
      display: grid;
      direction: rtl;
      grid-template-columns: 1fr 1fr;
      /* flex-direction: row-reverse;
      justify-content: center; */
      padding: 4rem;
      gap: 2rem;
    }

    .resources .content p {
      max-width: 30rem;
      min-width: 20rem;
    }

    .resources .content {
      direction: ltr;
    }

    .resources img {
      width: 100%;
      max-width: 28rem;
      height: 20rem;
    }
  }

  /* #endregion */

  /* #region affirmations */
  .affirmations {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .affirmations ul {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .affirmations li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    padding: 1rem;
    border: rgba(0, 0, 0, 0.1) solid 1px;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px;
  }

  .affirmation-content h1 {
    font-size: 1.75rem;
  }

  .affirmations .affirmation-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .affirmations a {
    text-decoration: none;
    background: var(--accent);
    border-radius: 1rem;
    color: var(--off-neutral);
    text-align: center;
    font-weight: 500;
    padding: 0.5rem;
  }

  @media (min-width: 600px) {
    .affirmations {
      align-items: center;
    }

    .affirmations > h1 {
      font-size: 2.5rem;
    }

    .affirmations ul {
      grid-template-columns: 1fr 1fr;
      padding: 0 2rem;
    }
  }

  @media (min-width: 1100px) {
    .affirmations {
      gap: 2rem;
    }

    .affirmations > h1 {
      font-size: 3rem;
    }

    .affirmations ul {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 0 5rem;
    }

    .affirmation-content h1 {
      font-size: 2rem;
    }

    .affirmation-content p {
      font-size: 1.25rem;
    }
  }
  /* #endregion */

  /* #region communnity event */
  .community-event {
    position: relative;
    color: var(--off-neutral);
    padding: 2rem;
    overflow: hidden;
  }

  .community-event > img {
    position: absolute;
    top: -20%;
    left: 0;
    width: 100%;
    height: 140%;
    object-fit: cover;
    z-index: -20;
  }

  .community-event .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -10;
  }

  .community-event .overlay-content {
    backdrop-filter: blur(4px) saturate(200%);
    -webkit-backdrop-filter: blur(4px) saturate(200%);
    background-color: rgba(255, 255, 255, 0.25);

    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .community-event .overlay-content .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .community-event h1 {
    font-size: 1.75rem;
  }

  .community-event .overlay-content img {
    width: 6rem;
    height: 6rem;
  }

  @media (min-width: 650px) {
    .community-event .overlay-content {
      flex-direction: row;
      align-items: center;
      width: fit-content;
      justify-self: center;
    }

    .community-event h1 {
      font-size: 2rem;
    }
  }
  /* #endregion */
</style>
