# SpeakeasyAPI SDK

## Overview

Speakeasy API: The Speakeasy API allows teams to manage common operations with their APIs

The Speakeasy Platform Documentation
<https://docs.speakeasyapi.dev>
### Available Operations

* [validateApiKey](#validateapikey) - Validate the current api key.

## validateApiKey

Validate the current api key.

### Example Usage

```typescript
import { SpeakeasyAPI } from "Speakeasy-API";
import { ValidateApiKeyResponse } from "Speakeasy-API/dist/sdk/models/operations";

const sdk = new SpeakeasyAPI({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

sdk.speakeasyAPI.validateApiKey().then((res: ValidateApiKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
