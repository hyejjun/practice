import { useSignupStore } from '@store/SignupStore';

export default function UserInfo() {
  const userInfo = useSignupStore((state) => state.userInfo);

  return (
    <div>
      {
        userInfo.id
          ? (
            <div>
              <ul>
                <li>
                  아이디 :
                  {' '}
                  {userInfo?.id}
                </li>
                <li>
                  성별 :
                  {' '}
                  {userInfo?.gender}
                </li>
                <li>
                  이름 :
                  {' '}
                  {userInfo?.name}
                </li>
                <li>
                  주소 :
                  {' '}
                  {userInfo?.addressDetail?.address}
                </li>
              </ul>
            </div>
          ) : null
      }
    </div>
  );
}
