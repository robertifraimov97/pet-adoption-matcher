import "./Tips.css";

function Tips() {
  return (
    <div className="tips-container">
      <h1>🐾 Pet Care Tips</h1>
      <p>
        Caring for a pet is a rewarding experience, but it comes with responsibilities.
        Here are some helpful tips to ensure your furry friend is happy, healthy, and well-adjusted.
      </p>

      <section>
        <h2>🦴 General Tips</h2>
        <ul>
          <li>🕒 Keep a consistent routine for feeding and walking.</li>
          <li>🩺 Schedule annual vet visits for checkups.</li>
          <li>💦 Always provide clean, fresh water.</li>
        </ul>
      </section>

      <section>
        <h2>🐶 For Dogs</h2>
        <ul>
          <li>🐾 Walk your dog daily based on their energy level.</li>
          <li>🧼 Brush weekly and bathe every 1–2 months.</li>
          <li>🧠 Use puzzle toys for mental stimulation.</li>
        </ul>
      </section>

      <section>
        <h2>🐱 For Cats</h2>
        <ul>
          <li>🧹 Clean the litter box every day.</li>
          <li>🐾 Provide climbing spaces like cat trees.</li>
          <li>🎾 Play daily with engaging toys.</li>
        </ul>
      </section>

      <section>
        <h2>🌿 Home Environment</h2>
        <ul>
          <li>🚫 Pet-proof your home from toxic items.</li>
          <li>🛏️ Give them a cozy spot to rest.</li>
          <li>📦 Introduce new pets or people slowly.</li>
        </ul>
      </section>

      <section>
        <h2>❤️ Emotional Care</h2>
        <ul>
          <li>🐕‍🦺 Use positive reinforcement.</li>
          <li>👂 Learn to read their body language.</li>
          <li>🫂 Give daily affection and attention.</li>
        </ul>
      </section>
    </div>
  );
}

export default Tips;