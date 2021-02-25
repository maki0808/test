$(function() {
  //スマホ（iPhone/Android/iPod）閲覧時にTEL番号のリンクが挿入されるようにする(タブレット閲覧時はPC同様にするため除外)
  var device = window.navigator.userAgent;
  if ((device.indexOf('iPhone') > 0 && device.indexOf('iPad') == -1) || device.indexOf('iPod') > 0 || device.indexOf('Android') > 0) {
    $(".telep").wrap('<a href="tel:00000000000" class="tel"></a>');
    alert('SPです');
    location.href = $(".tel").attr("href");
  }else{
    alert('PCです');
  }
  console.log("aaaaa");
});
