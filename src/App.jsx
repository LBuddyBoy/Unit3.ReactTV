/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import { useState } from "react";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
import { tvShows } from "./shows/data.js";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);

  console.log(tvShows);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          setSelectedShow={setSelectedShow}
          tvShows={tvShows}
        />
      </header>
      <main>
        <ShowDetails show={selectedShow}></ShowDetails>
      </main>
    </>
  );
}
