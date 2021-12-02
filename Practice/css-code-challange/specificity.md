Specificity
Read more about CSS specificity in the MDN CSS Specificity documentation.

Instructions
1.
Add a ruleset in style.css to make the opacity of the paragraph, containing the text, “What will it be?”, equal to 0.5 — the only element that should change is the second <p>.

Think about the specificity of CSS rules when it pertains to tags, classes, ids, and parent elements.

Checkpoint 2 Passed

Hint
Since an id selector is more specific than a tag selector, the following will convert the background color with an <h1> element with an id of hello to yellow.

h1 {
 background-color: blue;
}
 
#hello {
 background-color: yellow;
}
2.
In style.css, change the color of the <h1> to #12130F.

Checkpoint 3 Passed

Hint
The following will convert the background color of an <h1> element that is the child of a div to yellow.

div {
 background-color: blue;
}
 
div > h1 {
 background-color: yellow;
}
 