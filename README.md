# Company Web service

It is a tiny RESTful service supporting an API with the following functionalities: 

  - Registering a new company
  - Fetch list of all registered companies
  - Fetch different attributes of a company like name, address, country, etc,.
  - Update different attributes of a company like name, address, country, etc,.


### Tech

The service uses a number of open source technologies:

* [node.js] - evented I/O for the server
* [restify] - node.js module to build correct REST web services
* [mLab] - MongoDB which is fully managed cloud database service
* [mongojs] -  node.js module for MongoDB
* [docker] -  packaging applications into containers
* [heroku] - builiding and deploying applications

### Development

1. Install Node from its official website https://nodejs.org/en/download/ based on local machine OS(Windows/Mac/Linux).
  
2. Download the project from the Github to the local machine.

   ```sh
   $ git clone [Git_URL]
   ```
   
3. Locate the project directory.

     ```sh
     $ cd [Directory_Name]
     ```
     
4. Install all the node.js packages from package.json file.

      ```sh
      $ npm install 
    ```
    
5. Set the node environment variable to development.

      ```sh
      $ set NODE_ENV=dev
      ```
      
6. To start the node server

      ```sh
      $ node server.js
      ```
      
7. To test whether the service is whether is or not. Hit the following URL in your browser or any  HTTP debugging proxy server application like Fiddler, Advanced Rest Client

     ```
      http://localhost:9001/companies
      ```
      
  
### API Endpoints

  * **Retrieves all companies**
    
      **Description of URL**
    ```sh
    $ https://mysterious-dawn-80454.herokuapp.com/companies
    ```
    **Method:**
    `GET`
    
    **Response**
    
    ```json
    [
    {
        "company_id": 1,
        "name": "Tesco",
        "address": "Whitefield",
        "city": "Bengaluru",
        "country": "India",
        "email": "prajwal.halwai78@gmail.com",
        "phone_number": 1234567890,
        "directors": [
            {
                "name": "Tilak Doddapeni"
            }
        ],
        "owners": null
    },
    {
        "company_id": 2,
        "name": "Google",
        "address": "Whitefield",
        "city": "hyderabad",
        "country": "India",
        "email": "prajwal.halwai78@gmail.com",
        "phone_number": 1234567890,
        "directors": [
            {
                "name": "Tom Higgins"
            }
        ],
        "owners": null
    }]
    ```



* **Retrieves a individual company based on id**
   
    **Description of URL**

    ```sh
    $ https://mysterious-dawn-80454.herokuapp.com/company/:id
    ```
    **Method:**
    `GET`
    
    **Parameters**
    
    ```
    id:number
    ```
    id - The id of the company
    
    **Response**
    
    ```json
   [
    {
        "company_id": 1,
        "name": "Tesco",
        "address": "Whitefield",
        "city": "Bengaluru",
        "country": "India",
        "email": "prajwal.halwai78@gmail.com",
        "phone_number": 1234567890,
        "directors": [
            {
                "name": "Tilak Doddapeni"
            }
        ],
        "owners": null
    }]
    ```
 
* **Update details of a company**
   
    **Description of URL**

    ```sh
    $ curl --request PUT --url 'https://mysterious-dawn-80454.herokuapp.com/company' --header 'content-type: application/json' --data '{"company":{"company_id": 6,"name": "Dell","address": "Brigade Road","city": "Bengaluru","country": "India","email":"dell@123.com","phone_number":123467890,"directors":["Tilak Doddapeni","Rekha Warrier","Vidya Laxman","Tom Higgins"],"owners":["Sanjeev Kumar","Prajwal Halwai","Pooja Gee"]}}' --include
    ```
    
    **Method:**
    `PUT`
    
    **Response**
    
    ```
    message: "Company details updated to the database!!!"
    ```
    
* **Add new company**
   
    **Description of URL**

     ```sh
     $ curl --request POST --url 'https://mysterious-dawn-80454.herokuapp.com/company' --header 'content-type: application/json' --data '{"company":{"company_id": 6,"name": "Dell","address": "Brigade Road","city": "Bengaluru","country": "India","email":"dell@123.com","phone_number":123467890,"directors":["Tilak Doddapeni","Rekha Warrier","Vidya Laxman","Tom Higgins"],"owners":["Sanjeev Kumar","Prajwal Halwai","Pooja Gee"]}}' --include
    ```
    
    **Method:**
    `POST`
    
    **Response**
    
    ```
    message: "New company added to the database!!!"
    ```
    
    ### Authentication
    
    There is no authentication layer added to the service. But, if authentication is to be integrated, token based authentication fits well. 
    
    We can achieve token based authentication using JSON Web Tokens(JWTs).
    
    JSON Web Token is a JSON-based open standard (RFC 7519) for passing claims between parties in web application environment. It comprises a compact and URL-safe JSON object, which is cryptographically signed to verify its authenticity, and which can also be encrypted if the payload contains sensitive information. 

    For more info, please visit https://jwt.io/.

    ![Token-base Auth](https://github.com/prajwal78/WebService/blob/master/images/%20Token-based%20Auth.jpg "Token-base Auth")
    
    In the above diagram, there is the browser communicating to the server to access its resources over the HTTP.
    
    A browser makes a request to the server containing user login information. The server generates a new JWT access token and returns it to the client. On every request to a restricted resource, the client sends the access token in the query string or Authorization header. The server then validates the token and, if it’s valid, returns the secure resource to the client.
    
    ###### Why should you use it?
    
    1. Stateless, easier to scale: The token contains all the information to identify the user, eliminating the need for the session state. If we use a load balancer, we can pass the user to any server, instead of being bound to the same server we logged in on.

    2. Reusability: We can have many separate servers, running on multiple platforms and domains, reusing the same token for authenticating the user. It is easy to build an application that shares permissions with another application.

    3. Security: Since we are not using cookies, we don’t have to protect against cross-site request forgery (CSRF) attacks. We should still encrypt our tokens using JWE if we have to put any sensitive information in them, and transmit our tokens over HTTPS to prevent man-in-the-middle attacks.

   4. Performance: There is no server side lookup to find and deserialize the session on each request. The only thing we have to do is calculate the HMAC SHA-256 to validate the token and parse its content.
    
    
    
    

  
  
    
    
    
    



   [node.js]: <https://nodejs.org/en/>
   [restify]: <http://restify.com/>
   [mlab]:<https://mlab.com/>
   [mongojs]:<https://www.npmjs.com/package/mongojs>
   [docker]:<https://www.docker.com/>
   [heroku]:<https://www.heroku.com/>
   [logo]: https://github.com/prajwal78/WebService/blob/master/images/Architecture.pdf "Architecture"
   