# shopping-cart
Shopping-cart fully responsive website

This app comes in two themes : Light & Dark.

In order to run the project:
- You need to clone or download this repo
- Once you have the project, open it in an IDE of your choice
- In the console, run the following commands in order : 
  1. npm install
  2. live-server (which will open the app in your browser)


# To run a dark theme of the app : 
- In the project folder, Go to >> folder titled 'sass'
- In it, you will find 'main.scss'
- On line no. 11 you you should see this:
    @import "themes/theme1/themeMain";
- Change 'theme1' to 'theme2'
- Run the follwing commands in the console : 
    npm run compile:sass
    live-server
  
    
 You should see a dark theme of this app!
