$(function () {
  var bar = new ProgressBar.Line(splash_text, {//id名を指定
    strokeWidth: 0,//進捗ゲージの太さ
    duration: 1000,//時間指定(1000＝1秒)
    trailWidth: 0,//線の太さ
    text: {//テキストの形状を直接指定 
      style: {//天地中央に配置
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: '0',
        margin: '0',
        transform: 'translate(-50%,-50%)',
        'font-size': '1.2rem',
        color: '#fff',
      },
      autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function (state, bar) {
      bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
  });

  //ローディング画面
  bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
    var windowHeight = $(window).height();
    $(".mv-section").height(windowHeight);
  });

  //画面リサイズ時にMVの高さを調整
  $(window).resize(function () {
    var windowHeight = $(window).height();
    $(".mv-section").height(windowHeight);
  });

  const bgm1 = document.querySelector("#music");       // <audio>
  const btn = document.querySelector("#music-button");   // <button>

  btn.addEventListener("click", () => {
    // pausedがtrue=>停止, false=>再生中
    if (!bgm1.paused) {
      btn.innerHTML = '<p>SOUND OFF</p><i class="volume off icon"></i>';  // 「再生ボタン」に切り替え
      bgm1.pause();
    }
    else {
      btn.innerHTML = '<p>SOUND ON</p><i class="volume up icon"></i>';  // 「一時停止ボタン」に切り替え
      bgm1.play();
    }
  });
})