function setStatusInit(statusElem) {
    statusElem.classList.remove('waiting');
    statusElem.classList.remove('successful');
    statusElem.classList.remove('unsuccessful');
}

function setStatusWaiting(statusElem) {
    statusElem.classList.add('waiting');
    statusElem.classList.remove('successful');
    statusElem.classList.remove('unsuccessful');
}

function setStatusSuccessful(statusElem) {
    statusElem.classList.remove('waiting');
    statusElem.classList.add('successful');
    statusElem.classList.remove('unsuccessful');
}

function setStatusUnsuccessful(statusElem) {
    statusElem.classList.remove('waiting');
    statusElem.classList.remove('successful');
    statusElem.classList.add('unsuccessful');
}