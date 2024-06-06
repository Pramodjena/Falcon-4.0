# Commands :

- To create a file - `ni file name`
- To make folder/directory - `mkdir folder name`
- Change the path/directory - `cd`
- To get back one step - `cd ..`

## How to create a backend server :

1. Create a new folder for your project and navigate into it using `cd` command.
2. Initialize a new Node.js project using `npm init -y` command.
3. Create a file name `index.js`
4. Import the necessary modules:

- `http` module for creating a server.
- `fs` module for reading and writing files.

5. Create a server using `http.createServer()` method.
6. Define a PORT.
7. Use `server.listen(PORT,()=>console.log(`Server running at ${PORT}`))` method to start the server on a specific port.

## Add this in script:

```js
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node index.js"
},
```

## Run the server :

`npm run start`
