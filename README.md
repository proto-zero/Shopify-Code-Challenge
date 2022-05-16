# Sean Lenhart Shopify Code Challenge

## <a href="https://shopify-code.herokuapp.com/" target="_blank">shopify-code.herokuapp.com/</a>

## Project Component Stages

App.js contains Genie.js and Script.js components

- Genie and Script use Style.css

## Production Log

- Connecting to the API using the provided JS code was relatively easy. It took a minute to figure out hwo to identify the returned value, but a quick console log of the handleSubmit function's fetch const revealed all of the values returned and what I needed to show to the user.

- The provided JS code included a preset prompt. While for the Genie app I replaced this with the userPrompt, it did give me an idea. The OPENAI starter kit included code with a premade prompt that let the user add extra specificity, but the user still knew what the overall prompt was going to be. I thought creating a madlibs style app where the user didn't know the context of the questions they were asked would be a fun addition to the challenge.

- Creating the prompts for the Script app was a fun creative challenge. I had to rework it a few times to make sure I was utilizing as much of the return value from the API as I could. Below I detail the prompts: with What I ask the User - What I ask the API

- - Prompts

- - 1 choose a field of study - Tell me everything you know about blank.

- - 2 choose a hobby - What is the name of a job for a person who likes blank?

- - 3 choose an animal - what is a blank's favorite catchphrase?

- - Script

- - TED: "BLANK1"

- - BARNEY: Ted, nobody cares about that. Now put on this "BLANK2" costume and let's head down to the bar. it's gonna be "BLANK3".

- I fussed with the temperature and max_tokens values of the second prompt to try to eliminate long-winded answers from the API. It's a bit of a wildcard, but I think that adds to the whimsy of the overall app.

- I made sure to use proper html semantics and to keep the final product accessible to screen readers. As there are no links or images I didn't have to make use of alt text.

- Originally for the layout I wanted to make a monochromatic theme using shades of red. I made use of Canva's color scheme styling tools and discovered a great theme that looked sharp and fun. I then used the color wheel to find complimentary Monochromatic colors to add a subtle linear-gradient to the backgrounds.

- Using a great article about <a href="https://www.joshwcomeau.com/css/designing-shadows/">Designing Beautiful Shadows in CSS</a> I made sure to add a few layers of shadow to a few elements to help them stand out in different heights. I also added a teensy bit of text shadow with the app titles to give them a bit of pop.

- During the layout design I made sure to keep the mobile view in mind, using media queries within the css file to change the layout depending on the screen size.

## Outline

### Genie

- Ask the User for a prompt. Save the prompt to an array.

- Submit the prompt to the OPENAI API and save the return value to an array.

- Clear the User prompt.

- Map the prompt array and iterate through the return value array in reverse in order to display the newest content first.

### Script

- Ask the User to answer three questions.

- Add the User answers to the preset prompts and submit them to the OPENAI API. Save the return values.

- Insert the returned values into their spots in the script.

## TODO

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
