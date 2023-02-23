// 1 TODO: Get DOM elements from the DOM
// 2 TODO: Fetch and Render the list to the DOM
// 3 TODO: Create event listeners for the filters and the search
// 4 TODO: Create an event listener to sort the list.
// 5 TODO: Fetch an array of objects from the API
// 6 TODO: Create a function to filter the list of item.
// 7 TODO: Create a function to create a DOM element.


import RelysiaSDK from 'relysia';

const relysia = new RelysiaSDK();
let authToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE1YzJiNDBhYTJmMzIyNzk4NjY2YTZiMzMyYWFhMDNhNjc3MzAxOWIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQmplcmtlc2V0IiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hpdmVkYi1jZGJmNyIsImF1ZCI6ImhpdmVkYi1jZGJmNyIsImF1dGhfdGltZSI6MTY3NzE1MDgwMSwidXNlcl9pZCI6IjI2d3FwcjlqbERWSUZlRHBSRUxDb1pJSGNSUzIiLCJzdWIiOiIyNndxcHI5amxEVklGZURwUkVMQ29aSUhjUlMyIiwiaWF0IjoxNjc3MTUwODAxLCJleHAiOjE2NzcxNTQ0MDEsImVtYWlsIjoiYmIuYmplcmtAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImJiLmJqZXJrQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.TgeWZ9AGO2AaqJ91bBlAFGrREWhgFohOV1ckSeyX7Dxsyj7Gb_4geBQRdLq9I0c-iMYF5MTVC5cFzjWwbtuk4eVNhcLh_fwm158FOGy9zr0G3K4HDAv3ME7qt7v61MEAI1zYe50KziOzpaaocu8kbs_3jhzPY-CqXk_P3LI6hVzPgtLKYITfS0QMWKheBgyp0htaWqVs5uUptESm3rZMY1P5uwZOMUCRXn_g6FMBuFNZ4Bc8vMkzSzSHuGaDltOw1v194hgdfIG_P9-5RBaxBoQvKdns5kyud4Su7zwR04XOh7B1WDjg_edU6GVVdJBA34dlUUOsVNHniaJjW5g_vQ"; 
      
// NOTE: Get containers from the DOM and store value in variables. 
const listContainer = document.querySelector('#js-list-container');  
listContainer.innerHTML = "";

 // TODO: Assign the authToken the returned value of fetchAuthToen() before fetchTickets() runs. 
fetchAuthToken().then(token => authToken = token);
// NOTE: Calling functions

fetchTickets();
renderTickets(ticket)
  
// NOTE: Fetching the auth token using loggin details. 
async function fetchAuthToken() {
  try {
    const response = await relysia.auth({ email: "bb.bjerk@gmail.com", password: "@TKeb2qQ6uU8" });
    const token = response.token
    return console.log(token);
    
  } catch (error) {
    console.error("Error fetching auth token:", error);
    return null;
  }
}

// NOTE: fetching list. 
async function fetchTickets() {
  try {
      const url = "https://api.relysia.com/v2/balance";
      const response = await fetch(url, {
          method: "GET",
          headers: {
              "authToken": authToken,
          },
      });
      const data = await response.json();
      // console.log("ticket data", data);

      
      const tickets = data.data.coins;
      console.log("tickets var", tickets) 

      //NOTE: looping response object. 
      for (let i = 0; i < tickets.length; i++) {
          const ticket = tickets[i];            
          if (!ticket.splitable) {
            listContainer.innerHTML += renderTickets(ticket);
            console.log("Looped ticket", ticket);
          }
      }

      
      } catch (error) {
          console.error("Error fetching balance", error);
      }
}

// NOTE: Renders list to dom:  
function renderTickets(ticket) {
    return `
    <a href="/details.html ?id = ${ticket.name}" class = "card">
            <div class="details">                                                                                                                                                                    
            <h2 class="name">${ticket.name}</h2>                                                                                                                                                                                                                                                                                                          
            <h3 class="name">${ticket.symbol}</h3>                                                                                                                                                                                                                                                                                                          
            <h6 class="name">Ticket Supply: ${ticket.supply}</h6>                                                                                                                                                                                                                                                                                                          
            </div>
            </a>
            `
};



/*

============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/**
 * TODO: Create an event listener to sort the list.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L91
 */

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an array of objects from the API

/*
============================================
Helper functions
https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L154
============================================
*/

/**
 * TODO: Create a function to filter the list of item.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L135
 * @param {item} item The object with properties from the fetched JSON data.
 * @param {searchTerm} searchTerm The string used to check if the object title contains it.
 */

/**
 * TODO: Create a function to create a DOM element.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */
