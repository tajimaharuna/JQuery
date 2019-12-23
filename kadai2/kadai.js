(function($, window) {
  $(function() {
    
    /* イベントを学習したときのサンプルで画面のどこをクリックしても
    「ここをクリック」という文字列「だけ」を赤くするように修正してください。*/
    
    $('#click_me').on('click', function() {
      $(this).css({'color': 'red'});
    });
    
    /* フォームの最後のサンプルでメールアドレスとパスワードのチェック処理を「関数」
    で作成し、#loginをクリックしたときに呼び出すように修正してください。*/

    $('#login').on('click', function(e) {
      var email = $('#email').val(),
          password = $('#password').val();
      if(email == '') {
          alert('メールアドレスを入力してください');
      }else if (email.indexOf('@') < 0){
          alert('メールアドレスには必ず「@」が必要です');
      }
      if(password == ''){
          alert('パスワードを入力してください');
      }else if (password.length < 6){
          alert('パスワードは6文字以上です');
      }
    });
  
  /* デートピッカーのサンプルにボタンを追加して、そのボタンを押したときに
  カレンダー表示されるように修正してみましょう。 */
  
    $('#date_picker').flatpickr({"locale":"ja"});
  
});
})(jQuery, window);