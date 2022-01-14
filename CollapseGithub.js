// ==UserScript==
// @name         Collapse Github
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add collapse files button for Github diff
// @author       Andrew Norman
// @match        https://github.com/*/pull/*/files*
// @grant        none
// ==/UserScript==

(function() {
var collapseAll = function() {
    Array.from(document.getElementsByClassName('file')).forEach(function(el) {
        el.classList.remove('open');
        el.classList.remove('Details--on');
    });
};

var collapseBtn = document.createElement('div');
collapseBtn.classList.add('btn');
collapseBtn.innerHTML = 'Collapse files';

collapseBtn.addEventListener('click', function(obj) {
    collapseAll()
});

document.getElementsByClassName('pr-toolbar')[0].getElementsByClassName('flex-items-center')[0].children[1].children[1].appendChild(collapseBtn);

})();
