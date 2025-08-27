let trackSettings = {
  kick: {volume:1, mute:false, solo:false},
  snare: {volume:1, mute:false, solo:false},
  hihat: {volume:1, mute:false, solo:false},
  clap: {volume:1, mute:false, solo:false},
  tom: {volume:1, mute:false, solo:false}
};

function setVolume(track, value) {
  trackSettings[track].volume = parseFloat(value);
}

function toggleMute(track) {
  trackSettings[track].mute = !trackSettings[track].mute;
}

function toggleSolo(track) {
  trackSettings[track].solo = !trackSettings[track].solo;
}

function isTrackActive(track) {
  const solos = Object.values(trackSettings).some(t => t.solo);
  if (solos) return trackSettings[track].solo;
  return !trackSettings[track].mute;
}

async function playSample(url, track, time=0) {
  if (!isTrackActive(track)) return;
  const audio = new Audio(url);
  audio.volume = trackSettings[track].volume;
  audio.play();
}

function toggleStep(track, step) {
  console.log("toggle step", track, step);
}

function startSequencer() { console.log("Sequencer started"); }
function stopSequencer() { console.log("Sequencer stopped"); }
