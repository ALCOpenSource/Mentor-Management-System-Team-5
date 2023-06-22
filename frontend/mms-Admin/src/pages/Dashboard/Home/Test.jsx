import React from "react";

const Test = () => {
  //   The component must render a number of elements for the testing suite to use, all of which will be accessed by data-testid and index (specifically, the test code will retrieve the n-th stage or the n-th item in a stage by data-testid name). Here is the complete list of elements that must be rendered along with their behavioral specifications:

  // An HTML element <input data-testid="add-item" /> should be provided for input. The testing suite will call onChange to add text and onKeyDown with the Enter key to submit the value. The input field's value, upon Enter being pressed, will be added to the beginning of the first stage's item list and the add-item element will be cleared. Items can be added at any time.
  // A series of <div data-testid="stage"></div> children should be provided, each representing the corresponding n-th stage in the assembly line as defined by props.stages. The number of stages will be equal to the length of props.stages provided to the component and will be fixed throughout one mount cycle. props.stages[0] is the name of the first stage and is the entry point for any items newly created by add-item, while props.stages[props.stages.length-1] is the name of the last stage. You may assume that props.stages will never be given as an empty array (but if you have time to write a validation for it, that's a bonus!). The testing suite will not check that these stage name strings were rendered, but it's recommended to do so to help identify stages as you work.
  // A series of <button data-testid="assembly-item"></button> elements, which represent the items residing in a particular .stage element. The text content of an item will be a string from a previous add-item submission. As described above, this button accepts left- and right-click (context menu) events, which move it forwards or backwards, respectively, through the stages of the assembly line. As with stages, the n-th item child of a list should correspond to the n-th item in that list conceptually.

  // The testing suite will not check that these item name strings were rendered, but it's recommended to do so to help identify items as you work.

  return <div>Test</div>;
};

export default Test;
