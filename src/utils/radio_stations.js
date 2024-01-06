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
  "Lo-fi",
];

const radioStations = [
  {
    title: "HBR1.com - Dream Factory",
    genre: genres[0],
    source: "http://radio.hbr1.com:19800/ambient.ogg",
  },
  {
    title: "HBR1.com - I.D.M. Tranceponder",
    genre: genres[1],
    source: "http://radio.hbr1.com:19800/trance.ogg",
  },
  {
    title: "HBR1.com - Tronic Lounge",
    genre: genres[2],
    source: "http://radio.hbr1.com:19800/tronic.ogg",
  },
  {
    title: "Kink - No Alternative",
    genre: genres[3],
    source:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/KINK.mp3",
  },
  {
    title: "Radio Paradise (High Quality)",
    genre: genres[4],
    source: "http://stream-dc1.radioparadise.com/rp_192m.ogg",
  },
  {
    title: "StartFM - 94.2MHz, Vilnius University, Lithuania",
    genre: genres[5],
    source: "http://eteris.startfm.lt/startfm.ogg",
  },
  {
    title: "Studio Brussel, Belgium",
    genre: genres[3],
    source: "http://icecast.vrtcdn.be/stubru-high.mp3",
  },
  {
    title: "wbur.org - Boston's NPR news source",
    genre: genres[6],
    source: "http://audio.wbur.org/stream/live_ogg.m3u",
  },
  {
    title: "WKNC 88.1 FM (NC State) HD-1",
    genre: genres[7],
    source: "http://sc8.streammystation.com:7430/stream",
  },
  {
    title: "WSUM 91.7 FM (University of Wisconsin)",
    genre: genres[8],
    source: "http://stream.studio.wsum.wisc.edu/wsum128",
  },
  {
    title: "WUVT-FM 90.7 (Virginia Tech)",
    genre: genres[8],
    source: "https://stream.wuvt.vt.edu/wuvt.ogg",
  },
  {
    title: "FreeCodeCamp Programming Academy Radio",
    genre: genres[9],
    source:
      "https://coderadio-admin-v2.freecodecamp.org/listen/coderadio/radio.mp3",
  },
];

for (let i = 0; i < radioStations.length; i++) {
  radioStations[0].id = i + 1;
}

export default radioStations;
