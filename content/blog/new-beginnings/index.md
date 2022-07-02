---
title: FullStory | Segment Export
date: "2022-05-02T22:40:32.169Z"
description: FullStory provides a robust API layer to enable organnizations to manage all aspects of their FullStory digital experience platform. 
---

In this article, we will take a look at how to get data out of FullStory using Segment Export.

### FullStory - Segment Export

FullStory is a capture all platform that enables you to search any user interaction that occurs during a visit to your digital property.  Using different criteria or "filters" you can refine a cohort of users that you want to analyze by mixing and matching User and Event criteria, i.e. users that visited a page, clicked 'Add to Cart' and proceeded to checkout.

![FullStory Segment](./fullstory-segments-star-recent.jpg)

In some cases, you may want to export data collected by Fullstory to analyze with other tools, like Tableau or Domo.  This can easily be accomplished using FullStory  Segment Export.

1. ![Create a Segment](https://www.fullstory.com/blog/starred-segments/) 
2.  Click Data Export
3.  Select output format
### On-Demand exports

Segment exports are generated "on-demand" which means that when you create a request for export, it is directly coming from the FullStory servers.  As a rule of thumb, waiting 24 hours before exporting data for best results.  These export files are available for 7 days from when the export is completed.
### Use the FullStory API
Great news, with the FullStory API you can automate the export process.  It's a three step process. First, make a request to FullStory to kick-off the export process [Create Segment Export API](https://developer.fullstory.com/create-segment-export).  Next, make  a request to the Export Operations API to get the ID for the finished data export operation (operation ID).  Lastly, make a request to the export results API to get the actual file location to download.

> https://developer.fullstory.com/create-segment-export
> https://developer.fullstory.com/get-operation
> https://developer.fullstory.com/get-export-results


