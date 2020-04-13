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
                                Liked Podcasts
                            </div>
                        </li>

                        <div className="category-header">
                            <span>Genres</span>
                            <br/>
                            <span className="category-info">Your favorite genres</span>
                        </div>
                        
                        <li className="contained">
                            <div className="podcast-container">
                                Genres
                            </div>

                            <div className="podcast-container">
                                Genres
                            </div>
                            
                            <div className="podcast-container">
                                Genres
                            </div>
                            
                            <div className="podcast-container">
                                Genres
                            </div>
                            
                            <div className="podcast-container">
                                Genres
                            </div>
                           
                            <div className="podcast-container">
                                Genres
                            </div>
                        </li>

                        <div className="category-header">
                            <span>Popular</span>
                            <br />
                            <span className="category-info">Most popular podcasts</span>
                        </div>
                        
                        <li className="contained">
                            <div className="podcast-container">
                                Popular
                            </div>
                            
                            <div className="podcast-container">
                                Popular
                            </div>
                            
                            <div className="podcast-container">
                                Popular
                            </div>
                            
                            <div className="podcast-container">
                                Popular
                            </div>
                            
                            <div className="podcast-container">
                                Popular
                            </div>
                            
                            <div className="podcast-container">
                                Popular
                            </div>
                        </li>

                        <div className="category-header">
                            <span>Mood</span>
                            <br />
                            <span className="category-info">Podcasts for your mood</span>
                        </div>
                       
                        <li className="contained">
                            <div className="podcast-container">
                                Mood
                            </div>
                            
                            <div className="podcast-container">
                                Mood
                            </div>
                            
                            <div className="podcast-container">
                                Mood
                            </div>
                            
                            <div className="podcast-container">
                                Mood
                            </div>
                            
                            <div className="podcast-container">
                                Mood
                            </div>
                            
                            <div className="podcast-container">
                                Mood
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