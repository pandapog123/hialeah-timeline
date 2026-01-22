<section class="references">
  <h1>Reference Page</h1>

  <hr />

  <div class="reference">
    <h2>Images</h2>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>

  <div class="reference">
    <h2>Hosting</h2>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>

  <div class="reference">
    <h2>Sources</h2>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>

  <div class="reference">
    <h2>Documents</h2>

    <div class="document-links">
      <a href="/references">Copyright Checklist</a>
      <a href="/references">Work Log</a>
    </div>
  </div>
</section>

<style>
  * {
    margin: 0;
  }

  .references {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
  }

  hr {
    width: 100%;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    height: 1px;
  }

  .reference {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .document-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .document-links a {
    text-decoration: none;
    color: var(--neutral);
    padding: 0.4rem 0.8rem;
    background-color: rgb(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    font-weight: 500;
    transition: background-color 200ms ease-in-out;
  }

  .document-links a:hover,
  .document-links a:focus {
    background-color: rgb(0, 0, 0, 0.1);
  }
</style>
