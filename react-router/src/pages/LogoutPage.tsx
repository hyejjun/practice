import { Navigate } from 'react-router-dom';

export default function LogoutPage() {
  // 뭔가 로그아웃 처리를 하고
  return (
    <Navigate to="/" />
  );
}
