June 27, 2023:
HTML Notes started.

HTML provides structure ot the content appearing on a website, such as images, text or videos. Right-click on any page on the Internet and choose "inspect", and you'll see HTML in a panel of your screen.
H.T.M.L. stands for HyperText Markup Language:
> A markup language is a computer language that defines the structure and presentation of raw text.
> In HTML, the computer can interpret raw text that is wrapped in HTML elements.
> Hypertext is text displayed on a computer or device that provides access to other text through links, also known as hyperlinks.

HTML Anatomy
     HTML is composed of elements. The elements are units of context in an document formed by HTML tags and the text or media it contains.
    HTML tag, the element name surrounded by opening and closing brackets.
    Contents are informations (text or other elements) contained between the opening and closing tags of an HTML element.

HTML Structure
    A collection of family tree relationships. When an elements is inside another element, it is considered the child of the element. The child element is said to be nested inside of the parent element.
        <body>
            <div>
            <h1>Siblings to p, but also grandchild of body</h1>
            <p>Siblings to h, but also grandchild of body</p>
            </div>
        </body>

Headings
    Headings in HTML are similar to headings in other types. HTML follows a similar pattern. In HTML, there ae 6 different headings, or heading elements.
    <h1>, <h2>, <h3>, <h4>

Divs
    <div> is short for "division" or a container that divides the page into sections.
        <body>
            <div>
            <h1>Why use divs?</h1>
            <p>Great for grouping elements</p>
            </div>
        </body>
    > divs don't inherently have a visual representation, but are very useful when we want to apply custom styles to our HTML elements.
    > divs allow us to group HTML elements to apply the same styles for all HTML elements inside. We can also style the div element as a whole.
    *divs can contain anay text or HTML elements, such as links, images, and videos. Remember to always add two spaces of indentation when you nest elements inside of divs for better readability.

 Attributes
    Attributes can be added to the opening tag of an element and can be used in several different ways from providing information to changing styling. 
    Attributes are made up of the following two parts:
    > The name of the attributes
    > The value of the attributes
    A commonly used attribute is the id. We can use the id attribute to specify different content (such as <div>s) ids have several different HTML.
        <div id="intro">
            <h1>Introduction</h1>
        </div>

Displaying Texts
    If you want to display text in HTML, you can use paragraphs or span:
    > Paragraphs <p> contain a block of plain text.
    > <span> contains short pieces of text or other HTML. THey are used to separate small pieces of content that are on the smae line as other content.
        <div>
            <h1>Technology</h1>
        </div>
        <div>
            <p><span>Self-driving care</span>are anticipated to replace up to 2 million jobs over the next decades.</p>
        </div>
*It's best to use a <span> element when you want to target a specific piece of content that is inline, or on the same line as the other text. If you want to divide your content into blocks, it's better to use <div>s.

Styling Texts
    You can also stylize texts using HTML tags. The <em> tag emphasizes text, while the <strong> tag highlights texts.
    *Later when you begin to style websites, you will decide how you want browsers to display content within <em> & <strong> tags. Browsers, however, have a built-in style sheets that will generally style there tags in the following ways:
    > The <em> tag will generally render as italic emphasis.
    > The <strong> tag will generally render as bold emphasis.
        <p><strong>The Nile River</strong>is the <em>longest</em>river in the world, measuring over 6850 km long (approximately 4260 miles). </p>

Line Breaks
    The spacing between code in an HTML file doesn't affect the positioning of elements in the browser. You can use HTML's line break element: <br>
        <p>THe Nile River is the longest river  <br> in the world.</p>

Unordered Lists
    You can also display content in an easy to read list. In HTML, you can use an unordered list tag (<ul>) to create a list of items in no particular order. An unordered list outlines individual list items with a bullet point.
        <ul>
            <li>Lollipops</li>
            <li>Bubble Gums</li>
            <li>Mints</li>
        </ul>

Ordred Lists
    Useful for when you need to list different steps in a process or rank items from first to last.
        <ol>
            <li>Lift toilet seat</li>
            <li>Turn around and puill-down pants</li>
            <li>Sit down</li>
            <li>Begin peeing or pooping</li>
            <li>Grab 3-4 squares of toilet paper</li>
            <li>Wipe your privates</li>
            <li>Stand up and pull-up pants</li>
            <li>Flush toilet</li>
        </ol>
    1. Lift toilet seat
    2. Turn around and pull-down pants
    3. Sit down
    ...

Images
    The <img> tage allows you to add an image to a web page. The <img> tag is a self-closing tag. The <img> tag has a required attribute called src.
        <img src="image-location.jpg"/>

