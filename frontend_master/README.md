# Expense Management React App (Mini Project - JW1_1)

## Getting started

To get the frontend running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server
- to start the fake api server, run npx json-server --watch data.json --port 1234

## Functionality Overview

The example application is a Expense Management Software called "blabla". It is a reporting solution to record and report business expenses and helps organizations to manage end-to-end expense workflow It uses a custom API for all requests, including authentication.

**General functionality:**

- Authenticate users via JWT (login page + logout button on Dashboard page)
-

**The general page breakdown looks like this:**

- Home page (URL: / )
  -
- Sign in/Sign up pages (URL: /login )
  - Use JWT (store the token in localStorage)
