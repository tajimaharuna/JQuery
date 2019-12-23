//jQueryオブジェクトを削除するメソッドを調べ、<h2>を非表示(hide)ではなく、削除してみましょう。

(function($, window) {
  $(function() {
    // この中に処理を書きます
    $('h2').empty();
  });
})(jQuery, window);

// #indexにtext()メソッドとhtml()メソッド(ともにパラメータ無し)を実行して、その違いについて比べてみましょう 

(function($, window) {
  $(function() {
    // この中に処理を書きます
    $('h2').empty();
    $('#index').text();
  });
})(jQuery, window);

(function($, window) {
  $(function() {
    // この中に処理を書きます
    $('h2').empty();
    $('#index').find('li').eq(0).html('jQuery<span class ="string">の</span>はじめ方');
  });
})(jQuery, window);

// .text .htmlの違いは、文の一部が変更できるか否か。

// 子要素を追加するappendというメソッドについて調べ、ul#indexの最後に<li>メソッド</li>を追加してみましょう。

(function($, window) {
  $(function() {
    // この中に処理を書きます
    $('h2').empty();
    $('#index').append('<li>メソッド</li>')
  });
})(jQuery, window);

//appand = リストを追加するメソッド。

//  ul#indexの子要素<li>それぞれ文字列の長さをalertしてみましょう。

(function($, window) {
  $(function() {
    // この中に処理を書きます
    $('#index').find('li').each(function(){
      var count = $('li').eq(1).text().length;
      alert(count);
      });
  });
})(jQuery, window);

