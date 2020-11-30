document.addEventListener('DOMContentLoaded', function (e) {
    console.log('HTML Parsed and DOM tree built', e);
});

window.addEventListener('load', function (e) {
    console.log('Page fully loaded', e);
});

// Before user is about to leave a page
// 'Are you sure you want to leave?'
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    console.log(e);
    e.returnValue = '';
});