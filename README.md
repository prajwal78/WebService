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
   5. Set the node environment variable to development
   ```sh
        $ set NODE_ENV=dev
   ```
   6. To start the node server
   ```sh
        $ node server.js
   ```
   7. To test whether the service is whether is or not. Hit the following URL in your browser or any  HTTP debugging proxy server application like Fiddler, Advanced Rest Client
   ```sh
        http://localhost:9001/companies
   ```
### API Endpoints
   The web service can be queried using CURL or any other applications of your choice.
 
1. GET /companies
    ##### Description
```sh
       $ curl -i https://mysterious-dawn-80454.herokuapp.com/companies

   ```
    
          ``
   
 2. GET /companies/:id
       ##### Description
 ```sh
        $ curl -i https://mysterious-dawn-80454.herokuapp.com/company/1

 ```
 
##### Description
 
 3.  PUT /company
       ##### Description
 ```sh
      
       $ curl --request PUT --url 'https://mysterious-dawn-80454.herokuapp.com/company' --header 'content-type: application/json' --data '{"company":{"company_id": 6,"name": "Dell","address": "Brigade Road","city": "Bengaluru","country": "India","email":"dell@123.com","phone_number":123467890,"directors":["Tilak Doddapeni","Rekha Warrier","Vidya Laxman","Tom Higgins"],"owners":["Sanjeev Kumar","Prajwal Halwai","Pooja Gee"]}}' --include

 ```
 
  4. POST /company
      ##### Description
 ```sh
         $ curl --request POST --url 'https://mysterious-dawn-80454.herokuapp.com/company' --header 'content-type: application/json' --data '{"company":{"company_id": 6,"name": "Dell","address": "Brigade Road","city": "Bengaluru","country": "India","email":"dell@123.com","phone_number":123467890,"directors":["Tilak Doddapeni","Rekha Warrier","Vidya Laxman","Tom Higgins"],"owners":["Sanjeev Kumar","Prajwal Halwai","Pooja Gee"]}}' --include

 ```


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [marked]: <https://github.com/chjj/marked>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   