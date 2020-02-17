## Password Generator on React
#### Portfolio Carlos Casciano - 17/02/2020

### General
Access application:
Code details within git repository

### Motivation

This project was motivated on showing the full process of creating a single page application with React, from drawing a mock-up, developing logic, styling with Material UI and deploying the app online.


### Main Project Steps
- Brainstorm Idea
- Draw Components Structure
- Code Logic
- Code Structure
- Connect Structure with Logic
- Styles with Material UI
- Deploy

### Tasks

- [X] Write user cases  
- [X] Pencil Mockup  
- [X] Figma Mockup  
- [X] Create git repository
- [X] Create react app and delete unused files
- [X] Code basic components
- [X] Code password generation logic
- [X] Code password strength logic
- [X] Code length capture
- [X] Code switches logic
- [X] Connect switches with generation and strength
- [X] Code copy to clipboard feature
- [X] Handle empty switches
- [X] Handle text on length textfield
- [X] Code colors based on strength
- [X] Code maximum permitted chars
- [X] Set margins and paddings
- [X] Set favicon
- [X] Manual testing
- [X] Code cleaning
- [X] Deploy
- [X] Test deployed
- [X] Update readme
- [X] Write next steps
- [X] Publish

## Details

### User Cases

- User wants to generate a safe randomic password to use in its applications
- Main plataform of usage is mobile, but can access on desktop as well
- User can say how many characters it wants it password
- User can choose which type of characters it wants in the password (upper, lower, symbols, numbers)
- User can easily copy password to clipboard to paste elsewhere
- User can easily checks if his password is strong enough

### Mockups

Pencil Mockup:  
![alt text](https://i.imgur.com/XWqNURUm.jpg "Drawing Mockup")
  
Figma Mockup:  
![alt text](https://i.imgur.com/hnb5zlDm.png "Drawing Mockup")


#### React Components Structure
|- Title  
|- Generated Password Menu  
|- Buttons Menu  
|--- Generate Password Button  
|--- Copy to Clipboard Button  
|- CommandsMenu  
|--- LengthInput  
|--- Switches  
|- Footer  

#### Password Strength

- Used zxcvb library: https://github.com/dropbox/zxcvbn

#### Copy to Clipboard

- Used react-copy-to-clipboard libray: https://www.npmjs.com/package/react-copy-to-clipboard

#### Styling

- Basic Material UI usage, mostly with default components: https://material-ui.com/components/
- Some simple API changes and style override
- Opted not to be completely faithful to mock-up, but only for taste purposes


#### Next steps (if desired):

- Add better animation to show that password is truly copied
- Add password strength color to Textfield component border
- Add strength bar
- Use media queries to make desktop version more aesthetically

#### Other Info

- Any tips, hints, critics, please contact me via linkedin or email: carlos.casciano@gmail.com

