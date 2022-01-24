export enum BackupStrategy {
  AWS = "aws",
  LOCAL = "local",
}
export enum Environment {
  DEVELOPMENT = "DEVELOPMENT",
  PRODUCTION = "PRODUCTION",
  STAGING = "STAGING",
}

export enum EnvironmentLegacy {
  EC2 = "ec2",
  PRE = "pre",
  PRO = "pro",
}

export enum HttpMethod {
  DELETE = "DELETE",
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
}

export enum Protocol {
  HTTP = "http",
  HTTPS = "https",
}

export enum PublicationMode {
  ASYNCHRONOUS = "async",
  SYNCHRONOUS = "sync",
}

export enum PublicationType {
  /** All the items in the queue (single, requests, etc) */
  ALL = "all",
  /** Single request (may contain multiple items) */
  REQUEST = "request",
  /** Single URL */
  SINGLE = "single",
  /** Site publication based on the sitemap and its dates */
  SITEMAP = "sitemap",
}

export enum RequestUpdateMode {
  /** The URL will be present in both requests */
  DUPLICATE = "duplicate",
  /** The URL will be updated in the existing request */
  REPLACE = "replace",
  /** The URL will not be processed in the current request */
  SKIP = "skip",
}
