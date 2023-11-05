import { create } from 'zustand';
import { TStoreActions, TStoreState } from '../types';
import initialState from './initialState';
import actions from './actions';



const useStore = create<TStoreActions & TStoreState>((set, get) => ({


    ...initialState,

    ...actions(set, get),




}))

export default useStore;
