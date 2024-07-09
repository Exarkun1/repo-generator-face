function updateListRepos(repoNames, listReposId, action) {
    let listReposElem = document.getElementById(listReposId);
    listReposElem.replaceChildren();
    for(let repoName of repoNames) {
        let containerElem = document.createElement('div');

        let nameElem = document.createElement('span');
        nameElem.textContent = repoName;

        let buttonElem = document.createElement('button');
        buttonElem.textContent = "Обновить";

        let statusElem = document.createElement('span');
        setStatusInit(statusElem);

        buttonElem.addEventListener('click', () => action(repoName, statusElem));
        containerElem.append(nameElem, buttonElem, statusElem);
        listReposElem.appendChild(containerElem);
    }
}

function updateRepoLocal(service, repoName, statusElem) {
    updateRepo(service, repoName, 'local', () => updateListLocRepos('bitbucket'), statusElem);
}

function updateRepoTarget(service, repoName, statusElem) {
    updateRepo(service, repoName, 'cloud', () => {}, statusElem);
}

function updateAllReposLocal(service) {
    let statusElem = document.getElementById('locstatus');
    updateAllRepos(service, 'local', () => updateListLocRepos('bitbucket'), statusElem);
}

function updateAllReposTarget(service) {
    let statusElem = document.getElementById('trgstatus');
    updateAllRepos(service, 'cloud', () => {}, statusElem);
}