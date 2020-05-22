import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            songUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        }

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    play() {
        const player = this.refs.music_player;

        if (player.paused) {
            player.play();
            this.setState({ playing: true });
        }
    }

    pause() {
        const player = this.refs.music_player;

        if (!player.paused) {
            player.pause();

            this.setState({ playing: false });
        }
    }

    render() {
    
        if (this.refs.music_player) {
            const player = this.refs.music_player;
            
            if (player.currentSrc !== this.props.audio) {
                player.src = this.props.audio;
            }
        }




        return (
            <>
                <footer className="footer-container">

                    <audio ref="music_player">
                        <source src={this.state.songUrl} />
                    </audio>

                    <button className="shuffle"><i className="fas fa-random"></i></button>
                    <button className="backward"><i className="fas fa-step-backward"></i></button>
                    {this.state.playing ? 
                        <button key="pause-icon" className="pause" onClick={this.pause}>
                            <i className="far fa-pause-circle"></i>
                        </button> 
                        : 
                        <button key="play-icon" className="play" onClick={this.play}>
                            <i className="far fa-play-circle"></i>
                        </button>
                    }
                    <button className="forward"><i className="fas fa-step-forward"></i></button>
                    <button className="replay"><i className="fas fa-retweet"></i></button>
                </footer>
            </>
        );
    }
}

export default Footer;