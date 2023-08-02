import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

//css

import Profile from "./components/profile";
import BoardUser from "./components/boardUser";
import BoardAdmin from "./components/boardAdmin";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
//components
import Home from "./components/home.cp";

import AddCandidat from "./components/candidat/add.cp";
import EditCandidat from "./components/candidat/edit.cp";
import ShowCandidats from "./components/candidat/list.cp";

import AddOrganisateurdevote from "./components/organisateurdevote/add.cp";
import EditOrganisateurdevote from "./components/organisateurdevote/edit.cp";
import ShowOrganisateurdevotes from "./components/organisateurdevote/list.cp";

import AddSessiondevote from "./components/sessiondevote/add.cp";
import EditSessiondevote from "./components/sessiondevote/edit.cp";
import ShowSessiondevotes from "./components/sessiondevote/list.cp";

import AddVote from "./components/vote/add.cp";
import EditVote from "./components/vote/edit.cp";
import ShowVotes from "./components/vote/list.cp";

import AddCandidature from "./components/candidature/add.cp";
import EditCandidature from "./components/candidature/edit.cp";
import ShowCandidatures from "./components/candidature/list.cp";

import AddMembre from "./components/membre/add.cp";
import EditMembre from "./components/membre/edit.cp";
import ShowMembres from "./components/membre/list.cp";

import AddLoi from "./components/loi/add.cp";
import EditLoi from "./components/loi/edit.cp";
import ShowLois from "./components/loi/list.cp";

import AddObjectif from "./components/objectif/add.cp";
import EditObjectif from "./components/objectif/edit.cp";
import ShowObjectifs from "./components/objectif/list.cp";

import AddProgrammeelectoral from "./components/programmeelectoral/add.cp";
import EditProgrammeelectoral from "./components/programmeelectoral/edit.cp";
import ShowProgrammeelectorals from "./components/programmeelectoral/list.cp";

import Stats from './components/sessiondevote/stats'

