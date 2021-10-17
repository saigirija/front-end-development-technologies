import React from "react";
import "./home.css";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  return (
    <div className="home">
      <div className="technologies">
        <img
          src="https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png"
          alt="React hooks"
        />
        <h3 onClick={() => history.push("/react_hooks")}>React Hooks</h3>
      </div>
      <div className="technologies">
        <img
          src="https://lh3.googleusercontent.com/proxy/OdzY7aJLQW4SE0I8T-pt4FnHQEPv9SYv6MzYHK2EKyA1tROOhatCijIteT4491kiCkoYY8us-CU4XbsQn6UU64SQ0n_Kvvod-x6nF9HLx-16djKPLjwO"
          alt="Redux toolkit"
        />
        <h3 onClick={() => history.push("/react_hooks")}>Redux Toolkit</h3>
      </div>
      <div className="technologies">
        <img
          src="https://www.drupal.org/files/project-images/nextjs-drupal.jpg"
          alt="Next.js"
        />
        <h3 onClick={() => history.push("/react_hooks")}>NextJs</h3>
      </div>
      <div className="technologies">
        <img
          src="https://iconape.com/wp-content/png_logo_vector/typescript.png"
          alt="typeScript"
        />
        <h3 onClick={() => history.push("/react_hooks")}>TypeScript</h3>
      </div>
      <div className="technologies">
        <img
          src="https://cdn-images-1.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png"
          alt="Scss"
        />
        <h3 onClick={() => history.push("/react_hooks")}>Scss</h3>
      </div>
      <div className="technologies">
        <img
          src="https://miro.medium.com/max/300/1*veOyRtKTPeoqC_VlWNUc5Q.png"
          alt="Jest"
        />
        <h3 onClick={() => history.push("/react_hooks")}>Jest</h3>
      </div>
    </div>
  );
};

export default Home;
