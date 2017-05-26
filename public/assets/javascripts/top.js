//   // console.log("Hello world");

// var btn = document.querySelector("input");
// // ボタンをDOMオブジェクトとして取得し、変数btnに代入する

// function printHello() {
//   console.log("Hello world");
// }
// // printHello関数を定義

// btn.addEventListener("click", printHello);
// // ボタンのDOMオブジェクトであるbtnに対して、
// // clickイベントとprintHello関数を紐付ける仕組みであるイベントリスナを追加する

// function printHelloWithButton() {
//   var btn = document.querySelector("input");

//   function printHello() {
//     console.log("Hello world");
//   }
//   // 関数内で定義された関数は、関数の中でしか呼び出せないという性質があるだけで、
//   // 通常の関数同様に呼び出せる

//   btn.addEventListener("click", printHello);
// }
// // 一連の処理をまとめた関数を作る

// window.addEventListener("load", printHelloWithButton);

// window.addEventListener("load", function() {
//   var btn = document.querySelector("input");

//   btn.addEventListener("click", function() {
//     var p = document.querySelector("p");
//     p.innerText = "クリックされた！";
//   });
// });

$(window).on("load", function() {
  $("li").on("click", function() {
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".contents div").hide(); // 二つの要素を非表示にする
    $("." + this.id).show(); // クリックされたボタンに対応する要素を表示する
  });
});
