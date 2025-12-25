'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-5xl font-bold mb-6">Welcome to BaseGigs</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Find gigs, hire talent, and manage your projects seamlessly.
      </p>
      <div className="flex gap-4">
        <Link
          href="/auth/signup"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </Link>
        <Link
          href="/auth/login"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
