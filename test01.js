/*
//1.promptで入力した値から「正の数」「負の数」を判定してalertする処理を書いてください。//
var answer = prompt('正の数か負の数か？');
if(answer >= 0){
    alert('正の数');
}else{
    alert('負の数');
}

//2. 1.で数値以外が入力された場合には「数値を入力してください」とalertする処理を追加してください。//
var answer = prompt('正の数か負の数か？');
if(answer >= 0){
    alert('正の数');
}else if(answer < 0){
    alert('負の数')
}else{
    alert('数値を入力してください');
}

//3. 配列に'パンダ', 'ライオン', 'キリン'を定義し、while文ですべて表示する処理を書いてください。//

var animals = ['パンダ', 'ライオン', 'キリン'];
var i = 0;
while (i < animals.length){
    alert(animals[i]);
    i++;
}

*/

// 4. 3.でwhile文より前にpromptでキー入力し、その入力した内容が'ライオン'の場合に処理を中断するように変更してください。

var animals = ['パンダ', 'ライオン', 'キリン'];
var answer = prompt('パンダ, ライオン, キリン');
var i = 0;
while(true){
    if(i <= animals.length,i==animals[1]){
        break;
    }
    alert(animals[i]);
    i++;
}





/*
// 6. オブジェクト変数の配列の形式で、動物と体重を表現してみましょう。
//例としてパンダは80(Kg)、ライオンは200(Kg)、キリンは300(Kg)としましょう。


var animals = [
    {'name':'パンダ','weight':'80(Kg)'},
    {'name':'ライオン','weight':'200(Kg)'},
    {'name':'キリン','weight':'300(Kg)'},
    ];
    
//alert(animals[0].weight);

//7. 6.でpromptで入力した動物名の体重をalertするように変更してください。

var answer = prompt('パンダ、ライオン、キリンの動物名を入れると体重がでる');
switch (answer) {
    case animals[0].name:
        alert(animals[0].weight);
        break;
    case animals[1].name:
        alert(animals[1].weight);
        break;
    case animals[2].name:
        alert(animals[2].weight);
        break;
    default:
    alert('パンダ、ライオン、キリンのどれかを入れてください');
    break;
}


//8. 円の半径を入力するとその面積を返す関数をつくり、その結果をalertしましょう。
//円周率は3.14とします。

function calc(i) {
    return i * i * 3.14
}
alert(calc(4));
*/
