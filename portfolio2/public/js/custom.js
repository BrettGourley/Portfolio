/*var fName = document.getElementById('firstName'),
    splitLastName = new SplitText("#lastName", {type:"chars"});

fName.addEventListener('mouseenter', animateItem, false);

function animateItem(e){
    var tl = new TimelineLite,
        splitItem = new SplitText(this, {type:"words,chars"}),
        chars = splitItem.chars;
    tl.staggerTo(chars, .1, {scale: 1.6, ease:Back.easeOut}, 0.01, "+=0")
        .staggerTo(chars, .3, {scale: 1, ease:Back.easeOut}, 0.01, "-=0.35");
}*/

$( document ).ready(function() {
    var location = '-250px', location2 = '0px', menuBtnLoc = '0px';
    setTimeout(nameScramble, 3000);
    var menuAnimation = document.getElementById('menu-button');
    TweenLite.to(".menu-button-bar", 2, { width:"50px", ease:Elastic.easeOut, delay:.5});

    $("a").click(function(){
        $(this).toggleClass("open");
    });

    $('.c-hamburger').click(function(){
        var $overlay = $('#body-overlay'),
            $menu = $('.menu'),
            $menuButton = $('#menu-button');
        location = (location == '-250px' ? '0px' : '-250px');
        location2 = (location2 == '0px' ? '240px' : '0px');
        menuBtnLoc = (menuBtnLoc == '0px' ? '140px' : '0px');
        TweenLite.to([$overlay, $menuButton],.15, {left: location2, ease:Linear.easeNone});
        TweenLite.to($menuButton,.15, {left: menuBtnLoc, ease:Linear.easeNone});
        TweenLite.to($menu,.15, {left: location, ease:Linear.easeNone});
    });
});

var nameScramble = function(){
    var tl = new TimelineLite;
    tl.to("#firstName",2, {scrambleText:{text:"BRETT", chars:"UPPERCASE", revealDelay:1, tweenLength:true, speed:0, ease:Linear.easeNone}})
        .to("#lastName", 2, {scrambleText:{text:"GOURLEY", chars:"UPPERCASE", revealDelay:0, tweenLength:true, speed:0, ease:Linear.easeNone}});
};

(function() {
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }

})();