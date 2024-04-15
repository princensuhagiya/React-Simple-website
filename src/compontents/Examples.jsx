import { EXAMPLES } from "../data.js";
import TabButton from "../compontents/TabButton.jsx";
import { useState } from "react";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function hendleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => hendleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => hendleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => hendleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => hendleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {!setSelectedTopic && <p>Please select a topic. </p>}
      {setSelectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </code>
          </pre>
        </div>
      )}
    </section>
  );
}
