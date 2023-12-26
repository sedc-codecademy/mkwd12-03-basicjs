function getFromLocalStorage(key) {
    const item = localStorage.getItem(key)
    if (!item) return null;
    return JSON.parse(item)
}

function setToLocalStorage(key, item) {
    if (!key || typeof key != 'string') {
        console.warn('You need to pass a valid key')
        return;
    }
    if (typeof item != "object") {
        console.warn('Item is not a valid object')
        return;
    }
    const itemToJSON = JSON.stringify(item);
    localStorage.setItem(key, itemToJSON);
}

export default async function getUrlData(key, url) {
    const getLocalData = getFromLocalStorage(key);
    if (getLocalData) return getLocalData;
    const res = await fetch(url);
    const data = await res.json();
    setToLocalStorage(key, data);
    return data;
}


