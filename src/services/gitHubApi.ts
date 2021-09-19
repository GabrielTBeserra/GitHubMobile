import axios from 'axios';
import GitHubRepo from '../types/github_repo';

import GitHubUser from '../types/github_user';

const gitHubApi = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export const GetUser = async (user: string): Promise<GitHubUser> => {
  const response = await gitHubApi.get<GitHubUser>(`/${user}`);
  return response.data;
};

export const GetRepos = async (user: string): Promise<Array<GitHubRepo>> => {
  const response = await gitHubApi.get<Array<GitHubRepo>>(`/${user}/repos`);
  return response.data;
};
