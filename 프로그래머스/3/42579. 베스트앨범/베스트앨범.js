const solution = (genres, plays) => {
    const streamingInfo = {};
    
    // 노래들을 순회하며 장르 총 재생 횟수와 장르별 노래에 대한 정보를 얻는다.
    genres.forEach((genre, id) => {
        const play = plays[id];
        const song = [id, play];
        
        if(!streamingInfo[genre]) {
            streamingInfo[genre] = {
                playSum : 0,
                songs : []
            }
        };
        
        streamingInfo[genre].playSum += play;
        streamingInfo[genre].songs.push(song);
    })
    
    // 가장 많이 재생된 장르 2개를 선정한다.
    const mostPlayedGenres = Object.keys(streamingInfo).sort((a, b) => streamingInfo[b].playSum - streamingInfo[a].playSum);

    // 각 장르별 가장 많이 재생된, 그리고 고유번호가 낮은 노래 2개를 선정한다.
    const mostPlayedSongIds = mostPlayedGenres.map(genre => getMostPlayedSongIds(streamingInfo, genre));
    return mostPlayedSongIds.flat();
}

const getMostPlayedSongIds = (streamingInfo, genre) => {
    const songs = streamingInfo[genre].songs;
    const mostPlayedSongs = songs.sort((a, b) => b[1] - a[1]).slice(0, 2);
    return mostPlayedSongs.map(song => song[0]);
}