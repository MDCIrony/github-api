import { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";

// Types for list repos for authenticated user
export type GetReposForAuthenticatedUserResponse =
  RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"];
export type GetReposForAuthenticatedUserParameters =
  RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["parameters"];

// Types for get responses
export interface ReposList {
  id: number;
  name: string;
  description: string | null;
  url: string;
}
export interface GetResponseForReposList {
  [index: number]: ReposList;
}
