import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import questionApi from '../../api/Question.api';

export const rootStore = configureStore({
    reducer: {
        questionApi: questionApi.reducer
    },
    middleware: [
        ...getDefaultMiddleware(),
        questionApi.middleware
    ]
})

export default rootStore

