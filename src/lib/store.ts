import { create } from 'zustand';
import { TStoreActions, TStoreState } from './types';
import { handleFileRead } from "./datafilehandler";

import { TempStudentData, TempAcedamicData, TempSchoolData, TempHeaderData } from './tempData/data'






const initialState: TStoreState = {
    schoolDetails: undefined,
    acedamicDetail: undefined,
    studentData: undefined,
    loading: false,
    header: undefined,
}



const actions = (set) => ({

    DataHandler: async (schoolDetails, acedamicDetail, studentData) => {


        const data = await handleFileRead(studentData);

        return set({ schoolDetails, acedamicDetail, studentData: data })
    },

    setLoading(loading) { return set({ loading }) },

    setHeader(header) { return set({ header }) }

})


const useStore = create<TStoreActions & TStoreState>((set) => ({


    ...initialState,

    ...actions(set),




}))

export default useStore;
