# requests

## Overview

REST APIs for retrieving request information

### Available Operations

* [generateRequestPostmanCollection](#generaterequestpostmancollection) - Generate a Postman collection for a particular request.
* [getRequestFromEventLog](#getrequestfromeventlog) - Get information about a particular request.
* [queryEventLog](#queryeventlog) - Query the event log to retrieve a list of requests.

## generateRequestPostmanCollection

Generates a Postman collection for a particular request. 
Allowing it to be replayed with the same inputs that were captured by the SDK.

### Example Usage

```typescript
import { SpeakeasyAPI } from "Speakeasy-API";
import { GenerateRequestPostmanCollectionResponse } from "Speakeasy-API/dist/sdk/models/operations";

const sdk = new SpeakeasyAPI({
  security: {
    apiKey: "",
  },
});

sdk.requests.generateRequestPostmanCollection({
  requestID: "quo",
}).then((res: GenerateRequestPostmanCollectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getRequestFromEventLog

Get information about a particular request.

### Example Usage

```typescript
import { SpeakeasyAPI } from "Speakeasy-API";
import { GetRequestFromEventLogResponse } from "Speakeasy-API/dist/sdk/models/operations";

const sdk = new SpeakeasyAPI({
  security: {
    apiKey: "",
  },
});

sdk.requests.getRequestFromEventLog({
  requestID: "sequi",
}).then((res: GetRequestFromEventLogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## queryEventLog

Supports retrieving a list of request captured by the SDK for this workspace.
Allows the filtering of requests on a number of criteria such as ApiID, VersionID, Path, Method, etc.

### Example Usage

```typescript
import { SpeakeasyAPI } from "Speakeasy-API";
import { QueryEventLogResponse } from "Speakeasy-API/dist/sdk/models/operations";

const sdk = new SpeakeasyAPI({
  security: {
    apiKey: "",
  },
});

sdk.requests.queryEventLog({
  filters: {
    filters: [
      {
        key: "ipsam",
        operator: "id",
        value: "possimus",
      },
      {
        key: "aut",
        operator: "quasi",
        value: "error",
      },
      {
        key: "temporibus",
        operator: "laborum",
        value: "quasi",
      },
      {
        key: "reiciendis",
        operator: "voluptatibus",
        value: "vero",
      },
    ],
    limit: 468651,
    offset: 509624,
    operator: "voluptatibus",
  },
}).then((res: QueryEventLogResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
