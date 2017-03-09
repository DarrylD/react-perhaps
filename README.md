
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

Testing
```
npm run test
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
- [ ] [Storyboard](https://github.com/storybooks/react-storybook) (ui isolation development)
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
