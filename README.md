# Swipeback
![SwipebackLogo](./src/assets/HCILogo.png?raw=true "")

A simple Feedbackpage to setup lectures and ask students for feedback.

##  Usage
A local installatin is at this moment not possible. The reason for that is that our running backend is dose not allow requests from websites that are not https://swipeback.pages.dev/. But to see and use the project it is possible to do that via the same [URL](https://swipeback.pages.dev/). 

## Get started
Open following URL to use this feedback Programm:
https://swipeback.pages.dev/

## Project structure
```
.
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   ├── HCILogo.png
│   │   ├── placeholderGraphikforSliderFeedback.png
│   │   └── react.svg
│   ├── components
│   │   ├── dozent
│   │   │   ├── colorpicker.jsx
│   │   │   ├── daytimeselector.jsx
│   │   │   ├── lectureQuestion.jsx
│   │   │   ├── iconselector.jsx
│   │   │   ├── settingFeedbackslider.jsx
│   │   │   └── settingSwipeQuestions.jsx
│   │   ├── student
│   │   │   ├── QuestionCard.jsx
│   │   │   ├── questiontext.jsx
│   │   │   └── verticalSlider.jsx
│   │   └── headline.jsx
│   ├── context
│   │   └── authenticationContext.jsx
│   ├── controller
│   │   └── useLobbyController.jsx
│   ├── request
│   │   ├── requestFeedbackquestion.jsx
│   │   ├── requestItems.jsx
│   │   ├── requestLogin.jsx
│   │   ├── requestModules.jsx
│   │   ├── requestRegister.jsx
│   │   ├── requestSession.jsx
│   │   ├── requestSlider.jsx
│   │   ├── requestTextFeedback.jsx
│   │   └── requestUserIformation.jsx
│   ├── routes
│   │   ├── dozent
│   │   │   ├── dozentpage.jsx
│   │   │   ├── editCourse.jsx
│   │   │   ├── newCourse.jsx
│   │   │   ├── registerpage.jsx
│   │   │   └── statistics.jsx
│   │   ├── student
│   │   │   ├── feedbackcode.jsx
│   │   │   ├── feedbackpage.jsx
│   │   │   ├── SwipePage.jsx
│   │   │   └── swipequestionLoad.jsx
│   │   └── landingpage.jsx
│   ├── styles
│   │   ├── editpage_minus_plus_circle.css
│   │   ├── fb_page_slider.css
│   │   ├── fb-page.css
│   │   ├── swipequestions.css
│   │   ├── thema.scss
│   │   └── title.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
├── testfiles
│   ├── test-feedback.json
├── package-lock.json
├── package.json
├── index.html
├── README.md
└── vite.config.js
```

## Resources
[React](https://react.dev/).
[Vite](https://github.com/vitejs/vite/tree/main)
[Bootstrap](https://getbootstrap.com/)

 ## Contribution

 This is a University Project and wont be developed after the 25.01.2026. 
