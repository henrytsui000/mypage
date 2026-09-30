(function () {
  var base = "https://henrytsui000.github.io";
  var p = window.location.pathname.replace(/^\/mypage(?=\/|$)/, "");
  if (p === "") p = "/";
  window.location.replace(base + p + window.location.search + window.location.hash);
})();