Image Alts
    The alt attribute which means alternative text, brings meaning to the images on your site. The alt attribute can be added to the image tag just like the src attribute. THe value of alt is/ should be a description of the image.
            <img src="#" alt="A field of Yellow Stone."/>
    The alt attribute also serves the following purposes:
    > If an image fails to load, you can mouse over the area originally intended for the image and read a brief description of the image.
    > Visually imapired uses often browse the web with the aid of screen reading software. When you include the alt attribute, the screen reading software can read the image description out loud for the visually impaired user.
    > The alt attribute also plays a role in Search Engine Optomization because search engines cannot "see" images on the websitesas they crawl the internet. Having descrptive alt attributes can improve the ranking of your site.

Videos
    <video src="myvideo.mp4" width="320" height="140" controls>Video not supported</video>
    After the src attribute, the width and height attributes are used to set the size of the video displayed in the browser. The controls attribute instructs the browser to include basic video controls such as, pausing & playing.

June 28, 2022:

Before we begin our projects, it is required to declare certain elements to HTML files using <!DOCTYPE html>
This declaration is an instruction and it must be the first ling of code in your HTML Document. It tells the browser what type of document to expect, along with what version of HTML is being used in the document. 

The <html> tag indicates the coding to HTML.

The Head
The <head> element contain the metadata for a web page. Metadata is information about the page that isn't displayed directly on the web page.
*The first item after your first HTML tag:
<head>
    </head>

Page Titles
A browser tab displays the title specified in the <title> tag. 
The <title> tag is always inside of the <head>.
<!DOCTYPE html>
<html>
    <head>
        <title>My Coding Journal</title>
    </head>
</html>

Linking to other web pages
You cna add links to web page by adding an anchor element <a> & inlcuding the text of the link in between the opening and closing tags.
<a>The link to wikipedia</a>
*Technically the link above is incomplete without the href attribute, there is no path to the link. 
The href attribute is a hyperlink reference which is used to link to a path or the address to where a file is located.
<a href="https://www.wikipedia.org/">The link to wikipedia</a>

Opening link to a new window
Target attribute specifies how a link should open one or more links on your web page link to an entirely different website, target attribute requires a value of _blank.
<a href="https:/en.wikipedia.org/wiki/Brown_bear" target="_blank">The Brown bear</a>

Linking to a Relative Page
3 different files into one folder
project-folder/
|--about.html
|--contact.html
|--index.html
HTML files are often stored in the same folder.
<a href="./contact.html">Contact</a>
The <a> tag is used with a relative path to link from the current HTML file to the contact.html file in the same folder.

Linking at Will
*Text-only hyperlinks only decrease your flexibility as a web-developer. 
HTML allows you to turn nearly any element into linkss by simply wrapping the <img> element with an <a> element.
<a href="https://en.wikipedia.org/wiki/Opuntia" target="_blank"><img src="https://www.Prickly_pear_closeup.jpg" alt ="A red prickly pear fruit"/></a>

Linking to the same page
In order to link to a target on the same page, we must give the target an id:
<p id="top">This is the top of the page!</p>
<p id="bottom>This is the bottom</p>

The <p> element is assigned an id of "top" and the <h1> element is assigned "bottom". *An id can be added to most elements on a web page.

An id should be descriptive to make it easier to remember the purpose of a link. The target link is a string containing the # character and the target element's id.
<ol>
    <li><a href="#top">Top</a></li>
    <li><a href="#bottom">Bottom</a></li>
</ol>
The links to <p id="top"> & <p id="bottom"> are embedded in an ordered list. An id is especially helpfuul for organizing content belonging to a div.

Whitespace
If you want to increase the space between two paragraphs on your web page, you would not be able to accomplish this by adding space between the paragraph element in the index.html file. The browser ignores whitespace html files when it renders a web page, so it cna be used as a tool to make code easier to read & follow.
<body><p>Paragraph 1</p><p>Paragraph 2</p></body>
Compare the example above to this:
<body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</body>
*This example is easier to read because each element is on its own line.

Indentation
<body>
    <p>Paragraph 1</p>
    <div>
        <p>Paragraph 2</p>
    </div>
</body>
Paragraph 1 and the <div> tag are nested inside of the <body> tag so they are indented two spaces. The paragraph 2 element is nested inside of the <div> tag so it is indented an additional two spaces.

