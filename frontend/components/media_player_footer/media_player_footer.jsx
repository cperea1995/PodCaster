import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <footer className="footer-container">
                    <button className="shuffle"><i class="fas fa-random"></i></button>
                    <button className="backward"><i class="fas fa-step-backward"></i></button>
                    <button className="play"><i class="far fa-play-circle"></i></button>
                    <button className="forward"><i class="fas fa-step-forward"></i></button>
                    <button className="replay"><i class="fas fa-retweet"></i></button>
                </footer>
            </>
        );
    }
}

export default Footer;