(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/public/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];

try {
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}

$('#btnSort').click(function () {
  $('#SortForm').toggleClass("d-none");
});
$('#SortMenuPosts').click(function () {
  $('#SortMenuPosts').addClass("mt-3").removeClass("mt-5");
  $('#SortMenuHelps, #SortMenuEvents, #SortMenuAll').addClass("mt-5").removeClass("mt-3");
  $('#allHelps #ContentPosts').css({
    "display": "none"
  });
  $('#allPosts').css({
    "display": "block"
  });
  $('#allEvents, #allHelps').css({
    "display": "none"
  });
});
$('#SortMenuEvents').click(function () {
  $('#SortMenuEvents').addClass("mt-3").removeClass("mt-5");
  $('#SortMenuAll, #SortMenuHelps, #SortMenuPosts').addClass("mt-5").removeClass("mt-3");
  $('#allHelps #ContentPosts').css({
    "display": "none"
  });
  $('#allEvents').css({
    "display": "block"
  });
  $('#allPosts, #allHelps').css({
    "display": "none"
  });
});
$('#SortMenuHelps').click(function () {
  $('#SortMenuHelps').addClass("mt-3").removeClass("mt-5");
  $('#SortMenuAll, #SortMenuEvents, #SortMenuPosts').addClass("mt-5").removeClass("mt-3");
  $('#allHelps #ContentPosts').css({
    "display": "block"
  });
  $('#allHelps').css({
    "display": "block"
  });
  $('#allEvents, #allPosts').css({
    "display": "none"
  });
});
$('#SortMenuAll').click(function () {
  $('#SortMenuAll').addClass("mt-3").removeClass("mt-5");
  $('#SortMenuHelps, #SortMenuEvents, #SortMenuPosts').addClass("mt-5").removeClass("mt-3");
  $('#allHelps #ContentPosts').css({
    "display": "none"
  });
  $('#allHelps, #allPosts, #allEvents').css({
    "display": "block"
  });
});
$('.ShowComments').click(function () {
  $(this).text($(this).text() === 'Montrer les commentaires' ? 'Masquer les commentaires' : 'Montrer les commentaires');
  $(this).closest("div.d-flex").next(".ContentsComments").toggleClass("d-none");
});
$('.ShowAnswer').click(function () {
  $(this).text($(this).text() === 'Montrer la réponse la plus utile' ? 'Masquer la réponse la plus utile' : 'Montrer la réponse la plus utile');
  $(this).closest("div.d-flex").next(".BestAnswer").toggleClass("d-none");
});
$('.showCommentForm').click(function () {
  $(this).closest("div.col-10").find('.newcommentform').toggleClass("d-none");
});
$('.showAnswerForm').click(function () {
  $(this).closest("#newAnswer").find('.newcommentform').toggleClass("d-none");
});
$('.dropdownButtonPosts').click(function () {
  $(this).children().toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
  $(this).next().toggleClass('d-none');
});
$('#deleteCommentBlock div.position-relative').hover(function () {
  $('#deleteCommentBlock a.btn-outline-danger i').removeClass("text-danger").addClass("text-white");
}, function () {
  $('#deleteCommentBlock a.btn-outline-danger i').removeClass("text-white").addClass("text-danger");
});

if ($("section").hasClass("404")) {
  $("#header form").hide();
} else if ($("section").hasClass("chatPage")) {
  var messageFeed = document.getElementById("messageFeed");
  messageFeed.scrollTop = messageFeed.scrollHeight;
}

if (!$("#section-up").hasClass("profile")) {
  $("#header").removeClass("d-none").addClass("d-flex");
}

$('.postAttachmentsImgur').click(function () {
  $(this).closest("#addPostForm").find('.inputLinkImgur').toggleClass("d-none");
  $(this).closest("#addPostForm").find('.inputLinkYoutube').addClass("d-none");
});
$('.postAttachmentsYoutube').click(function () {
  $(this).closest("#addPostForm").find('.inputLinkYoutube').toggleClass("d-none");
  $(this).closest("#addPostForm").find('.inputLinkImgur').addClass("d-none");
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\wamp64\www\mse\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\wamp64\www\mse\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/public/js/manifest","/public/js/vendor"]]]);