import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type AuthState = {
  isLogin: boolean;
};

const initialAuthState: AuthState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

type FilterState = {
  jobFolder: string;
  job: string[];
  companySize: string[];
  order: string;
};

const initialFilterState: FilterState = {
  jobFolder: '',
  job: [],
  companySize: [],
  order: '최신순',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setJobFolder: (state, action: PayloadAction<string>) => {
      state.jobFolder = action.payload;
    },
    setJob: (state, action: PayloadAction<string>) => {
      if (state.job.includes(action.payload)) {
        state.job = state.job.filter((el) => el !== action.payload);
      } else {
        state.job = [...state.job, action.payload];
      }
    },
    removeJob: (state) => {
      state.job = [];
      state.jobFolder = '';
    },
    setCompany: (state, action: PayloadAction<string>) => {
      if (state.companySize.includes(action.payload)) {
        state.companySize = state.companySize.filter((el) => el !== action.payload);
      } else {
        state.companySize = [...state.companySize, action.payload];
      }
    },
    removeCompany: (state) => {
      state.companySize = [];
    },
    setOrder: (state, action: PayloadAction<string>) => {
      state.order = action.payload;
    },
  },
});

type MentorRegistorState = {
  name: string;
  nickname: string;
  company: string;
  job: string;
  subjob: string;
  year: string;
  bank: string;
  bankNumber: string;
  bankOwner: string;
  title: string;
  introduce: string;
  possibles: string;
  concept: string;
  target: string;
  prepare: string;
  curriculum: string;
  rule: string;
  time: string;
  cost: number;
  schedules: object[];
};

const initialMentorRegistorState: MentorRegistorState = {
  name: '',
  nickname: '',
  company: '',
  job: '',
  subjob: '',
  year: '',
  bank: '',
  bankNumber: '',
  bankOwner: '',
  title: '',
  introduce: '',
  possibles: '',
  concept: '',
  target: '',
  prepare: '',
  curriculum: '',
  rule: '',
  time: '',
  cost: 0,
  schedules: [],
};

const mentorRegisterSlice = createSlice({
  name: 'mentorRegister',
  initialState: initialMentorRegistorState,
  reducers: {
    setMentorRegister: (state, action: PayloadAction<object>) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    filter: filterSlice.reducer,
    mentorRegistor: mentorRegisterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const { login, logout } = authSlice.actions;
export const { setJobFolder, setJob, removeJob, setCompany, removeCompany, setOrder } = filterSlice.actions;
export const { setMentorRegister } = mentorRegisterSlice.actions;
export default store;
