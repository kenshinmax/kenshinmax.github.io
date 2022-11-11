---
title: AWS Amplify Authentication with React
date: "2022-09-03T23:46:37.121Z"
---

Creating and managing users within a React application is a fairly common use case.  During the initial development of [Goshimmy.me](https://www.goshimmy.me) we started with a simple user management implementation but it had several moving parts and was complex to scale.  As more users created accounnts, it was clear that our applicationn required a better and more feature rich solution.

So earlier this year we started to research platforms that could help us with user sign-up, handling Multi-Factor Authenticationn (MFA) and solid support for React.  AWS Amplify was at the top of the list because not only can we manage users but also leverage an entire set of backend capabilities like:

* Authentication
* DataStore
* Analytics

The reason we chose to add AWS Amplify was to help us focus on development efforts of the core platform and not identity management.   One of the main

In this article we will take a look at the steps to configure AWS Amplify and setup User Authentication

![AWS Amplify](./aws-amplify.jpeg "AWS Amplify")

Pre-requisite is to install [AWS Amplify](https://docs.amplify.aws/cli/start/install/)


First, we need to install [AWS Amplify](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/).  My project is created with React and is hosted with AWS Amplify as well, so here I will follow the steps for Javascript.

Next, we have to initialize a new Amplify project by using the amplify init command:

```
amplify init
```

If you have an existing [AWS Amplify project](https://docs.amplify.aws/cli/start/install/#option-2-follow-the-instructions) and want to pull your Amplify project use the following command:

``` 
amplify pull --appId (your app id) --envName (env name)
```

Then start your project
```
yarn start
```