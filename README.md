# Give a url, get a screenshot...
A micro service API for creating and serving website screenshots.

Automatically caches screenshots to make them load faster, and updates them periodically. Stores all of your screenshots so you don't have to worry about copying them over to another server.


----------


## Options ##

| param | description | default |
|---|---|---|
| w | the screenshot width in px | 1920 |
| h | the screenshot height in px | 1080 |
| vpw | The area of the page document, starting at the upper left corner, to render. Possible values are 'screen', 'all', and a number defining a pixel length. 'window' causes the length to be set to the length of the window (i.e. the shot displays what is initially visible within the browser window).  'all' causes the length to be set to the length of the document along the given dimension.  | "window" |
| vph | The area of the page document, starting at the upper left corner, to render. Possible values are 'screen', 'all', and a number defining a pixel length. 'window' causes the length to be set to the length of the window (i.e. the shot displays what is initially visible within the browser window).  'all' causes the length to be set to the length of the document along the given dimension.  | "window"
| delay | Number of seconds to wait after a page loads before taking the screenshot. | 0 (none)
| force | Whenever possible, a cached image is displayed. If you need a new one you can use the force option. | "false"
| selector | Capture the page area containing the provided selector. | body

## TODO ## 
- Add params for setting the webshot windowSize (currently using w & h which will be repurposed for the screenshot size.
- Change models to plugins, add AWS & S3 Support
- Create Config File

import AWS from "./plugins/AWS"


{
  "plugins": [ new AWS({
    username: 'something',
    password: 'soemthing'
  }) ]
}

{
  "plugins": [ new Local({ savePath: 'screenshots' }) ]
}

// this line should be better.
const file = config.plugins ? config.plugins : config.plugin;

if ( ! file ) {
 throw error()
}

----------


## Development ##

### Install Steps ###

 1. git clone
 
 2. yarn install
 
 3. yarn run build
 
 4. yarn run server

> NOTE: The server serves react from the ./build directory. So you must
> build the client before running the server.


