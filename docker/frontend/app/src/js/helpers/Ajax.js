
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
        let formData = data;
        if (!(formData instanceof FormData)) {
            formData = new FormData();
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    formData.append(key, data[key]);
                }
            }
        }
        req.onload = () =>
            req.status === 200 ?
            resolve(req.response) :
            reject(Error(req.statusText));
        req.onerror = (e) => reject(Error(`Network Error: ${e}`));
        req.send(formData);
    });
};
