import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>BaseGigs</h1>
        <p>Connect with skilled professionals for short-term gigs.</p>
        <div style={{ marginTop: '1rem' }}>
          <Link href="/signup">
            <button style={{ padding: '0.5rem 1rem', marginRight: '1rem' }}>Get Started Free</button>
          </Link>
          <Link href="/how-it-works">
            <button style={{ padding: '0.5rem 1rem' }}>See How It Works</button>
          </Link>
        </div>
      </header>

      <section style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p>10K+ Active Gig Seekers | 5K+ Gigs Posted | R2M+ Paid to Seekers</p>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '5rem', fontSize: '0.9rem', color: '#555' }}>
        &copy; 2025 BaseGigs. All rights reserved.
      </footer>
    </div>
  );
}
