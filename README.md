## Introduction

Meta Magnet is a platform that provides API services to clients. Clients can use these services to request metadata from a server. The metadata is provided as a response in the form of a URL. The platform supports various types of detailed metadata about specified URL.

## Get your API key

To use Meta Magnet API, you need to get an API key. You can get your API key by [signing up](https://meta-magnet.vercel.app/sign-in) for a free account. Once you have signed up, You will get your API key [here](https://meta-magnet.vercel.app/account). You can use this API key to access the API service.

## Features

- API Server is easy to use and is accessible to all clients.
- The platform provides a reliable API service that can be used to request metadata from a server.
- Clients can request metadata for images, videos, and audio files.
- API Server supports a wide range metadata like title, description, keywords, language, and more.
- The platform provides fast and efficient services that deliver metadata in a timely manner.
- Clients can use the API service to request metadata from any location.
- The platform provides a secure environment for clients to access API services.

## How to Use

To use API Server, clients can make requests to the API service using HTTP requests. Clients can send a request to the server, and the server will generate a URL in response. The URL will contain the requested metadata. Clients can then use this URL to access the metadata.

API Server supports various parameters that can be used to customize the metadata request. Clients can use these parameters to specify the type of metadata they want, the size of the metadata, and other details.

## Security

API Server is a secure platform that ensures the safety and privacy of client data. The platform uses SSL encryption to protect client data during transmission. The platform also uses secure authentication and authorization mechanisms to ensure that only authorized clients can access the API service.

## Conclusion

API Server is a reliable and efficient platform that provides API services to clients. The platform is easy to use and provides fast and efficient services that deliver metadata in a timely manner. The platform supports various types of metadata and provides a secure environment for clients to access API services.

## Usage

### Request URL

```bash
https://meta-magnet-api.vercel.app/api/metadata
```

### Pass url in body

```js
{
	url: "https://www.youtube.com",
}
```

### Postman request

### Add headers

![Postman request](https://meta-magnet.vercel.app/screenshots/postman-headers.png)

### Add body

![Postman request](https://meta-magnet.vercel.app/screenshots/postman-body.png)

## Api call using axios

```js
const data = await axios.post(
  "https://meta-magnet-api.vercel.app/api/metadata",
  {
    url: "https://www.youtube.com",
  },
  {
    headers: {
      token: "<YOUR_API_KEY>",
    },
  }
);

console.log(data.data);
```

### Response

```json
{
  "ogImage": {
    "height": null,
    "type": "png",
    "url": "https://www.youtube.com/img/desktop/yt_1200.png",
    "width": null
  },
  "ogTitle": "YouTube",
  "ogDescription": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
  "ogLocale": "en",
  "ogUrl": "https://www.youtube.com/",
  "favicon": "https://www.youtube.com/s/desktop/00d32223/img/favicon.ico",
  "charset": "UTF-8",
  "requestUrl": "https://www.youtube.com",
  "success": true,
  "title": "YouTube",
  "description": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
  "language": "en",
  "url": "https://www.youtube.com/",
  "provider": "youtube",
  "keywords": [
    "video",
    "sharing",
    "camera phone",
    "video phone",
    "free",
    "upload"
  ],
  "image": "https://www.youtube.com/img/desktop/yt_1200.png",
  "icon": "https://www.youtube.com/s/desktop/00d32223/img/favicon_144x144.png"
}
```

### Status code with message

#### Requesting without token

```json
{
  "statusCode": 401,
  "message": "Please add a Authorization token to your request header"
}
```

#### Requesting with invalid token

```json
{
  "statusCode": 498,
  "message": "Please add a valid Authorization token to your request header"
}
```

#### If your daily quota is over

```json
{
  "statusCode": 429,
  "message": "Your daily limit exceeded. Please try again tomorrow. To increase your limit, please upgrade your plan. check https://meta-magnet.vercel.app/pricing for more details."
}
```
