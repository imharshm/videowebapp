import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import classnames from "classnames";
import gamesOfThrones from "../src/images/games-of-thrones.jpg";
import archer from "../src/images/archer.jpg";
import mrRobot from "../src/images/mrrobot.jpg";

const App = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [activemaintab, setActiveMainTab] = useState("home");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const toggleMainTab = (tab) => {
    if (activemaintab !== tab) setActiveMainTab(tab);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevStateDrop) => !prevStateDrop);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">
          Watch <span>This</span>
        </h1>
        <div className="date-time">
          <span className="mr-1">
            <i className="fa fa-clock-o mr-1"></i>02 March,
          </span>
          <span>21:30</span>
        </div>
        <div className="user-name">
          User Name <i className="fa fa-user"></i>
          <span className="search-option">
            <i className="fa fa-search"></i>
          </span>
        </div>
      </header>
      <div className="sidebar">
        <Nav tabs className="sidebar-option">
          <NavItem>
            <NavLink
              className={classnames({ active: activemaintab === "home" })}
              onClick={() => {
                toggleMainTab("home");
              }}
            >
              <i className="fa fa-home"></i>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activemaintab === "tvseries" })}
              onClick={() => {
                toggleMainTab("tvseries");
              }}
            >
              <i className="fa fa-television"></i>
              TV Series
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activemaintab === "movies" })}
              onClick={() => {
                toggleMainTab("movies");
              }}
            >
              <i className="fa fa-film"></i>
              Movies
            </NavLink>
          </NavItem>
        </Nav>
        <ul className="list-unstyled sidebar-option">
          <li className="nav-item">
            <a className="nav-link">
              <i className="fa fa-sign-out"></i>
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <TabContent activemaintab={activemaintab}>
          <TabPane tabId="home" className={classnames({ active: activemaintab === "home" })}>
            Home Content
          </TabPane>
          <TabPane tabId="tvseries" className={classnames({ active: activemaintab === "tvseries" })}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  More Series
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Popular
                </NavLink>
              </NavItem>
              <div className="sort-options">
                <span className="mr-2">Sort By:</span>
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="row m-0">
                  <div className="col-12 col-md-5 p-0">
                    <div className="game-of-thromes movie-card">
                      <div className="card-name">
                        <div>
                          <h3>Game Of Thrones</h3>
                          <span className="h5">8 Seasons</span>
                          <span className="h5">73 Episodes</span>
                        </div>
                        <div className="rating-section">
                          <p className="m-0">iMDB Rating: 9.5/10</p>
                          <p className="m-0">Go to iMDB Page</p>
                        </div>
                      </div>
                      <div className="movie-image">
                        <img alt="movie" src={gamesOfThrones} />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 col-xl-2 p-0 small-card">
                    <div className="small-movie-card">
                      <div className="movie-img">
                        <img alt="movie" src={archer} />
                      </div>
                      <div className="movie-name">
                        <span className="h3">Archer</span>
                      </div>
                      <div className="movie-rating">
                        <span className="small">iMDB Rating: 8.5/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 col-xl-2 p-0 small-card">
                    <div className="small-movie-card">
                      <div className="movie-img">
                        <img alt="movie" src={mrRobot} />
                      </div>
                      <div className="movie-name">
                        <span className="h3">Mr. Robot</span>
                      </div>
                      <div className="movie-rating">
                        <span className="small">iMDB Rating: 8.7/10</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="season-list row mx-n2 ">
                  <div className="season-card col-12 col-md-4 col-xl-2">
                    <div className="season-content">
                      <div className="season-details">
                        <span className="season-name">Season 1</span>
                        <span className="imdb">IMDb</span>
                      </div>
                      <div className="rating-view">
                        <span>Rating:</span>
                        <div className="rating-circle ">
                          <div className="active-border">
                            <div className="circle">
                              <span className="prec">7.6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="season-card col-12 col-md-4 col-xl-2">
                    <div className="season-content">
                      <div className="season-details">
                        <span className="season-name">Season 2</span>
                        <span className="imdb">IMDb</span>
                      </div>
                      <div className="rating-view">
                        <span>Rating:</span>
                        <div className="rating-circle ">
                          <div className="active-border">
                            <div className="circle">
                              <span className="prec">7.6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="season-card col-12 col-md-4 col-xl-2">
                    <div className="season-content">
                      <div className="season-details">
                        <span className="season-name">Season 3</span>
                        <span className="imdb">IMDb</span>
                      </div>
                      <div className="rating-view">
                        <span>Rating:</span>
                        <div className="rating-circle ">
                          <div className="active-border">
                            <div className="circle">
                              <span className="prec">7.6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="season-card col-12 col-md-4 col-xl-2">
                    <div className="season-content">
                      <div className="season-details">
                        <span className="season-name">Season 4</span>
                        <span className="imdb">IMDb</span>
                      </div>
                      <div className="rating-view">
                        <span>Rating:</span>
                        <div className="rating-circle ">
                          <div className="active-border">
                            <div className="circle">
                              <span className="prec">7.6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="season-card col-12 col-md-4 col-xl-2">
                    <div className="season-content">
                      <div className="season-details">
                        <span className="season-name">Season 5</span>
                        <span className="imdb">IMDb</span>
                      </div>
                      <div className="rating-view">
                        <span>Rating:</span>
                        <div className="rating-circle ">
                          <div className="active-border">
                            <div className="circle">
                              <span className="prec">7.6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="season-card col-12 col-md-4 col-xl-2">
                    <div className="season-content">
                      <div className="season-details">
                        <span className="season-name">Season 6</span>
                        <span className="imdb">IMDb</span>
                      </div>
                      <div className="rating-view">
                        <span>Rating:</span>
                        <div className="rating-circle ">
                          <div className="active-border">
                            <div className="circle">
                              <span className="prec">7.6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="season-card col-12 col-md-4 col-xl-2">
                    <div className="season-content">
                      <div className="season-details">
                        <span className="season-name">Season 7</span>
                        <span className="imdb">IMDb</span>
                      </div>
                      <div className="rating-view">
                        <span>Rating:</span>
                        <div className="rating-circle ">
                          <div className="active-border">
                            <div className="circle">
                              <span className="prec">7.6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="season-card col-12 col-md-4 col-xl-2">
                    <div className="season-content">
                      <div className="season-details">
                        <span className="season-name">Season 8</span>
                        <span className="imdb">IMDb</span>
                      </div>
                      <div className="rating-view">
                        <span>Rating:</span>
                        <div className="rating-circle ">
                          <div className="active-border">
                            <div className="circle">
                              <span className="prec">7.6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="2"></TabPane>
            </TabContent>
          </TabPane>
          <TabPane tabId="movies" className={classnames({ active: activemaintab === "movies" })}>
            Movies Content
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default App;
