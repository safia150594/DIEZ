AOS.init({
    disable: function() {
        var maxWidth = 270;
        return window.innerWidth < maxWidth;
    }
});