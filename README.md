# Github-Access
CS3012
## Project Description
This project had two aspects to it:
- Integrate the GitHub Api to retreive and display data 
- Integrate the GitHub API to build visualisation of the data retreived
## My General Solution Idea
- for this project I decided to build a web application using react.js. I have never used react before but  remeber from CS2013 last year that some groups used react to make web sites and apps and I thought this would be a good experience to branch out and try something new like react.
-The graphs I drew use Plotly, which is based on d3.js libraries to create social graphs and represnet the data in different ways.
## Video Demo
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




