## HTTP API Gateway
The  HTTP API Gateway is used by the Arbiter React client to connect particpants to a the video conference room associated with the URL from which the Arbiter client is loaded.

### Get Room ID

Get the `roomId` of videoconferencing room associated with `urlPath`.

**URL** : `/getRoomId?urlPath={path}`;`

**Method** : `GET`

#### Success Response

**Code** : `200 OK`

**Content examples**
For a client served from `http://example.com/myRoom` the the value of `urLPath` will be `myRoom`. If the database has a record of a room is associated with `urlPath`, then the `roomId` is returned. 


```json
{
    "roomId": 1234
}
```

#### Error Responses

**Condition** : Database has no record of a room  associated with `urlPath`.

**Code** : `404 Not Found`


```json
{
    "message": 'Room not found'
}
```
##### Or

**Condition** : A server error occurred.

**Code** : `500 Internal Server Error`


```json
{
    "message": 'Something broke on the server'
}
```

### Claim Room

Assign an existing room to the supplied `urlPath` and return `roomId`.

**URL** : `/claimRoom`;`

**Method** : `PATCH`

**Content type** :  `application/json`

**Payload** : 
```json
{
    "urlPath": "myRoom"
}
```

#### Success Response

**Code** : `200 OK`

```json
{
    "roomId": 1234
}
```

#### Error Responses

**Condition** : `urlPath` is not supplied

**Code** : `400 Not Found`


```json
{
    "message": 'missing urlPath'
}
```
##### Or

**Condition** : There is no room available to be claimed. (A room will need to be created.)

**Code** : `404 Not Found`


```json
{
    "message": 'Room not found'
}
```

##### Or

**Condition** : A server error occurred

**Code** : `500 Internal Server Error`


```json
{
    "message": 'Something broke on the server'
}
```

### Create Room

Creates a new unclaimed room and creates record in the database.

**URL** : `/createRoom`;`

**Method** : `PUT`

#### Success Response

**Code** : `200 OK`


```json
{
    "message": "Task started successfully!"
}
```

#### Error Responses


**Condition** : A server error occurred

**Code** : `500 Internal Server Error`


```json
{
    "message": 'Failed to start task.'
}
```

### WebSocket Gateway
The WebSocket gateway is the Arbiter signaling server. Arbiter clients (videoconference participants) and SFU instances connect to it to negotiate WebRTC connections and to manage call state (i.e. particpants entering and exiting a call).


### `$connect`
The `$connect` route is called  when an Arbiter client establishes a WebSocket connection. A unique identifer `connectionId` is written to the database to identify the WebSocket connection


### `identify`
The `identify` route should be called by an Arbiter client after a WebSocket connection is established. The purpose is to write metadata to the database that is used to route subsequent messagages between clients and an SFU. 

**Payload** : 
```json
{
  action: "identify",
  data: {
    id: "123",
    roomId: "789",
    type: "client",
  }
}
```

#### Success Response

**Code** : `200 OK`

#### Error Responses

**Condition** : `type` is missing from `data`object in paylong

**Code** : `400 Missing valid type property`

##### Or

**Condition** : A server error occurred

**Code** : `500 Internal Server Error`

### `handshake`
The `handshake` route is called by an Arbiter client to negotiate a WebRTC connection with an SFU. It is called multiple times to transfer Session Description Protocol (SDP) offers and to transfer Internet Connection Establishment (ICE) candidates

**Payload** : 
Content example
When a Client sends an SDP offer `candidate` will be an offer SDP

```json
{
  action: 'handshake',
  data: {
    type: "producer",
    sender: "1234",
    description: {localDescription},
    roomId: "789",
  },
};
```

Content example
When a Client sends an ICE candiate `candidate` will be an ICE candiate

```json
{
  action: 'handshake',
  data: {
    type: "producer",
    sender: "1234",
    candidate: {candidate},
    roomId: "789",
  },
};
```
#### Success Response

**Code** : `200 OK`


#### Error Responses

**Condition** : webSocket connection id is not found in database

**Code** : `400 WebSOcket Connection Not Found`

**Condition** : A server error occurred

**Code** : `500 Internal Server Error`

### `$disconnect`

The `disconnect` route is called by an Arbiter client when a participant leaves a video conference. The client's database entry will be deleted. Other participants in the room will be notified.

#### Error Responses

**Condition** : A server error occurred

**Code** : `500 Internal Server Error`
