import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AllMeetUps from "./pages/AllMeetUps";
import Favourite from "./pages/FavouriteMeetUps";
import NewMeetUps from "./pages/NewMeetUps";
import Layout from "./components/Layout/Layout";
import { Suspense } from "react";
import { RingLoader } from "react-spinners";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Suspense fallback={<RingLoader color="#36d7b7" />}>
            <Routes>
              <Route path="/" element={<AllMeetUps />} />
              <Route path="favourites" element={<Favourite />} />
              <Route path="createMeetUp" element={<NewMeetUps />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </>
  );
}

export default App;
