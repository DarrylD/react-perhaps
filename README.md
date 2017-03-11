
## react-perhaps

My very opinionated CRA starting point.  

Installing
```
npm i
```

Running App
```
npm run start
```

Building App
```
npm build start
```

When in PROD... (build and serve)
```
npm build serve
```

Testing
```
npm run test
```

Storybook (UI isolation)
```
npm run storybook
```

Build Storybook (UI isolation)
```
npm build:storybook
```

:)
```
git clone git@github.com:DarrylD/react-perhaps.git && rm -rf .git
```

Notable Includes
- [x] Flow type (type checking)
- [x] Redux (state container)
- [x] Rxjs (async stuff)
- [x] Styled Components (better style control)
- [x] React motion (animations)
- [x] Axios (http requests)
- [X] [Storyboard](https://github.com/storybooks/react-storybook) (ui isolation development)
    - [ ] [Testing for storybook] (https://github.com/mthuret/storybook-addon-specifications)
- [ ] [Tea spoon](https://github.com/jquense/teaspoon) (jquery-ish ui testing)
- [ ] [service mocker](https://github.com/service-mocker/service-mocker) (serverless server mocking)
    - issues with CRA at the moment


Notes
-  `/api` - centralized endpoints, mostly for typechecking
- `/components` - our components (shocker!)
- `/containers` - can be considered pages, we assign routes to these in most cases
  - `/containers/_BASE` - a starting point for new containers
- `/helpers` - our global methods when its time to keep stuff DRY (utility/public/etc... methods?)
-  `app-doc.md` - insane about of details on this project
-  `static.json` - for heroku SPA
-  `manifest.yml` - for pivotal
