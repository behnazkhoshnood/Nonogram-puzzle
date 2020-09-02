# **Nanogram Puzzle**

## **Description**

[View the live project here.](https://behnazkhoshnood.github.io/Nonogram-puzzle/
)



Nanogram is a puzzle game that is similar to minesweeper. Players should find out which square is colored and which is gray(blank) with the help of the numbers written in the corner squares.
## **User Experience (UX)**
 
This puzzle is a fun colorful game and like all the other simple puzzle game improves players strategy and way of thinking.

- ### **User Stories** 

- As a player, I want to easily be able to find the rules about the game.

- As a player, I want to play a puzzle game that I can enjoy.

- As a player, I want the game to be functional and give the right result by clicking the colored or gray squares.

- As a player, I like to strategize which squares are gray(blank) or colored by being able to right/left click on them the differentiate them from each other.

- As a player, I want the game page don't pop up any alert or bugs while I'm playing.

- As a player, I want to compare my result to other players and find out about high scores.

- As a player, I want to be able to contact the support in case of any bugs or problems occurring during the game.

- As a player, I want to get some recommendations for similar games.

- As a player, I want to see social media and connect with other players who are playing the game.

- ### **Design**

  - #### Colour Scheme

    - The 4 main colours used are:
    
    - #64882b for Rules(index) page which is close to green.

    - #1982C4 for Nanogram page which is a nice blue color.

    - #896BB3 for Ranking page which is in the scope of violet.

    - and #fafafa which is a shade of gray and cream which used for the color of the body of the pages.
    
- #### Typography

  - Siracha and Source Sans Pro font are the main fonts used throughout the whole website with Cursive and Sans Serif as the fallback font in a case for any reason the font isn't being imported into the site correctly.
  
- ### **Structure**

  - #### First and third section(header and footer):

    - The website consist of 3 pages named: Rules , Nanogram and Ranking. Each page has three sections.

    - The content of the header and footer sections are the same in all the pages. The Header section consists of the navbar menu for navigation through the website and the footer section consists of Contact button, More games and social media links.

  - #### Second section:

    - **Rules page**

     - This section consist of a turtorial nanogram with lots of guide notes to show how the game works. 
      
     - In this page there is also a hint button that can be used for more guidenss throughout the game.

    - **Nanogram pages**

     - This section consist of the main nanogram puzzle.
     - In this page and the Rules page there is also a header that shows the player how much life they have left.

   - **Ranking page**

     - This section consists of a table of the name of the players, their rank and their location.

### Wireframes

  - Wireframes are created using balsamiq.
  
  - Link to the wireframes is available under wireframes.

  - The design of the website is mainly the same for desktop and tablet however on mobile screen the content will be re-arranged. The user will move from top to bottom.

  - index Page Wireframe -[ View]()

    - Mobile Wireframe - [ View]()

  - Nanogram page Pages Wireframe - [ View]()
  
    - Mobile Wireframe - [ View]()

  - Ranking Page Wireframe -[ View]()

    - Mobile Wireframe - [ View]()

## **Features**
 
### Existing Features

- Easy to use.

- Interactive elements.

- Colorful navbar menu is unique for each page which makes navigation easier.

- It's easy to find navbar, social media links, and contact button in all the pages.

- Players can easily find the rules page by clicking on the rules button on the top left corner on the menu.

- Players can find the puzzle on a separate page and start solving the puzzle.

- The puzzle is colorful and nice designed and it's nither to easy or too hard to solve.

- On the last page, players can find about the top 10 players and their location in google map.

- Contact and support are placed at the footer of each page in case of any bugs or general questions.

- There are some more game suggestions for the player in the footer of each page.

- Players can easily find social media apps for the game in the footer of each page.

### Features Left to Implement

- Make the raking table based on real players.

- Add more nanogram puzzles.

- Add more easy fun games to the website.

- Make a social media page for the game.

- Make a logo for the game.

- Make a switch button for click and hold the button in mobile phones instead on clicking the boxes one by one.

## Technologies Used

### **Languages Used**

