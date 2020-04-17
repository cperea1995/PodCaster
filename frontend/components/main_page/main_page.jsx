import React from 'react';
import HeaderContainer from '../header/header_container';
import LeftNavBar from './left_nav_bar/left_nav_bar';
import Footer from '../media_player_footer/media_player_footer';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="page">
                    <HeaderContainer />

                  
            
                    <ul className="index-content-container">
                        <div className="category-header top-category">
                            <span>Uniquely Yours</span>
                        </div>

                        <li className="contained">
                           <Link to="/podcasts">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Liked Podcasts</div>
                                    </div>
                                </div>
                           </Link>
                        </li>

                        <div className="category-header">
                            <span>Genres</span>
                            <br/>
                            <span className="category-info">Your favorite genres</span>
                        </div>
                        
                        <li className="contained">
                           <Link to="/podcasts">
                                <div className="podcast-container">
                                     <div className="tester">
                                        <div className="square education">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Educational</div>
                                    </div>
                                </div>
                           </Link>

                          <Link to="/podcasts">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square entertainment">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Entertainment</div>
                                    </div>
                                </div>
                          </Link>
                            
                            <Link to="/podcasts">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square diy">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">DIY</div>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link to="/podcasts">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square sports">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Sports</div>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link to="/podcasts">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square comedy">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Comedy</div>
                                    </div>
                                </div>
                            </Link>
                           
                            <Link to="/podcasts">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square technology">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Technology</div>
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <div className="category-header">
                            <span>Popular</span>
                            <br />
                            <span className="category-info">Most popular podcasts</span>
                        </div>
                        
                        <li className="contained">
                           <Link to="/podcasts/175">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square joerogan">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">The Joe Rogan Experience</div>
                                    </div>
                                </div>
                           </Link>
                            
                            <Link to="/podcasts/176">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square conan">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Conan O'Brien Needs a Friend</div>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link to="podcasts/177">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square h3podcast">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">H3 Podcast</div>
                                    </div>
                                </div>
                            </Link>
                            
                           <Link to="podcasts/178">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square vergecast">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">The Vergecast</div>
                                    </div>
                                </div>
                           </Link>
                            
                          <Link to="podcasts/179">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square espndaily">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">ESPN Daily</div>
                                    </div>
                                </div>
                          </Link>
                            
                            <Link to="podcasts/180">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square notsosmart">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">You Are Not So Smart</div>
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <div className="category-header">
                            <span>Mood</span>
                            <br />
                            <span className="category-info">Podcasts for your mood</span>
                        </div>
                       
                        <li className="bottom-contained">
                            <Link to="https://www.youtube.com/watch?v=4fWyzwo1xg0">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square sad">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Sad</div>
                                    </div>
                                </div>
                            </Link>
                            
                           <Link to="/podcasts">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square happy">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Happy</div>
                                    </div>
                                </div>
                           </Link>
                            
                            <Link to="/podcasts">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square relaxed">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Relaxed</div>
                                    </div>
                                </div>
                            </Link>
                            
                           <Link to="/podcasts">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square bored">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Bored</div>
                                    </div>
                                </div>
                           </Link>
                            
                           <Link to="/podcasts">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square sleepy">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Sleepy</div>
                                    </div>
                                </div>
                           </Link>
                            
                           <Link to="/podcasts">
                                <div className="podcast-container">
                                    <div className="tester">
                                        <div className="square excited">
                                            <i className="fas fa-fire "></i>
                                        </div>
                                        <div className="genre-text">Excited</div>
                                    </div>
                                </div>
                           </Link>
                            
                        </li>
                    </ul>

                </div>
                <LeftNavBar />
            </>
        );
    }
};

export default MainPage;