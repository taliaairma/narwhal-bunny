June 27, 2022:
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
HTML allows you to turn nearly any element into 




    

