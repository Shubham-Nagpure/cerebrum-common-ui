import { IProject } from '../../../Modules/Project/types';

export interface IgetProjectsResponse {
  data: {
    projects: Array<IProject>;
  };
}

export type TgetProjectRequest = {
  type: string;
};
