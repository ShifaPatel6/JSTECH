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
import { Routes, Route } from "react-router-dom";
import Authlogin from "./Authlogin";
// import Dashboard from "./Dashboard";
function App() {
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

      <Routes>
        <Route path="/" element={<Authlogin />} />
        <Route
          path="/Productstore"
          element={
            <PrivateRoute>
              <Productstore />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
