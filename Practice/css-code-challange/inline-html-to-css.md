Inline HTML to CSS
Take inline CSS and turn it into a proper stylesheet.

Instructions
1.
Remove all of the inline CSS inside index.html and replace it by writing the correct CSS selectors and rules inside style.css.

Checkpoint 2 Passed

Hint
The following inline HTML:

<p style="font-size:12px;"></p>
Translates to the following CSS:

p {
  font-size: 12px;
}
2.
To make the styles re-appear, link the stylesheet inside the <head> element in the index.html file.

Checkpoint 3 Passed

Hint
The syntax for linking a stylesheet looks like:

<link href="style.css" type="text/css" rel="stylesheet">