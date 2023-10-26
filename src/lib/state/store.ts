import { create } from 'zustand';
import { TStoreActions, TStoreState } from '../types';
import { handleFileRead } from "../utils/datafilehandler";
import initialState from './initialState';
import { TempStudentData, TempAcedamicData, TempSchoolData, TempHeaderData } from '../tempData/data';
import actions from './actions';

import db, { resetDatabase } from "@/lib/models/db"









const useStore = create<TStoreActions & TStoreState>((set) => ({


    ...initialState,

    ...actions(set),




}))

export default useStore;
