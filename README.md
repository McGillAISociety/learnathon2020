Colours:

- BASE: #fff white
- coral: #FFC18E
- pink: #FFA9A8
- blue: #8BECFF
- black: #040404
- grey: #e6e6e6

> Clone Repo > Go to repo directory > run `yarn` to get all the node-modules etc. > you may also have to add `yarn add react-light-accordion` for the faq >
> run `yarn start` to see the website in your local browser.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run: `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`yarn test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`yarn eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Deployment

Deployment is a little finnicky.

First, run `yarn run deploy` in the root directory of the repository. This will create an optimized build of the site and push it to the remote `gh-pages` branch. For some reason, this also overwrites the Custom domain we have set for this project. You'll then need to go to this project's [Settings page](https://github.com/McGillAISociety/mais21-ConferenceSite/settings), scroll to the Github pages section, and fill in the `Custom domain` text box (which is now empty) with `mcgillailearn.com`. Do NOT prepend `mcgillailearn.com` with `www.` or `https://`. Your new site should now be deployed!
