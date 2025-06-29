// Cookies are a small piece of data(key-value pairs) stored in user's browser. They are primaly used to store -
// User Preferences, Session Data(eg. authentication tokens), Tracking Information(eg, Ads, analytics, etc)
// Each cookie is limited to ~4kb.
// Browser limits number of cookies per domain to (usually ~20-50)

// Cookie structure
// key=value; Expires=Wed, 21 Oct 2025 07:28:00 GMT; Path=/; Secure; HttpOnly; SameSite=Strict

// When we set a cookie, older cookies does not overwrite, they just add a new one to the list.

// Simple cookie
document.cookie = "username=chirag";

// Cookie with expiration data
document.cookie = "username=chirag; expires=Tue, 30 Jul 2025 12:00:00 UTC";

// If we set multiple cookies together, it does not work, it takes options form 2nd parameter like expires, path
// document.cookie = "username=chirag; age=24" // this won't work it will assume age to a second option of expired

// Setting cookie with path such that it only sets to that particular route
document.cookie = "them=dark; path=/about";

// Reading cookies in js
console.log(document.cookie);

// Deleting cookie = to delete a cookie, simply set it's expiration date to past
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// While setting a cookie if we provide special character to either of the name or value, the cookie breaks. To fix that we make sure to encode the cookie always before setting it.
// document.cookie = "%username&%=$&chirag%%"; // won't work because of special character

const name = encodeURIComponent("%username&%");
const value = encodeURIComponent("$&chirag%%");
document.cookie = `${name}=${value}`;

// To access back the encoded cookie, we need to decode it, if we directly try to access it, it will come along with some encoded special characters
const currentCookies = decodeURIComponent(document.cookie);
