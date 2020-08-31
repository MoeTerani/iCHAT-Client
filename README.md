# iCHAT

# 🖥 Live Demo

## https://ichat-client.netlify.app/

Be patient on first log-in. The Heruko servers needs some seconds to start the server.
<br/><br/>

### Client side of a realtime chatroom.

- It has protected routes. chat page is not accessible without authentication.
- A username validation has been applied with corresponding Error messages.
- Users can use Github username to retrieve their github avatar.
- If a Nickname is used a random face avatar is fetched from the avatars.adorable.io/ api.
- Dark/Light mode is available.
- Sends received messages to all connected clients (no rooms).
- Client will be disconnected automatically by a configurable timeout.
- With any connection lost , corresponding Error messages will be send to the client and notifications to others in the chat.
- Provides readable logging solution
  <br/><br/>

## 👨‍💻 Tech stack

## Front-End

- React (Functional components, Hooks)
- Typescript
- socket.io-client
- Redux-thunk
- React-router-dom
- UUID
- Enzyme
  <br/><br/>

## Back-End

- Node
- Typescript
- Express
- Socket.io
- winston
- Joi
- axios
- moment
- cors
- Github API
- Adorable.io API
  <br/><br/>

## 🔥 Getting started

After cloning the repository:

- start by running `npm i` inside the `root folder` and then `npm start`.
  <br/><br/>

## Test

- In order to run the tests run `npm test` inside the root directory.
  <br/><br/>

## Linter

Eslint/Tslint of create-react-app typescript template has been applied in strict mode.

## 😎 Enjoy