- [HTML5](https://en.wikipedia.org/wiki/HTML5)

- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

- [JavaScreept](https://en.wikipedia.org/wiki/JavaScript)

### **Frameworks, Libraries & Programs Used**

- [Bootstrap 4.4.1](https://getbootstrap.com/)

  - Bootstrap was used to assist with the responsiveness and styling of the website.

- [Google fonts](https://fonts.google.com/)

  - Google fonts Roboto and Baloo Bhaina are used on all pages throughout the project.

- [Font Awesome](https://fontawesome.com/v4.7.0/icons/)

  - Fontawesome icons were used on all pages throughout the website to add icons for aesthetic and UX purposes.

- [Hover.css](https://ianlunn.github.io/Hover/)

  - Hover.css was used on the Social Media icons in the footer to add the float transition while being hovered over.

  - Hover effect hvr-sweep-to-bottom has been used in menu buttons.

  - Hover.css was used on the Sign in / Sign up button.

  - Hover.css was used on the Reservation and Rate us button.
  
- [Google map](https://cloud.google.com/maps-platform/)
  
  - To add the google map to the project.
    
- [emailJs](https://www.emailjs.com/)

  - To make the contact form functional. 

- [Git](https://en.wikipedia.org/wiki/Git)

  - Git was used for version control by utilizing the Gitpod terminal to commit to Git and push to GitHub.

- [github](https://github.com/)

  - GitHub is used to store the project's code after being pushed from Git.

- [gitpod](https://www.gitpod.io/)

  - Gitpod is used for testing the project.

- [Balsamiq](https://en.wikipedia.org/wiki/Balsamiq)

  - Balsamiq was used to create the wireframes during the design process.

## Testing

- Navbar pages are linked correctly to the right page.

- In rules page the hint button shows the number of hints left and in each click shows a new hint till the player ran out of hints.

- When players left-click on squares that should be colored; it is a success and the player doesn't lose a life.

- When the player left-click on the squares that should be gray(blank). it's a mistake and the player loses a life.

- When the player right-clicks on the square that should be colored; it is a success and the player doesn't lose a life.

- When players right-click on the square that should be gray(blank); it is a success and the player doesn't lose a life.

- When the player lost all their lives an alert shows up that they lost the game and page reloads.

- When the player wins they get an alert that the won the game, all the squares are shown and the page reloads.

- Anytime the player makes a mistake they lose one HP and it shows in the header above the page under the navbar.

***Contact form:***

1. The player can find the support in the left corner of the footer on each page.
 
2. Try to submit the empty form and verify that an error message about the required fields appears.
    
3. Try to submit the form with an invalid email address and verify that a relevant error message appears.
    
4. Try to submit the form with all inputs valid and verify that a success message appears and Modal closes after few Seconds.

5. A massage will be send to support from the player with their request.

### **Further Testing**

- The Website was tested on Google Chrome, Microsoft Edge, and Firefox browser.

- The website was shown responsive on a variety of emulated devices such as Jio phone, iphone4, 5, SE, 6, 6 plus, 7, 7plus, 8, 8plus and X, Nokia Lumia 520 and N9, Moto G4, Galaxy S5, Blackberry Z30 and playbook, Galaxy note, Microsoft Lumia 950 and 550, LG Optimus L70, Nexus 4, 5, 6, 7 and 10, 6P, Pixel 2 and 2XL, iPad mini, iPad, Kindle Fire, iPad pro and laptop with MDPI, touch, and HiDPI.

- A large amount of testing was done to ensure that all pages were linking correctly.

- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

## **Known Bugs**

- The sweep to bottom hover effect doesn't cover the buttons on some mobile phones.

- Sometimes the browser doesn't open the site but after reloading the page it workes properly.


## **Deployment**

Following steps has been taken to deploy Tadig restaurant website on GitHub pages;

1. Go to GitHub and click on repository [behnazkhoshnood
/
Nanogram-puzzle](https://github.com/behnazkhoshnood/Nonogram-puzzle)

1. Click on **Settings** on the top right of the page

1. Scroll down to the **GitHub pages section**

1. Click on **dropdown menu** under **Source** section and select **Master Branch as Source**

1. The page will automatically refresh.

1. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section. 

### **Local Deployment**

Follow these steps to run the website locally on your machine;

1. Go to Github repository [behnazkhoshnood
/Nanogram-puzzle](https://github.com/behnazkhoshnood/Nonogram-puzzle)

1. Click on **Clone or Download**

1. Click on **Download Zip**

1. Unzip the downloaded zip file

1. Then run index.html file

1. It will open in a browser which is set as a default browser.

## **Credits**

- ### **Code**

  - [Bootstrap4](getbootstrap.com)
  
    - Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

  - [Stack overflow](https://stackoverflow.com/)
  
    - Used for fixing the bugs and some of the codes.
    
  - [W3Schools](https://www.w3schools.com/default.asp)
  
    - To get some guidenss throughout the project.
   
  - [Gitpod](https://www.gitpod.io/)

    - To open my project in the browser I used this code: `python3 -m http.server` 

### Content
- All the content is writen by myself.

### Media
- The photos used in this site were obtained from google.map API

### **Acknowledgements**

1. A special thanks to my mentor, Rohit Sharma, for his valuable feedback during mentoring sessions.

1. A special thanks to my friend Amir Monshi for helping me with some of the codes related to google map API.

1. Also, I like to thank all of the Code Institute support groups.

1. The design and layout of this website are based on the Rule of Thirds.

1. The images on the website have an external source and have been used for only educational purposes.

1. Code Institute tutorials were very helpful throughout the whole project.

1. Bootstrap is also used in the project. (Bootstrap grid, Bootstrap Modal, and Bootstrap classes)








