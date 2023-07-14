July 11 2023: 
Intro to CSS

To link your HTML file to a CSS file:
<link href="style.css" rel="stylesheet">

When HTML and CSS codes are in separate files, the files must be linked. Otherwise, the HTML file won't be able to locate the CSS code. and the styling will not be applied.

You can use the <link> element to link HTML and CSS files together. The <link> element must be placed within the head of the HTML file. It is a self-closing tag and requires the following attributes:
- href: The anchor element, the valur of this attribute must be the address, or path, to the CSS file.
- rel: This attribute describes the relationship between the HTML file and CSS file. Because you are linking to a stylesheet, the value should be set to stylesheet.

When linking an HTML File and a CSS file together, the <link> element will look like the following:
To link your HTML file to a CSS file:
<link href="style.css" rel="stylesheet">
<link href='https://www.codecademy.com/stylesheets/style.css' rel='stylesheet'>
Specifying the path to the stylesheet using a URL is one way of linking a stylesheet.

If the CSS file is stored in the same directory as your HTML file, then you can specify a relative path instead of a URL, like so:
<link href='./style.css' rel='stylesheet'>


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

Internal Stylesheet

HTML allows you to write CSS code in its own dedicated section with a <style> element nested inside of the <head> element. The CSS code inside the <style> element is often referred to as an internal stylesheet.

An internal stylesheet has certain benefits and use cases over inline styles, but once again, it's not best practice. Understanding how to use internal stylesheets is nonetheless helpful knowledge to have.

<head>
    <style>
        </style>
</head>
After adding the opening and closing <style> tags in the head section, you can begin writing CSS code.
<head>
    <style>
        p {
            color: red;
            font-size: 20px;
        }
    </style>
</head>
The CSS code in the example above changes the color of all paragraph text to red and also changes the size of the text to 20 pixels. *How the syntax of the CSS code matched (for the most part) the syntax you used fro inline styling. THe main difference is that you can specify which elements to apply the styling.

External Stylesheet
With an external stylesheet, you can write all the CSS code needed to style a page without sacrificing the readability and maintainability of your HTML file.

July 12, 2023:
Visual Rules

Font Family

The property to change the typeface of text on your web page, font-family.

h1 {
    font-family: Garamond;
}

When setting typefaces on web page, keep the following points in mind: 
- The font specified must be installed on the user's computer or downloaded with the site.
- Web safe fonts are a group of fonts supported across most browsers and operating systems.
- Unless you are using web safe fonts, the font you choose may not appear the same between all browsers and operating systems.
- When the name of a typeface consists of more than one word, it's a best practice to enclose the typeface's name in quotes, like so:
h1 {
    font-family: 'Courier New';
}

Font Size

The property to change the size of text on your web page, font-size.
p {
    font-size: 18px;
}

The font-szie of all paragraphs was set to 18px. px means pixels, which is one way to measure font size. 

Font Weight

The font-weight property controls how bold or thin text appears. 
p {
    font-weight: bold;
}

The font-weight property has another value: normal. 

Text Align

The property to align text is text-align. The property will align text to the element that holds it, otherwise known as its parent.
h1 {
    text-align: right;
}

The text-align property can be set to one of the following commonly used values:
- left: aligns text to the left side of its parent element.
- center
- right
- justify: spaces out text in order to align with the right and left side of the parent element.

Color and Background Color
Color can affect the following desgin aspects: 
- Foreground Color
- Background Color
Foreground color is the color that an element appears in.

Two design aspects can be styled with the following two properties: 
- color: foreground color
- background-color
h1 {
    color: red;
    background-color: blue;
}

Opacity
Opacity is the measure of how transparent an element is. It's measured from 0 to 1, with 1 representing 100$, or fully visible and opaque, and 0 representing 0%, or fully invisible.

Opacity can be used to make elements fade into others from a nice overlay effect.
.overlay {
    opacity: 0.5;
}

Background Image
One options to make the background of an element an image. Is done through the CSS property, background-image.
.main-banner {
    background-image: url('https://www.1234.com/image.jpg')
}

