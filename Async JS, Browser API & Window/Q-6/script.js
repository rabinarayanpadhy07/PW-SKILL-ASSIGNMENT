 /**
    Q6.Describe the purpose and usage of the localStorage and sessionStorage APIs in web development. Give suitable examples for each.

    ANS :-
    */

        // The purpose of the localStorage API in web development is to store key-value pairs locally in a web browser. This allows data to persist even after the browser is closed. An example of using the localStorage API is shown below:

        // Storing data in localStorage
        localStorage.setItem('username', 'john_doe');

        // Retrieving data from localStorage
        const username = localStorage.getItem('username');
        console.log(username); // Output: john_doe

        // The purpose of the sessionStorage API is similar to the localStorage API, but the data stored using sessionStorage is only available for the duration of the page session. An example of using the sessionStorage API is shown below:

        // Storing data in sessionStorage
        sessionStorage.setItem('theme', 'dark');

        // Retrieving data from sessionStorage
        const theme = sessionStorage.getItem('theme');
        console.log(theme); // Output: dark