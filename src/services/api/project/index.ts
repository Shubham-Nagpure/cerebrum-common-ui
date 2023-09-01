/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from '../baseQuery';
import { IgetProjectsResponse, TgetProjectRequest } from './types';

export const projectApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProjects: build.query<IgetProjectsResponse, TgetProjectRequest>({
      query: data => ({
        url: `/api/projects`,
        method: 'GET',
        params: { type: data.type }
      })
    }),
    getProject: build.query<any[], string>({
      query: id => ({
        url: `/api/project/${id}`,
        method: 'GET'
      })
    }),
    createProjects: build.mutation<any, any>({
      query: body => ({
        url: '/api/projects',
        method: 'POST',
        body
      })
    }),
    updateProject: build.mutation<any, any>({
      query: body => ({
        url: `/api/projects/${body.id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: []
    }),
    deletePorjects: build.mutation<{ success: boolean; id: string }, string>({
      query(id) {
        return {
          url: `/api/project/${id}`,
          method: 'DELETE'
        };
      }
    })
  })
});

export default projectApi;
