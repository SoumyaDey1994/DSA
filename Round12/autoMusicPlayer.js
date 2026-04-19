/**
 * Date: 19th April, 2026
 * Problem Statement: Indefinitely Played Music Player
 * Design an algorithm for a music player with the following features:
 *      User has a playlist (unlimited songs).
 *       When the Shuffle button is clicked:
 *          Songs should be played in random order.
 *          No song should repeat until the entire playlist is exhausted.
 */
class MusicPlayer {
  constructor(playlist) {
    this.playlist = playlist || [];
    this.songCount = this.playlist.length;
    this.remaining = this.songCount;
  }

  shuffle() {
    let delay = 1000;
    if (this.remaining === 0) {
      console.log(`.....All Songs from playlist enhausted.....`);
      console.log(`.....Re-initializing playlist....`);
      console.log(`....Current State: [${this.playlist}].......`);
      this.remaining = this.songCount;
      delay = 3000;
    }

    setTimeout(() => this.playSong(), delay);
  }

  playSong() {
    const songIndex = Math.floor(Math.random() * this.remaining);
    console.log(`Playing Song: ${this.playlist[songIndex]}`);

    const lastSongIndex = this.remaining - 1;
    // swap song with last of remaining songs
    const temp = this.playlist[songIndex];
    this.playlist[songIndex] = this.playlist[lastSongIndex];
    this.playlist[lastSongIndex] = temp;

    this.remaining = this.remaining - 1;
    this.shuffle();
  }
}

const playList = [1, 2, 3, 4, 5];
const musicPlayer = new MusicPlayer(playList);
musicPlayer.shuffle();
