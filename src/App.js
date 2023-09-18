import React from 'react';

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>Parents</li>
          <li>Sitters</li>
          <li>Trust & Safety</li>
          <li>Blog</li>
        </ul>
        <div>
          <div>Log in</div>
          <div>Sign up</div>
        </div>
      </nav>
      <header>
        <div>Hero section</div>
        <div>card</div>
      </header>
      <main>
        <section>how it works</section>
        <section>
          testimonials
          <div>
            slider
            <div>9 slider cards</div>
          </div>
        </section>
        <section>
          Featured in
          <div>card</div>
        </section>
        <section>
          <div>why otter</div>
          <div>
            two cards
            <div>card 1</div>
            <div>card 2</div>
          </div>
          <div>card</div>
        </section>
        <section>
          <div>
            <h3>Common questions</h3> <a>view all FAQs</a>
            <ul>
              {' '}
              expanding cards
              <li>What is Otter?</li>
              <li>How is Otter different from other childcare options?</li>
              <li>Does Otter offer last-minute backup care?</li>
              <li>How are Otter's sitters vetted?</li>
              <li>Where is Otter available?</li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <div>footer card dark</div>
        <div>footer card light</div>
      </footer>
    </>
  );
}
