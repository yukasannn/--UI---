//トップへ戻る//
function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('button');

//ハンバーガーメニュー
//const target = document.getElementById("menu");
//target.addEventListener('click', () => {
  //target.classList.toggle('open');
//});
//無効化//


//タブメニュー//
const tabs = document.getElementsByClassName('tab-menu__item');
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabSwitch);
}
function tabSwitch() {
  document.getElementsByClassName('active')[0].classList.remove('active');
  this.classList.add('active');
  document.getElementsByClassName('show')[0].classList.remove('show');
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('tab-content__item')[index].classList.add('show');
};


//ドロワーメニュー//
const target = document.getElementById("menu2");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});


//モーダルウィンドウ//
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})
window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__content-inner') && e.target.id !== "openBtn") {
    modal.style.display = 'none';
  }
});