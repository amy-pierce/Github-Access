# Github-Access
## CS3012- Amy Pierce -17330305

## Project Description
This project had two aspects to it:
- Integrate the GitHub Api to retreive and display data (Assignment 5)
- Integrate the GitHub API to build visualisation of the data retreived (Assignment 6)
## My General Solution Idea
- for this project I decided to build a web application using react.js. I have never used react before but  remeber from CS2013 last year that some groups used react to make web sites and apps and I thought this would be a good experience to branch out and try something new like react.
- The graphs I drew use Plotly, which is based on d3.js libraries to create social graphs and represnet the data in different ways.
## Video Demo
![alt text](https://github.com/amy-pierce/Github-Access/blob/master/screenshots/screen_record.gif)
## Functionality
- The application I have developed allows you to seach for an account on GitHub. 
![alt text](https://github.com/amy-pierce/Github-Access/blob/master/screenshots/search.png)
- If a user with the logged username is found, some general information is shown about the user including 
 - the users contribution activity map
 - the users GitHub icon, bio, username and when theyr joined
 - amount of followers, amount of people they follow
 - amount of repos
![alt text](https://github.com/amy-pierce/Github-Access/blob/master/screenshots/general_info.png)
##
- The users top 10 repositories are displyed and if the repo name is clicked the user twill be brught to that repository on GitHub
- Each panel for a repository tells us 
  * the name of the repo
  * when it was started
  * thhe description of the repo
  * the main language used in it 
  * how many watchers it has
  * how many forks it has
- If you click on teh repository name you will be brought to that repo on GitHub
![alt text](https://github.com/amy-pierce/Github-Access/blob/master/screenshots/repo_info.png)
##
- There is a link at the bottom of the page with a link to the ogged users full GitHub account
![alt text](https://github.com/amy-pierce/Github-Access/blob/master/screenshots/link_to_GitHub.png)
##
- There are several social graphs shown displaying different things regarding that users information which is discussed more in the Graphs section below

## Graphs
### BarChart
#### Profile Details
The first graph I made was a simple bar chart that once a user is searched and fond, displayed the amount of followers they have, how many people they follow and the amount of repositories they have.This was a simple enough graph to make and helped me get to grips with using plotly to represet different data.
![alt text](https://github.com/amy-pierce/Github-Access/blob/master/screenshots/first_graph.png)

### PieChart
#### Languges
The next graph I made was a pie chart that represenst the percentage of each language a user utilizes throughout their repositories. This was more interesting information to work with than I used in the first graph but still not the most exciting possible.
![alt text](https://github.com/amy-pierce/Github-Access/blob/master/screenshots/language_piechart.png)


### Scatter Plot
#### Repo Size
I decided to look into a more interesting information to display for my next graph. I looked at the size of the top 10 repositories for the user that was logged. I used a scatter ploy to display this information. It was trickier than the last two graphs to get the information. When originally passing the scatter plot the values to display on the scatter plot because the repositiores are obviously very big they had huge values and the markers were gigantic. I decided to make each markers size a percentage of the combined size of the reopositories to scale them down This worked better but still some repositores were so small in comparison to the large ones their markers are tiny and not really visible. The graph still works and shows a more interesting insight extracted from the data.

## Running it
### Requirements
In order to run this on your own computer you must have
- [node.js](https://nodejs.org/en/download/)
-npm 
-[react.js](https://react-cn.github.io/react/downloads.html)
In order to run the application:
- clone the repo using 
```
git clone https://github.com/amy-pierce/Github-Access.git
```
-navigate into the project directorey using 
```
cd Github-Access
```
- in the project directory run commands:
```
npm i (to re-install node modules)
npm start (to run)
```




