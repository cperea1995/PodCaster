import React from 'react';
import HeaderContainer from '../header/header_container';
import LeftNavBar from './left_nav_bar/left_nav_bar';

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
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Liked Podcasts</div>
                                </div>
                            </div>
                        </li>

                        <div className="category-header">
                            <span>Genres</span>
                            <br/>
                            <span className="category-info">Your favorite genres</span>
                        </div>
                        
                        <li className="contained">
                            <div className="podcast-container">
                                 <div className="tester">
                                    <div className="square education">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Educational</div>
                                </div>
                            </div>

                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square entertainment">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Entertainment</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square diy">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">DIY</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square sports">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Sports</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square comedy">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Comedy</div>
                                </div>
                            </div>
                           
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square technology">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">technology</div>
                                </div>
                            </div>
                        </li>

                        <div className="category-header">
                            <span>Popular</span>
                            <br />
                            <span className="category-info">Most popular podcasts</span>
                        </div>
                        
                        <li className="contained">
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square joerogan">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">The Joe Rogan Experience</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square conan">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Conan O'Brien Needs a Friend</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Liked Podcasts</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Liked Podcasts</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Liked Podcasts</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Liked Podcasts</div>
                                </div>
                            </div>
                        </li>

                        <div className="category-header">
                            <span>Mood</span>
                            <br />
                            <span className="category-info">Podcasts for your mood</span>
                        </div>
                       
                        <li className="contained">
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Liked Podcasts</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Liked Podcasts</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Liked Podcasts</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Liked Podcasts</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Liked Podcasts</div>
                                </div>
                            </div>
                            
                            <div className="podcast-container">
                                <div className="tester">
                                    <div className="square">
                                        <i className="fas fa-fire "></i>
                                    </div>
                                    <div className="genre-text">Liked Podcasts</div>
                                </div>
                            </div>
                            
                        </li>
                    </ul>

                </div>
                <LeftNavBar />
            </>
        );
    }
};

export default MainPage;