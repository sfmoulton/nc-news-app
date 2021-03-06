# NC-News Project (Front-End)

The **NC-News App** has been created to allow users to read articles, add their comments, vote (either positively or negatively!) for a comment or article, and search for articles based on their favourite subject.

The app has been designed with UX front of mind - with clear text, display and buttons allowing the user to interact easily with the content. 

Prior to the creation of the Front-End App, the API Back-End was hosted using **Heroku**, which has been utilised by the app. 

For further details on this, please follow this link: https://github.com/sfmoulton/be-nc-news

But first things first, take a look at the app! Here is a link to the deployed site: https://sfm-nc-news-app.netlify.com

## The App

As mentioned, the app itself was designed to allow the user to easily read posted articles, post their own articles, and comment on any posts. The user is also able to vote for a comment or article, using the provided buttons.

The logged in user can also delete any comments or articles they have posted, and a delete button will accompany any of their posts.

Functionality has also been incorporated to allow the user to log in to the app - however due to the Back End API this username must match a username that exists in the database. If you would like to log in as a user other than the famous 'jessjelly', please try 'grumpy19'.

I chose not to add in the option to use a password - as this is a prototype app that I wanted to make easily accessible, without having to store any sensitive data.

The following instructions will allow you to set up your own version of the NC News App:

## Cloning the project

Clone this repo:
```js
git clone https://github.com/sfmoulton/nc-news-app.git
```
Then don't forget to hook your local version up to a new GitHub repo, using the below terminal commands (checking the git remotes with each step: git remote -v):

```js
git remote remove origin

git remote add origin <YOUR-GITHUB-URL>
```
Or if you would like to suggest any project changes, please feel free to collaborate and your own push requests to my repo.

Then run the below to install the dependencies and start the app in the browser:

```js
npm install

npm start
```
## Creating the app

**NC News** has been created using React -  further details of which can be found here: https://reactjs.org/

## Project Dependencies

The following dependencies were required to build the NC-News app:

- #### Node JS (Version 13.1.0)

- #### Reach Router (https://reach.tech/router)
Reach Router is allowed me to implement a Router and Links in to the app componenets.

- #### Axios (https://github.com/axios/axios) 
Axios was used to make HTTP requests to the NC-News Back-End API.

- #### Moment (https://www.npmjs.com/package/react-moment)
Moment (a React component) was used to format dates in the app.

- #### React Icons (https://react-icons.netlify.com/#/)
Used to add icons to the app.

- #### React-Loader-Spinner (https://www.npmjs.com/package/react-loader-spinner)
This package provided a simple component that I used to indicate to the user when the page was loading.

### If you have any questions regarding the project, please get in touch!
