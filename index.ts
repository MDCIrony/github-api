import * as dotenv from "dotenv";
import GithubAuth from "./GithubAuth";
import { ReposList } from "./types";

//Importing environment variables
dotenv.config();

async function main() {
  //Creating instance of GithubAuth class (with auth token)
  let Auth = new GithubAuth(process.env.GITHUB_TOKEN as string);

  //Calling getReposList method (returns an array of ReposList or an Error)
  let response: ReposList[] | Error = await GithubAuth.getReposList(Auth);

  //Checking if response is an Error or not and returning accordingly
  if (response instanceof Error) {
    console.log("Error occurred");
    console.log(response);
    return;
  } else {
    console.log(response);
  }
}

main();
