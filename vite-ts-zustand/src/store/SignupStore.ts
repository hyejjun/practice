import { create } from 'zustand';

type GenderOptionItem = {
  id: string;
  name: string;
};

type AddressDetail = {
  address: string;
  postalCode: string;
}

export type UserInfo = {
  id : string;
  password : string;
  name : string;
  gender: string;
  addressDetail: AddressDetail;
}

interface SignupStore {
  userInfo: UserInfo;
  genderOptionItem: GenderOptionItem,
  genderOptions: GenderOptionItem[],
  changeInput: (name: string, value: string) => void;
  changeId: (id: string) => void;
  changePw: (pw: string) => void;
  changeName: (name: string) => void;
  changeGender: (gender: string) => void;
  changeAddress: (address: AddressDetail) => void;
  signUp: () => void;
}

const emptyUserInfo = {} as UserInfo;
const emptyGenderItem = {} as GenderOptionItem;
const emptyAddressDetail = {} as AddressDetail;

export const useSignupStore = create<UserInfo & SignupStore>((set) => ({
  userInfo: emptyUserInfo,

  id: '',
  password: '',
  name: '',
  gender: '0',
  addressDetail: emptyAddressDetail,

  genderOptions: [
    { id: '0', name: '남' },
    { id: '1', name: '여' },
  ],

  genderOptionItem: emptyGenderItem,

  // 필터링 없이 - 공통 사용 가능
  changeInput: (name, value) => set(() => ({
    [name]: value,
  })),

  /*
  vaildation 추가하는 경우 적으면 될듯?
    or validation 복잡한 경우에는 react-hook-form 사용
  */
  changeId: (id) => set(() => ({
    id,
  })),

  changePw: (pw) => set(() => ({
    password: pw,
  })),

  changeName: (name) => set(() => ({
    name,
  })),

  changeGender: (gender) => set(() => ({
    gender,
  })),

  changeAddress: (address: {
    address: string;
    postalCode: string;
  }) => set(() => ({
    addressDetail: address,
  })),

  signUp: () => set((state) => ({
    userInfo: {
      id: state.id,
      password: state.password,
      name: state.name,
      gender: state.gender,
      addressDetail: state.addressDetail,
    },
    // clear input
    id: '',
    password: '',
    name: '',
    gender: '',
    addressDetail: {
      address: '',
      postalCode: '',
    },
  })),
}));
