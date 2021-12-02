Clean Up a Stylesheet
Clean up the unused CSS selectors, selectors that are not being applied to any element, in index.html.

Instructions
1.
Remove the 3 unused selectors and their styles inside style.css by checking to see the styles applied to the elements inside index.html.


Hint
The following selector would classify as an unused selector if the index.html file had no elements with an ID of description:

#description {
  font-size: 12px;
}
Therefore, we could remove it from the stylesheet without affecting anything displayed inside index.html.

You’ll have to compare the selectors in style.css and the elements in index.html to see if there’s any effect. If you see a change in the browser after you delete a selector and run your code, then that selector has a purpose!