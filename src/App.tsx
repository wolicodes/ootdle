import classes from "./App.module.css";
import GameButton from "./components/GameButton";
import Title from "./components/Title";

function App() {
  return (
    <div className={classes.content}>
      <Title />
      <div className={classes.instructions}>
        Guess Ocarina of Time characters
      </div>
      <GameButton
        image="ocarina.svg"
        mainText="Classic"
        description="Get clues on every try"
      />
      <GameButton
        image="ocarina.svg"
        mainText="Dialog"
        description="Guess from a dialog box"
      />
      <footer className={classes.footer}>ootdle — 2024</footer>
    </div>
  );
}

export default App;
