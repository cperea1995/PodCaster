import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <footer className="footer-container">

                    <audio id="music_player">
                        <source src="" />
                    </audio>

                    <button className="shuffle"><i className="fas fa-random"></i></button>
                    <button className="backward"><i className="fas fa-step-backward"></i></button>
                    <button className="play"><i className="far fa-play-circle"></i></button>
                    <button className="forward"><i className="fas fa-step-forward"></i></button>
                    <button className="replay"><i className="fas fa-retweet"></i></button>
                    {/* {<input type="range" id="change_vol" onchange="change_vol()" step="0.05" min="0" max="11" value="0"></input>} */}
                </footer>
            </>
        );
    }
}

export default Footer;