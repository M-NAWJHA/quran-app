// scroll to top
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
