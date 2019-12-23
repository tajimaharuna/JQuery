(function($, window) {
  $(function() {
  	
/* さらに「検索」ボタンを追加して、そのボタンを押すまでは「検索しない」
ように修正してみましょう~~~ */
  	
$(window).ready( function() {
	$('#btn_postcode2address').jpostal({
		click : '#btn_postcode2address',
		
/* 「郵便番号から住所入力するjQueryプラグイン」を参考にして、
郵便番号→住所変換で、入力する郵便番号を７桁にまとめるように
修正してみましょう。 */

		postcode : [
			'#postcode',
		],
		address : {
			'#address1'  : '%3',
			'#address2'  : '%4',
			'#address3'  : '%5'
		}
	});
    });
});
})(jQuery, window);