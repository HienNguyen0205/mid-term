$(function () {
    function dateTimeHandle() {
        var today = new Date()
        var temp = today.toDateString()
        temp = temp.split(' ')
        var date = temp[0] + ', ' + temp[1] + ' ' + temp[2] + ', ' + temp[3]
        var time = today.getHours() + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() + ":" + (today.getSeconds() < 10 ? '0' : '') + today.getSeconds()
        $('#date').text(date)
        $('#time').text(time)
    }
    setInterval(dateTimeHandle, 1000)
})