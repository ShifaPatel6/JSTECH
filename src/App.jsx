// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReadCount from "./ReadCount";
import UpperLower from "./UpperLower";
import EmojiReplacer from "./EmojiReplacer";
import FindReplace from "./FindReplace";
import LanguageTracker from "./LanguageTracker";
import ParagraphReplacerr from "./ParagraphReplacerr";
import CaseFormatter from "./CaseFormatter";
import Productstore from "./Productstore";
import Geolocation from "./Geolocation";
import LoginFunction from "./LoginFunction";
import PrivateRoute from "./components/PrivateRoute";
import Similar from "./Similar";
import { Routes, Route } from "react-router-dom";
import Authlogin from "./Authlogin";
import Header from "./components/Header";
import Dashboard from "./Dashboard";
import Bottompage from "./Bottompage";
import Favorites from "./components/Favorites";
function App() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <>
      {/* <ReadCount></ReadCount> */}
      {/* <UpperLower></UpperLower> */}
      {/* <EmojiReplacer></EmojiReplacer> */}
      {/* <FindReplace></FindReplace> */}
      {/* <LanguageTracker></LanguageTracker> */}
      {/* <ParagraphReplacerr></ParagraphReplacerr> */}
      {/* <CaseFormatter></CaseFormatter> */}
      {/* <Productstore></Productstore> */}
      {/* <Geolocation></Geolocation> */}

      {isLoggedIn && <Header />}

      <Routes>
        <Route path="/" element={<Authlogin />} />
        <Route
          path="/Dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/Similar"
          element={
            <PrivateRoute>
              <Similar />
            </PrivateRoute>
          }
        />
        <Route
          path="/Productstore"
          element={
            <PrivateRoute>
              <Productstore />
            </PrivateRoute>
          }
        />
        <Route
          path="/Bottompage"
          element={
            <PrivateRoute>
              <Bottompage />
            </PrivateRoute>
          }
        />
        <Route
          path="/Favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
