import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {id: 0, text: 'Hey, why nobody loves me?!'},
        {id: 1, text: 'Hey, why nobody loves me?!'},
        {id: 2, text: 'Hey, why nobody loves me?!'},
    ]
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push({id: state.posts.length, text: action.payload})
        }
    }
})

const {actions, reducer} = profileSlice

export default reducer
export const { addPost } = actions
