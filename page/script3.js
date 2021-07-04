AOS.init({
    disable: function() {
        var maxWidth = 428;
        return window.innerWidth < maxWidth;
    }
});