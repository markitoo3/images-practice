const parseJSON = async (url) => {
    const response = await fetch(url)
    return response.json();
};

const swiperComponent = (data, component) => {
    return `
        <div class="swiper">
            <div class="swiper-wrapper">
                ${data.map(img => component(img)).join("")} 
            </div>
        </div>
    `
};

const swiperSlideComponent = ({filename, title}) => {
    return `
        <div class="swiper-slide">
            <h1>${title}</h1>
            <img src="/pub/img/${filename}">
        </div>
    `
}

const loadEvent = async () => {

    const rootElement = document.getElementById("root");
    const result = await parseJSON("/image-list");

    rootElement.insertAdjacentHTML("beforeend", swiperComponent(result, swiperSlideComponent));

    const swiper = new Swiper('.swiper', {
        loop: true
    });
    console.log(swiper);

};

window.addEventListener("load", loadEvent)