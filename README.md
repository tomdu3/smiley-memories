![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Smiley's Memories

![Smileys Memories Responsiveness](assets/readme-files/responsive-site.png)

[View the live project here](https://tomdu3.github.io/smiley-memories/)

## Table of contents
1. [Introduction](#Introduction)
2. [UX](#UX)
    1. [Ideal User Demographic](#Ideal-User-Demographic)
    2. [User Stories](#User-Stories)
    3. [Development Planes](#Development-Planes)
    4. [Design](#Design)
3. [Features](#Features)
    1. [Design Features](#Design-Features) 
    2. [Existing Features](#Existing-Features)
    3. [Features to Implement in the future](#Features-to-Implement-in-the-future)
4. [Issues and Bugs](#Issues-and-Bugs)
5. [Technologies Used](#Technologies-Used)
    1. [Main Languages Used](#Main-Languages-Used)
    3. [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-&-Programs-Used)
6. [Testing](#Testing)
    1. [Testing User Stories](#Testing-User-Stories)
    2. [Manual Testing](#Manual-Testing)
    3. [Automated Testing](#Automated-Testing) 
        - [Code Validation](#Code-Validation)
        - [Browser Validation](#Browser-Validation)
    4. [User Testing](#User-Testing)
7. [Deployment](#Deployment)
    1. [Deploying on GitHub Pages](#Deploying-on-GitHub-Pages)
8. [Credits](#Credits)
    1. [Content](#Content)
    2. [Media](#Media)
    3. [Code](#Code)
9. [Acknowledgements](#Acknowledgements)
***


## Introduction

This website allows user to play a smiley emoji themed memory game. 

This website was made for the second second project of the Diploma in Full Stack Software development program at The Code Institute. 

This project is supposed to be be responsive and interactive front-end site based on HTML5, CSS3 and JavaScript.

[Back to top ⇧](#)



## UX
### Ideal User Demographic
The ideal user for this website is:
* New user
* Gamer

#### New User Goals
1. As a new user, I want to easily navigate the site intuitively. 
2. As a new user, I want the instructions to be easily found, clear and concise.
3. As a new user, I want attractive and relevant visuals and colour schemes that work with the content.
4. As a new user, I want to find sound effects accompanying playing of the game and a possibility  to switch the sound on/off.
4. As a new user, I want to find out something interesting.

#### Current User
1. As a current user, I want to have different difficulty options, to challenge myself.
2. As a current user, I want to have randomly generated card board solution for every new game and every difficulty level.
3. As a current user, I want to easily find instructions how to play game and info about the game.

### Development-Planes
To create an interactive website that allows the user to play the game Memory Game, with the option of various game settings to challenge and entertain the user.

#### Strategy
Strategy incorporates user needs as well as product objectives. This website will focus on the following target audience, divided into three main categories:
- **Roles:**
    - New users
    - Current users

- **Demographic:**
    - All ages
    - All puzzle playing levels

- **Psychographic:**
    - Lifestyles:
        - Interest in games
        - Interest in puzzles
    - Personality/Attitudes:
        - Focused
        - Relaxed

The website is supposed to enable the **user** to:
- play the memory game in different difficulties:
  - Difficulty levels are easy, moderate and hard, and they consist in the combination of the number of cards and the time in which all the pairs need to be found:
    - easy - 12 cards, 30 sec;
    - moderate - 20 cards, 60 sec;
    - hard - 30 cards, 90 sec.
  - change the background on the homepage:
    - Page themes are  paper, flags, chalkboard and plaid.
  - generate a new card field on each new game start:
    - Randomly generated card positions using an algorithm
    
Taking all into consideration, the following strategy table shows the corrispondence of importance and viablity.


<details>
<summary>Strategy Plane - Viability/Feasibility Table</summary>

![Strategy Table](assets/readme_files/strategy_table.png)

</details>


#### Scope
The scope plane defines requirements based on the goals established on the strategy plane. So, accordingly , the identified required features are broken into the following categories:
- Content Requirements:
  - The user will be looking for:
    - clear and concise instructions.
    - choice of difficulty  layouts; easy, moderate, and hard.
    - choice of page background; paper, flags, chalkboard and plaid.
- Functionality Requirements:
  - The user will be able to:
    - easily navigate the site to find the play instructions (rules).
    - choose the preferences of the game difficulty and background.

#### Structure
The above mentioned information  were  organized in a site map, showing how users can navigate through the site with ease and efficiency:


<details>
<summary>Site Map</summary>

![Site Map](assets/readme_files/sitemap.png)

</details>

#### Skeleton
The wireframes were created using a desktop version of [Balsamiq](https://balsamiq.com/).


<details>
<summary>Balsamiq Wireframes</summary>
    
![Wireframes](assets/readme_files/wireframes.png)

</details>

### Design
#### Colour Scheme
The default colour scheme was made by [Canva Color Palette Generator](https://www.canva.com/colors/color-palette-generator/).

<details>
<summary>Colour Palette</summary>
    
![Wireframes](assets/readme_files/palette.png)

</details>

To that colour scheme, there was added Medium Turquoise colour (#38D2D2) for the buttons with 3d effect from the website [Beautiful CSS buttons examples](https://getcssscan.com/css-buttons-examples).
The same colour was used for the gradient effect on the navbar, with the help of [CSS Gradient](https://cssgradient.io/) web app.

#### Typography
Fonts used on the website are from the [Google Fonts](https://fonts.google.com/), namely **Carter One** and **Oxygen**. Carter One appears in the Logo, whilst Oxygen in the rest of the website.

#### Imagery
The images are taken from the different sources and are credited in the Credits of this file. The main sources were: 
	- [Pixabay](https://pixabay.com/) for the front face of the cards,
	- [Unsplash](https://unsplash.com/) for the image for 404 page.
	- [The Pattern Library](http://thepatternlibrary.com/) for the background images. 

[Back to top ⇧](#)

## Features
### Design Features
Each page within the site has a consistent and responsive navigation system. The details of features on the site are detailed below.
- The **Header**  with the  **Navigation Bar** is positioned at the top of the page.
- The **Footer** stays at the bottom of the screen at all times, on all screen sizes, except when the height of the screen is too small for the cards field. All social media links on the footer open in a new tab. They are Instagram, GitHub and Facebook pages of the developer. The copyright info quotes *TD Company 2023* .

[Home Page](https://tomdu3.github.io/smiley-memories/index.html)
The  *Home Page*  is the main game page. Right below the navbar there is a *Time left:* element on the left and *Select Level* on the right with radio button selection. In the middle is a *New Game& button. 
At the first load of the web page, the *modal* window is opened in the middle of the screen, where the rules and features are explained. Modal window can bi closed by clicking on the *x* button or, by default, by pressing *Esc* key.
Upon closing the modal window, the *game field* is revealed. It's not interactive until the *New Game* button is pressed.
Under the game field, there are two buttons on the left and right, in the style of the New Game button. The *Rules* button brings back the modal window, and if the game is on, the timer is paused. After exiting the modal window, the timer continues if it was paused. On the right, there's a *Sound Off/On* button with the Font Awesom icons of a speaker that toggles off/on the sound upon pressing.
In between the buttons, there's a *Change Background* radio button selection menu which activates immediately upon selection and changes the background. 
[About Page](https://tomdu3.github.io/smiley-memories/about.html)
*About Page* is a simple page with a section with h1 title *About Memory Game* at the top in the center, under which there's an image of the first created Memory Card Game. Under it, there's an article  with a simple h2 title *History*, followed by a paragraph that explains the history of the game.
[404 Page]https://tomdu3.github.io/smiley-memories/404.html)
*404 Page* is a very simple page with two h1 centered and a funny image of an angry emoji is presented.

**Time left** 
This features a countdown during the ongoing game.  The time is hard coded and depends on the selection of the level.

**New Game** 
This button starts the game and renders the game field interactive. It can interrupt the game, thus initializing a new one. The click on the button calls a JavaScript function that draws a game field according to a selected level. The order of the cards is generated randomly.

**Select Level**
This radio selection menu gives the opportunity to a user to select the difficulty of the game. This selection is effective after the New Game button is pressed. The difficulties are represented by the Font Awesome Icons that correspond to an easy, moderate or hard level.

**Game Field**
This is a field generated by the pressing of the New Game button. According to the level, it can be:
	- 3x4 cards (easy);
	- 4x5 cards (moderate);
	- 5x6 cards (hard).

**Rules**
The Rules button reinitiates the modal with the rules and indications for the game and its functionalities.

**Change background**
This radio selection menu changes the background of the web page upon selection. The possible backgrounds are  paper, cycles, chalkboard and plaid.

    **Sound Off/On**
    The Sound Off/On button distincts itself  a Font Awesom icon that represents  a speaker that has a sound wave near itself when the sound is on, or an X when it is off.

### Existing Features
- **Navigation Bar** - Appears on every page for a consistently easy and intuitive navigable system, except of the 404 page.
- **Social Media Icons** - Appearing on every page, the icons are appropriate representations of the Social Media platforms, linking users to the developers Instagram, GitHub and Facebook accounts. The icons appear in the centre of the footer.
- **[Home Page](https://tomdu3.github.io/smiley-memories/index.html "Smiley's Memories")** - Creates a custom Memory Game with the emoji as a theme.
- **[About Page](https://tomdu3.github.io/smiley-memories/about.html "Smiley's Memories - About Memory Game")** - Informing the user of the rules of playing Sudoku.
- **[404 Page](https://tomdu3.github.io/smiley-memories/404.html)"Smiley's Memories - 404 Page")** - An emoji themed page that appears when there's page loading 404 error .
-**Sound FX** - The sounds are following the selection, right and wrong guesses, as well as the game won and the game lost event.
-**End Game** - There are two End Game functions, one for losing, other for winning event. The window appears with the respective text and a sound effect.

### Features to Implement in the future
**Limiting allowed attempts**
     - **Feature** - Would allow even more control and difficulty determination.
     - **Reason for not featuring in this release** - There was no time for the developer to combine it with the existing features.
**High Scores**
     - **Feature** - It would make the game and the website more interesting and the scores could tracked, saved and be beaten .
     - **Reason for not featuring in this release** - This would require more expertise and knowledge of the developer, that is outside the requested parameters of this project. The other reason is the lack of time.


[Back to top ⇧](#)


## Issues and Bugs 
The developer ran into several issues during the development of the website, with the noteworthy ones listed below, along with solutions or ideas to implement in the future.

**Card Flipping Bug** - There was a bug detected that was caused by an EventListener linked with the card selection in combination with a delay of the  back flip of the cards that were wrongly selected. The delay has caused an issue in which allowed a card, that was supposed to flip back, to be selected as a newly chosen second guess, thus causing the switching of the front/back side of the card. The reason for this was that upon the choosing right pair, that pair would be taken from the arrays of nodes, and the delayed flip of the previously wrong card wouldn't be possible because it was removed from the array.
The developer first increased the speed of the flip and decreased the time of the delay. Then, later, he introduced the temporary variables to take the value of the chosen cards in order to avoid the collision with the delayed function.

**Timer Recursion Bug** - A bug was detected when introduced the timer function. Because of the recursive call to the timer method, upon restarting the game, the old timer would collide with the new one and it  would appear a parallel counting that resulted in a timer constantly reproposing different times and thus trying to make them appear at the same time. The Mentor was the one who helped developer to use the function for the clearing interval and the interval id.

**End Game Lose Bugs** - A bug was detected that caused an impossibility to end game by losing if non of the cards were selected.  The first bug waited for the user to click at least one card before ending the game, even if the timer was long at 0. The other bug appeared when the game was lost, and was ended, but the unflipped cards were still clickable. Thus, despite the fact the game was over,  the user could still play. The developer sorted out these bugs by creating a new unplayable field upon the timer reaching 0, so the end of game by losing would be declared and the game couldn't be played until the new game started.

**Timer not stopping after Game Ending Bug** - A bug was detected which allowed timer to continu decrease after the game was over. The developer solved this issue by declearing the time variable outside the timer function, thus allowing the timer to be stopped at any moment (e.g. this functionality was also needed in order to pause the timer upon opening modal window during the active game). 

[Back to top ⇧](#)


## Technologies Used
### Main Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5 "Link to HTML Wiki")
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets "Link to CSS Wiki")
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript "Link to JavaScript Wiki")

### Frameworks, Libraries & Programs Used
- [Canva Color Palette Generator](https://www.canva.com/colors/color-palette-generator/)
	- Canva Color Palette Generator was used to make the initial colour palette.
- [Google Fonts](https://fonts.google.com/ "Link to Google Fonts")
	- Google fonts was used to import the fonts "Special Elite", "Open Sans", "Oswald" and "Nosifer" into the style.css file. These fonts were used throughout the project.
- [Font Awesome](https://fontawesome.com/ "Link to FontAwesome")
	- Font Awesome was used on almost all pages throughout the website to import icons (e.g. social media icons) for UX purposes.
- [GitPod](https://gitpod.io/ "Link to GitPod homepage")
	- GitPod was used for writing code, committing, and then pushing to GitHub.
- [GitHub](https://github.com/ "Link to GitHub")
	- GitHub was used to store the project after pushing
- [Balsamiq](https://balsamiq.com/ "Link to Balsamiq homepage")
	- Balsamiq was used to create the wireframes during the design phase of the project.
- [Am I Responsive?](https://amiresponsive.co.uk/ "Link to Am I Responsive Homepage")
	- Am I Responsive was used to test responsivenes and generate design for the  mockup imagery used at the beginning of this documentation.
 -  [Beautiful CSS buttons examples](https://getcssscan.com/css-buttons-examples)
	- Beautiful CSS buttons was used for the 3d buttons.
-  [CSS Gradient](https://cssgradient.io/)
	- CSS Gradient web app was used to make gradient colour backgrounds.
 - [Webp Converter](https://developers.google.com/speed/webp)
	 - Webp Converter was used to convert images to WEBP format on GitPod.
    [GIMP - GNU Image Manipulation Program](https://www.gimp.org/)
	- GIMP was used to resize the 404 Page image.

[Back to top ⇧](#)


## Testing
### Testing User Stories

#### New User Goals:
1. As a new user, I want to easily navigate the site intuitively.
	-  The navigation bar brings to the both of the pages, indicating the current one, and showing the possible selection of the other.
2. As a new user, I want the instructions to be easily found, clear and concise.
	- The rules of the game and instructions are clearly given in the modal window that appears upon first page load, and can be called by clicking on the corresponding button. 
3. As a new user, I want attractive and relevant visuals and colour schemes that work with the content.
  - There is a somewhat engagin, but not overpowering, colour scheme across the site.
  - The user has a choice of theme when at any moment, before, during, or after the game . 
  - The theme choices change the colours of the header, footer and body of the page, if the background is dark.
4. As a new user, I want to find sound effects accompanying playing of the game and a possibility  to switch the sound on/off.
- As already described above, there are sound effects accompanying the game events, and the relative button that switches them on and off.
5. As a new user, I want to find out something interesting.
- There is an interesting story on the About Page, and the card images, flipping effects and sound, make this game quite compelling.

#### Current User
1. As a current user, I want to have different difficulty options, to challenge myself.
- There are different difficulty choices that increase number of the cards. But the corresponding increase of time is not proportional to the increase of number. 
2. As a current user, I want to have randomly generated card board solution for every new game and every difficulty level.
- Every time the game starts, the shuffle JavaScript function gives a new combination of the order of cards.
3. As a current user, I want to easily find instructions how to play game and info about the game.
- As mentioned earlier, the modal window with instruction appears on initial page load and can be accessed at any time by clicking on the relative button. The same action would stop the timer, if the game is on, so that the user can calmly go through the text.

[Back to top ⇧](#)


      ## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
