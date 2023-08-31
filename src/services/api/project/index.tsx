/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from '../baseQuery';

export const projectApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProjects: build.query<any[], any>({
      query: params => ({
        url: `/api/projects/`,
        method: 'GET',
        params
      })
    }),
    getProject: build.query<any[], string>({
      query: id => ({
        url: `/api/projects/${id}`,
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
