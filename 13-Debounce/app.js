// Debounce = debounce adds a delay to the function, it makes sure that the function is called after a certain delay defined by the user, and after a certain action is stopped/started by the user.

const defaultText = document.querySelector(".default");
const debounceText = document.querySelector(".debounce");

const inputField = document.querySelector(".input-text");


const debouncedValueFn = debounce((text) => {
    debounceText.textContent = text;
}, 1000)

inputField.addEventListener('input', (e) => {
    defaultText.textContent = e.target.value;
    debouncedValueFn(e.target.value)
})

function debounce(cb, delay = 1000) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}