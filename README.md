# Board Game Fanatics

## To start Board Game Fanatics

From this folder (project-template-react-rails-api), enter 'rails s' from the terminal window to start the server. Then,
enter npm start --prefix frontend to start the frontend server. 

## Description

This project is scaffolded so that you can build a React frontend and Rails
backend together.

### Built Using

[![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react)](https://reactjs.org/) [![ReactRouter](https://img.shields.io/badge/ReactRouter-4F545E?style=flat&logo=reactrouter)](https://reactrouter.com/)  [![Ruby](https://img.shields.io/badge/-Ruby-ff6666?style=flat-square&logo=ruby)](https://https://ruby-lang.org/) [![Rails](https://img.shields.io/badge/Rails-red?style=flat&logo=ruby-on-rails)](https://rubyonrails.org/) [![React-Bootstrap](https://img.shields.io/badge/React_Bootstrap-6C8FE3?style=flat&logo=bootstrap)](https://react-bootstrap.github.io/) 
## Requirements

- Ruby 2.7.4
- NodeJS (v14 or higher), and npm

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Setup

**Fork and clone this repository**.

Then run:

```sh
bundle install
rails db:create
rails db:seed
npm install --prefix frontend
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)
- `rails start`: run the frontend and backend together with one command



## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```sh
ruby -v
```

Make sure that the Ruby version you're running is listed in the [supported
runtimes][] by Heroku. At the time of writing, supported versions are 2.6.8,
2.7.4, or 3.0.2. Our recommendation is 2.7.4, but make sure to check the site
for the latest supported versions.

If it's not, you can use `rvm` to install a newer version of Ruby:

```sh
rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```sh
gem install bundler
gem install rails
```

[supported runtimes]: https://devcenter.heroku.com/articles/ruby-support#supported-runtimes

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is less than 14, update it with:

```sh
nvm install node
```

You can also update your npm version with:

```sh
npm i -g npm
```

