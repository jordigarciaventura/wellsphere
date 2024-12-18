import Image from 'next/image';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'] });

const LandingPage: React.FC = () => {
  return (
    <div className={quicksand.className} style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>WellSphere</h1>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>About</a>
          <a href="#" style={styles.navLink}>Pricing</a>
          <a href="#" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <main>
        <section style={styles.hero}>
          <h2 style={styles.heroTitle}>Welcome to WellSphere</h2>
          <p style={styles.heroText}>Your journey to wellness begins here</p>
        </section>

        <section style={styles.description}>
          <h3 style={styles.sectionTitle}>About WellSphere</h3>
          <p style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
          </p>
        </section>

        <section style={styles.images}>
          <div style={styles.imageContainer}>
            <Image src="/placeholder.svg" alt="Wellness 1" width={300} height={200} style={styles.image} />
            <Image src="/placeholder.svg" alt="Wellness 2" width={300} height={200} style={styles.image} />
            <Image src="/placeholder.svg" alt="Wellness 3" width={300} height={200} style={styles.image} />
          </div>
        </section>

        <section style={styles.pricing}>
          <h3 style={styles.sectionTitle}>Pricing Plans</h3>
          <div style={styles.pricingContainer}>
            <div style={styles.pricingCard}>
              <h4 style={styles.pricingTitle}>Basic</h4>
              <p style={styles.price}>$9.99/month</p>
              <ul style={styles.featureList}>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <button style={styles.button}>Choose Plan</button>
            </div>
            <div style={styles.pricingCard}>
              <h4 style={styles.pricingTitle}>Pro</h4>
              <p style={styles.price}>$19.99/month</p>
              <ul style={styles.featureList}>
                <li>All Basic Features</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
              <button style={styles.button}>Choose Plan</button>
            </div>
            <div style={styles.pricingCard}>
              <h4 style={styles.pricingTitle}>Premium</h4>
              <p style={styles.price}>$29.99/month</p>
              <ul style={styles.featureList}>
                <li>All Pro Features</li>
                <li>Feature 6</li>
                <li>Feature 7</li>
              </ul>
              <button style={styles.button}>Choose Plan</button>
            </div>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2023 WellSphere. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    color: '#333',
    lineHeight: 1.6,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#9C2CF3',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
  },
  hero: {
    backgroundColor: '#9C2CF3',
    color: '#fff',
    textAlign: 'center' as const,
    padding: '4rem 2rem',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: '700',
  },
  heroText: {
    fontSize: '1.5rem',
    fontWeight: '300',
  },
  description: {
    padding: '4rem 2rem',
    backgroundColor: '#f8f8f8',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#9C2CF3',
    fontWeight: '600',
  },
  text: {
    maxWidth: '800px',
    margin: '0 auto',
    fontWeight: '400',
  },
  images: {
    padding: '4rem 2rem',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap' as const,
  },
  image: {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  pricing: {
    padding: '4rem 2rem',
    backgroundColor: '#f8f8f8',
  },
  pricingContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap' as const,
  },
  pricingCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center' as const,
    width: '300px',
  },
  pricingTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#9C2CF3',
    fontWeight: '600',
  },
  price: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  featureList: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '1rem',
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#9C2CF3',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: '500',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center' as const,
    padding: '1rem',
    fontWeight: '300',
  },
};

export default LandingPage;

