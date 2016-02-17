jQuery(document).ready(function ($) {
    /*
     * JavaScript hier
     */

    var globalFilter = "";
    $("#grid").imagesLoaded(function () {
        $(".index, .groups, .shop, .register, .tour, .profile-gallery, .profile-journal, .profile-upload, .profile-messages").isotope({
            itemSelector: ".iso-item",
            masonry: {
                columnWidth: 185,
                gutter: 6,
                isFitWidth: true
            }
        });
        $(".profile-info").isotope({
            itemSelector: ".iso-item",
            masonry: {
                layoutMode: "fitColumns",
                columnWidth: 185,
                gutter: 6,
                isFitWidth: true
            }
        });
    });

    $(".iso-item").mouseenter(function () {
        $(".iso-caption", this).fadeIn();
    }).mouseleave(function () {
        $(".iso-caption", this).fadeOut();
    });

    $(".carousel").carousel({
        interval: 6000
    });

    $(this).scroll(function () {
        if ($(".bar").visible(true) && !$("#navigation-primary").hasClass("navbar-top")) {
            $("body > .container").removeClass("container-ease");
            $("body > .container").removeClass("tag_navbar-fixed-top");
            $("#navigation-primary").removeClass("navbar-fixed-top");
            $("#navigation-primary").addClass("navbar-top");
            $("#navigation-primary ~ #accordion").removeClass("navbar-fixed-top");
            $("#navigation-primary > .navbar-brand").hide();
            $("#navigation-primary > .user-menu").hide();
            $("#navigation-primary > .user-menu, #navigation-primary > .navbar-brand").removeClass("bounceInDown");
        } else if (!$(".bar").visible(true) && !$("#navigation-primary").hasClass("navbar-fixed-top")) {
            $("#navigation-primary").removeClass("navbar-top");
            $("#navigation-primary").addClass("navbar-fixed-top");
            $("#navigation-primary ~ #accordion").addClass("navbar-fixed-top");
            $("body > .container").removeClass("container-ease");
            $("body > .container").addClass("tag_navbar-fixed-top");
            $("#navigation-primary > .navbar-brand").addClass("bounceInDown").addClass("animated");
            $("#navigation-primary > .navbar-brand").fadeIn();
            $("#navigation-primary > .user-menu").addClass("bounceInDown").addClass("animated");
            $("#navigation-primary > .user-menu").fadeIn();
        }

        console.log($(".banner").offset().top - $(window).scrollTop())

        // navigation secondary
        if (($(".banner").offset().top - $(window).scrollTop()) > ($("#navigation-primary").height() - $(".banner").height()) && !$("#navigation-secondary nav").hasClass("navbar-top")) {
            //	$("body > .container").removeClass("container-ease");
            $("#grid").removeClass("tag_navbar-secondary-fixed");
            $("#navigation-secondary nav").removeClass("navbar-fixed-top");
            $("#navigation-secondary nav").addClass("navbar-top");
            $("#accordion").removeClass("navbar-fixed-top");
            $("#navigation-secondary .navbar-brand").hide();
        } else if (($(".banner").offset().top - $(window).scrollTop()) <= ($("#navigation-primary").height() - $(".banner").height()) && !$("#navigation-secondary nav").hasClass("navbar-fixed-top")) {
            $("#navigation-secondary nav").removeClass("navbar-top");
            $("#navigation-secondary nav").addClass("navbar-fixed-top");
            $("#navigation-secondary .navbar-brand").show();
            //	$("#accordion").addClass("navbar-fixed-top");
            //	$("body > .container").removeClass("container-ease");
            $("#grid").addClass("tag_navbar-secondary-fixed");
        }
    });

    $("#collapseOne").on("show.bs.collapse", function () {
        $("a[href=#collapseOne] > span").toggleClass("glyphicon-chevron-down");
        $("a[href=#collapseOne] > span").toggleClass("glyphicon-chevron-up");
        $("#navigation-primary ~ #accordion ~ div.container").addClass("container-ease");
        $("#navigation-primary ~ #accordion ~ div.container").toggleClass("tag_collapseOne-in");
        console.log($("#navigation-primary ~ #accordion ~ div.container").height());
    });
    $("#collapseOne").on("hide.bs.collapse", function () {
        $("a[href=#collapseOne] > span").toggleClass("glyphicon-chevron-up");
        $("a[href=#collapseOne] > span").toggleClass("glyphicon-chevron-down");
        $("#navigation-primary ~ #accordion ~ div.container").addClass("container-ease");
        $("#navigation-primary ~ #accordion ~ div.container").toggleClass("tag_collapseOne-in");
    });

    var showCategories = $.jStorage.get("cats", true);

    if (showCategories) {
        $("#collapseOne").collapse("show");
    }

    $("#collapseOne").on("hidden.bs.collapse", function () {
        $.jStorage.set("cats", false);
    });
    $("#collapseOne").on("shown.bs.collapse", function () {
        $.jStorage.set("cats", true);
    });

    $("#collapseOne .cat-toggle").click(function () {
        if ($(this).hasClass("btn-success") || (!$(this).hasClass("btn-success") && !$(this).hasClass("btn-danger"))) {
            $(this).toggleClass("btn-success");
            $(this).next().toggleClass("btn-success");
            $(this).next().next().children().first().toggleClass("active");
        } else {
            $(this).toggleClass("btn-danger");
            $(this).next().toggleClass("btn-danger");
            $(this).next().next().children().last().toggleClass("active");
        }
        $(this).next().toggle();
    });

    $("#collapseOne .include-cat").click(function () {
        $(this).parent().toggleClass("active");
        if ($(this).parent().parent().prev().prev().hasClass("btn-danger")) {
            $(this).parent().next().toggleClass("active");

            $(this).parent().parent().prev().prev().toggleClass("btn-danger");
            $(this).parent().parent().prev().prev().toggleClass("btn-success");

            $(this).parent().parent().prev().toggleClass("btn-danger");
            $(this).parent().parent().prev().toggleClass("btn-success");
        }
    });
    $("#collapseOne .exclude-cat").click(function () {
        $(this).parent().toggleClass("active");
        if ($(this).parent().parent().prev().prev().hasClass("btn-success")) {
            $(this).parent().prev().toggleClass("active");

            $(this).parent().parent().prev().prev().toggleClass("btn-success");
            $(this).parent().parent().prev().prev().toggleClass("btn-danger");

            $(this).parent().parent().prev().toggleClass("btn-success");
            $(this).parent().parent().prev().toggleClass("btn-danger");
        }
    });

    // Logged in?!
    var loggedIn = $.jStorage.get("loggedIn");
    if (!loggedIn) {
        $.jStorage.set("loggedIn", false);
    }

    if (loggedIn) {
        $("body").toggleClass("loggedOut");
        $("body").toggleClass("loggedIn");
    }

    $("#logIn").click(function () {
        $.jStorage.set("loggedIn", true);
        $("body").toggleClass("loggedOut");
        $("body").toggleClass("loggedIn");
    });

    $(".logOut").click(function () {
        $.jStorage.set("loggedIn", false);
        $("body").toggleClass("loggedOut");
        $("body").toggleClass("loggedIn");
    });




    //Filter
    $(".cat-toggle").click(function () {
        var selector = $(this).attr("data-filter");
        if (globalFilter.match(selector)) {
            globalFilter = globalFilter.replace(selector, "");
        } else {
            globalFilter += selector;
        }
        $("#grid").isotope({
            filter: globalFilter
        });
        return false;
    });

    $(".exclude-cat").click(function () {
        event.preventDefault();
        $(this).parent().parent().dropdown("toggle");
        var selector = $(this).attr("data-filter");
        var posSelector = selector.replace(":not(", "").replace(")", "");
        if (globalFilter.match(posSelector)) {
            globalFilter = globalFilter.replace(posSelector, "");
        }
        globalFilter += selector;
        $("#grid").isotope({
            filter: globalFilter
        });
        return false;
    });

    $(".include-cat").click(function () {
        event.preventDefault();
        $(this).parent().parent().dropdown("toggle");
        var selector = $(this).attr("data-filter");


        $("#grid").isotope({
            filter: selector
        });
        return false;
    });




    // Sort
    $("#grid").isotope({
        getSortData: {
            name: function (elem) {
                return $(elem).find(".name").text();
            }
            /*,
	    artist : function ( elem ) {
	      return $(elem).find(".artist").text();
	    }*/
        }
    });

    $(".filter-toggle").click(function () {
        if ($(this).hasClass("btn-success")) {
            var sort = ($(this).html()).toLowerCase();
            $("#grid").isotope({
                sortBy: sort
            });
            return false;
        } else {
            $("#grid").isotope({
                sortBy: "original-order"
            });
        }
    });




    //Lightbox

    function setAttributes(thumb) {
        $(".userimage").attr("src", thumb.getAttribute("data-userimg"));
        $(".more_img1").attr("src", thumb.getAttribute("data-miI"));
        $(".more_img2").attr("src", thumb.getAttribute("data-miII"));
        $(".more_img3").attr("src", thumb.getAttribute("data-miIII"));
        $(".title").html(thumb.getAttribute("data-title"));
        $(".user").html(thumb.getAttribute("data-user"));
        $(".rating").html(thumb.getAttribute("data-rating"));
        $(".category").html(thumb.getAttribute("data-category"));
        $(".tags").html(thumb.getAttribute("data-tags"));
        $(".description").html(thumb.getAttribute("data-description"));
    }



    var more_toggle = false;
    var images = $(".thumb").toArray();
    var index = 0

    //Lightbox mit richtigem Bild öffnen
    $(".thumb").click(function () {
        setAttributes($(this).get()[0]);
        $(".hero").css({
            "opacity": "0"
        })
        setTimeout(function () {
            $(".hero").css({
                "opacity": "1"
            })
        }, 100);

        index = (images.indexOf($(this).get()[0]));
        $(".overlay").removeClass("hidden");
        $(".hero").attr("src", $(this).attr("src"));
        if (more_toggle) {
            $(".hero").height("40%");
            $("#to_left").css({
                "top": "20%"
            });
            $("#to_right").css({
                "top": "20%"
            });
        } else {
            $(".hero").height("99%");
            $("#to_left").css({
                "top": "40%"
            });
            $("#to_right").css({
                "top": "40%"
            });
        }
        document.documentElement.style.overflow = "hidden";
    });

    //Lightbox schließen
    $(document).keydown(function (e) {
        if (e.which == 27) {
            $(".overlay").addClass("hidden");
            document.documentElement.style.overflow = "scroll";

        }
    });

    $("#close").click(function () {
        $(".overlay").addClass("hidden");
        document.documentElement.style.overflow = "scroll";
    });

    //Lightbox Plus About
    $("#more_click").click(function () {
        if (!more_toggle) {
            $(this).parent().addClass("active");
            $("#more_content").height("50%");
            $(".hero").height("40%");
            $("#to_left").css({
                "top": "20%"
            });
            $("#to_right").css({
                "top": "20%"
            });
            more_toggle = true;
        } else {
            $(this).parent().removeClass("active");
            $("#more_content").height(0);
            $(".hero").height("99%");
            $("#to_left").css({
                "top": "40%"
            });
            $("#to_right").css({
                "top": "40%"
            });
            more_toggle = false;
        }

    });

    $("#to_left").click(function () {
        var h = $(".hero");
        $(".hero").addClass("bounceInRight");
        $(".hero").addClass("animated");
        index -= 1;
        var src = images[index].getAttributeNode("src").value;
        $(".hero").attr("src", src);
        setAttributes(images[index]);
        setTimeout(function () {
            $(".hero").removeClass("bounceInRight");
        }, 1000);

    });

    $("#to_right").click(function () {
        $(".hero").addClass("bounceInLeft");
        $(".hero").addClass("animated");
        index += 1;
        var src = images[index].getAttributeNode("src").value;
        $(".hero").attr("src", src);
        setAttributes(images[index]);
        setTimeout(function () {
            $(".hero").removeClass("bounceInLeft");
        }, 1000);
    });




    //Search

    //Search Tags
    var tagSuggest = [
        "cat",
        "unicorn",
        "woman",
        "red",
        "water",
        "grumpy",
        "eye",
        "anime",
        "cosplay",
        "animal"
    ];

    //Check ob sich Searchbar inhalt ändert
    var searchValue = "";
    setInterval(checkTextboxChanged, 0.5);
    var i = -1;

    function checkTextboxChanged() {
        var currentValue = $("#search-input").val();
        if (currentValue != searchValue) {
            searchValue = currentValue;
            TextboxChanged();
        }
    }


    function exists(elem) {
        if (elem.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    //lösch die Suggestions aus der Leiste
    function clearSuggestions() {
        $("#search-suggest").addClass("hidden");
        tagSuggest.forEach(function (suggestion) {
            if (exists(suggestion)) {
                $("#" + suggestion).remove();
            }
        });
    }

    //mach mir nen neuen Tag
    function newTag(value) {
        clearSuggestions();
        searchValue = "";
        if ($(".tagrow").hasClass("hidden")) {
            $(".tagrow").removeClass("hidden");
            $(".tag-container").addClass("animated");
        }
        var newtag = "<button type=\"button\" style=\"margin-right: 3px;\" class=\"tag btn btn-sm btn-info \">" + value + "</button>";
        $(".tag-container").prepend(newtag);
        $("#search-input").val("");
        i = -1;
        globalFilter += ("." + value);
        $("#grid").isotope({
            filter: globalFilter
        });
    }

    //Schreibe oder lösche Suggestions in #search-suggest
    function TextboxChanged() {
        if ($("#search-suggest").get()[0].firstChild.nextSibling === null) {
            $("#search-suggest").addClass("hidden");
        }
        if (searchValue.length < 1) {
            clearSuggestions();
        }
        for (var i = 0; i < tagSuggest.length; i++) {
            if (tagSuggest[i].match(searchValue) != null) {
                $("#search-suggest").removeClass("hidden");
                if (exists($("#" + tagSuggest[i]))) {

                } else {
                    $("#search-suggest").append("<li id=\"" + tagSuggest[i] + "\" >" + tagSuggest[i] + "</li>");
                };
            } else {
                if ($("#" + tagSuggest[i]).length > 0) {
                    $("#" + tagSuggest[i]).remove();
                };
            }
        }

    }

    // erzeuge neuen Tag
    $("#search").submit(function () {
        event.preventDefault();
        newTag($("#search-input").val());
        //($("#search>input").text());
    });


    //toggle Tags
    $(".tag-container").on("click", "button", function () {
        event.preventDefault();
        if ($(this).hasClass("btn-default")) {
            globalFilter += ("." + $(this).html());
            console.log(globalFilter);
            $("#grid").isotope({
                filter: globalFilter
            });
        }
        if ($(this).hasClass("btn-info")) {
            globalFilter = globalFilter.replace(("." + $(this).html()), "");
            console.log(globalFilter);
            $("#grid").isotope({
                filter: globalFilter
            });
        }
        $(this).toggleClass("btn-info").toggleClass("btn-default");
    });

    //Autocomplete aus Suggest-Liste auswählen
    $("#search-suggest").on("click", "li", function () {
        newTag($(this).html());
    });


    // Theme Switcher
    var themeSetting = $.jStorage.get("themeSetting");
    if (!themeSetting) {
        $.jStorage.set("themeSetting", "theme-green");
    } else {
        $("body").removeClass("theme-green theme-red theme-orange theme-blue " +
            "theme-red-green theme-red-orange theme-brown theme-fur");
        $("body").addClass(themeSetting);
    }

    $(".theme-switcher > li > a").click(function () {
        $("body").removeClass("theme-green theme-red theme-orange theme-blue " +
            "theme-red-green theme-red-orange theme-brown theme-fur");
        $("body").addClass($(this).attr("class"));
        $.jStorage.set("themeSetting", $(this).attr("class"));
    });

});