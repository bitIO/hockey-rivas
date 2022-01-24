import {
  BackupStrategy,
  Environment,
  HttpMethod,
  Protocol,
  PublicationMode,
  RequestUpdateMode,
} from "../enums";

export interface Configuration {
  autodeploy: boolean;
  aws: {
    cloudfront: {
      pre: {
        domain: string;
        id: string;
        protocol: Protocol;
      };
      pro: {
        domain: string;
        id: string;
        protocol: Protocol;
      };
    };
    cloudwatch: {
      group: string;
      stream: string;
    };
    ec2: {
      domain: string;
      protocol: Protocol;
    };
    s3: {
      pre: string;
      pro: string;
    };
  };
  backupPublications: BackupStrategy;
  cache: {
    browser: {
      files: number;
      html: number;
      uploads: number;
    };
  };
  cleanupTime: number;
  cloudsearch: [
    {
      keepOriginalPath: boolean;
      match: "_wp-search.json$" | string;
      publishAll: boolean;
    }
  ];
  deployToPre: boolean;
  hooks: ConfigurationHooks;
  includeSitemaps: boolean;
  invalidate: boolean;
  invalidateAll: boolean;
  metrics: boolean;
  networkRequestTimeout: {
    mode: "pow" | "equal";
    retries: number;
    secondsToWait: number;
  };
  notify: {
    endpoints: {
      mock: {
        method: HttpMethod;
        options: {
          headers: {
            "Content-Type": string;
            openweb: "notification";
          };
        };
        url: string;
      };
      wordpress: {
        method: HttpMethod;
        options: {
          headers: {
            "Content-Type": string;
            openweb: "notification";
          };
        };
        url: string;
      };
    };
    error: [
      {
        enabled: boolean;
        type: string;
        values: string[];
      }
    ];
    from: {
      email: string;
      name: string;
    };
    ok: [
      {
        enabled: boolean;
        type: string;
        values: string[];
      }
    ];
    openweb: {
      enabled: boolean;
    };
  };
  openwebInternal: {
    domains: {
      development: ProjectDomain;
      production: ProjectDomain;
      staging: ProjectDomain;
    };
    globalApiKey: string;
  };
  publicationManagement: {
    closure: {
      wait: {
        live: boolean;
        work: boolean;
      };
    };
    mode: PublicationMode;
  };
  requestManagement: {
    generateOnAdd: boolean;
    matchUser: boolean;
    maxPagesInRequest: number;
    maxResourcesInRequest: number;
    maxUploadsInRequest: number;
    mode: RequestUpdateMode;
    preventDuplicated: boolean;
    sanitize: boolean;
  };
  requireUser: boolean;
  sitemap: "sitemap.xml" | string;
  startup: {
    updateInfrastructure: boolean;
  };
  textReplacement: {
    domains: {
      protocol: {
        include: boolean;
        source: Protocol;
        target: Protocol;
      };
    };
    match: "\\.(html|json|txt|xml)$" | string;
  };
  threads: {
    page: number;
    resource: number;
    upload: number;
  };
  tmp: {
    location: string;
    minimumElapsedTime: number;
    removeGeneratedTmps: boolean;
    removeTimeout: number;
  };
}

export interface ConfigurationHook {
  /**
   * Action to be taken after the item is published (slack notification, api call, etc)
   */
  after: string;
  /**
   * Action to be taken before the item is published (to modify the body content).
   */
  before: string;
}

export interface ConfigurationHooks {
  production: ConfigurationHooksEnvironment;
  revision: ConfigurationHooksEnvironment;
}

export interface ConfigurationHooksEnvironment {
  page: ConfigurationHook;

  /**
   * Hooks to be executed for requests (may includes pages, resources and uploads)
   */
  request: ConfigurationHook;

  resource: ConfigurationHook;

  /**
   * Hooks to be executed when publishing all the web using the sitemap
   */
  sitemap: ConfigurationHook;

  upload: ConfigurationHook;
}

export interface ProjectDomain {
  akamaiCpCode: string;
  akamaiPropertyName: string;
  cdnId: string;
  cdnUrl: string;
  domain: string;
  environment: string;
  environmentId: string;
  id: string;
  isAkamai: boolean;
  path: string;
  projectId: string;
  protocol: string;
  status: string;
}

export interface ProjectStorage {
  actionStatus: string;
  environment: Environment;
  id: string;
  isReplicaEnabled: boolean;
  name: string;
  region: "eu-west-1" | "use-east-1";
}
