import { Octokit } from "octokit";
import { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";
import * as dotenv from "dotenv";
dotenv.config();

type GetReposForAuthenticatedUserResponse =
  RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"];
type GetReposForAuthenticatedUserParameters =
  RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["parameters"];

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function getMyReposInfo(): Promise<
  GetReposForAuthenticatedUserResponse | Error
> {
  // https://docs.github.com/en/rest/reference/repos#list-commits
  let response: GetReposForAuthenticatedUserResponse | Error;
  try {
    response = await octokit.rest.repos.listForAuthenticatedUser();
  } catch (error) {
    response = error as Error;
  }
  //response
  return response;
}

async function main() {
  let response: GetReposForAuthenticatedUserResponse | Error =
    await getMyReposInfo();

  if (response instanceof Error) {
    console.log("Error occurred");
    console.log(response);
    return;
  } else {
    // let finalResponse: Array<Object> = [];
    // response.data.forEach((repo, i) => {
    //   finalResponse.push({
    //     id: i,
    //     name: repo.name,
    //     description: repo.description,
    //     url: repo.html_url,
    //   });
    //   i++;
    // });
    // console.log(finalResponse);
    console.log(response.data[16]);
  }
}

main();
