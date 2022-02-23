import {app} from "./start";

const PORT : number = 8080;

app.listen(PORT);


/* 
Router layer / controller layer - parses a request, calls the appropriate operations in the services, sends the response

Service layer - operations that it is possible to perform on the model

Data model layer - representation of the data and the business logic

Database access layer
*/