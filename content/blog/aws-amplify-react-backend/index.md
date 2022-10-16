---
title: AWS Amplify Authentication with React
date: "2022-09-03T23:46:37.121Z"
---

Creating and managing users for your application is a core part of any project.  During initial development of Goshimmy we only had a static list of users but now with AWS Amplify we can add these capabilities with minimal effort.  This will help focus development efforts on the core platform and not identity management.

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