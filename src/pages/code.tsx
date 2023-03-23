import Game from "@/conponents/game"

export default function Code() {
    return (
        <main className="grid grid-cols-3 gap-4 h-screen">
      <div className="col-span-2">
        <div className="w-full h-full">
          <iframe
            className="w-full h-full"
            src="https://stackblitz.com/edit/web-platform-8hj7ab?embed=1&file=index.html&hideDevTools=1&hideNavigation=1&theme=dark"
          ></iframe>
        </div>
      </div>
      <div className="col-span-1 overflow-scroll">
      <div className="flex lg:flex-1 fixed bg-white z-50 w-full">
            <a href="#!" className="-m-1.5 p-1.5 text-3xl font-extrabold">
                  <div className="flex lg:flex-1 items-center text-rose-700">
                      <div className='relative bg-rose-700 p-3 mr-1 text-white'>
                          <h1>Bi</h1>
                          <span className='absolute bottom-10 left-2 text-white'>.</span>
                      </div>
                      smuth
                  </div>
              </a>
        </div>
        <div className="relative top-16">
          <div>
            <p>From the previous page, you learned something about the programming and what you can do with it, we are going to give you an idea of what the process of creating simple program is like using a programming language called JavaScript. We will guide you through a practical tutorial to build up a simple game we call "Guess the number".</p>
            {/* ----- */}
            <p>We want to set really clear expectations here: You won't be expected to learn JavaScript by the end of this article, or even understand all the code we are asking you to write. Instead, we want to give you an idea of how programming or coding feels like. In other words, you don't have to understand it all immediately!</p>
            {/* ----- */}
            {/* ----- */}
            <p>Now, before we start with the game, you need to understand the term "Thinking like a programmer". This generally involves looking at descriptions of what your program needs to do, working out what code features are needed to achieve those things, and how to make them work together.</p>
            {/* ---- */}
            <p>This requires a mixture of hard work, experience with the programming syntax, and practice — plus a bit of creativity. The more you code, the better you'll get at it. We can't promise that you'll develop "programmer brain" in five minutes, but we will give you plenty of opportunities to practice thinking like a programmer throughout the tutorial.</p>
            {/* ---- */}
            <p>With that in mind, let's look at the example we'll be building up in this tutorial, and review the general process of dissecting it into tangible tasks.</p>
            <div className="my-3">
            <div className="text-center">GO AHEAD AND PLAY</div>
              <Game />
            </div>
            {/* ----- */}
            <p>Now, let's imagine your boss has given you the following brief for creating this game:</p>
            <div className="my-3">
              <em>I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn, the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.</em>
            </div>
            <p>Upon looking at this brief, the first thing we can do is to start breaking it down into simple actionable tasks, in as much of a programmer mindset as possible:</p>
            <div>
              <ul className="list-decimal">
                <li>Generate a random number between 1 and 100</li>
                <li>Record the turn number the player is on. Start it on 1</li>
                <li>Provide the player with a way to guess what the number is</li>
                <li>Once a guess has been submitted, first record it somewhere so the user can see their guesses.</li>
                <li>Next, check whether it is the correct number</li>
                <li>If it is correct:</li>
                <ul>
                  <li>Display congratulations message</li>
                  <li>Stop the player from being able to enter more guesses</li>
                  <li>Display control allowing the player to restart the game</li>
                </ul>
                <li>If it is wrong and the player has turns left:</li>
                <ul>
                  <li>Tell the player they are wrong and whether their guess was too high or too low</li>
                  <li>Allow them to enter another guess</li>
                  <li>Increment the turn number by 1</li>
                </ul>
                <li>If it is wrong and the player has no turns left:</li>
                <ul>
                  <li>Tell the player it is game over</li>
                  <li>Stop the player from being able to enter more guesses</li>
                  <li>Display control allowing the player to restart the game</li>
                </ul>
                <li>Once the game restarts, make sure the game logic resets, then go back to step 1</li>
              </ul>
            </div>
            <div className="my-3">
              <h1>WEB PAGE EXPLAINED</h1>
              <div>This webpage has been divided into two sections: 
                <ul>
                  <li>Editor: This is where you will be coding. You can identify it by the blue black color on the far left and the next white page where you can see a shape on a phone.</li>
                  <li>The other one is where you are doing the reading right now</li>
                </ul>
              </div>
              <p>Let's focus on the editor. </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
}