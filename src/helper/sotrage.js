export const setItem = (key, value) => {
    sessionStorage.setItem(key, value)
}

export const getItem = (key) => {
    return localStorage.getItem(key)
}


export const removeItem = (key) => {
    localStorage.removeItem(key)
}

export const clearStorage = () => {
    localStorage.clear()
    sessionStorage.clear()
}

export const setCookies = (key, value) => {
    document.cookie = `${key}=${value}`
    document.cookie = `${key}=${value};expires:=thu,31 dec 2025 12:00:00 UTC`;
}

export const getCookie = () => {
    return document.cookie
}