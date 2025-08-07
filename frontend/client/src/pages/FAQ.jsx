import React from "react";
import "./FAQ.css";

function FAQ() {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
          <h3>6 . How is this different from other adoption services?</h3>
           <p>
            Our platform goes beyond traditional pet listings by implementing a personalized matching system. We carefully consider each individual’s lifestyle,
            preferences, and level of experience to recommend the most suitable pets. This proactive approach helps prevent situations where animals are returned due to incompatibility,
            ensuring a more responsible and lasting adoption experience — for both the adopter and the animal.
          </p>
      </div>
      <div className="faq-item">
        <h3>2. How does the pet matching process work?</h3>
        <p>
          We use a short questionnaire to understand your lifestyle and preferences, then suggest pets that best match your profile.
        </p>
      </div>
      <div className="faq-item">
        <h3>3. Can I adopt a pet directly through the site?</h3>
        <p>
          Not directly. The site connects you with shelters or organizations offering the pets that match your results.
        </p>
      </div>
      <div className="faq-item">
        <h3>4. What if I don't find a suitable pet?</h3>
        <p>
          You can retake the questionnaire or contact us — we're happy to assist you further.
        </p>
      </div>
      <div className="faq-item">
        <h3>5. Is the service free?</h3>
        <p>
          Yes, using the site is completely free. Any adoption fees depend on the individual organizations or shelters.
        </p>
      </div>
      <div className="faq-item">
        <h3>6. Am I obligated to adopt after getting a match?</h3>
        <p>
          Absolutely not. The purpose is to help you find potential matches — the final decision is entirely up to you.
        </p>
      </div>
      
        <div className="faq-item">
          <h3>7. How can I contact the team?</h3>
          <p>
            You can reach out through the contact form at the bottom of the site or email us at: <strong>contact@petmatcher.com</strong>
          </p>
      </div>
    </div>
  );
}

export default FAQ;