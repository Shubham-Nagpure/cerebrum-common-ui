export interface IProject {
  id: string;
  created_at: string;
  created_by: { name: string };
  description: string;
  name: string;
  updated_at: string;
  updated_by: { name: string };
}

export interface IProjectList {
  data: Array<IProject>;
  handleButton: () => void;
  isDraft?: boolean;
  isDataAvailable: boolean;
  isLoading: boolean;
}

export interface IProjectFromValues {
  id?: string;
  name: string;
  description: string;
  account_id: string;
}

export interface IProjectMenu {
  id?: string;
}

export interface INoProjectComponent {
  handleButton: () => void;
}
