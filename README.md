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
    

 ```
 
  4. POST /company
      ##### Description
 ```sh
         $ curl --request POST --url 'https://mysterious-dawn-80454.herokuapp.com/company' --header 'content-type: application/json' --data '{"company":{"company_id": 6,"name": "Dell","address": "Brigade Road","city": "Bengaluru","country": "India","email":"dell@123.com","phone_number":123467890,"directors":["Tilak Doddapeni","Rekha Warrier","Vidya Laxman","Tom Higgins"],"owners":["Sanjeev Kumar","Prajwal Halwai","Pooja Gee"]}}' --include

 ```


   [node.js]: <https://nodejs.org/en/>
   [restify]: <http://restify.com/>
   [mlab]:<https://mlab.com/>
   [mongojs]:<https://www.npmjs.com/package/mongojs>
   [docker]:<https://www.docker.com/>
   [heroku]:<https://www.heroku.com/>
   