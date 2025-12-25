import React from "react";
import Link from "next/link";
import { FaUserPlus, FaBriefcase, FaSearch, FaComments, FaFileContract, FaCheckCircle, FaBolt, FaUser, FaClipboardList } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-green-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold">BaseGigs</div>
        <nav className="space-x-6">
          <Link href="/browse-gigs" className="hover:text-green-400">Browse Gigs</Link>
          <Link href="/find-talent" className="hover:text-green-400">Find Talent</Link>
          <Link href="/how-it-works" className="hover:text-green-400 font-semibold">How It Works</Link>
          <Link href="/pricing" className="hover:text-green-400">Pricing</Link>
        </nav>
        <div className="space-x-4">
          <Link href="/login" className="hover:text-green-400">Log In</Link>
          <Link href="/signup" className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200">Get Started</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center px-8 py-20">
        <p className="mb-2 text-sm text-gray-400">Simple. Secure. Seamless.</p>
        <h1 className="text-5xl font-bold mb-4">How BaseGigs Works</h1>
        <p className="text-gray-300 mb-8">Whether you're hiring talent or looking for your next gig, BaseGigs makes the process effortless from start to finish.</p>
        <div className="space-x-4">
          <Link href="/signup" className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200">Get Started</Link>
          <Link href="/browse-gigs" className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black">Browse Gigs</Link>
        </div>
      </section>

      {/* For Clients Section */}
      <section className="px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-400 uppercase tracking-wide">For Clients</span>
          <h2 className="text-3xl font-bold mt-2">Find Talent in 6 Simple Steps</h2>
          <p className="text-gray-300 mt-2">Post your gig, connect with skilled professionals, and get work done—all with the security of AI-generated contracts.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Step icon={<FaUserPlus />} number="01" title="Create Your Account" description="Sign up as a Client in seconds. No lengthy forms—just your name, location, and you're ready to start posting gigs." />
          <Step icon={<FaBriefcase />} number="02" title="Post Your Gig" description="Describe what you need, set your budget, and let our AI help generate the perfect gig listing with suggested skills and rates." />
          <Step icon={<FaSearch />} number="03" title="Browse & Select Talent" description="Review applications from qualified Gig Seekers. Filter by skills, experience, location, and availability to find your perfect match." />
          <Step icon={<FaComments />} number="04" title="Chat & Negotiate" description="Once you accept an applicant, a private chat opens. Discuss details, agree on terms, and finalize everything in one place." />
          <Step icon={<FaFileContract />} number="05" title="Generate Contract" description="Our AI reads your conversation and generates a professional contract. Review, adjust if needed, and both parties sign digitally." />
          <Step icon={<FaCheckCircle />} number="06" title="Get It Done" description="Your Gig Seeker completes the work. Contracts are saved to your dashboard, and everyone walks away satisfied." />
        </div>
      </section>

      {/* For Gig Seekers Section */}
      <section className="px-8 py-16 bg-gray-900">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-400 uppercase tracking-wide">For Gig Seekers</span>
          <h2 className="text-3xl font-bold mt-2">Land Gigs in 6 Simple Steps</h2>
          <p className="text-gray-300 mt-2">Build your profile, apply to opportunities, and secure paid work with professional contracts.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Step icon={<FaUser />} number="01" title="Build Your Profile" description="Showcase your skills, experience, portfolio, and availability. The more complete your profile, the more clients you'll attract." />
          <Step icon={<FaSearch />} number="02" title="Browse Open Gigs" description="Explore gigs across 15+ categories. Filter by type, location, and budget to find opportunities that match your expertise." />
          <Step icon={<FaBolt />} number="03" title="Apply Instantly" description="One click to apply—your profile does the talking. No cover letters, no lengthy forms. Just fast, efficient applications." />
          <Step icon={<FaComments />} number="04" title="Chat with Clients" description="When accepted, chat directly with the client. Clarify requirements, negotiate terms, and build professional relationships." />
          <Step icon={<FaFileContract />} number="05" title="Sign Your Contract" description="AI-generated contracts protect both parties. Review the terms, sign digitally, and receive your copy via email." />
          <Step icon={<FaCheckCircle />} number="06" title="Complete & Get Paid" description="Deliver great work, build your reputation, and grow your gig portfolio. Every completed gig opens doors to more opportunities." />
        </div>
      </section>

      {/* Why Choose BaseGigs Section */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose BaseGigs?</h2>
        <p className="text-gray-300 mb-12">Built with security, speed, and simplicity at its core.</p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-800 rounded-md">
            <h3 className="font-semibold text-xl mb-2">Secure Contracts</h3>
            <p className="text-gray-300">AI-powered contract generation with digital signatures protects both clients and gig seekers.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-md">
            <h3 className="font-semibold text-xl mb-2">Instant Matching</h3>
            <p className="text-gray-300">Smart filters and one-click applications make finding the right match faster than ever.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-md">
            <h3 className="font-semibold text-xl mb-2">Verified Profiles</h3>
            <p className="text-gray-300">Detailed profiles with portfolios, skills, and experience help you make informed decisions.</p>
          </div>
        </div>
        <div className="space-x-4">
          <Link href="/signup" className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200">Create Account</Link>
          <Link href="/learn-more" className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black">Learn More</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 px-8 py-8 text-center">
        <p>© 2025 BaseGigs. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Step({ icon, number, title, description }) {
  return (
    <div className="p-6 bg-gray-800 rounded-md flex flex-col items-start space-y-4">
      <div className="text-green-400 text-3xl">{icon}</div>
      <div className="font-bold text-2xl text-gray-400">{number}</div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
