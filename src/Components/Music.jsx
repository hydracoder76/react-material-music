import React from 'react';
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import '../styles/music.css'

function Music() {
  return (
    <div className="music-page">
      <div className="music-page-title">
        <Typography style={{textAlign: "center"}}>
          <h1>Music</h1>
        </Typography>
        <Grid container direction="row" style={{textAlign: "center", justifyContent: "spaceAround", width: "100%", boxSizing: "borderBox", margin: "8% 0", height: "40vh" }}>
          <Grid item className="music-page-video-item" style={{flex: "1 0 50%"}}>
            <iframe height="80%" width="90%"  src="https://www.youtube.com/embed/drkSfniKT_E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <Typography>
              <p>Performing with the New Arrangments Nonet in Amsterdam</p>
            </Typography>
          </Grid>
          <Grid item className="music-page-video-item" style={{flex: "1 0 50%"}}>
            <iframe height="80%" width="90%"  src="https://www.youtube.com/embed/XzGPLYxYNvs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <Typography>
              <p>Performing with the New Arrangments Nonet at the Bimhuis in Amsterdam</p>
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" style={{textAlign: "center", justifyContent: "spaceAround", width: "100%", boxSizing: "borderBox", margin: "2% 0"}}>
          <Grid item className="music-page-music-item" style={{flex: "1 0 50%"}}>
            <iframe  height="80%" width="90%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/388430829&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <Typography>
              <p>With the Laurie Carpenter Quintet</p>
            </Typography>
          </Grid>
          <Grid item className="music-page-music-item" style={{flex: "1 0 50%"}}>
            <iframe height="80%" width="90%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339960518&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <Typography>
              <p>With the Laurie Carpenter Quintet</p>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Music; 