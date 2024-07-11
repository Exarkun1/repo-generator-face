function updateListRepos(repoNames, listReposId, action) {
    let listReposElem = document.getElementById(listReposId);
    listReposElem.replaceChildren();
    for(let repoName of repoNames) {
        let containerElem = document.createElement('div');

        let nameElem = document.createElement('span');
        nameElem.classList.add('txt');
        nameElem.textContent = repoName;
        nameElem.classList.add('container-left');

        let buttonElem = document.createElement('button');
        buttonElem.classList.add('txt');
        buttonElem.textContent = 'Обновить';

        let statusElem = document.createElement('a');
        statusElem.classList.add('status');
        setStatusInit(statusElem);

        let divElem = document.createElement('div');
        divElem.append(buttonElem, statusElem);
        divElem.classList.add('container-right');

        buttonElem.addEventListener('click', () => action(repoName, statusElem));
        containerElem.classList.add('container');
        containerElem.append(nameElem, divElem);
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