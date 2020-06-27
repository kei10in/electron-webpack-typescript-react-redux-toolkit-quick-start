import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";

const LandingPage: React.FC = () => {
  const { electronWebpack, electron } = useSelector(
    (state: RootState) => state.landingPage
  );

  return (
    <div>
      <p>Welcome to your new project!</p>
      <p>
        Get qwdqwd now and take advantage of the great documentation at hand.
      </p>
      <div>
        <button onClick={() => open("https://webpack.electron.build")}>
          Documentation
        </button>
        <button onClick={() => open("https://electron.atom.io/docs/")}>
          Electron
        </button>
      </div>
      <ul>
        <li>electrion-webpack v{electronWebpack.version}</li>
        <li>electron v{electron.version}</li>
      </ul>
      <p>
        This intitial landing page can be easily removed from{" "}
        <code>src/renderer/index.tsx</code>.
      </p>
    </div>
  );
};

export default LandingPage;
