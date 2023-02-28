import * as dotenv from "dotenv";
import GithubAuth from "./GithubAuth";

//Importing environment variables
dotenv.config();

async function main() {
  //Creating instance of GithubAuth class
  let Auth = new GithubAuth(process.env.GITHUB_TOKEN as string);

  //Calling getReposList method
  let response = await GithubAuth.getReposList(Auth);
  if (response instanceof Error) {
    console.log("Error occurred");
    console.log(response);
    return;
  } else {
    console.log(response.data[16]);
  }
}

main();
