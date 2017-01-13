# micro-quick-start

This is a simple demo of how a reverse proxy can be used to set up a microservice infrastructure of node servers. The proxy server acts as a gateway for the client and then proxies out requests to the respective service. In other words, all requests from the client should be sent to the main/proxy server and it will disperse the work out to the services. In production, the Authorization, Message, and User servers will not be accessible to the public and the Proxy server would be listening to port 80 (or 443 for https).

### Getting Started

- Download or clone this repository.
- Type `npm install` in the directory through the command line.
- Type `npm start` in the directory through the command line.

That's it! You now have a good starting point to build an application using microservice infrastructure.
