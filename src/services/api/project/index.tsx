/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProject } from '../../../Modules/Project/ProjectList';
import baseApi from '../baseQuery';

interface IgetProjects {
  data: {
    projects: Array<IProject>;
  };
}

export const projectApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProjects: build.query<IgetProjects, void>({
      query: () => ({
        url: `/api/projects`,
        method: 'GET'
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
