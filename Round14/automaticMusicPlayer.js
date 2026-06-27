/**
 * Date: 27th June, 2026
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
    this.songsRemaining = this.playlist.length;
  }

  shuffle() {
    if (this.songsRemaining === 0) {
      console.log(`...All Songs Played, Resetting Playslist...`);
      this.songsRemaining = this.totalSongs;
      setTimeout(() => this.playSong(), 3000);
    } else {
      setTimeout(() => this.playSong(), 1000);
    }
  }

  playSong() {
    const randomIndex = Math.floor(Math.random() * this.songsRemaining);
    // console.log(`Songs Rem: ${this.songsRemaining}, Song Index: ${randomIndex}`);
    console.log(`Playing song: ${this.playlist[randomIndex]}`);

    const lastPendingSong = this.playlist[this.songsRemaining - 1];
    // swap with last eligible song
    const temp = lastPendingSong;
    this.playlist[this.songsRemaining - 1] = this.playlist[randomIndex];
    this.playlist[randomIndex] = temp;
    // reduce count of playable song
    this.songsRemaining--;
    this.shuffle();
  }
}

const playList = [1, 2, 3, 4, 5, 6, 7];
const musicPlayer = new MyMusicPlayer(playList);
musicPlayer.shuffle();
