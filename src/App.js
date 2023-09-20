import React from 'react';
import styles from './App.module.scss';

export default function App() {
  return (
    <main className={styles.pageWrapper}>
      <nav>
        <div className={styles.navigation}>
          <ul>
            <li>
              <a href="/#">Parents</a>
            </li>
            <li>
              <a href="/#">Sitters</a>
            </li>
            <li>
              <a href="/#">Trust & Safety</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
          </ul>
          <div>Logo</div>
          <div className={styles.navButtons}>
            <a href="/#">Log in</a>
            <div className={`${styles.button} ${styles.buttonLight}`}>
              <a href="/#">Sign up</a>
            </div>
          </div>
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
    </main>
  );
}
