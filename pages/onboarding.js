import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient';

export default function Onboarding() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [role, setRole] = useState('');
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    short_background: '',
    services: [],
    education_level: '',
    experience: '',
    years_experience: '',
    availability: '',
    languages: [],
    travel_range: '',
    portfolio_url: '',
    expected_hourly_rate: '',
    photo_url: '',
    documents: []
  });

  const serviceOptions = [
    'Creative & Design Services',
    'Media & Production',
    'Live Events & Entertainment',
    'Food & Culinary Services',
    'Transportation & Logistics',
    'Home & Maintenance Services',
    'Digital & Technology Services',
    'Education & Instruction',
    'Health, Wellness & Personal Care',
    'Business & Administrative Support',
    'Construction & Building Trades',
    'Carpentry, Woodcutting & Timber Work',
    'Agriculture, Gardening & Land Care',
    'Home Improvements & Renovations',
    'Security & Access Control Services',
    'Domestic & Household Support',
    'Transport, Moving & Hauling',
    'Mechanical & Technical Repairs',
    'Informal Trade & Skilled Labor',
    'Rural & Community Services'
  ];

  const steps = [
    'role',
    'background',
    'services',
    'photo',
    'education',
    'experience',
    'documents',
    'finish'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleArrayValue = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value]
    }));
  };

  const saveProgress = async () => {
    setLoading(true);
    setError('');

    const { error } = await supabase
      .from('Users')
      .update({
        ...formData,
        updated_at: new Date()
      })
      .eq('id', userId);

    if (error) setError(error.message);
    setLoading(false);
  };

  const next = async () => {
    await saveProgress();
    setStep(step + 1);
  };

  const finish = async () => {
    await saveProgress();

    if (role === 'Client') router.push('/client-dashboard');
    if (role === 'Gig Seeker') router.push('/gigseeker-dashboard');
    if (role === 'Both') router.push('/both-dashboard');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '3rem auto', fontFamily: 'Arial' }}>
      <h2>Complete Your Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* ROLE */}
      {steps[step] === 'role' && (
        <>
          <p>How will you use BaseGigs?</p>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select</option>
            <option value="Client">Client</option>
            <option value="Gig Seeker">Gig Seeker</option>
            <option value="Both">Both</option>
          </select>
          <button disabled={!role} onClick={next}>Continue</button>
        </>
      )}

      {/* BACKGROUND */}
      {steps[step] === 'background' && (
        <>
          <p>Short background (max 120 words)</p>
          <textarea
            name="short_background"
            maxLength={120}
            value={formData.short_background}
            onChange={handleChange}
          />
          <button onClick={next}>Continue</button>
        </>
      )}

      {/* SERVICES (Gig Seeker or Both only) */}
      {(role !== 'Client' && steps[step] === 'services') && (
        <>
          <p>What services do you provide?</p>
          {serviceOptions.map((s) => (
            <label key={s} style={{ display: 'block' }}>
              <input
                type="checkbox"
                checked={formData.services.includes(s)}
                onChange={() => toggleArrayValue('services', s)}
              />
              {s}
            </label>
          ))}
          <button onClick={next}>Continue</button>
        </>
      )}

      {/* PHOTO */}
      {(role !== 'Client' && steps[step] === 'photo') && (
        <>
          <p>Passport-sized photo URL</p>
          <input
            name="photo_url"
            placeholder="Image URL"
            value={formData.photo_url}
            onChange={handleChange}
          />
          <button onClick={next}>Continue</button>
        </>
      )}

      {/* EDUCATION */}
      {(role !== 'Client' && steps[step] === 'education') && (
        <>
          <p>Highest level of education</p>
          <input
            name="education_level"
            value={formData.education_level}
            onChange={handleChange}
          />
          <button onClick={next}>Continue</button>
        </>
      )}

      {/* EXPERIENCE */}
      {(role !== 'Client' && steps[step] === 'experience') && (
        <>
          <p>Describe your experience</p>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
          <input
            type="number"
            name="years_experience"
            placeholder="Years of experience"
            value={formData.years_experience}
            onChange={handleChange}
          />
          <button onClick={next}>Continue</button>
        </>
      )}

      {/* DOCUMENTS */}
      {(role !== 'Client' && steps[step] === 'documents') && (
        <>
          <p>Upload document URLs (Matric, Degree, etc)</p>
          <input
            placeholder="Paste document URL and press Enter"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                setFormData({
                  ...formData,
                  documents: [...formData.documents, e.target.value]
                });
                e.target.value = '';
              }
            }}
          />
          <ul>
            {formData.documents.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
          <button onClick={finish}>Finish</button>
        </>
      )}

      {steps[step] === 'finish' && (
        <p>Thanks for completing your profile!</p>
      )}
    </div>
  );
}
