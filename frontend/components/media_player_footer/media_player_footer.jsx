import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false
        }

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    play() {
        // const player = document.getElementById("music_player");
        const player = this.refs.music_player;
        // debugger

        if (player.paused) {
            player.play();
            // const playButton = document.body.querySelector('.play');
            // playButton.dangerouslySetInnerHTML = { __html: '<i class="fas fa-pause-circle"></i>'};
            // debugger
            this.setState({ playing: true });
        }
    }

    pause() {
        // const player = document.getElementById("music_player");
        const player = this.refs.music_player;

        if (!player.paused) {
            player.pause();

            this.setState({ playing: false });
        }
    }

    render() {
        // debugger
        return (
            <>
                <footer className="footer-container">

                    <audio ref="music_player">
                        {/* {<source src={this.props.audio} />} */}
                        <source src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg" />
                    </audio>

                    <button className="shuffle"><i className="fas fa-random"></i></button>
                    <button className="backward"><i className="fas fa-step-backward"></i></button>
                    {this.state.playing ? <button key="pause-icon" className="pause" onClick={this.pause}><i className="far fa-pause-circle"></i></button> : 
                        <button key="play-icon" className="play" onClick={this.play}><i className="far fa-play-circle"></i></button>}
                    {/* {<button className="play" onClick={this.play}><i className="far fa-play-circle"></i></button>} */}
                    <button className="forward"><i className="fas fa-step-forward"></i></button>
                    <button className="replay"><i className="fas fa-retweet"></i></button>
                    {/* {<input type="range" id="change_vol" onchange="change_vol()" step="0.05" min="0" max="11" value="0"></input>} */}

                    {/* {<div>
                        <audio ref="audio_tag" src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg" controls autoPlay />
                    </div>} */}
                </footer>
            </>
        );
    }
}

export default Footer;