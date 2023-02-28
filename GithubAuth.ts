import { Octokit } from "octokit";
import {
  GetReposForAuthenticatedUserResponse,
  GetResponseForReposList,
} from "./types";

export default class GithubAuth {
  //Octokit instance
  private octokit: Octokit;

  //Constructor to initialize octokit (with auth token)
  constructor(authToken: string) {
    this.octokit = new Octokit({
      auth: authToken,
    });
  }

  //Method to get list of repos for authenticated user
  static async getReposList(
    AuthUserInstance: GithubAuth
  ): Promise<GetResponseForReposList | Error> {
    let response: GetReposForAuthenticatedUserResponse | Error;
    let ReposList: GetResponseForReposList = [];
    try {
      response =
        await AuthUserInstance.octokit.rest.repos.listForAuthenticatedUser();
      response.data.forEach((repo, i) => {
        ReposList.push(items);
        items;
        ({
          id: i,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
        });
        i++;
      });
    } catch (error) {
      response = error as Error;
    }
    //response

    return ReposList;
  }
}
