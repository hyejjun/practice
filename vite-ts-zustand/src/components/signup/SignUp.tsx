import { useEffect } from 'react';

import { useBoolean } from 'usehooks-ts';

import { styled } from 'styled-components';

import { useSignupStore } from '@store/SignupStore';

import Button from '../ui/Button';
import TextBox from '../ui/TextBox';
import ComboBox from '../ui/ComboBox';
import AddressSearch from './AddressSearch';
import UserInfo from './UserInfo';

const PostalCodeField = styled.div`
  > div {
    display: inline-block;
    margin-right: 1rem;
  }

  input {
    width: 10rem;
  }
`;

export default function SignUp() {
  const {
    value: searching,
    setTrue: openSearch,
    setFalse: closeSearch,
  } = useBoolean();

  const userInfo = useSignupStore((state) => state.userInfo);

  const id = useSignupStore((state) => state.id);
  const password = useSignupStore((state) => state.password);
  const name = useSignupStore((state) => state.name);
  const genderOptionItem = useSignupStore((state) => state.genderOptionItem);
  const genderOptions = useSignupStore((state) => state.genderOptions);
  const addressDetail = useSignupStore((state) => state.addressDetail);

  const changeInput = useSignupStore((state) => state.changeInput);

  const changeGender = useSignupStore((state) => state.changeGender);
  const changeAddress = useSignupStore((state) => state.changeAddress);

  const signUp = useSignupStore((state) => state.signUp);

  const handleChangeId = (value: string) => {
    changeInput('id', value);
  };

  const handleChangePw = (value: string) => {
    changeInput('password', value);
  };

  const handleChangeName = (value: string) => {
    changeInput('name', value);
  };

  const handleClickSearchPostalCode = () => {
    openSearch();
  };

  const handleChangeAdderss = (value: {
    address: string;
    postalCode: string;
  }) => {
    changeAddress(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signUp();
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextBox
          label="아이디"
          value={id}
          onChange={handleChangeId}
        />
        <TextBox
          type="password"
          label="비밀번호"
          value={password}
          onChange={handleChangePw}
        />
        <TextBox
          label="이름"
          value={name}
          onChange={handleChangeName}
        />
        <ComboBox
          label="성별"
          selectedItem={genderOptionItem}
          items={genderOptions}
          itemToId={(item) => item?.id}
          itemToText={(item) => item?.name}
          onChange={(value) => value && changeGender(value.id)}
        />

        <PostalCodeField>
          <div>{addressDetail.postalCode}</div>
          <div>{addressDetail.address}</div>
          <Button onClick={handleClickSearchPostalCode}>
            우편번호 검색
          </Button>
        </PostalCodeField>
        {searching && (
          <AddressSearch
            close={closeSearch}
            changeAddress={handleChangeAdderss}
          />
        )}
        <Button type="submit">
          가입
        </Button>
      </form>
      <UserInfo />
    </div>
  );
}
