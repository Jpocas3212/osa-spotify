var osa = require('osa2')

function play(uri) {
    if (uri)
        return playTrack(uri)
    return osa(() => Application('Spotify').play())()
}

function playTrack(uri) {
    return osa((uri) => Application('Spotify').playTrack(uri))(uri)
}

function pause() {
    return osa(() => Application('Spotify').pause())()
}

function toggle() {
    return osa(() => Application('Spotify').playpause())()
}

function next() {
    return osa(() => Application('Spotify').nextTrack())()
}

function prev() {
    return osa(() => Application('Spotify').previousTrack())()
}

module.exports = { play, pause, toggle, next, prev }
