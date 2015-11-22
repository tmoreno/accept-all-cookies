var MAX_ATTEMPTS = 100;
var TIMEOUT_MS = 50;
var WORDS = "cookie|policy";
var regExp = RegExp(WORDS, "i");

function removeCookieBanner(attempt) {
    var removed = false;

    $('[id]').filter(function () {
        return regExp.test($(this).attr("id"));
    }).each(function () {
        $(this).remove();
        removed = true;
    });

    $('[class]').filter(function () {
        return regExp.test($(this).attr("class"));
    }).each(function () {
        $(this).remove();
        removed = true;
    });

    if (!removed && attempt < MAX_ATTEMPTS) {
        setTimeout(removeCookieBanner, TIMEOUT_MS, attempt + 1);
    }
}
