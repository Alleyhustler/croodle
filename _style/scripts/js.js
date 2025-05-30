//                                                         +%@@@@@@@@@@@@@@+
//                                                     @@@@@@.           :@@@@@@@
//                                                  *@@@@                      %@@@#
//                                                +@@@-                           *@@+
//                          @@.                 =@@@                                *@@:
//                        +@@*@@               @@@              #@@@@-                @@@
//                       :@*   =@@           *@@@@           @@@@@@@@@                  @@
//                       @@     +@@#.@@@@@###%@@@@@@@@@+ :@@@@%     @@                   @@
//                      @@      =@@@@-               +@@@@@@@       @@                   %@
//                      @@      :-                       :@@#       @@                    @-
//                     .@@                                          @@                    @@
//                    *@@                                          *@@@                   @@@@
//                   *@-                                            *@@@=                 @@@@@
//                  @-                                                 @@%                @@@@@@
//                :@       @@@@@*                   %@@@@@-             @@=               @@: #@%
//                @=                  +%%+                              #@@:             -@@:  @@+
//               -@-                  *@@@@@@                            @@*             @@@:   @@
//               *@:             #*    @@@*      *#                      @@*             @@@    -@
//               +@:              +@@@@+ @@@@@@@+*                      @@@*            @@@:    .@-
//               .@@                                                   -@@@            @@@@     .@%
//              +@@@@                                                 =@@@            @@@-      @@@@@
//           @@@@@ *@@%:                                             @@@@          .@@@+       @@@-*@@@@
//         @@@@       @@@=                                         @@@@-       =@@@@=         @@@*    +@@@
//       %@@=          =@@@%:                                    @@@@      =@@@@@:           @@@%       %@@@
//      @@+              %@@@@@@+                          *#@@@@@:      @@@@@-            #@@@          *@@@
//     @%                 @@@@ #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#        @@@@              @@@@             -@@@
//    @@:                  @@@       *%#%%#%%%%#%%%#*                 @@@            %@@@@*                :@@:
//   *@=                    @@@                                       @@@        .%@@@@@+                   @@:
//   @@.                     -@@@#                                 :*@@@@@*+*#@@@@@@+                 =@@   =@:
//  %@:     #.                 #@@@@@.                         :@@@@%.  %@@@@@@@+                   %@@@@    @:
//  @@.    :@@@:                  -@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#:                              -@@@@@*      @:
//  @@.     .@@@@@%                    -###**#@@@@@@@@@@@@*+                                :#@@@@@@:        @:
//  @@.        =@@@@@@=:                                                               =*@@@@@@%#-           @:
//  @@.           .=@@@@@@@@===:                                               ===@@@@@@@@@#:               -@
//  @@*                 :**%@@@@@@@@@@@@@@@@*.. ........  .. .. :#@@@@@@@@@@@@@@@@@@@*+:                    -@
//   @%                          %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                               %@
//   @@:                                                                                                   :@
//    @@                                                                                                  :@#
//    :@@:                                                                                              :@@=
//     -@@                                                                                            .%@@
//       @@@@:                                                                                     =@@@@
//          @@@@+                                                                              *@@@@*
//             *@@@@@+==.                                                                -=@@@@@:
//                  .@@@@@@@@=:.                                                --%@@@@@@@@
//                          :%@@@@@@@@@@@@@=  .               .    :%@@@@@@@@@@@@@@@-
//                                     .-%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*=.
// oops a cat fell asleep in here :o

document.title += location.pathname /* add page pathname to the title */
  .replace(/\/$/, "")
  .replace(/[/]/g, " ♡ ") /* replace all '/' with star symbol */
  .replace(/-/g, " ") /* replace dashes in URL with a space */
  .replace(/_/, " ") /* replace dashes in URL with a space */
  .replace(/.shtml/, ""); /* remove .shtml from the end of the url */

if (window.innerWidth > 820) {
  $(function () {
    $("aside").removeClass("not-hidden");
  });
}

jQuery(document).ready(function () {
  $("time").addClass("timeago");
  $("time.timeago").timeago();
});

$(function () {
  // get choice from local storage
  var status = localStorage.getItem("hidingtest");
  if (status == "true") {
    $(".hidethis").css("display", "none");
    $(".itshidden").attr("checked", true);
  } else {
    $(".hidethis").css("display", "block");
    $(".itshidden").attr("checked", false);
  }
  // hide element if checkbox is checked
  $(".itshidden").click(function () {
    if (this.checked) {
      $(".hidethis").hide();
    } else {
      $(".hidethis").show();
    }
    // save choice to local storage
    localStorage.setItem("hidingtest", this.checked);
  });
});

// $(function () {
//   // get choice from local storage
//   var status = localStorage.getItem("hiddentest");
//   if (status == "true") {
//     $(".hidethis").css("display", "block");
//     $(".itshidden").attr("checked", false);
//   } else {
//     $(".hidethis").css("display", "none");
//     $(".itshidden").attr("checked", true);
//   }
//   // hide element if checkbox is checked
//   $(".itshidden").click(function () {
//     if (this.checked) {
//       $(".hidethis").hide();
//     } else {
//       $(".hidethis").show();
//     }
//     // save choice to local storage
//     localStorage.setItem("hiddentest", this.checked);
//   });
// });

$(".stop").click(function (e) {
  ff = new freezeframe(".freezeframe").capture().setup();
});
$(".stop").click(function (e) {
  $(".ffbutton").toggle();
  $(".hideanim").hide();
  $(".staticanim").show();

  e.preventDefault();
  ff.release();
});
$(".start").click(function (e) {
  $(".ffbutton").toggle();
  $(".hideanim").show();
  $(".staticanim").hide();
  e.preventDefault();
  ff.trigger();
});
