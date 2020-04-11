# Gas Distribution

This is the backend from the Integrator Project first class.
The whole project consists of building a system for gas distribution in Ibirama and region

---
## Requirements
### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

<!-- ### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.
      $ npm install -g yarn
--- -->

## Install

    $ git clone https://github.com/DricoGrosch/ProjetoPin.git

    Now, go to your project folder and run:
    $npm install

## Configure app

- Open ourProjectFolder/BACKEND
- First of all, inside "config/" create a new file named "secret.js".
- Then create yur database credentials following the template below:
    module.exports = {
    DATABASE_NAME: '',
    DATABASE_USERNAME: '',
    DATABASE_PASSWORD: '',
    DATABASE_PORT: '',
    DATABASE_HOST: '',
    };
- After that, to map your database, run:
 $npx sequelize-cli db:migrate

## Running the project
- To run your project, just run:
    $ npm start