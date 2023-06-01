import IQuestionCreationDto from '../interfaces/dto/IQuestionCreation.dto'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IQuestionListDto from '../interfaces/dto/IQuestionList.dto'
import IQuestionResponseDto from '../interfaces/dto/IQuestionResponse.dto'
import IQuestion from '../interfaces/IQuestion'
import apiConfig from '../configs/apiConfig'

const questionApi = createApi({
    reducerPath: 'questionApi',
    baseQuery: fetchBaseQuery({ baseUrl: apiConfig.api + 'question/' }),
    tagTypes: ['Question'],
    endpoints: (builder) => ({
        getList: builder.query<IQuestion[], IQuestionListDto>({
            query: ({ page, count }) => `get/list?page=${page}&count=${count}`,
            providesTags: ['Question'],
        }),
        create: builder.mutation<IQuestionResponseDto, IQuestionCreationDto>({
            query: (body) => ({
                url: 'create',
                method: 'POST',
                body: JSON.stringify(body),
            }),
            invalidatesTags: ['Question'],
        }),
    }),
});

export default questionApi

export const { useCreateMutation, useLazyGetListQuery } = questionApi
