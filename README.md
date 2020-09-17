# AmazoneClone-ReactJS-Firebase-Stripe
- A appication based and inspired by amzone design and functionalities.
- User can crete his/her account, logn into it.
- Also, there is functionality to add orders into basket.
- Further those added products can also be removed from the basket.
- Payment transactions are handled using <b>Stripe</b> Test Api Keys.
- By using following details for Card a succesful transaction can be made under testing environment for now:
    Card: 4242 4242 4242 4242
    MM/YY: 04 / 24
    CVC: 242
    ZIP: 42424
- Backend is deployed at https://us-central1-clone-a5e8b.cloudfunctions.net/api
- Dependencies for the project are:
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongoose": "^5.10.5",
    "pusher": "^3.0.1"
- For now, it has only couple of endpoints as the application is still in progress.
- Only purpose of this app is to support and supply data to my project "WhatsApp Clone"
- The frontend of the app is hossted on firebase at https://my-whatsapp-clone-a8f82.web.app/


## Available Scripts

In the project directory, you can run:

### `npm install`

Intall all the dependencies for the app<br />

### `npm start` or `nodemon start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
