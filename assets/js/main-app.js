// Scroll To Top
const handelScrollBtn = () => {
  let toTopBtn = document.querySelector('#to-top');
  const onScrollDisplayBtn = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      toTopBtn.style.display = 'block';
    } else {
      toTopBtn.style.display = 'none';
    }
  };
  window.addEventListener('scroll', onScrollDisplayBtn);
  const onClickScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  toTopBtn.addEventListener('click', onClickScrollToTop);
};
handelScrollBtn();

//Dark Mode
const handelDarkMode = () => {
  let darkBtn = document.querySelector('#dark-toggle');
  let bodyEle = document.body;
  if (darkBtn) {
    darkBtn.addEventListener('click', () => {
      bodyEle.classList.toggle('dark-theme');
    });
  }
};
handelDarkMode();

//Full Page
const handelFullPage = () => {
  let fullPageBtn = document.querySelectorAll('.full-toggle');
  let bodyEle = document.body;
  fullPageBtn.forEach(item => {
    item.addEventListener('click', () => {
      bodyEle.classList.toggle('full-page');
    });
  });
};
handelFullPage();

// Quran Paragraph Font Size
const handelFontSize = () => {
  let quranPar = document.querySelector('.quran-par');
  let btnSizeMinus = document.querySelector('.btn-size-minus');
  let btnSizePlus = document.querySelector('.btn-size-plus');
  let fontSize = parseInt(quranPar.style.fontSize);
  let minSize = 18;
  let maxSize = 40;
  const handelDecrease = () => {
    if (fontSize > minSize) {
      quranPar.style.fontSize = `${--fontSize}px`;
    }
  };
  const handelIncrease = () => {
    if (fontSize < maxSize) {
      quranPar.style.fontSize = `${++fontSize}px`;
    }
  };
  btnSizeMinus.addEventListener('click', handelDecrease);
  btnSizePlus.addEventListener('click', handelIncrease);
};
handelFontSize();
