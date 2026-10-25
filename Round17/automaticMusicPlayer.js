/**
 * Date: 25th October, 2026
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
    this.totalSongs = this.playlist.length;
    this.remaining = this.playlist.length;
  }

  shuffle() {
    if (this.remaining === 0) {
      console.log(`...Resetting playlist...`);
      this.remaining = this.totalSongs;
      setTimeout(() => this.play(), 2000);
    } else {
      setTimeout(() => this.play(), 1000);
    }
  }

  play() {
    const songIndex = Math.floor(Math.random() * this.remaining);
    const song = this.playlist[songIndex];
    console.log(`Palying song: ${song}`);
    // swap with last remaing
    const temp = this.playlist[songIndex];
    this.playlist[songIndex] = this.playlist[this.remaining - 1];
    this.playlist[this.remaining - 1] = temp;
    this.remaining--;

    this.shuffle();
  }
}

const playList = ["S1", "S2", "S3", "S4", "S5"];
const musicPlayer = new MyMusicPlayer(playList);
musicPlayer.shuffle();
