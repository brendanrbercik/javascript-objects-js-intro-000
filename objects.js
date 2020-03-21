var playlist = {['The Beatles']: 'Hey Jude', ['Led Zeppelin']: 'Kashmir'};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {artistName : songTitle});
  return playlist;
}
