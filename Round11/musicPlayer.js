/**
 * Date: 8th April, 2026
 * Problem Statement: Indefinitely Played Music Player
 * Design an algorithm for a music player with the following features:
 *      User has a playlist (unlimited songs).
 *       When the Shuffle button is clicked:
 *          Songs should be played in random order.
 *          No song should repeat until the entire playlist is exhausted.
 */
class MusicPlayer {
  constructor(playlist) {
    this.playlist = playlist;
    this.totalSongs = this.playlist.length;
    this.remaining = this.playlist.length;
  }

  shuffle() {
    if (this.remaining === 0) {
      console.log(`.........Playlist exhausted........`);
      console.log(`Current State of playlist: [${this.playlist}]`);
      console.log(`.....Re-initializing playlist.....`);
      // restrating after 2 sec of delay
      setTimeout(() => {
        this.remaining = this.totalSongs;
        this.playSongs();
      }, 3000);
    } else {
      this.playSongs();
    }
  }

  playSongs() {
    const targetIndex = Math.floor(Math.random() * this.remaining);
    console.log(`Playing Song: ${this.playlist[targetIndex]}`);
    // swap with last index
    const lastIndex = this.remaining - 1;
    const temp = this.playlist[targetIndex];
    this.playlist[targetIndex] = this.playlist[lastIndex];
    this.playlist[lastIndex] = temp;

    this.remaining = this.remaining - 1;
    setTimeout(() => this.shuffle(), 1000);
  }
}

const playList = [1, 2, 3, 4, 5];
const musicPlayer = new MusicPlayer(playList);
musicPlayer.shuffle();
