import React from "react";

const Faq = () => {
  return (
    <section>
      <div className="heading">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      <ul className="faq-list">
        <li className="faq-question">
          <span className="question"> What is Bookmark?</span>
          <p className="answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </li>
        <li className="faq-question">
          <span className="question">How can I request a new browser?</span>
          <p className="answer">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </li>
        <li className="faq-question">
          <span className="question"> Is there a mobile app?</span>
          <p className="answer">
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </li>
        <li className="faq-question">
          <span className="question">What about other Chromium browsers?</span>
          <p className="answer">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </li>
      </ul>

      <button> More Info</button>
    </section>
  );
};

export default Faq;
