Front-End Init
==============

A starter front-end project template with NPM, Grunt, Bower, Sass, and Autoprefixer.

This was inspired by my other starter kit, [compass-pack](https://github.com/cr0ybot/compass-pack), which is much lighter on the included tools. I've since moved away from Compass, since I found I wasn't using its mixins much at all, and I was bothered by the config.rb hack for including autoprefixer. I wanted a workflow that I had more control over, and I think Grunt was a good choice.

## Startup

Download these files or fetch the git repo. Then, (as long as you've got node/npm and grunt installed) all you should have to do to get up and running is `npm install`. You might also want to do an `npm update`, depending on when this repo was last updated.

## Folders and Files

```
css/
fonts/
img/
js/
└───scripts.js
scss/
├───components/
│   ├───_buttons.scss
│   ├───_forms.scss
│   └───_links.scss
├───core/
│   ├───_base.scss
│   ├───_fonts.scss
│   ├───_layout.scss
│   ├───_typography.scss
├───modules/
│   ├───_footer.scss
│   ├───_header.scss
│   └───_nav.scss
├───pages/
│   └───_home.scss
├───settings/
│   ├───_breakpoints.scss
│   ├───_colors.scss
│   └───_general.scss
├───util/
│   ├───_functions.scss
│   ├───_misc.scss
│   └───_mixins.scss
└───styles.scss
Gruntfile.js
index.html
package.json
```

## Notes

### Components vs. Modules

In some other Sass project templates, "modules" and "components" seem to be used interchangeably. I'm explicitly using both, with a critical distinction:

*Modules* are repeatable parts of a site that can be made up of many elements, but are also fairly self-contained, such as the site's header, footer, and nav, or other blocks of predictable content. Modules may contain components or even other modules.

*Components* are indivisible parts of a site at the most basic levels, almost just elements themselves, but not necessarily base element styles (those go in core/\_base.scss). These are elements with specific classes, such as various button or link styles.

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

There is, however, a layout file in `/core`, for things specifically concerning layout elements such as the ubiquitous `.content` or `.container` classes. I would also put grid frameworks here, if I used them.

### Pages

Unique page styles get their own partial files here, and they are still included in the main styles.scss. There isn't much reason to output separate files for specific page styles; once the main css file is downloaded by the browser it will have all of the styles for the site, so there are no extra file downloads on each page.

### Modernizr

I've included grunt-modernizr, but not the modernizr-dev.js file. I don't see any benefit to mirroring here what will be an outdated version next time I pull this template, so I'm assuming you'll use your own or a remote file through a CDN for development (to be switched out for the generated one in production).

### Print Styles

Some project templates out there include a screen and print file as the main outputs. I've decided to stick with one main styles file and include `@media print` declarations where necessary throughout.

### Sass Compiler

This is a grunt-sass template which uses LibSass. There are no good reasons left to use Ruby Sass. It's 4000% faster, and as of LibSass 3.3, there are no incompatibilities listed on the (Sass Compatibility site)[sass-compatibility.github.io].

### Bower

I removed bower. I'm not sure why I though I needed another dependency in the first place; all of the bower modules I was using are in the npm repos as well, and they're dev dependencies anyways.
