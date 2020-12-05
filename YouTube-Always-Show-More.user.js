// ==UserScript==
// @name         YouTube - Always Show More
// @namespace    https://github.com/LenAnderson/
// @downloadURL  https://github.com/LenAnderson/YouTube-Always-Show-More/raw/master/YouTube-Always-Show-More.user.js
// @version      0.1
// @author       LenAnderson
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const mo = new MutationObserver(muts=>{
		Array.from(document.querySelectorAll('paper-button#more[aria-expanded="false"]')).forEach(btn=>btn.click());
	});
	mo.observe(document.body, {childList:true, subtree:true});
})();
