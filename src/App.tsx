import { useState } from "react";
import classes from "./App.module.css";
import ClassicPage from "./pages/Classic";
import DialogPage from "./pages/Dialog";
import DialogIcon from "./assets/icons/comment-dots.svg?react";
import QuestionIcon from "./assets/icons/question.svg?react";
import GameButton from "./components/GameButton";
import NavigationMenu from "./components/NavigationMenu";

function App() {
  const [page, setPage] = useState("home");
  // const [gamesLeft, setGamesLeft] = useState(["classic", "dialog"]);

  function handleTitleClick() {
    if (page !== "home") {
      setPage("home");
    }
  }

  return (
    <div className={classes.content}>
      <h1 className={classes.title} onClick={handleTitleClick}>
        OOTDLE
      </h1>
      {page === "home" ? (
        <>
          <GameButton
            Icon={QuestionIcon}
            iconSize={40}
            iconColor="var(--hylian-blue)"
            mainText="Classic"
            description="Get clues on every try!"
            onClick={() => setPage("classic")}
          />
          <GameButton
            Icon={DialogIcon}
            iconColor="var(--hylian-purple)"
            mainText="Dialog"
            description="Guess from a dialog box!"
            onClick={() => setPage("dialog")}
          />
        </>
      ) : (
        <NavigationMenu currentPage={page} />
      )}
      {page === "classic" && <ClassicPage />}
      {page === "dialog" && <DialogPage />}
      <footer className={classes.footer}>
        <a href="https://github.com/wolicodes/ootdle">OOTDLE — 2024</a>
        <br />
        No ads, no tracking.
      </footer>
    </div>
  );
}

export default App;
