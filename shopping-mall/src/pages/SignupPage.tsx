import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import SignupForm from '../components/signup/SignupForm';

import useSignupFormStore from '../hooks/useSingupFormStore';

export default function SignupPage() {
  const navigate = useNavigate();

  const [{ accessToken }, store] = useSignupFormStore();

  useEffect(() => {
    if (accessToken) {
      store.reset();
      navigate('/signup/complete');
    }
  }, [accessToken]);

  return <SignupForm />;
}
