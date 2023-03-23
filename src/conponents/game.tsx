
import { useState } from "react";

export default function Game() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState<number>();
  const [guesses, setGuesses] = useState<number[]>([]);
  const [turn, setTurn] = useState(1);
  const [message, setMessage] = useState("");


  const handleGuess = () => {
    const userGuess = Number(guess)
    setGuesses([...guesses, userGuess]);
    if (guess === undefined) {
      return;
    }

    if (guess === randomNumber) {
      setMessage(`Congratulations! You guessed the number in ${turn} turns.`);
      setGuess(undefined);
    } else {
      const turnsLeft = 10 - turn;
      const direction = guess > randomNumber ? "lower" : "higher";
      const hint = `Guess ${direction}! You have ${turnsLeft} turn(s) left.`;
      setMessage(`Wrong guess! ${hint}`);
      setTurn(turn + 1);
    }
    setGuess([])
  };

  const handleRestart = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess(undefined);
    setTurn(1);
    setMessage("");
    setGuesses([])
  };

  return (
    <div className="border p-4 text-center">
      <h1>Number Guessing Game</h1>
      <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer.</p>
      <div>
        <label htmlFor="guess-input">Enter a guess:</label>
        <input type="number" id="guess-input" value={guess} onChange={(e) => setGuess(Number(e.target.value))} />
      </div>
      <button onClick={handleGuess} disabled={guess === undefined}>
        Submit guess
      </button>
      <p>{message}</p>
      {message && (
        <button onClick={handleRestart}>
          Restart game
        </button>
      )}
        <div>
            <p>Previous guesses: {guesses.join(', ')}</p>
        </div>
    </div>
  );
}
