export default (element_id) => {
    window.scrollTo({
        top: document.getElementById(element_id).offsetTop - 100,
        behavior: "smooth"
    });
};