class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector("#submit-button");
    const repoInputEl = document.querySelector("#repo-name-input");

    submitButtonEl.addEventListener("click", () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, (repoData) => {
        this.repoData = repoData;
        this.display();
      });
    });
  }

  display() {
    document.querySelector("#repo-name").textContent = this.repoData.full_name;
    document.querySelector("#repo-description").textContent = this.repoData.description;
    const img = document.querySelector("#repo-image");
    img.src = this.repoData.organization.avatar_url;
  }
}

module.exports = GithubView;
