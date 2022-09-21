import { useState } from "react";

function Hungry() {
  const [hungry, setHungry] = useState(false);

  const message = hungry ? "I am so hungry" : "I am so full";

  return (
    <main>
      <p>{message}</p>
      <button
        onClick={() => setHungry((previousHungry) => !previousHungry)}
        type="button"
      >
        {hungry ? "eat" : "wait 8 hours"}
      </button>
    </main>
  );
}

export default Hungry;
