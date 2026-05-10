/**
 * Date: 10th May, 2026
 * Problem Statement: Indefinitely Played Music Player
 * Design an algorithm for a music player with the following features:
 *      User has a playlist (unlimited songs).
 *       When the Shuffle button is clicked:
 *          Songs should be played in random order.
 *          No song should repeat until the entire playlist is exhausted.
 */
class MyMusicPlayer {
  constructor(playlist) {
    this.playlist = playlist;
    this.songCount = this.playlist.length;
    this.remaining = this.playlist.length;
  }

  shuffle() {
    if (this.remaining === 0) {
      console.log(`...All Songs Played, re-initializing playlist...`);
      this.remaining = this.songCount;
      setTimeout(() => this.playSong(), 3000);
    } else {
      setTimeout(() => this.playSong(), 1000);
    }
  }

  playSong() {
    const songIndex = Math.floor(Math.random() * this.remaining);
    console.log(`Playing song: ${this.playlist[songIndex]}`);
    // swap with last playable song & reduce remaining
    const temp = this.playlist[songIndex];
    this.playlist[songIndex] = this.playlist[this.remaining - 1];
    this.playlist[this.remaining - 1] = temp;

    this.remaining--;
    this.shuffle();
  }
}

const playList = [1, 2, 3, 4, 5];
const musicPlayer = new MyMusicPlayer(playList);
musicPlayer.shuffle();
