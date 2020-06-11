$('.gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    titleSrc: 'alt',
    gallery: { enabled: true },
    showCloseBtn: false,
    fixedContentPos: true,
    removalDelay: 500,
    mainClass: 'mfp-fade'
});