import { Octokit } from "octokit";
import {
  GetReposForAuthenticatedUserResponse,
  GetResponseForReposList,
  ReposList,
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
  ): Promise<ReposList[] | Error> {
    //Response from API
    let response: GetReposForAuthenticatedUserResponse | Error;

    //Array to store list of repos
    let ReposList: ReposList[] = [];

    //Calling API
    try {
      response =
        await AuthUserInstance.octokit.rest.repos.listForAuthenticatedUser();

      //Storing data in ReposList
      response.data.forEach((repo, i) => {
        ReposList[i] = {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
        };
      });
    } catch (error) {
      response = error as Error;
    }

    //Returning response (an Error or an array of ReposList)
    return ReposList;
  }
}
