import { create } from 'zustand';
import { TStoreActions, TStoreState } from './types';
import { handleFileRead } from "./datafilehandler";






const initialState: TStoreState = {
    schoolDetails: undefined,
    acedamicDetail: undefined,
    studentData: undefined,
    loading: false,
}


const actions = (set) => ({

    DataHandler: async (schoolDetails, acedamicDetail, studentData) => {


        const data = await handleFileRead(studentData);

        return set({ schoolDetails, acedamicDetail, studentData: data })
    },

    setLoading(loading) { return set({ loading }) }

})


const useStore = create<TStoreActions & TStoreState>((set) => ({


    ...initialState,

    ...actions(set),



}))

export default useStore;
