import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    full_name: '',
    age: '',
    gender: '',
    city: '',
    province: '',
    id_number: '',
    phone: '',
    email: '',
    has_car: false,
    role: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { full_name, age, gender, city, province, id_number, phone, email, has_car, role } = formData;

    // Validate required fields
    if (!full_name || !age || !gender || !city || !province || !id_number || !phone || !email || !role) {
      setError('Please fill all required fields.');
      setLoading(false);
      return;
    }

    try {
      // Check unique constraints
      const { data: existingUsers } = await supabase
        .from('Users')
        .select('id')
        .or(`id_number.eq.${id_number},phone.eq.${phone},email.eq.${email}`);

      if (existingUsers.length > 0) {
        setError('ID number, phone, or email already exists.');
        setLoading(false);
        return;
      }

      // Insert user
      const { data, error: insertError } = await supabase.from('Users').insert([
        {
          full_name,
          age: parseInt(age),
          gender,
          city,
          province,
          id_number,
          phone,
          email,
          has_car,
          role
        }
      ]);

      if (insertError) {
        setError(insertError.message);
        setLoading(false);
        return;
      }

      // Redirect to onboarding or dashboard
      router.push('/onboarding');
    } catch (err) {
      setError('Signup failed. Please try again.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sign Up</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
        <input name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} />
        <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} />
        <input name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} />
        <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
        <input name="province" placeholder="Province" value={formData.province} onChange={handleChange} />
        <input name="id_number" placeholder="ID Number" value={formData.id_number} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <label>
          <input name="has_car" type="checkbox" checked={formData.has_car} onChange={handleChange} /> Do you have a car?
        </label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="Client">Client</option>
          <option value="Gig Seeker">Gig Seeker</option>
          <option value="Both">Both</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
