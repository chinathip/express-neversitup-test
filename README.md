├── node_modules # Node.js modules (managed by Yarn)
├── src # Source code
│ ├── app.js # Main application entry point
│ ├── controllers # Controllers for handling requests
│ │ ├── CountSmileysController.js
│ │ ├── OddController.js
│ │ └── PermutationsController.js
│ ├── routes # Route definitions
│ │ ├── CountSmileys.route.js
│ │ ├── Odd.route.js
│ │ ├── Permutations.route.js
│ │ └── index.js # Main route file
│ └── services # Business logic and service layer
│ ├── CountSmileys.service.js
│ ├── Odd.service.js
│ └── Permutations.service.js
├── test # Unit tests
│ ├── CountSmileys.test.js
│ ├── Odd.test.js
│ └── Permutations.test.js
├── .env # Environment variables (to be created based on .env.example)
├── .env.example # Example environment variable file
├── README.md # Project documentation
├── package.json # Project metadata and dependencies
├── yarn.lock # Yarn lock file
