async function updateListSrcRepos(source) {
    let url = 'http://localhost:8888/git/repos/cloud?service=' + source;
    let response = await fetch(url);
    if (response.ok) {
        let repoNames = await response.json();
        updateListRepos(
            repoNames, 
            'srclist', 
            (repoName, statusElement) => updateRepoLocal(source, repoName, statusElement)
        );
    } else {
        alert("Ошибка при загрузке списка репозиториев из сервиса источника, статус: " + response.status);
    }
}

async function updateListLocRepos(target) {
    let url = 'http://localhost:8888/git/repos/local';
    let response = await fetch(url);
    if (response.ok) {
        let repoNames = await response.json();
        updateListRepos(
            repoNames, 
            'loclist',
            (repoName, statusElem) => updateRepoTarget(target, repoName, statusElem)
        );
    } else {
        alert("Ошибка при загрузке списка репозиториев из локального хранилища, статус: " + response.status);
    }
}

async function updateRepo(service, repoName, endUrl, action, statusElem) {
    setStatusWaiting(statusElem);
    let url = 'http://localhost:8888/git/update/' + endUrl;
    let data = {
        'service': service,
        'repoName': repoName
    };
    let headers = {
        'Content-Type': 'application/json;charset=utf-8'
    };
    let response = await fetch(url, {
        'method': 'POST',
        'headers': headers,
        'body': JSON.stringify(data)
    });
    if (response.ok) {
        action();
        setStatusSuccessful(statusElem);
    } else {
        setStatusUnsuccessful(statusElem);
    }
}

async function updateAllRepos(service, endUrl, action, statusElem) {
    setStatusWaiting(statusElem);
    let url = 'http://localhost:8888/git/update-all/' + endUrl + "?service=" + service;
    let headers = {
        'Content-Type': 'application/json;charset=utf-8'
    };
    let response = await fetch(url, {
        'method': 'POST',
        'headers': headers,
    });
    if (response.ok) {
        action();
        setStatusSuccessful(statusElem);
    } else {
        setStatusUnsuccessful(statusElem);
    }
}