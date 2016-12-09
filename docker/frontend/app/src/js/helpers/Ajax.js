
export const ajaxGet = (url) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = () =>
            req.status === 200 ?
            resolve(req.response) :
            reject(Error(req.statusText));
        req.onerror = (e) => reject(Error(`Network Error: ${e}`));
        req.send();
    });
};

export const ajaxPost = (url, data) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('POST', url);
        var formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]);
        }
        req.onload = () =>
            req.status === 200 ?
            resolve(req.response) :
            reject(Error(req.statusText));
        req.onerror = (e) => reject(Error(`Network Error: ${e}`));
        req.send(formData);
    });
};
