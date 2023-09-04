/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DELETE_METHOD,
  GET_METHOD,
  POST_METHOD,
  PUT_METHOD
} from '../../shared/constants/apiConstants';
import baseApi from '../../redux/baseQuery';
import { IgetProjectsResponse, IgetProjectRequest } from './types';
import {
  CREATE_PROJECTS,
  GET_PROJECT,
  GET_PROJECTS,
  UPDATE_PROJECT
} from './constants';

export const projectApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProjects: build.query<IgetProjectsResponse, IgetProjectRequest>({
      query: data => ({
        url: GET_PROJECTS,
        method: GET_METHOD,
        params: { type: data.type }
      }),
      providesTags: ['Project']
    }),
    getProject: build.query<any[], string>({
      query: id => ({
        url: `${GET_PROJECT}/${id}`,
        method: GET_METHOD
      }),
      providesTags: ['Project']
    }),
    createProjects: build.mutation<any, any>({
      query: body => ({
        url: CREATE_PROJECTS,
        method: POST_METHOD,
        body
      }),
      invalidatesTags: ['Project']
    }),
    updateProject: build.mutation<any, any>({
      query: body => ({
        url: `${UPDATE_PROJECT}/${body.id}`,
        method: PUT_METHOD,
        body
      }),
      invalidatesTags: ['Project']
    }),
    deletePorjects: build.mutation<{ success: boolean; id: string }, string>({
      query(id) {
        return {
          url: `${DELETE_METHOD}/${id}`,
          method: DELETE_METHOD
        };
      },
      invalidatesTags: ['Project']
    })
  })
});

export default projectApi;
