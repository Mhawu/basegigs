export default function Home() {
  return (
    <div className="bg-carbon min-h-screen">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <span className="text-deepgreen uppercase tracking-widest text-sm">
          Now accepting new members
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight">
          The Professional <br />
          <span className="text-deepgreen">Gig Marketplace</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Connect with skilled professionals for short-term gigs.
          Post opportunities, find talent, and manage contracts —
          all in one platform.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/signup"
            className="bg-deepgreen px-8 py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Get Started Free
          </a>
          <a
            href="/how-it-works"
            className="border border-gray-600 px-8 py-3 rounded-lg hover:border-white"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="border-t border-gray-800 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-3 text-center">
          <Stat value="10K+" label="Active Gig Seekers" />
          <Stat value="5K+" label="Gigs Posted" />
          <Stat value="R2M+" label="Paid to Seekers" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <Feature title="Smart Matching" />
          <Feature title="AI-Powered Listings" />
          <Feature title="Built-in Chat" />
          <Feature title="Contract Generation" />
          <Feature title="Instant Applications" />
          <Feature title="Secure Payments" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deepgreen py-20 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-gray-100">
          Join thousands already using BaseGigs.
        </p>
        <a
          href="/signup"
          className="inline-block mt-8 bg-carbon px-10 py-4 rounded-lg font-semibold"
        >
          Create Free Account
        </a>
      </section>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-4xl font-bold text-deepgreen">{value}</p>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
}

function Feature({ title }) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 hover:border-deepgreen transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-400 mt-3">
        Designed to streamline the gig process from start to finish.
      </p>
    </div>
  );
}
