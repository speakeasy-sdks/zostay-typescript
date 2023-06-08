<!-- Start SDK Example Usage -->
```typescript
import { SpeakeasyAPI } from "Speakeasy-API";
import { GetApisResponse } from "Speakeasy-API/dist/sdk/models/operations";

const sdk = new SpeakeasyAPI({
  security: {
    apiKey: "",
  },
});

sdk.apis.getApis({
  metadata: {
    "provident": [
      "quibusdam",
      "unde",
      "nulla",
    ],
    "corrupti": [
      "vel",
      "error",
      "deserunt",
      "suscipit",
    ],
    "iure": [
      "debitis",
      "ipsa",
    ],
  },
  op: {
    and: false,
  },
}).then((res: GetApisResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->