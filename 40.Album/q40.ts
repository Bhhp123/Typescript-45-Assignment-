function makeAlbum(artist: string, title: string, tracks?: number): object {
  const album: { [key: string]: string | number } = {};
  album.artist = artist;
  album.title = title;
  if (tracks) {
      album.tracks = tracks;
  }
  return album;
}

console.log(makeAlbum('Adele', '21'));
console.log(makeAlbum('Beyoncé', 'Lemonade'));
console.log(makeAlbum('The Weeknd', 'Beauty Behind the Madness', 14));