Comments
Comments begin with <!-- and end with --> Any characters in between will be ignored by your browser.
<!-- This is a comment that the browser will not display -->
Including comments in your code is helpful for many reasons:
1. They help you (and others) understand your code if you devided to come and review it at a much later date.
2. They allow you to experiment with new code, without having to delete old code.
<!-- Favourite Files Sections -->
<p>The following is a list of my favourite film:</p>
In this example, a valid HTML element (a paragraph element) has been "commented out". This practice is useful when there is code you want to experiment with, or return to, in the future.
<!-- <p> Test Code </p> -->

June 29, 2023:

HTML Tables
Create a table with an index.html
<table>

</table>

Table rows, columns, and cells that will hold data. The table row element: <tr>
<table>
    <tr>
    </tr>
    <tr>
    </tr>
</table>

Table Data
Rows aren't sufficient to add data to a table. Each cell element must also be defined. The table data element: <td>
<table>
    <tr>
        <td>23</td>
        <td>35</td>
    </tr>
</table>
By adding two data points, we created two cells of data.

Table Headings
Most of the time, table data doesn't make much sense without titles to describe what the data represents. The table heading element: <th>
<table>
    <tr>
        <th></th>
        <th scope="col">Saturday</th>
        <th scope="col">Sunday</th>
    </tr>
    <tr>
        <th scope="row">Temperature</th>
        <td>23</td>
        <td>35</td>
    </tr>
</table>
*The use of the scope attribute, which can take one of two values:
1. row = this value makes it clear that the heading is for a row.
2. col = this value makes it clear that the heading is for a column.

Table Borders
In older versions of HTML, a border could be added to a table using the border attribute and setting it equal to an integer.  
The browser will likely still interpret your code correctly if you use the border attribute, but that doesn't mean the attribute should be used. 
*We use CSS to add style to HTML documents, because it helps us to separate the structure of a page from how it looks. You can achieve the same table border effect using CSS.
example below uses CSS instead of HTML to show table borders.
table, td {
    border: 1px solid black;
}
<table border="1">
    <tr>
        <td>23</td>
        <td>35</td>
    </tr>
</table>

Spanning Columns 
Data can span columns using the colspan attribute. The attribute accepts an integer (greater than or equal to 1) to denote the number of columns it spans across.
<table>
    <tr>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
    </tr>
    <tr>
        <td colspan="2">Out of Town</td>
        <td>Bakc in Town</td>
    </tr>
</table>
The data "Out of Town" spans the "Monday" and "Tuesday" table headings using the value "2" (two columns). The data "Back in Town" appear only under the "wednesday" heading.

Spanning Rows
Data can also span multiple rows using the rowspan attribute.
THe rowspan attribute is used for data that spans multiple rows to denote the number of rows it spans across.
<table>
    <tr> <!-- Row 1 -->
        <th></th>
        <th>Saturday</th>
        <th>Sunday</th>
    </tr>
    <tr> <!-- Row 2 -->
        <th>Morning</th>
        <td rowspan="2">Work</td>
        <td rowspan="3">Relax</td>
    </tr>
    <tr> <!-- Row 3 -->
        <th>Afternoon</th>
    </tr>
    <tr> <!-- Row 4 -->
        <th>Evening</th>
        <td>Dinner</td>
    </tr>
</table>
There are four rows:
1. The first row contains an empty cell and the two column headings.
2. The second row contains the "Morning" row heading, along with "Work", which spans two rows under the "Saturday" column. The "Relax" entry spans three rows under the "Sunday" column.
3. The third row only contains the "Afternoon" row heading.
4. The fourth row only contains the "Dinner" entry, since "Relax" spans into the cell next to it.

Table Body
Over time, a table can grow to contain a lot of data and become very long. When this happens, the table can be sectioned off so that it is easier to manage.
The table body element: <tbody>. It should contain all of the table's data, excluding the table headings.
<table>
  <tbody>
    <tr>
      <th></th>
      <th>Saturday</th>
      <th>Sunday</th>
    </tr>
    <tr>
      <th>Morning</th>
      <td rowspan="2">Work</td>
      <td rowspan="3">Relax</td>
    </tr>
    <tr>
     <th>Afternoon</th>
    </tr>
    <tr>
      <th>Evening</th>
      <td>Dinner</td>
    </tr>
  </tbody>
</table>

Table Head
The table's headings were kept inside of the table's body. When table's body is sectioned off, however, it also makes sense to section off the table's column headings using the <thead> element (table head element).
<table>
  <thead>
    <tr>
      <th></th>
      <th scope="col">Saturday</th>
      <th scope="col">Sunday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Morning</th>
      <td rowspan="2">Work</td>
      <td rowspan="3">Relax</td>
    </tr>
    <tr>
     <th scope="row">Afternoon</th>
    </tr>
    <tr>
      <th scope="row">Evening</th>
      <td>Dinner</td>
    </tr>
  </tbody>
