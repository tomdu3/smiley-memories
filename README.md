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
