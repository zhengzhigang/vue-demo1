var events = []

window.addEventListener('click', function (e) {
    for (var i = 0; i < events.length; i++) {
        events[i](e)
    }
}, false)

export default {
    add(callback) {
        events.push(callback)
    },
    remove(callback) {
        events.splice(events.indexOf(callback), 1)
    }
}
