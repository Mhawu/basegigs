import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data: user, error } = await supabase
        .from('Users')
        .select('*')
        .eq('email', email)
        .single();

      if (error || !user) {
        setError('User not found.');
        setLoading(false);
        return;
      }

      // Redirect to onboarding or dashboard
      router.push('/onboarding');
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin} style={{ display: 'grid', gap: '1rem' }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
