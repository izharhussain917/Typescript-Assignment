interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional parameter for the number of tracks
  }
  
  function makeAlbum(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
      artist: artist,
      title: title
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Example function calls
  const album1 = makeAlbum("Artist1", "Album1");
  console.log(album1);
  
  const album2 = makeAlbum("Artist2", "Album2", 12); // Example with the number of tracks
  console.log(album2);
  
  const album3 = makeAlbum("Artist3", "Album3", 8);
  console.log(album3);