</table>
Only the column headings go under the <thead> element. We can use the scope attribute on <th> elements to indicate whether a <th> element is being used as a "row" heading or a "col" heading.

Table Footer
The bottom part of a long table can also be sectioned off using the <tfoot> element.
<table>
  <thead>
    <tr>
      <th>Quarter</th>
      <th>Revenue</th>
      <th>Costs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Q1</th>
      <td>$10M</td>
      <td>$7.5M</td>
    </tr>
    <tr>
      <th>Q2</th>
      <td>$12M</td>
      <td>$5M</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <td>$22M</td>
      <td>$12.5M</td>
    </tr>
  </tfoot>
</table>
Footers are oftain used to contain sums, differences, and other data results.

Styling with CSS
Tables, by default, are very bland. They have no personality and the typeface is the same type used for other HTML elements.
C.S.S. stands for Cascading Style Sheets, is a language that web developers use to style the HTML content on a web page. You can use CSS to style tables. 
table, th, td {
  border: 1px solid black;
  font-family: Arial, sans-serif;
  text-align: center;
}

July 4, 2023: 
HTML Forms

The form elements is a great tool for collecting information. 
<form action="/example.html" method="POST">
</form>
We created the skeleton for a <form> that will send information to "example.html" as a POST request:
- The action attribute determines where the information is sent.
- The Method attribut is assidned a HTTP verb that is incleded in the HTTP reuest.
*HTTP verbs like POST do not need to be capitalized for the request to work, but its done so out of convertion. As for the example above, we could have written (method="POST") and it would still work.
*The form element also contains child elements. For instance, it would be helpful to provide a header so that users know what this <form> is about. We also add a paragraph to provide even more detail.
<form action="/example.html" method="POST">
    <h1>Creating a form</h1>
    <p>Looks like you want to learn how to create an HTML form. Well, the best way to learn is to play around with it</p>
</form>

Text Inputs 
The <input> element has a  type attribute which determines how it renders on the web page and what kind of data it can accept.
*The default value of type is "text". Its also important that we include a "name" attribute for the <input> -- without the name attribute, the information in the <input> won't be sent when <form> is submitted. 
<form action="/example.html" method="POST">
    <input type="text" name="first-text-field">
</form>
We can also assign a default value for the value attribute so that users have a pre-filled text field when they first see the rendered form:
<form action="/example.html" method="POST">
    <input type="text" name="first-text-field" value="already pre-filled">
</form>

Adding Labels
For users to properly identify an <input> we use the appropriately name <label> element. To associate a <label> and an <input>, the <input> needed an id attribute.
<form action="/example.html" method="POST">
    <label for="meal">What do you want to eat?</label>
    <br>
    <input type="text" name="food" id="meal">
</form> 
OR:
<form action="/example.html" method="POST">
    <label for="username">Username</label>
    <input type="text" name="username" id="username">
</form>

Password Inputs
An <input type="password:"> element will replace input text with another character like an asterisk (*) or a dot (.).
<form>
    <label for="user-password">Password:</label>
    <input type="password" id="user-password" name="user-password">
</form>

Number Inputs
<form>
    <label for="years"> Year of Experience:</label>
    <input id="years" name="years" type="number" step="1">
</form>
By setting type="number" for an <input> we can restrict what users type into the input field to just numbers (and a few special characters like -, +, &, ~) We can also provide a step attribute which creates arrows inside the input field to increase or decrease by the value of the step attribute.

Range Input
Using an <input type="number"> is great if we want to allow users to type in any number of their choosing. If we wanted to limit what number our users could type we might consider using a different type value. Another option is setting type to "range" which creates a slide. 
<form>
    <label for="volume">Volume Control</label>
    <input id="volume" name="volume" type="range" min="0" max="100" step="1">
</form>

Checkbox Input 
In a form we can use the <input> element and set type="checkbox".
<form>
    <p>Choose your pizza toppings:</p>
    <label for="cheese">Extra Cheese</label>
    <input id="cheesE" name="topping" type="checkbox" value="cheese">
    <br>
    <label for="pepperoni">Pepperoni</label>
    <input id="pepperoni" name="topping" type="checkbox" value="pepperoni">
</form>

Note in the example above:
- There are assigned values to the value attribute of the checkboxes. These values are not visible on the ofrm itself, that's why it is important that we used an associate <label> to identify the checkbox.
- each <input> has the same value for the name attribute using the same name for each checkbox groups the <input>s together. However, each <input> has a unique id to pair with a <label>.














    