1. The background-image property will set the element's background to display an image.
2. The value provided to background-image is a url. The url should be a url to an image. The url can be a file within your project, or it can be link to an external site. To linke to an image inside an existing project, you must provide a relative file path. If there was an image folder in the project, with an image named mountains.jpg, the relative file path would like:
.main-banner{
    bacground-image: url('images/mountains.jpg')
}

Important
!important can be applied to specific declarations, instead of full rules. It will override any style no matter how specific it is. As a result, it should almost never be used. Once !important is used, it is very hard to override. 

p {
    color: blue !important;
}

.main p {
    color: red;
}

Since !important is used on the p selector's color attribute, all p elements will appear blue, even though there is a more specific .main p selector that sets the color attribute to red.

One justification for using !important is when working with multiple stylesheets. 

The Box Model

Box Model comprises the set of properties that define parts of an element that take up space on a web page. The model includes the content area's size (width and height) and the element's padding, border, and margin. Properties include: 
- width & height: The width and height of the content area.
- padding: The amount of space between the content area and the border.
- border: The thickness and style of the border and the outside edge of the element. 

<img src="https://content.codecademy.com/courses/updated_images/diagram-boxmodel_Updated_1-01.svg" alt="The Box Model">

Height and Width
The CSS height and width properties can be used to modify these default dimensions.
p {
    height: 80px;
    width: 240px;
}

Pixels allow you to set the exact size of an element's box (width and height). When the width and height of an element are set in pixels, it will be the same size on all devices - an element that fills a laptop screen will overflow a mobile screen. 

Borders
A border is a line that surrounds an element, like a frame around a painting. Borders can be set with a specific width, style and color: 
- width: The thickness of the border. A border's thickness can be set in pixels or with one of the following keywords: thin, medium, or thick. 
- style: The design of the border. Web browsers can render any of 10 different styles. Some of these styles include: none, dotted, and solid.
- color: The color of the border. Web browsers can render colors using a few different formats, including 140 built-in color keywords.

p {
    border: 3px solid coral;
}

The default border is medium none color, where color is the current color of the element. If width, style, or color are not set in the CSS file, the web browser assigns the default value for that property. 

p.content-header {
    height: 80px;
    width: 240px;
    border: solid coral;
}

Border Radius

Because of CSS, not all border have to remain as a square. You can modify the corners of an element's border box with the border-radius property. 

div.container {
    border: 3px solid blue;
    border-radius: 5px;
}

You cna create a border that is a perfect circle by first creating an element with the same width and height, and then setting the radius equal to half the width of the box, which is 50%.

div.container {
    height: 80px;
    width: 240px;
    border: 3px solid blue;
    border-radius: 50%;
}

The code in the example above creates a <div> that is a prefect circle. 


July 14, 2023: 
Padding 

Padding is like the space between a picture and the frame surrounding it. 

p.content-header {
    border: 3px solid coral;
    padding: 10px;
}

The padding property is often used to expand the background color and make the content look less cramped. 
If you want to be more specific about the amount of padding on each side of a box's content, you can use the following properties: 
- padding-top
- padding-bottom 
- padding-right
- padding-left

p.content-header {
    border: 3px solid fuschia;
    padding-bottom: 10px;
}

Padding Shorthand

Another implementation of padding lets you specify exactly how much padding there should be on each side of the content in a single declaration. A declaration that uses multiple properties as values is known as a shorthand property. 
Padding shorthand lets you specify all padding properties as values on a single line: 
- padding-top
- padding-bottom 
- padding-right
- padding-left

- 4 Values
p.content-header {
    padding: 6px 11px 4px 9px;
}

- 3 Values
p.content-header {
    padding: 5px 10px 20px;
}

- 2 Values
p.content-header {
    padding: 5px 10px;
}

Margin 
Margin refers to the space directly outsie of the box. The margin property is used to specify the size of this space.
p {
    border: 1px solid aquamarine;
    margin: 20px;
}

If you want to be more specific about the amount of margin on each size of a box, you can use the following properties:
- margin-top
- margin-right
- margin-bottom
- margin-left

