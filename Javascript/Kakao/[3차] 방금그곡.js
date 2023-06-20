const musicTransfer = (music) => {
  return music.replace(/(C|D|F|G|A)#/g, (str) => str[0].toLowerCase());
};

const getTime = (start, end) => {
  const hours = end.slice(0, 2) * 1 - start.slice(0, 2) * 1;
  const mins = end.slice(3, 5) * 1 - start.slice(3, 5) * 1;
  return hours * 60 + mins;
};

const getPlayedMusic = (music, time) => {
  const arr = Array.from({ length: time }, () => music)
    .join("")
    .slice(0, time);
  return arr;
};

const solution = (m, musicinfos) => {
  m = musicTransfer(m);
  musicinfos = musicinfos.map((musicinfo) => {
    const [start, end, name, music] = musicinfo.split(",");
    const time = getTime(start, end);
    const playedMusic = getPlayedMusic(musicTransfer(music), time);
    const nextMusicInfo = [name, time, playedMusic];
    return nextMusicInfo;
  });

  musicinfos = musicinfos.filter((musicinfo) => musicinfo[2].includes(m));
  if (!musicinfos.length) return "(None)";
  return musicinfos.sort((a, b) => b[1] - a[1])[0][0];
};
