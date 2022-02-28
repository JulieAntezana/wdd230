let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = () => {
        img.removeAttribute("data-src");
    };
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 20px 0px"
  };

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

imagesToLoad.forEach((img) => {
    observer.observe(img);
});
} else {
imagesToLoad.forEach((img) => {
    loadImages(img);
});

}