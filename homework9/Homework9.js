// 1. 
$("a[href^='https://'").attr("target", "_blank");

// 2.  
$('h2.head').css("background", "green");
$('h2.head .inner').css("fontSize", "35px");



// 3.
$('h3 + div').each(function () {
    const $divElems = $(this);
    $divElems.prev().before($divElems);
});


// 4.
$("[type=checkbox]").change(function () {
    if ($("[type=checkbox]:checked").length == 3)
        $(':checkbox(:checked)').prop('disabled', true);
});