import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import { AppThunk } from 'src/app/store';
// import axios from 'axios';
export interface Puzzle {
    items: number[];
}

const shuffle = (array: number[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const puzzle = createSlice({
    name: 'puzzle',
    initialState: {
        items: [...shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])],
    } as Puzzle, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
    reducers: {
        setPuzzle(state, action: PayloadAction<number[]>) {
            // 업데이트 되는 State 를 return 해준다.
            state.items = action.payload;
            return state;
        },
    },
});
export const { setPuzzle } = puzzle.actions;
export default puzzle.reducer;

// export const changeUser = (): AppThunk => async (dispatch) => {
//     try {
//         const { data } = await axios.post<User>('/post');
//         console.log(data);
//         dispatch(addUser(data));
//     } catch (err) {
//         // dispatch(getIssuesFailure(err.toString()));
//     }
// };

// // 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
// export const { addUser } = users.actions;
