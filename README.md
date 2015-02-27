# grunt-style-guide

## Installation *

    npm install git://github.com/hkvalvik/grunt-style-guide.git --save

* The package has not yet published to NPM, hence the url to GitHub.

## Example grunt configuration:

    module.exports = function(grunt) {
        grunt.initConfig({
            'style-guide': {
                dist: {
                    src: 'design', // A directory containing subdirectories with design files
                    dest: 'style-guide.json' // Where to render design-file json
                }
            }
        });
        grunt.loadNpmTasks('grunt-style-guide');
    };

### Options

#### src

Should point to a directory containing design files in jpg, png or gif format.

For example, if you are creating a navigation component and a carousel, the directory structure might look like this:

design
│
└───navigation
    │   small.jpg
    │   medium.jpg
    │   large.jpg
    │
    └─carousel
    │   small.jpg
    │   medium.jpg
    │   large.jpg

## Example client-side configuration:

    <!-- Include jQuery (not included in this package) -->
    <script src="/jquery.min.js"></script>

    <!-- Include the style guide plugin -->
    <script src="/node_modules/grunt-style-guide/node_modules/style-guide/client.min.js"></script>

    <!-- Include the user interface styles -->
    <link rel="stylesheet" href="/node_modules/grunt-style-guide/node_modules/style-guide/client.min.css">

    <!-- Initialize the plugin. -->
    <!-- The dataFile option must point to the dest path in the grunt configuration. -->
    <!-- The imageResolver option is optional; use it if you need to rewrite image paths. -->
    <script>
        $(document).ready(function(){
            new Geta.SG.Main($('body'), {
                dataFile: '/style-guide.json',
                imageResolver: function(path){ return '/' + path; }
            });
        });
    </script>

To associate an element with a design, use the `data-sg-component` attribute:

<nav class="navigation" data-sg-component="navigation"> ... </nav>

## Example of a rendered style-guide:

![Example of a rendered component](example.jpg "Example of a rendered component")



