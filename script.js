"use strict";

$(function() {
    // this will get the full URL at the address bar
    var url = window.location.href;
    
    // for current page set navigation li to active	
    $("nav ul li a").each(function() {
        if (url == (this.href) || url + "index.html" == (this.href) || url + "/index.html" == (this.href)) {
            $(this).closest("li").addClass("active");
        }
    });
});
