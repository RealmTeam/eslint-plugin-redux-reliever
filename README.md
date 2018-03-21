# eslint-plugin-react-redux-reliever-of-type

enforce usage of action$.ofType inside react-redux-reliever epics

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-redux-reliever`:

```
$ npm install eslint-plugin-redux-reliever --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-redux-reliever` globally.

## Usage

Add `react-redux-reliever-of-type` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "redux-reliever"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "redux-reliever/enforce-oftype-usage": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





