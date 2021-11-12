# Deploy React Application to render.com and have your data persist

Deploying a "static site" to render.com is free.
Their docs have a `Create React App` quick start guide for reference.

*BUT*

Storing application data that needs to persist across deploys will incur additional charges, specifically,  `Add an SSD disk to any service`, quoted at $0.25/ GB per month


## Before You Get Started

When you set up your render.com service, you will be providing a name for it. Likely your project name. For example, my application "State Quarters Collector", the Render platform will create a domain `https://state-quarters-collector.onrender.com/api` for you.

The code in this repository will start `json-server` for you automatically and set up your service to make your API respond to requests at `https://state-quarters-collector.onrender.com/api`

Therefore,  **before you deploy** you need to modify your application code to make all API requests to `https://state-quarters-collector.onrender.com/api` instead of http://localhost:8088 (or whatever your current URL is).











## Setup

### Setting up Repository

 `cd ~/workspace`
1. Fork this repository to your account.
1. Clone your new repository to your machine: ```git clone {github connection string} capstone-deploy```
1. `cd capstone-deploy`
2. Copy all of your source code into the `src` sub-directory.
3. If you installed any 3rd party `npm` tools, make sure you install them all again for this repository.
    ```sh
    npm i --save foo bar baz whatever
    ```

### Setting up render Service

1. Go to render.com and create a new account by connecting your Github account.
2. Once you are logged in, go to the Dashboard.
3. Create a new service.
4. Select the `react-deploy-render` repository from the list of your repositories that it shows next.
5. Provide a name for your service. Should be the name of your project.
6. Choose `Node` for the Environment field.
7. Keep `master` branch.
8. Build command should be `npm install && npm run build`.
9. Start command should be `npm start`.
10. Click the **Advanced** button at the bottom, but above the **Create Web Service** button.
11. Click the **Add Disk** button.  Adding a disk prevents zero downtime deploys.  Create a disk to store application data that needs to persist across deploys. You can mount it on any absolute path and read and write to it using standard filesystem primitives.

12. In the name field, you can provide any descriptive label you want for this disk (e.g. database)
13. Mount path should be `/var/data`
14. 1 GB should be enough for small projects.
15. Scroll down and click the **Create Web Service** button.

Then the platform will pull your repository code, install all the `npm` packages, build your project and make it live.


## Notes

### **package.json**

* `start` script runs production build and starts json-server. Static dist files will be served by json-server.
* `start:dev` script concurrently runs "normal" create-react-app dev build and json-server on separate ports.
* `json-server` dependency

### **server.js**

* Adds custom route for database resources by appending `/api` to the start of all db routes
* Looks at request url and assumes if it doesn't begin with `/api` to just return the React app

