import {User} from "./class/User.js"
import {Repository} from "./class/Repository.js"

const usernameInput = document.querySelector("#username");
const token = ""

const userContainer = document.querySelector("#user");
const repoContainer = document.querySelector("#repository");

usernameInput.addEventListener("input", (event)=>{
    const username = usernameInput.value;
    fetchGithubUser(username);
    fetchGithubUsersRepository(username);
});

  const fetchGithubUser = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${token}`,
        },
      });
  
      if (username === "" || username === null) {
        return;
      } else {
        userContainer.innerHTML = "";
      }
  
      if (response.status === 404) {
        throw new Error("User Not Found");
      }
  
      if (response.status === 403) {
        throw new Error("Rate limit exceeded. Please try again later");
      }
  
      const data = await response.json();
      let findUser = new User(data);
      userContainer.innerHTML = "";
      findUser.render(userContainer);
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchGithubUsersRepository = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=3&sort=created&desc`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${token}`,
        },
      });
  
      if (username === "" || username === null) {
        return;
      } else {
        repoContainer.innerHTML = "";
      }
  
      const data = await response.json();
      repoContainer.innerHTML = "";
      data.forEach(element => {
        let findRepos = new Repository(element);
        findRepos.render(repoContainer);
      });
    } catch (error) {
      console.error(error);
    }
  };