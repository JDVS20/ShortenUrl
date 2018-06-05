function generateURL() {
    var valUrl = document.getElementById('txtCompleteURL').value;

    if (valUrl == "") {
        toastr.warning("Please enter an Url");
    }
    else {
        $.ajax({
            type: "GET",
            traditional: true,
            url: '/ShortUrl/urlProcess',
            data: { urlComplete: valUrl },
            success: function (data) {
                document.getElementById('txtResult').value = data;
                toastr.success("URL convert successful");
            }
        });
    }    
};

function cleanFields() {
    document.getElementById('txtCompleteURL').value = '';
    document.getElementById('txtResult').value = '';
};