Each properry affects the margin on only one side of the box, providing more flexibility in customization. 

p {
    border: 3px solid DarkSlateGrey;
    margin-right: 15px;
}

Margin Shorthand 
Similar to padding shorthand, margin shortand lets you specify all of the margin properties as values on a single line:
- margin-top
- margin-right
- margin-bottom
- margin-left

- 4 Values
p {
    margin: 6px 10px 5px 12px;
}

- 3 Values
p {
    margin: 5px 12px 4px;
}

- 2 Values
p {
    margin: 20px 10px;
}

Auto 
The margin property also lets you center content. * Must following a few syntax requirements.

div.headline {
    width: 400px;
    margin: 0 auto;
}

margin: 0 auto; will center the divs in their containing elements. The 0 sets the top and bottom margins to 0 pixels. The auto value instructs the browser to adjust the left and right margins until the element is centered within its containing element.
In order to center an element, a width must be set for that element. Otherwise, the width of the div will be automatically set to the full width of its containing element, like the <body>, for example. It's not possible to center an element that takes up the full width of the page, since the width of the page can change due to display and/or browser window size.

Margin Collapse
Padding is space added inside an element's border, while margin is space added outside an element's border. One additional difference is that top and bottom margins, also called vertical margins, collapse, while top and bottom padding does not. 

Horizontal margins (left and right), like padding, are always displayed and added together.

#img-one {
    margin-right: 20px;
}

#img-two {
    margin-left: 20px;
}

Unlike horizontal margins, vertical margins do not add. Instead, the larger of the two vertical margins sets the distance between adjacent elements. 

#img-one {
    margin-bottom: 30px;
}

#img-two {
    margin=top: 20px;
}

It may be helpful to think of collapsing vertical margins as a short person trying to push a taller person. The tall person has longer arms can easily push the short arms cannot reach the person with long arms.

<img src="https://content.codecademy.com/courses/updated_images/diagram-verticalmargins_Updated_1-01.svg" alt="Vertical Margins Collapse">

Minimum and Maximum Height and Width
Because a web page can be viewed through displays of differing screen size, the content on the web page can suffer from those changes in size. To avoid this problem, CSS offers two properties that can limit how narrow or how wide an element's box can be sized to: 
- min-width: Ensures a minimum width of an element's box.
- max-width: Ensures a maximum width of an element's box.

p {
    min-width: 300px;
    max-width: 600px;
}

Content, like text can become difficult to read which a browser window is narrowed or expanded. These two properties ensure that content is legible by limiting the minimum and maximum widths of an element. 

You can also limit the minimum and maximum height of an element: 
- min-height: Ensures a minimum height for an element's box.
- max-height: Ensures a maximum height for an element's box. 

p {
    min-height: 150px;
    max-height: 300px;
}

Overflow
All of the componenets of the box model comprise an element's size. For example, an image that has the following dimensions is 364 pixels wide and 244 pixels tall. 
- 300px wide
- 200px tall
- 10px padding on the left and right
- 10px padding on the top and bottom
- 2px border on the left and right
- 2px border on the top and bottom
- 20px margin on the left and right
- 10px margin on the top and bottom 

The overflow property controls what happens to content that spills, or overflows, outside its box. The most commonly used values are: 
- hidden: when set to this value, any content that overflows will be hidden from view.
- scroll: A scroll bad will be added to the element's box. 
- visible: The overflow content will be displayed outside of the containing element. 

p {
    overflow: scroll;
}

The overflow property is set on a parent element to instruct a web browser on how to render child elements. For example, if a div's overflow property is set to scroll, all children of this div will display overflowing content with a scroll bar. 

Resetting Defaults 
These default stylesheets are known as user agent stylesheets. In this case, the term user agent is a technical term for the browser. 
User agent stylesheets often have default CSS rules that set default values for padding and margin. This affects how the browser displays HTML elements, which can make it difficult for a developer to design or style a web page. 

* {
    margin: 0;
    padding: 0;
}

