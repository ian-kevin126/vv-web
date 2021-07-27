import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";

interface State {
    modalVisible: boolean
}

// 1，初始状态
const initialState: State = {
    modalVisible: false
}

// 2，新建切片
export const SearchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        openModal(state) {
            state.modalVisible = true;
        },
        closeModal(state) {
            state.modalVisible = false;
        }
    }
})

// 3，暴露actions
export const SearchActions = SearchSlice.actions;

// 4，精确暴露某一个状态
export const selectModalVisible = (state: RootState) => state.SearchState.modalVisible;