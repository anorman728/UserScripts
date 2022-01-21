// ==UserScript==
// @name         Hide youtube "Recommended" spam.
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide youtube "Recommended" spam.
// @author       Andrew Norman
// @match        *://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Starting hide script.');

    setInterval(function() {

        var spamels = document.getElementsByClassName('ytp-cards-teaser');

        if (spamels.length == 0) {
            console.log("No spam elements found.");
            return;
        }

        console.log("Found spam elements.");


        for (let el of spamels) {

            el.parentNode.removeChild(el);

            console.log('Deleted spam.');

        };

        var el2 = document.getElementsByClassName('ytp-cards-button')[0];

        el2.parentNode.removeChild(el2);

        console.log('Deleted nonsense button.');

    }, 5000);


})();
