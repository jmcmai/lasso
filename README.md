## What it does
Lasso is an educational web game designed to make studying more engaging and effective. Using OpenAI’s GPT-3 prediction language model, lasso turns your notes into a set of review questions, making it easier to prepare for exams and retain important information. The cowboy theme and vibrant colors add an element of fun and excitement to the learning experience.

## Features:

- ML generated questions and answers: unique questions driven by information directly from your own notes
- Retrieval through authentication / database: easily access and save notes from previous study sessions

## Inspiration
As a team of college students, we are all familiar with the pain, dread, and suffering that comes from studying. We thought why not gameify it…?

Active recall is a highly effective technique of studying, deploying retrieval of information from one’s memory. While other applications may provide tools to practice active recall, many of them charge for their services or require you to spend countless hours either looking for reliable sets or making your own. Additionally, their minimalistic platform makes studying feel well like… studying. As a team, we wanted to devise a study tool that changes the way students view studying. By leveraging machine learning to create unique questions, our web game seeks to reduce the repetitive nature of flashcards and promote active recall. And most importantly, we just want learning to be fun and interactive.

## How we built it
- Animation & Visuals: Procreate, Aseprite
- UX/UI: Adobe Xd
- Frontend Tools: React.js, Next.js, CSS
- Backend Tools: Convex, OpenAI

## Challenges we ran into
We are fairly new hackers. Most of these tools were very new to us, so scanning through manuals and documents was our best friend, except for when they conflicted with each other. This was especially apparent with the authentication implementation with OAuth2 and Convex.
Integrating multiple tools together is hard. We were able to get most of the tools working on their own (i.e. generating questions with OpenAI, retrieving datasets using Convex), but when merging them together our implementation started breaking.

## Accomplishments that we're proud of
- We were able to use Convex to create a database that will allow you to upload your digital notes. You will be able to save and retrieve your previous notes based on your user log-in. This was one of the most challenging parts of implementing lasso, as it required a tentative process of adapting cross-compatibility of Convex, React, Next.js, as well as working with two different APIs.
- Creating a functional mockup on Adobe Xd, which builds a solid framework for what our UI would look like in the final product. Our mockup displayed medium-fidelity, with functional buttons and toggle screens.
- We learned a lot and value that.

## What we learned
- Database management with Convex: We garnered an appreciation for its dynamic rendering and the ease of encoding interactions between the client and server interfaces.
- We became intimately familiar with frontend tools and programming paradigms, especially those surrounding Next.js, a completely new frontend framework for all of us.
- More broadly, we all found our time working as a team valuable, especially in terms of effectively delineating tasks and troubleshooting bugs.

## What's next for lasso
- Personalized learning objectives: Using OpenAI’s GPT-3, we could categorize learning objectives and cater questions based on learning performance.
- Animations! We would love to expand on compelling visuals to further enhance our game.
- Multiplayer functionality: duel a friend using notes made by each other!
- Compatibility on multiple platforms: mobile app version
