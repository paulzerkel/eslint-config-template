# eslint-config-template
A blank template for easily creating custom ESLint configuration modules.

## Overview
By default ESLint is configured with all of its options disabled. The command `eslint --init` will allow you to select from a set of premade configurations or generate a custom set of rules based on your code or style preferences.

You may wish to have a reusable set of rules that can be shared among your projects. This template aims to make creating those rules easier. This project contains all of the rules for eslint v2.4.0 in an easy to configure module.

## Usage
The easiest way to use this project is to clone it, rename it, and then edit it to your liking.

### Cloning
It would be best to clone the project into a custom directory name. Lets say that your organization was called Acme. You can clone the project like so: `git clone https://github.com/paulzerkel/eslint-config-template.git eslint-config-acme` This will clone into a directory appropriately named for your organization. Please node that the project name does need to start with `eslint-config-`.

### `package.json`
Next you'll want to update the package.json file to reflect your organization name. Change the `name`, `descrition`, and URL fields as needed to reflect your proper project configuration.

### Edit Rules
The rules in this package all default to being off, just like the defaults for ESLint. Rules live in the `/rules` directory and are broken up by their category. The [ESLint documentation](http://eslint.org/docs/rules/) has a description of each rule and covers all of the options on how rules can be configured. Please review this for more information on setting the rules. For convenience, each rule in a category includes a link to its own documentation page.

The rule category files are:
* [`best-practices.js`](http://eslint.org/docs/rules/#best-practices) - rules aimed at promoting clean code and avoiding accidents
* [`errors.js`](http://eslint.org/docs/rules/#possible-errors) - rules to point out potential runtime errors in your code 
* [`es6.js`](http://eslint.org/docs/rules/#ecmascript-6) - rules specific to ECMAScript 6 development
* [`node.js`](http://eslint.org/docs/rules/#nodejs-and-commonjs) - rules that pertain to Node.js applications
* [`strict-mode.js`](http://eslint.org/docs/rules/#strict-mode) - rules about running your code in strict mode
* [`style.js`](http://eslint.org/docs/rules/#stylistic-issues) - rules to promote a consistent code style across your project
* [`variables.js`](http://eslint.org/docs/rules/#variables) - rules about the declaration and use of variables

### Usage
It is convenient to have a local project to test your rules while you are developing them. You can easily do this by linking your rule module to a test application.

1. run `npm link` in your rules module
1. create a new project for testing and add some source files
1. add a locally installed copy of eslint to your test project via `npm install --save-dev eslint`
1. link your rules module to the test project by running `npm link eslint-config-acme` (of course use your real project name!)
1. create an ESLint config that references your custom configuration

### `.eslintrc.*`
A `eslintrc.*` file will be used to [configure ESLint](http://eslint.org/docs/user-guide/configuring) for your test project. The file can be JavaScript, JSON, or YAML. To reference your custom rules module just add an `extends` property that references your module. For example, if you were going to reference a module named `eslint-config-acme` you could have an `.eslintrc.json` file that contains:

```
{
    "extends": "acme"
}
```

At this point you can lint your code by running `./node_modules/.bin/eslint .`. You could also add an NPM script to do the same.

```
"scripts": {
    "lint": "eslint ."
}
```

This makes it as easy as running `npm run lint`.

### Final Steps
Adding documentation about your custom configuration is probably a good idea. Like any other code your rules should be stored in source control and integrated into your CI process. If you'd like to share them with the world they can also be deployed to NPM. Happy linting!