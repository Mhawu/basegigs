export default function HowItWorks() {
  return (
    <div className="bg-carbon min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Simple. Secure. Seamless.
        </h1>
        <p className="text-gray-400 text-center mt-4">
          How BaseGigs Works
        </p>

        <div className="grid md:grid-cols-2 gap-16 mt-20">
          <Steps title="For Clients" />
          <Steps title="For Gig Seekers" />
        </div>

        <div className="text-center mt-24">
          <a
            href="/signup"
            className="bg-deepgreen px-10 py-4 rounded-lg font-semibold"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}

function Steps({ title }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <ol className="space-y-4 text-gray-300">
        {[1,2,3,4,5,6].map((step) => (
          <li key={step} className="flex gap-4">
            <span className="text-deepgreen font-bold">{step}</span>
            <span>Step description goes here.</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
