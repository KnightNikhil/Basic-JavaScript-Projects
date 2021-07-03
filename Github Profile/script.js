GITHUBAPI = "https://api.github.com/users/";

formEl = document.getElementById("form");
searchEl = document.getElementById("search-inp");
mainEl = document.getElementById("main");

async function getData(userUrl) {
  const resp = await fetch(userUrl);
  const responseData = await resp.json();

  githubUser(responseData);
}

async function getRepos(repos_url) {
  const reposResp = await fetch(repos_url);
  const reposData = await reposResp.json();
  repoEl = document.createElement("div");
  repoEl.classList.add("repo-container");

  reposData.forEach((repo) => {
    repoEl.innerHTML += `<li><a href="${repo.html_url}">${repo.name}</a></li>`;
  });
  divEl.appendChild(repoEl);
}

async function githubUser(responseData) {
  const {
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    repos_url,
  } = responseData;
  divEl = document.createElement("div");
  divEl.classList.add("user-card");
  divEl.innerHTML = `
    <img
    src=${avatar_url}
    alt=${name}
  />
  <div class="account-summary">
    <h2>${name}</h2>
    <p>${bio}</p>
    <div class="about-account">
      <h5>Followers: <span id="followers">&nbsp; ${followers}</span></h5>
      <h5>Following: <span id="following">&nbsp; ${following}</span></h5>
      <h5>Repos: <span id="repos"></span>&nbsp; ${public_repos}</h5>
    </div>
  </div>
    `;

  mainEl.appendChild(divEl);
  getRepos(repos_url);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchEl.value;
  getData(GITHUBAPI + searchTerm);
  searchEl.value = "";
  mainEl.innerHTML = "";
});
