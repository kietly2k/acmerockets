# TailwindCSS

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Setup](#setup)
  - [Notes](#notes)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- Mobile-first workflow
- Pug
- External animation

### What I learned

- Ctrl+B: Open/ Close solution browser on vscode
- Ctrl+Shift+P -> choose simple browser

### Continued development

- Practice more about Sass and Pug.
- Learn about css animation.
- Handle error in JS.

### Useful resources

- [Inline fold Extension](https://marketplace.visualstudio.com/items?itemName=moalamri.inline-fold&ssr=false#overview)
- [Tailwind Docs](https://marketplace.visualstudio.com/items?itemName=austenc.tailwind-docs&ssr=false#overview)
- [Emojipedia](https://emojipedia.org/)
- [Unicode Special Character](https://symbl.cc/en/)

### Setup
- [Tailwind Installation Docs](https://tailwindcss.com/docs/installation)
- Define html (or orther extension) path to tailwind config file so that tailwind can know where to apply css.
- How to start a project:
  - install node js
  - npx tailwindcss init
  - npx tailwindcss -i .\src\input.css -o .\build\css\style.css --watch

### Notes
- Tailwind v3+ inject JIT (Just in time) complier that mean only generate style when use the classes (It's not complie all in the first time)
- How to install a prettier and setup script. Prettier plugin will format tailwind classes in order.

- npm i -D prettier-plugin-tailwindcss 

  + D: mean install dev dependencies