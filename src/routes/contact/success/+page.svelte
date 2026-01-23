<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<section class="success">
  <div class="card">
    <div class="icon" aria-hidden="true">✅</div>

    <h1>Message sent!</h1>

    <p class="message">
      Thanks for reaching out — we’ve received your message and will get back to
      you soon.
    </p>

    <div class="actions">
      <a class="btn" href="/">Go home</a>
      <a class="btn secondary" href="/contact">Send another message</a>
    </div>
  </div>
</section>

<style>
  .success {
    min-height: 70dvh; 
    display: grid;
    place-items: center;
    padding: 0.75rem;
  }

  .card {
    width: min(720px, 100%);
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.75rem;
    padding: 1.25rem 1.5rem; 
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.08);
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(6px);
    display: flex;
    flex-direction: column;
    gap: 0.6rem; 
    text-align: center;
  }

  .icon {
    font-size: 1.9rem;
    line-height: 1;
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 0.15rem;
  }

  .message {
    font-size: 1.05rem; 
    line-height: 1.55;
    opacity: 0.88;
    margin: 0.25rem 0 0.5rem;
  }

  .actions {
    display: flex;
    gap: 0.6rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    text-decoration: none;
    border-radius: 0.5rem;
    padding: 0.55rem 0.95rem;
    font-weight: 700;
    font-size: 0.95rem;
    background-color: var(--accent);
    color: var(--off-neutral);
    transition: opacity 200ms ease-in-out;
  }

  .btn:hover,
  .btn:focus {
    opacity: 0.85;
  }

  .secondary {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.85);
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
</style>
