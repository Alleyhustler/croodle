$("body").each(function () {
  $(this).html($(this).html().replace(/•/g, "<img src='/_images/assets/pixels/bullet.png' alt=''>"));
});

$("#sitetitle").html(
  "emeowly ♡ " +
    location.pathname
      .slice(1)
      .replace(/\/$/, "")
      .replace(/[/]/, " ♡ ")
      .replace(/-/g, " ")
      .replace(/_/g, " ")
      .replace(/.shtml/, "")
);

$("#siteurl").append(window.location.pathname);

GreenAudioPlayer.init({
  selector: ".player", // inits Green Audio Player on each audio container that has class "player"
  stopOthersOnPlay: true,
  enableKeystrokes: true,
});
