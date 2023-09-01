import { IProject } from '../../../modules/project/types';

export interface IgetProjectsResponse {
  data: {
    projects: Array<IProject>;
  };
}

export type TgetProjectRequest = {
  type: string;
};
