const genres = [
  "Ambient",
  "Trance",
  "House",
  "Alternative",
  "Eclectic",
  "Underground",
  "News",
  "Music",
  "College Radio",
];

const radioStations = [
  {
    id: 1,
    title: "HBR1.com - Dream Factory",
    genre: genres[0],
    source: "http://ubuntu.hbr1.com:19800/ambient.ogg",
  },
  {
    id: 2,
    title: "HBR1.com - I.D.M. Tranceponder",
    genre: genres[1],
    source: "http://ubuntu.hbr1.com:19800/trance.ogg",
  },
  {
    id: 3,
    title: "HBR1.com - Tronic Lounge",
    genre: genres[2],
    source: "http://ubuntu.hbr1.com:19800/tronic.ogg",
  },
  {
    id: 4,
    title: "Kink - No Alternative",
    genre: genres[3],
    source:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/KINK.mp3",
  },
  {
    id: 5,
    title: "Radio Paradise (High Quality)",
    genre: genres[4],
    source: "http://stream-dc1.radioparadise.com/rp_192m.ogg",
  },
  {
    id: 6,
    title: "StartFM - 94.2MHz, Vilnius University, Lithuania",
    genre: genres[5],
    source: "http://eteris.startfm.lt/startfm.ogg",
  },
  {
    id: 7,
    title: "Studio Brussel, Belgium",
    genre: genres[3],
    source: "http://icecast.vrtcdn.be/stubru-high.mp3",
  },
  {
    id: 8,
    title: "wbur.org - Boston's NPR news source",
    genre: genres[6],
    source: "http://audio.wbur.org/stream/live_ogg.m3u",
  },
  {
    id: 9,
    title: "WKNC 88.1 FM (NC State) HD-1",
    genre: genres[7],
    source: "http://sc8.streammystation.com:7430/stream",
  },
  {
    id: 10,
    title: "WSUM 91.7 FM (University of Wisconsin)",
    genre: genres[8],
    source: "http://stream.studio.wsum.wisc.edu/wsum128",
  },
  {
    id: 11,
    title: "WUVT-FM 90.7 (Virginia Tech)",
    genre: genres[8],
    source: "https://stream.wuvt.vt.edu/wuvt.ogg",
  },
];

export default radioStations;
