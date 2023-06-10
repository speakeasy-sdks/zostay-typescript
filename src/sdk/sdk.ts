/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { ApiEndpoints } from "./apiendpoints";
import { Apis } from "./apis";
import { Embeds } from "./embeds";
import { Metadata } from "./metadata";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { Plugins } from "./plugins";
import { Requests } from "./requests";
import { Schemas } from "./schemas";
import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const ServerProd = "prod";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList: Record<string, string> = {
    [ServerProd]: "https://api.prod.speakeasyapi.dev",
} as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    server?: string;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.3.0";
    sdkVersion = "1.2.0";
    genVersion = "2.39.0";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Speakeasy API: The Speakeasy API allows teams to manage common operations with their APIs
 *
 * @see {@link https://docs.speakeasyapi.dev} - The Speakeasy Platform Documentation
 */
export class SpeakeasyAPI {
    /**
     * REST APIs for managing ApiEndpoint entities
     */
    public apiEndpoints: ApiEndpoints;
    /**
     * REST APIs for managing Api entities
     */
    public apis: Apis;
    /**
     * REST APIs for managing embeds
     */
    public embeds: Embeds;
    /**
     * REST APIs for managing Version Metadata entities
     */
    public metadata: Metadata;
    /**
     * REST APIs for managing and running plugins
     */
    public plugins: Plugins;
    /**
     * REST APIs for retrieving request information
     */
    public requests: Requests;
    /**
     * REST APIs for managing Schema entities
     */
    public schemas: Schemas;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const server = props?.server ?? ServerProd;

        if (!serverURL) {
            serverURL = ServerList[server];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.apiEndpoints = new ApiEndpoints(this.sdkConfiguration);
        this.apis = new Apis(this.sdkConfiguration);
        this.embeds = new Embeds(this.sdkConfiguration);
        this.metadata = new Metadata(this.sdkConfiguration);
        this.plugins = new Plugins(this.sdkConfiguration);
        this.requests = new Requests(this.sdkConfiguration);
        this.schemas = new Schemas(this.sdkConfiguration);
    }

    /**
     * Validate the current api key.
     */
    async validateApiKey(config?: AxiosRequestConfig): Promise<operations.ValidateApiKeyResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/v1/auth/validate";

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ValidateApiKeyResponse = new operations.ValidateApiKeyResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
                }
                break;
        }

        return res;
    }
}
