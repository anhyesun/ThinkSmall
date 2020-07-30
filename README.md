<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="screenshots/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">ThinkSmall</h3>

  <p align="center">
    A platform to connect small business owners to local volunteers!
    <br />
    <a href="https://github.com/CPSC436/ThinkSmall"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/CPSC436/ThinkSmall">View Demo</a>
    ·
    <a href="https://github.com/CPSC436/ThinkSmall/issues">Report Bug</a>
    ·
    <a href="https://github.com/CPSC436/ThinkSmall/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Built with](#built-with)
* [Getting Started](#getting-started)
* [Project Requirements](#project-requirements)
* [Minimal Requirement Break Down](#minimal-requirement-break-down)
* [Prototypes](#prototypes)
* [User Workflow](#user-workflow)
* [Troubleshooting](#troubleshooting)

## About the Project

This is a web application that will help small businesses in Vancouver by connecting their needs with the services that their community can offer. Small businesses have a harder time competing in the market to keep their businesses alive, but they have been hit especially hard during this pandemic. This app will help small business owners by providing a directory for all the small businesses that exist in Vancouver (exposure), as well as a platform to connect small business owners who have a need for services (such as the creation of the logo, and translation for flyers) with their volunteers who have the skillset to help them.

As a business owner user, the app will need to store the following data: name of the business, business ID (assigned by the application), location, required services, business description, and status of the store (if they require a service or not). As a community volunteer, the following data are necessary: volunteer name, volunteer ID, general location (city), skills that they can provide, and volunteer description (portfolio or link). Additional functionality that we would like to have given that there is time, is the implementation of a point system so that volunteers can collect non-monetary reimbursement in return for work that is completed which could then be used as a store credit at these businesses.

### Built with
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [AWS S3](https://aws.amazon.com/s3/)
* [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2)
* [Material UI](https://material-ui.com/)

## Getting Started

* Clone `CPSC436/ThinkSmall` repo on your local environment
* Ensure that you have created `client/.env.local`, `api/db/.env` files (ask one of us!)
* Install dependencies
* Start the application!

```bash
git clone https://github.com/CPSC436/ThinkSmall.git
cd ThinkSmall
yarn install
yarn start
```

## Project Requirements

a) Minimal requirements:

- Have the ability to list all small businesses that exist by list view 
- Have the ability to list small businesses requiring help by list view 
- Have the ability to list volunteers providing help by list view 
- Business owners have the ability to request help
- Volunteers have the ability to mark themselves as available to provide help
 
b) Standard requirements:

- Register business owners and volunteers, providing information about the skills they can provide as a volunteer or request for help as a business owner
- Authentication in place
- Have the ability to locate small businesses in a map view
- Filter via specific criteria (distance range, services, etc.)
- Different colored flags for businesses that require a service
- Users can upload images and documents when they request help

c) Stretch requirements:
- Provide a communication channel between business owners and volunteers
- Users can upload their custom tags when they request help
- Dashboard to show the progress of volunteer jobs 
- Volunteer currency - volunteers who volunteer can be given non-monetary currency (virtual points) by businesses which can then be traded for accomplishments (milestones, recognition badges, achievements, level up)
- Provide matching suggestions based on the needs and resources e.g. business owners who are looking for someone to design their logo receives a list of available designers who registered themselves as available

## Minimal Requirement Break Down

- Have the ability to list small businesses requiring help by list view 
	- Render it as a list view
  - Sort it alphabetically
  
- Business owners have the ability to request help
	- Fill out the request form to provide details on what they need
  - Store necessary data under the business owner’s account
  - Visual effect to show in list that this business owner requires help
  
## Prototypes

![sketch_1]
![sketch_2]

![landing_page]
![volunteer]
![business_owner]
![request_form]

## DB Schema

![db_schema]

## User Workflow

![login_workflow]
![account_page_workflow]
![businesses_page_workflow]

## Troubleshooting
List any issues/problems you encounter and how you have troubleshooted the issue!

[landing_page]: screenshots/landing_page.png
[volunteer]: screenshots/ui_for_volunteer__list_view.png
[business_owner]: screenshots/ui_for_business_owner__list_view.png
[request_form]: screenshots/request_form.png
[sketch_1]: screenshots/sketch_1.jpg
[sketch_2]: screenshots/sketch_2.jpg
[db_schema]: screenshots/db_schema.png
[login_workflow]: screenshots/login_workflow.png
[account_page_workflow]: screenshots/account_page_workflow.png
[businesses_page_workflow]: screenshots/businesses_page_workflow.png



