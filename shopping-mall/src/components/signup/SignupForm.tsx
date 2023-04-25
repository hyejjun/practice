import { useEffect } from 'react';

import useAccessToken from '../../hooks/useAccessToken';

import useSignupFormStore from '../../hooks/useSingupFormStore';

import Button from '../ui/Button';
import TextBox from '../ui/TextBox';

export default function SignupForm() {
  const { setAccessToken } = useAccessToken();

  const [{
    email, name, password, passwordConfirmation, error, accessToken, valid,
  }, store] = useSignupFormStore();

  useEffect(() => {
    setAccessToken(accessToken);
  }, [accessToken]);

  const handleChangeEmail = (value: string) => {
    store.changeEmail(value);
  };

  const handleChangeName = (value: string) => {
    store.changeName(value);
  };

  const handleChangePassword = (value: string) => {
    store.changePassword(value);
  };

  const handleChangePasswordConfirmation = (value: string) => {
    store.changePasswordConfirmation(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    store.signup();
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <TextBox
          label="E-mail"
          placeholder="tester@example.com"
          value={email}
          onChange={handleChangeEmail}
        />
        <TextBox
          label="Name"
          value={name}
          onChange={handleChangeName}
        />
        <TextBox
          label="Password"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <TextBox
          label="Password"
          type="password"
          value={passwordConfirmation}
          onChange={handleChangePasswordConfirmation}
        />
        <Button type="submit" disabled={!valid}>
          회원가입
        </Button>
        {
          error
          && <p>회원 가입 실패</p>
        }
      </form>
    </div>
  );
}
