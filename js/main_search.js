// Script for search filter

const $searchBar = $(`#searchForm > input`);
let $img = $(`.imageContainer > a[title]`);

$searchBar.on('keyup', function(event) {
    var searchTerm = $(this).val().toLowerCase();
    // const $imgList = $img.toArray();

    $img.show();

    $img.each(function() {

        var title = $(this).attr('title').toLowerCase();

        if (!title.includes(searchTerm) && searchTerm !== null) {
            $(this).hide();
        }

    });
    console.log(searchTerm);
});