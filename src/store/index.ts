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
  companyType: string[];
  order: string;
};

const initialFilterState: FilterState = {
  jobFolder: '',
  job: [],
  companyType: [],
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
      if (state.companyType.includes(action.payload)) {
        state.companyType = state.companyType.filter((el) => el !== action.payload);
      } else {
        state.companyType = [...state.companyType, action.payload];
      }
    },
    removeCompany: (state) => {
      state.companyType = [];
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
  companyType: string;
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
  companyType: '',
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

type EachDay = {
  id: number;
  time: string;
};

type ScheduleState = {
  0: EachDay[];
  1: EachDay[];
  2: EachDay[];
  3: EachDay[];
  4: EachDay[];
  5: EachDay[];
  6: EachDay[];
};

const initialScheduleState: Array<EachDay[]> = [
  [{ id: 0, time: '' }],
  [{ id: 0, time: '' }],
  [{ id: 0, time: '' }],
  [{ id: 0, time: '' }],
  [{ id: 0, time: '' }],
  [{ id: 0, time: '' }],
  [{ id: 0, time: '' }],
];

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: initialScheduleState,
  reducers: {
    setSchedule: (state, action: PayloadAction<Array<EachDay[]>>) => [...action.payload],
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    filter: filterSlice.reducer,
    mentorRegistor: mentorRegisterSlice.reducer,
    schedule: scheduleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const { login, logout } = authSlice.actions;
export const { setJobFolder, setJob, removeJob, setCompany, removeCompany, setOrder } = filterSlice.actions;
export const { setMentorRegister } = mentorRegisterSlice.actions;
export const { setSchedule } = scheduleSlice.actions;
export default store;
