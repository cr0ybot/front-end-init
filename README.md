Front-End Init
==============

A starter front-end project template with NPM, Grunt, Bower, Sass, and Autoprefixer.

This was inspired by my other starter kit, [compass-pack](https://github.com/cr0ybot/compass-pack), which is much lighter on the included tools. I've since moved away from Compass, since I found I wasn't using its mixins much at all, and I was bothered by the config.rb hack for including autoprefixer. I wanted a workflow that I had more control over, and I think Grunt was a good choice.

## Startup

Download these files or fetch the git repo. Then, (as long as you've got node/npm, grunt, and bower installed) all you should have to do to get up and running is `npm install`, and `bower install`. You might also want to do an `npm update`, depending on when this repo was last updated.

## Folders and Files

```
css/
fonts/
img/
js/
└───scripts.js
scss/
├───components/
├───core/
│   ├───_base.scss
│   ├───_functions.scss
│   ├───_mixins.scss
│   ├───_typography.scss
│   └───_util.scss
├───layout/
│   └───_global.scss
├───modules/
│   ├───_footer.scss
│   ├───_header.scss
│   └───_nav.scss
├───pages/
│   └───index.scss
├───_settings.scss
└───styles.scss
bower.json
Gruntfile.js
index.html
package.json
```

## Notes

### Components vs. Modules

In some other Sass project templates, "modules" and "components" seem to be used interchangeably. I'm explicitly using both, with a critical distinction:

*Modules* are parts of a site that can be made up of many elements, but are also fairly self-contained, such as the site's header, footer, and nav, or other blocks of predictable content.

*Components* are basically just elements themselves, but not necessarily base element styles (those go in core/\_base.scss). These are elements with specific classes, such as various button or link styles.

### Layout & Skin

I have decided not to split the `modules` into `layout` and `skin` folders like other similar SASS templates. It would mean each component would consist of two separate files, which is a pain to deal with switching between during development. It is a nice idea to split the layout from the rest of the presentation, in theory... I like to keep layout and skin subsections separate within each style, like so:

```css
.foo {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    color: black;
    background-color: white;
    border: 4px solid grey;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
}
```

There is, however, a layout folder, for things specifically concerning layout elements such as the ubiquitous `.content` or `.container` classes. I would also put grid frameworks here, if I used them much.

### Pages

It's likely that you'll have at least one page that is so unique that it would be silly to include its styles on every page. Usually it's the index page, which I've already included. Just remember that in each unique page's HTML you need to link the separate CSS files that are generated in the `/css/pages/` folder.

### Modernizr

I've included grunt-modernizr, but not the modernizr-dev.js file. I don't see any benefit to mirroring here what will be an outdated version next time I pull this template, so I'm assuming you'll use your own or a remote file through a CDN for development (to be switched out for the generated one in production).

### Print Styles

Some project templates out there include a screen and print file as the main outputs. I've decided to stick with one main styles file and include `@media print` declarations where necessary throughout.

### Sass Compiler

I am using LibSass tentatively, but it might not be compatible in all instances. Simply run `npm uninstall grunt-sass` and `npm install grunt-contrib-sass --save-dev` in your project folder to switch to Ruby Sass (you must also ensure Ruby is installed on your system). You'll also have to change some options in the Gruntfile sass object: `sourceMap` -> `sourcemap` & `outputStyle` -> `style`.

### Bower

I removed the npm package `grunt-bower-task` as the functionality I was looking for is currently broken (as of v0.4.0). I also realized that it was entirely unnecessary to be using something that copies bower components to another folder at this point, since the components I'm including are all development dependencies and can be linked to just fine in the `bower_components` folder.
