$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
const today = moment().format('hh:mm:ss A')
const container = $('.container')
console.log(today)
const workHours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

for (let i = 0; i<workHours.length; i++) {
    const rowEl = $('<div>')
    const timeEl = $('<div>')
    const textEl = $('<textarea>')
    const saveEl = $('<button>')

    rowEl.addClass('row time-block form-group')
    timeEl.addClass('col hour')
    textEl.addClass('col-10 description form-control')
    textEl.attr('id', i)
    saveEl.addClass('col saveBtn')

    saveEl.text('Save')

    timeEl.text(workHours[i])
    if (moment('9:00 PM').isAfter(workHours[i], 'hour')) {
        textEl.addClass('past')
    } else if (moment(today).isBefore(workHours[i], 'hour')) {
        textEl.addClass('future')
    } else {
        textEl.addClass('present')
    }
    console.log(textEl.textContent)
    saveEl.on('click', function () {
        localStorage.setItem(workHours[i], $(`#${i}`).text())
    })

    textEl.text(localStorage.getItem(workHours[i]))

    rowEl.append(timeEl)
    rowEl.append(textEl)
    rowEl.append(saveEl)
    container.append(rowEl)
}



