July 11 2023: 
Intro to CSS

To link your HTML file to a CSS file:
<link href="style.css" rel="stylesheet">

CSS Anatomy

Declaration are the core of CSS. They apply a style to the selected element. The <p> element has been selected in both syntaces and will be styled to display the text in blue. 

Understanding that a declaration is used to style a selected element is key to learning how to style HTML documents in CSS.

Ruleset Terms:
- Selector: THe Beginning of the ruleset used to target the element that will be styled.
- Declaration Block: The code in-between (and including) the curly braces ({}) that contains the CSS declaration(s).
- Declaration: The group name for a property and value pair that applies a style to the selected element.
- Property: The first part of the declaration that signifies what visual characteristic of the element is to be modified.
- Value: The second part of the declaration that signifies the value of the property.

Inline Style Terms:
- Opening Tag: The start of an HTML element. This is the element that will be styled.
- Attribute: The style attribute is used to add CSS inline styles to an HTML element.
- Declaration: The group name for a property and value pair that applies a style to the selected element.
- Property: The first part of the declaration that signifies what visual characteristic of the element is to be modified.
- Value: The second part of the declaration that signifies the value of the property.

Inline Styles

To style an HTML element, you can add the style attribute directly to the opening tag. After you add the attribute, you can set it equal to the CSS style(s) you'd like applied to that element.
<p style='color: red;'>I'm learning to code!</p>

If you'dl ike to add more than one style with inline styles, simply keep adding to the style attribute. *Make sure to end the styles with a semicolon(;).
<p style='color: red; font-size: 20px;'>I'm learning to code</p>

*It's important to know that inline styles are a quick way of directly styling an HTML element, but are rarely used when creaing websites.

