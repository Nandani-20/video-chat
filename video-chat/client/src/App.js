import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

function App() {
  return (
    <>
      <Header />

      {/* Video Player Here */}

      <VideoPlayer />

      {/* Options here and notifications */}
      <Options>
        <Notifications />
      </Options>
    </>
  );
}

export default App;
