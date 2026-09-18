/**
 * Date: 18th September, 2026
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
      console.log(`.......Resetting playlist......`);
      this.remaining = this.totalSongs;
    }

    setTimeout(() => this.play(), 1000);
  }

  play() {
    const songIndex = Math.floor(Math.random() * this.remaining);
    console.log(`Playing Song: ${this.playlist[songIndex]}`);

    const endIndex = this.remaining - 1;
    const temp = this.playlist[songIndex];
    this.playlist[songIndex] = this.playlist[endIndex];
    this.playlist[endIndex] = temp;

    this.remaining--;
    this.shuffle();
  }
}

const playList = [1, 2, 3, 4, 5, 6, 7];
const musicPlayer = new MyMusicPlayer(playList);
musicPlayer.shuffle();
