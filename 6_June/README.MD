
Uber/Ola System design

constraints:-

300 million customer and 1 million drivers
one million active users and 500 thousand drivers
all active drivers notify their current location every 10 seconds
real time update of rides if a customer book any


Booking a ride:-

We could keep the recent drive in hash table in quadtree this will help quadtree to update less frequently. we want to guarantee that a driver's current location is reflected in  quadtree within 15 seconds.
we maintain a hash table and store the current driver location and will call it DriverLocationHT

DriverLocationHT:-

in this we store driveId in hashtable which reflects driver current and previous location.

To randomize distribution we could distribute DriverLocationHT on multiple server based on DriverId. This help with scalability performance and fault tolerance.We will refer to the machine holding this information as the Driver Location servers. 


Broadcasting driver location:-

We’ll need to broadcast driver locations to our customers. We can use a Push Model so that the server pushes positions to relevant users. We can use a Notification Service and build it on the publisher/subscriber model.

When a customer opens the Uber app, they’ll query the server to find nearby drivers. On the server side, we subscribe the customer to all updates from nearby drivers. Each update in a driver’s location in DriverLocationHT will be broadcast to all subscribed customers. This ensures that each driver’s current location is displayed.


Notification service

To efficiently implement the Notification service, we can either use HTTP long polling or push notifications. Customers are subscribed to nearby drivers when they open the Uber app for the first time.

Customers will send their current location so that the server can find nearby drivers from our QuadTree. The customer can then update their screen to reflect drivers’ current positions.

The customer enters a ride request:-

One of the Aggregator servers accepts the request and asks the QuadTree servers to return nearby drivers.
The Aggregator server collects the results and sorts them by ratings.
The Aggregator server sends a notification to the top drivers simultaneously.
The first driver to accept will be assigned that ride. The other drivers will receive a cancellation.
If the drivers do not respond, the Aggregator will request a ride from the next drivers on our list.
The customer is notified once a driver accepts a request