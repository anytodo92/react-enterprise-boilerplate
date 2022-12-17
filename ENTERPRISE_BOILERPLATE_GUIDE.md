# react-enterprise-boilerplate

This project is a React configured boilerplate that can be used for medium to large-scale applications.

## VS Code settings

Add these lines to your VS Code settings:

```
{
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false,
  "editor.formatOnType": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
}
```

These tell VS Code not to check style formatting, as Stylelint does that. Also, we configure Prettier to be a default formatter.

## Config files

### Prettier

prettier.config.js

### Stylelint

stylelint.config.js

If you're not using SCSS you can remove _scss_ rules and remove the _stylelint-scss_ plugin

### Eslint

.eslintrc.cjs

### PostCSS

postcss.config.js

PostCSS is set up with plugins that provide SCSS-like functionality such as variables, mixins, nested blocks, etc.

### Vite/Vitest

vite.config.js \
vitest.setup.js

## How to use each directory

### api

Any methods that are dealing with API requests should be placed in the _api_ folder.

For more details about directories and how to use them check out the _Project Setup_ chapter.

### assets

Any assets used in the projects, such as images, fonts, etc.

### components

This directory should contain only components that are reusable, and not specific to any feature. Other components should be placed in the feature directory. See chapter _Project Architecture_ for full explanation.

#### components/common

Here you can put any components that are reusable, but are not used as often.

#### components/transitions

Components that provide transitions and animation functionality

### config

Any app related or third-party config files.

### constants

Global constants for the app

### context

Global context providers

### helpers

Put here small and reusable methods. If you have a helper consisting of a few methods, then you probably should put it in the _services_ folder.

### hooks

Here you can put custom hooks.

### intl (optional)

Here you can put any intl data. If your app does not incorporate internatiolisation, then you can remove it.

### layout

Any components that deal with providing layouts. You can have a look at chapter _Managing aplication layouts_ to see some examples.

### services

Files with methods that provide specific functionality that can be reused and is not tightly coupled to any component. For instance, validation, error handling, etc.

### stores

This directory is for global stores. For instance, you could put there global Zustand stores or RTK slices. Note that the only stores places here should be the ones that hold trully global state. Otherwise, stores should be placed as close to where their state is used as possible.

### styles

Global styles, variables, etc.

### views

In this folder you should put your features. See chapter _Project Architecture_ for full explanation.
