function solution(genres, plays) {
    // 알아야 하는 것 : 각 장르별 총 재생횟수, 각 장르의 노래별 재생 횟수
    
    const stats = {};
    genres.forEach((genre, i) => {
        if(!stats[genre]) stats[genre] = {sum : 0, songs : []};
        const song = plays[i];
        stats[genre].sum += song;
        stats[genre].songs.push([i, song]);
    })
    
    const getBestTwoSongs = (songs) => {
        return songs.sort((a, b) => b[1] - a[1]).slice(0, 2);
    };
    
    const bestGenres = Object.keys(stats).sort((a, b) => stats[b].sum - stats[a].sum);
    return bestGenres.map(v => getBestTwoSongs(stats[v].songs).map(v => v[0])).flat();
}