$(document).ready(function(){
  // var usrlang = navigator.language || navigator.userLanguage;
  var lang = $('html').attr("lang");
  var userLang = lang.toLowerCase();
  var baseUrl = '{{ site.baseurl }}';
  if (userLang== "en"){
    var userLang = '';
  } else {
    var baseUrl = '{{ site.baseurl }}/';
  }
  var urlGettingStarted = baseUrl + userLang + '/ios/';
  var urlIntegrationGuide = baseUrl + userLang + '/ios/integration-guide/';
  var urlBanner = baseUrl + userLang + '/ios/banner/';
  var urlInterstitial = baseUrl + userLang + '/ios/interstitial/';
  var urlMediation = baseUrl + userLang + '/ios/mediation/';
  var urlAdvanced = baseUrl + userLang + '/ios/advanced/';
  var urlLatestNews = baseUrl + userLang + '/ios/latest-news/';
  var urlDownload = baseUrl + userLang + '/ios/download/';
  var urlSupport = baseUrl + userLang + '/ios/support/';
  // var  = "baseUrl + userLang + '/ios/'";

  //show the text in right lang
  if (userLang == "zh-tw") {
    $("#sidebar-title1").text("iOS 串接");
    $('#getting-started').text("開始使用");
    $('#integration-guide').text("串接說明");
    $('#sidebar-title2').text('廣告型態選擇');
    $('#banner-id').text("橫幅廣告");
    $('#interstitial-id').text('插頁廣告');
    $('#mediation').text("中介服務");
    $('#advanced').text("進階設定");
    $('#sidebar-title3').text('下載/其他輔助');
    $('#latest-news').text("最新消息");
    $('#download').text("下載 SDK");
    $('#support').text("其他協助");
  } else if (userLang == "zh-cn") {
    $("#sidebar-title1").text("iOS 串接");
    $('#getting-started').text("开始使用");
    $('#integration-guide').text("串接说明");
    $('#sidebar-title2').text('广告型态选择');
    $('#banner-id').text("横幅广告");
    $('#interstitial-id').text('插页广告');
    $('#mediation').text("中介服务");
    $('#advanced').text("进阶设定");
    $('#sidebar-title3').text('下载/其他辅助');
    $('#latest-news').text("最新消息");
    $('#download').text("下载 SDK");
    $('#support').text("其他协助");
  } else if (userLang == "jp"){
    $("#sidebar-title1").text("iOS 串接");
    $('#getting-started').text("スタートガイド");
    $('#integration-guide').text("インテグレーションガイド");
    $('#sidebar-title2').text('広告パターンとを選択');
    $('#banner-id').text("バナー広告");
    $('#interstitial-id').text('インタースティシャル広告');
    $('#mediation').text("メディエーション");
    $('#advanced').text("詳細設定");
    $('#sidebar-title3').text('ダウンロード/その他');
    $('#latest-news').text("最新ニュース");
    $('#download').text("ダウンロード");
    $('#support').text("サポート");
  } else {
    $("#sidebar-title1").text("iOS Integration");
   $('#getting-started').text("Getting Started")
   $('#integration-guide').text("Integration Guide");
   $('#sidebar-title2').text('Ad Type Choices');
   $('#banner-id').text("Banner Ad");
   $('#interstitial-id').text('Interstitial Ad');
   $('#mediation').text("Mediation");
   $('#advanced').text("Advanced Setting");
   $('#sidebar-title3').text('Download/Other');
   $('#latest-news').text("Latest News");
   $('#download').text("Download");
   $('#support').text("Support"); }
 //add right linking url to right title
  $('#getting-started').attr({href:urlGettingStarted});
  $('#integration-guide').attr({href:urlIntegrationGuide});
  $('#banner-id').attr({href:urlBanner});
  $('#interstitial-id').attr({href:urlInterstitial});
  $('#mediation').attr({href:urlMediation});
  $('#advanced').attr({href:urlAdvanced});
  $('#latest-news').attr({href:urlLatestNews});
  $('#download').attr({href:urlDownload});
  $('#support').attr({href:urlSupport});
})

// Truely fulfill the need to show correspongin langs
// once one loads the web page. But what if user's
// bad network connection? It will flash to show and
// make bad impression to user resulting in bad UX.