const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showVotantBoard, setShowVotantBoard] = useState(false);
  const [showCandidatBoard, setShowCandidatBoard] = useState(false);
  const [showOrganisateurdevoteBoard, setShowOrganisateurdevoteBoard] =
    useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);
  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
      setShowVotantBoard(currentUser.roles.includes("ROLE_VOTANT"));
      setShowCandidatBoard(currentUser.roles.includes("ROLE_CANDIDAT"));
      setShowOrganisateurdevoteBoard(
        currentUser.roles.includes("ROLE_ORGANISATEURDEVOTE")
      );
    }
  }, [currentUser]);
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <div id="layout-wrapper">
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div
              className="navbar-brand-box"
              style={{ backgroundColor: "#99999925" }}
            >
              <a href="index.html" className="logo logo-dark">
                <span className="logo-lg">
                  <img src="/assets/images/logo.png" alt="" height="40" />{" "}
                  <span className="logo-txt">E-Voting</span>
                </span>
              </a>
            </div>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i data-feather="search" className="icon-lg"></i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Search Result"
                      />

                      <button className="btn btn-primary" type="submit">
                        <i className="mdi mdi-magnify"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item right-bar-toggle me-2"
              >
                <i data-feather="settings" className="icon-lg"></i>
              </button>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item bg-soft-light border-start border-end"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  style={{ backgroundColor: "#fff" }}
                  className="rounded-circle header-profile-user"
                  src="/assets/images/user-default.png"
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1 fw-medium">
                  {currentUser.username}
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="/profile">
                  <i className="mdi mdi-face-profile font-size-16 align-middle me-1"></i>{" "}
                  Profile
                </a>

                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/" onClick={logOut}>
                  <i className="mdi mdi-logout font-size-16 align-middle me-1"></i>{" "}
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="vertical-menu" style={{ backgroundColor: "#99999925" }}>
        <div className="h-100">
          <div>
            <ul className="metismenu list-unstyled">
              <li className="menu-title">
                Menu
              </li>

              <li className="nav-item">
                <Link
                  to={"/home"}
                  className="nav-link"
                  style={{ fontWeight: "bolder" }}
                >
                  Home
                </Link>
              </li>

              {showVotantBoard && (
                <>

                  <li className="nav-item">
                    <Link
                      to={"/sessiondevotes"}
                      className="nav-link"
                      style={{ fontWeight: "bolder" }}
                    >
                      Session de vote
                    </Link>
                  </li>
                  
                </>
              )}
              {showCandidatBoard && (
                <>
                  <li className="nav-item">
                    <Link
                      to={"/sessiondevotes"}
                      className="nav-link"
                      style={{ fontWeight: "bolder" }}
                    >
                      Session de vote
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/programmeelectorals"}
                      className="nav-link"
                      style={{ fontWeight: "bolder" }}
                    >
                      Programmes electorals
                    </Link>
                  </li>
                </>
              )}
              {showOrganisateurdevoteBoard && (
                <>
                  <li className="nav-item">
                    <Link
                      to={"/sessiondevotes"}
                      className="nav-link"
                      style={{ fontWeight: "bolder" }}
                    >
                      Session de vote
                    </Link>
                  </li>
                </>
              )}
              {showAdminBoard && (
                <>
                  <li className="nav-item">
                    <Link
                      to={"/organisateurdevotes"}
                      className="nav-link"
                      style={{ fontWeight: "bolder" }}
                    >
                      Organisateur de vote
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/candidats"}
                      className="nav-link"
                      style={{ fontWeight: "bolder" }}
                    >
                      Candidat
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/lois"}
                      className="nav-link"
                      style={{ fontWeight: "bolder" }}
                    >
                      Loi
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="main-content">
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/candidats" element={<ShowCandidats />} />
          <Route exact path="/addCandidat" element={<AddCandidat />} />
          <Route path="/editCandidat/:id" element={<EditCandidat />} />

          <Route exact path="/objectifs/:id" element={<ShowObjectifs />} />
          <Route exact path="/addObjectif/:id" element={<AddObjectif />} />
          <Route path="/editObjectif/:id" element={<EditObjectif />} />

          <Route
            exact
            path="/programmeelectorals"
            element={<ShowProgrammeelectorals />}
          />
          <Route
            exact
            path="/addProgrammeelectoral"
            element={<AddProgrammeelectoral />}
          />
          <Route
            path="/editProgrammeelectoral/:id"
            element={<EditProgrammeelectoral />}
          />

          <Route exact path="/lois" element={<ShowLois />} />
          <Route exact path="/addLoi" element={<AddLoi />} />
          <Route path="/editLoi/:id" element={<EditLoi />} />

          <Route exact path="/membres/:id" element={<ShowMembres />} />
          <Route exact path="/addMembre/:idp" element={<AddMembre />} />
          <Route path="/editMembre/:id" element={<EditMembre />} />

          <Route
            exact
            path="/organisateurdevotes"
            element={<ShowOrganisateurdevotes />}
          />
          <Route
            exact
            path="/addOrganisateurdevote"
            element={<AddOrganisateurdevote />}
          />
          <Route
            path="/editOrganisateurdevote/:id"
            element={<EditOrganisateurdevote />}
          />

          <Route
            exact
            path="/sessiondevotes"
            element={<ShowSessiondevotes />}
          />
          <Route
            exact
            path="/addSessiondevote"
            element={<AddSessiondevote />}
          />
          <Route
            path="/editSessiondevote/:id"
            element={<EditSessiondevote />}
          />

          <Route exact path="/votes" element={<ShowVotes />} />
          <Route exact path="/addVote" element={<AddVote />} />
          <Route path="/editVote/:id" element={<EditVote />} />

          <Route
            exact
            path="/candidatures/:id"
            element={<ShowCandidatures />}
          />
          <Route exact path="/addCandidature" element={<AddCandidature />} />
          <Route path="/editCandidature/:id" element={<EditCandidature />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/stats/:id" element={<Stats />} />

          <Route exact path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />

          <Route path="/admin" element={<BoardAdmin />} />
        </Routes>
      </div>

      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">© E-Voting</div>
          </div>
        </div>
      </footer>

    </div>
  );
};
export default App;
