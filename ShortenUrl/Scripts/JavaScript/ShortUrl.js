
function generateURL() {
    var valUrl = document.getElementById('txtCompleteURL').value;

    $.ajax({
        type: "GET",
        traditional: true,
        url: '/ShortUrl/urlProcess',
        data: { urlComplete: valUrl },
        success: function (data) {
            document.getElementById('txtResult').value = data;
        }
    });
};

function cleanFields() {
    document.getElementById('txtCompleteURL').value = '';
    document.getElementById('txtResult').value = '';
};

