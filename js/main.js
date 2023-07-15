/***********************************************
 * ハンバーガー関連 
 *********************************************/

// DOM要素の取得
const hamburgerBtn = document.getElementById('header__burger-btn');
const headerNav = document.getElementById('header__nav');
const headerNavLis = document.querySelectorAll('.header__nav-li');

// クリックイベントのリスナーを追加
hamburgerBtn.addEventListener('click', toggleNav);

// ナビゲーション表示の切り替え
function toggleNav() {
  const isNavHidden = headerNav.style.display === 'none' || !headerNav.style.display;

  if (isNavHidden) {
    showNav();
  } else {
    hideNav();
  }
}

// ナビゲーション表示
function showNav() {
  headerNav.style.display = 'block';
  hamburgerBtn.classList.add('header__burger-btn_close');
}

// ナビゲーション非表示
function hideNav() {
  headerNav.style.display = 'none';
  hamburgerBtn.classList.remove('header__burger-btn_close');
}

// リストアイテムのクリックイベントのリスナーを追加
headerNavLis.forEach((li) => {
  li.addEventListener('click', () => {
    let widthPx = window.innerWidth;
    if (widthPx < 1000) {
      console.log(widthPx);
      hideNav();
    }
  });
});

// レスポンス前後の処理
window.onresize = function() {
  let widthPx = window.innerWidth;
  if (widthPx > 1000) {
    showNav();
  }else {
    hideNav();
  }
};
