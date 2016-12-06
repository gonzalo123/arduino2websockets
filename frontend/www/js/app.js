function showProgress(value) {
    var percentage = Math.round((value * 100) / 1023);
    $('#display')
        .html(percentage + "%")
        .attr('aria-valuenow', percentage)
        .attr("style", "width:" + percentage + "%")
        .removeClass('progress-bar-danger')
        .removeClass('progress-bar-warning')
        .removeClass('progress-bar-info')
        .removeClass('progress-bar-success');

    if (percentage > 75) {
        $('#display').addClass('progress-bar-danger');
    } else if (percentage > 50) {
        $('#display').addClass('progress-bar-warning');
    } else if (percentage > 25) {
        $('#display').addClass('progress-bar-info');
    } else {
        $('#display').addClass('progress-bar-success');
    }
}

$(function () {
    var connection = new autobahn.Connection({
        url: "ws://192.168.1.104:8080/ws",
        realm: "iot"
    });

    connection.onopen = function (session) {
        session.subscribe('iot.serial.reader', function (args) {
            showProgress(args[0]);
        }).then(function () {
                session.call('iot.serial.get').then(
                    function (result) {
                        showProgress(result);
                    }
                );
            }
        );
    };

    connection.open();
});