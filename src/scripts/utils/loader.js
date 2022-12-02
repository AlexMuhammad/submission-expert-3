const Loader = {
  hideLoading() {
    const loaderContainer = document.querySelector('.loader-container');
    setTimeout(() => {
      loaderContainer.style.display = 'none';
    }, 2000);
  },
};

export default Loader;
