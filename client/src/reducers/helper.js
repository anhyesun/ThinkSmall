// https://stackoverflow.com/questions/19407305/how-to-show-only-hours-and-minutes-from-javascript-date-tolocaletimestring
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
// eslint-disable-next-line
export const now = () => new Date().toLocaleTimeString(navigator.language, {
    hour: 'numeric',
    minute: 'numeric',
})
