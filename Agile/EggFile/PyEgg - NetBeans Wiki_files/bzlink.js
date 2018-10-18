$(document).ready(function() {

    $(".issue").each(function(index) {
            var p = ($(this));
            var netbeansBuzillaAPI =
            'https://netbeans.org/bugzilla/jsonrpc.cgi?method=Bug.get&callback=?&params=%5B+%7B+%22ids%22%3A%5B'
            + ($(this).attr('id')) + '%5D+%7D+%5D';
            $.getJSON(netbeansBuzillaAPI).done(function(data) {
            p.addClass(data.result['bugs'][0].priority);
            p.addClass(data.result['bugs'][0].status);
	    p.addClass(data.result['bugs'][0].resolution);
    }).fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ', ' + error;
        console.log("Request Failed: " + err);
        });
    });
});