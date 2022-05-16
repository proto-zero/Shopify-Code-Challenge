# <span style="color:red">Sean Lenhart Shopify Code Challenge</span>

## <a href="https://shopify-code.herokuapp.com/">shopify-code.herokuapp.com/</a>

## <span style="color:red">Project Component Stages</span>

App.js contains Genie.js and Script.js components

- Genie and Script use Style.css

## <span style="color:red">Production Log</span>

prompts
1 choose a field of study - Tell me everything you know about blank.
2 choose a hobby - What is the name of a job for a person who likes blank?
3 choose an animal - what is a blank's favorite catchphrase?

TED - "BLANK1"
BARNEY - Ted, nobody cares about that. Now put on this "BLANK2" costume and let's head down to the bar. it's gonna be "BLANK3".

## <span style="color:red">Outline<span>

### Genie

- Ask the User for a prompt. Save the prompt to an array.

- Submit the prompt to the OPENAI API and save the return value to an array.

- Clear the User prompt.

- Map the prompt array and iterate through the return value array in reverse in order to display the newest content first.

### Script

- Ask the User to answer three questions.

- Add the User answers to the preset prompts and submit them to the OPENAI API. Save the return values.

- Insert the returned values into their spots in the script.

## <span style="color:red">TODO<span>

### Internet AI Genie

- [x] connect to API

- [x] return value from API

- [x] save value in state as an array

- [x] display newest to oldest

- [x] include prompt with return value

- [x] hide API Key in env

- [x] apply color scheme to layout

### Script Generator

- [x] set up prompts to be fed to the API

- [x] set up questions for the user to feed into the API prompts

- [x] organize outcome into the script

### Bonus

- [] allow the user to choose an engine from a dropdown and insert said engine into the fetch request

- [] use cookies to let the user save their previous prompts and answers

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
