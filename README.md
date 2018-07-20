[dependencies-badge]: https://img.shields.io/david/florianmaxim/meta.svg
[dependencies-badge-url]: https://david-dm.org/florianmaxim/meta

[npm-badge]: https://img.shields.io/npm/v/meta-client.svg
[npm-badge-url]: https://www.npmjs.com/package/meta-client

<img src="resources/logo.png" width="100" height="100"/>

# Meta.js 👩‍🚀
## Accessible Javascript Library For Virtual Reality 🚀

[![Latest NPM release][npm-badge]][npm-badge-url] [![Build Status](https://travis-ci.org/florianmaxim/Meta.svg?branch=master)](https://travis-ci.org/florianmaxim/Meta) [![Dependencies][dependencies-badge]][dependencies-badge-url] [![https://metajs.org](https://img.shields.io/badge/twitter-metajs_org-blue.svg)](https://twitter.com/metajs_org)
<a href="https://gitter.im/Meta_JS">
<img src="https://badges.gitter.im/gitterHQ/gitter.png"/>
</a>

# 🎊 Features

* 🏖 Learn how to create and use code virtual (reality) space in minutes.
* 💐 Code virtual reality like its the year you live in.
* 🤹🏻 Write in the language you know with the tools you love.
* 🚀 Write one version of your code that works on any device (HTC Vive, Oculus Rift, Desktop, Mobile, etc.).
* 🏰 Grab a cube now, move a castle soon!

# 🚀 Why (did you come up with this)?

Spatial media like Virtual Reality or Augmented Reality is perceived in such a fundamentally different way than computer graphics as we know them that we need to find new ways to describe it.
This is an approach.

Furthermore this is an attempt to create the most accessible virtual reality library possible.

# 💐 Example

This example is written in three lines that can't be anymore intuitive.

<a href="https://metajs.org" target="blank"><img src="https://media.giphy.com/media/3o7aCWDuzxsESrbmcE/giphy.gif" /></a>

```javascript

import {Ground, Cube, on} from 'meta-client';

new Ground();

on('touch', (data) => new Cube().set(data.position));

```

#  👩‍🚀 Usage

### Custom start within minutes:

You need to have Node.js (https://nodejs.org) installed.

(If you don't know how to use the terminal watch <a href="https://www.youtube.com/watch?v=jDINUSK7rXE" target="_blank">this</a>.)

1. Create a new directory and enter it.
```script
mkdir meta && cd meta
```
2. Initialize a npm repository and install Parcel-Bundler and Meta.
```script
npm init && npm install parcel-bundler meta-client
```
3. Create a <i>index.html</i> and a <i>index.js</i> file.
```script
touch index.html index.js
```
5. Add the following into index.html.
```script
<html>
<body>
  <script src="./index.js"></script>
</body>
</html>
```
6. Add the following into index.js.
```javascript
import {Ground, Cube, on} from 'meta-client';

new Ground();

on('touch', (data) => new Cube().set(data.position));
```  
7. Start:
```script
parcel index.html
```  
Open http://localhost:1234/ in your browser.

### One Line
Alternatively you can also put all steps together in a single line like this:

```script
touch index.html index.js && echo '<html><body><script src="./index.js"></script></body></html>' >> ./index.html && echo "import {Ground, Cube, on} from 'meta-client';\nnew Ground();\non('touch', (data) => new Cube().set(data.position));" >> ./index.js && npm init -y && npm i parcel-bundler meta-client && parcel index.html
```
### 🤹🏻 How to use the examples

It can be very useful to start with a working example.

To use the examples clone a full copy of Meta.js:
 ```script
git clone https://github.com/florianmaxim/meta
``` 
Navigate to the examples directory:
```script
cd meta/examples
``` 
Select the example you want to work with:
```script
cd 1
``` 
Install and start the example:
```script
npm start
``` 

### 🎉 Custom installation

```script
git clone https://github.com/florianmaxim/meta
npm install
npm run build
```

# 📕 Wiki

[Read the Wiki to learn how to use Meta.js.](https://github.com/florianmaxim/meta/wiki) 

# 📚 Docs

[Read the full code documentation.](https://florianmaxim.github.io/Meta)

# 💬 Slack

Join the [Slack channel](https://metajsorg.slack.com) to talk about (virtual) space.

# Packages

|                                             meta-client                                            |                                             meta-console                                             |
|:--------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------:|
| [![npm](https://img.shields.io/npm/v/meta-client.svg)](https://www.npmjs.com/package/meta-client)  | [![npm](https://img.shields.io/npm/v/meta-console.svg)](https://www.npmjs.com/package/meta-console)  |
| [![npm](https://img.shields.io/npm/dw/meta-client.svg)](https://www.npmjs.com/package/meta-client) | [![npm](https://img.shields.io/npm/dw/meta-console.svg)](https://www.npmjs.com/package/meta-console) |

# Compatibility

### VR Displays

<table>
    <tr>
        <td>
            Browser
        </td>
        <td>
            Version
        </td>
        <td>
            HTC Vive
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://chromium.woolyss.com/download/" target="blank">
             Chromium
            </a>
        </td>
        <td>
        67.0.3371.0
        </td>
        <td>
            <img src ="https://img.shields.io/badge/status-stable-green.svg" />
        </td>
    </tr>
    <tr>
        <td>
            <a href="https://www.google.com/chrome/" target="blank">
             Chrome
            </a>
        </td>
        <td>
            65.0.3325.162
        </td>
        <td>
            <img src ="https://img.shields.io/badge/status-stable-green.svg" />
        </td>
    </tr>
     <tr>
        <td>
            <a href="https://www.mozilla.org/en-US/firefox/nightly/all/" target="blank">
             Firefox Nightly
            </a>
        </td>
        <td>
            61.0a1
        </td>
        <td>
            <img src ="https://img.shields.io/badge/status-stable-green.svg" />
        </td>
    </tr>
</table>

### Desktop

<table>
    <tr>
        <td>
            Browser
        </td>
        <td>
            Version
        </td>
        <td>
            Status
        </td>
    </tr>
    <tr>
       <td>
            Chrome
        </td>
        <td>  
            67.0.3396.99   
        </td>
        <td>
            <img src ="https://img.shields.io/badge/status-stable-green.svg" />
        </td>
    </tr>
</table>

### Mobile

<table>
    <tr>
        <td>
            Browser
        </td>
        <td>
            Version
        </td>
        <td>
            Status
        </td>
    </tr>
    <tr>
       <td>
            Chrome
        </td>
        <td>     
        </td>
        <td>
        </td>
    </tr>
</table>

# Credits 👑

As any other software this is based on thousands of layers of programming abstraction. The upper layers on which this is build on are Three.js (Javascript 3D library) and Oimo.js (Javascript physics engine). 

# References & Inspiration 🤹

I probably learned most about space from
[<b>Walter Lewin</b>](https://www.youtube.com/watch?v=GtOGurrUPmQ "Walter Lewin").

I probably learned most about toys from [<b>Julian Summer Miller</b>](https://www.youtube.com/watch?v=F6uYDUPn4oM "Julian Summer Miller").

That's basically what brought me here.

# License 🔖
MIT

# Manifesto 📜

Let's start to redefine space!