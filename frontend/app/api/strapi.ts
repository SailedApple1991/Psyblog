/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  data?: object | object[] | null;
  error: {
    status?: number;
    name?: string;
    message?: string;
    details?: object;
  };
}

export interface BlogRequest {
  data: {
    Title?: string;
    Excerpt?: string;
    /** @example "string or id" */
    Hero?: number | string;
    Content?: string;
    stripeProductId?: string;
  };
}

export interface BlogListResponseDataItem {
  id?: number;
  attributes?: Blog;
}

export interface BlogListResponse {
  data?: BlogListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Blog {
  Title?: string;
  Excerpt?: string;
  Hero?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  Content?: string;
  stripeProductId?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
}

export interface BlogResponseDataObject {
  id?: number;
  attributes?: Blog;
}

export interface BlogResponse {
  data?: BlogResponseDataObject;
  meta?: object;
}

export interface CarouselLocalizationRequest {
  Title?: string;
  TitleCaption?: string;
  Body?: string;
  ImageCaption?: string;
  /** @example "string or id" */
  Image?: number | string;
  locale: string;
}

export interface CarouselRequest {
  data: {
    Title?: string;
    TitleCaption?: string;
    Body?: string;
    ImageCaption?: string;
    /** @example "string or id" */
    Image?: number | string;
    locale?: string;
  };
}

export interface CarouselResponseDataObjectLocalized {
  id?: number;
  attributes?: Carousel;
}

export interface CarouselLocalizationResponse {
  data?: CarouselResponseDataObjectLocalized;
  meta?: object;
}

export interface CarouselListResponseDataItemLocalized {
  id?: number;
  attributes?: Carousel;
}

export interface CarouselLocalizationListResponse {
  data?: CarouselListResponseDataItemLocalized[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface CarouselListResponseDataItem {
  id?: number;
  attributes?: Carousel;
}

export interface CarouselListResponse {
  data?: CarouselListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Carousel {
  Title?: string;
  TitleCaption?: string;
  Body?: string;
  ImageCaption?: string;
  Image?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        /** @format float */
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: object;
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    /** @format float */
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    folderPath?: string;
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          /** @format email */
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      /** @format date-time */
                                      createdAt?: string;
                                      /** @format date-time */
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: object;
                                        };
                                      };
                                    };
                                  }[];
                                };
                                /** @format date-time */
                                createdAt?: string;
                                /** @format date-time */
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: object;
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          /** @format date-time */
                          createdAt?: string;
                          /** @format date-time */
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: object;
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              path?: string;
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          };
        };
        folderPath?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: Carousel[];
  };
  locale?: string;
}

export interface CarouselResponseDataObject {
  id?: number;
  attributes?: Carousel;
}

export interface CarouselResponse {
  data?: CarouselResponseDataObject;
  meta?: object;
}

export interface MenuLocalizationRequest {
  text: string;
  url: string;
  priority?: number;
  locale: string;
}

export interface MenuRequest {
  data: {
    text: string;
    url: string;
    priority?: number;
    locale?: string;
  };
}

export interface MenuResponseDataObjectLocalized {
  id?: number;
  attributes?: Menu;
}

export interface MenuLocalizationResponse {
  data?: MenuResponseDataObjectLocalized;
  meta?: object;
}

export interface MenuListResponseDataItemLocalized {
  id?: number;
  attributes?: Menu;
}

export interface MenuLocalizationListResponse {
  data?: MenuListResponseDataItemLocalized[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface MenuListResponseDataItem {
  id?: number;
  attributes?: Menu;
}

export interface MenuListResponse {
  data?: MenuListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface Menu {
  text: string;
  url: string;
  priority?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: {
        firstname?: string;
        lastname?: string;
        username?: string;
        /** @format email */
        email?: string;
        resetPasswordToken?: string;
        registrationToken?: string;
        isActive?: boolean;
        roles?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              code?: string;
              description?: string;
              users?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              permissions?: {
                data?: {
                  id?: number;
                  attributes?: {
                    action?: string;
                    subject?: string;
                    properties?: any;
                    conditions?: any;
                    role?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          }[];
        };
        blocked?: boolean;
        preferedLanguage?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: Menu[];
  };
  locale?: string;
}

export interface MenuResponseDataObject {
  id?: number;
  attributes?: Menu;
}

export interface MenuResponse {
  data?: MenuResponseDataObject;
  meta?: object;
}

export interface SiteContentLocalizationRequest {
  siteTitle?: string;
  loginButtonLabel?: string;
  registerButtonLabel?: string;
  consultButtonLabel?: string;
  locale: string;
}

export interface SiteContentRequest {
  data: {
    siteTitle?: string;
    loginButtonLabel?: string;
    registerButtonLabel?: string;
    consultButtonLabel?: string;
    locale?: string;
  };
}

export interface SiteContentResponseDataObjectLocalized {
  id?: number;
  attributes?: SiteContent;
}

export interface SiteContentLocalizationResponse {
  data?: SiteContentResponseDataObjectLocalized;
  meta?: object;
}

export interface SiteContentListResponseDataItemLocalized {
  id?: number;
  attributes?: SiteContent;
}

export interface SiteContentLocalizationListResponse {
  data?: SiteContentListResponseDataItemLocalized[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface SiteContentListResponseDataItem {
  id?: number;
  attributes?: SiteContent;
}

export interface SiteContentListResponse {
  data?: SiteContentListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface SiteContent {
  siteTitle?: string;
  loginButtonLabel?: string;
  registerButtonLabel?: string;
  consultButtonLabel?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: {
        firstname?: string;
        lastname?: string;
        username?: string;
        /** @format email */
        email?: string;
        resetPasswordToken?: string;
        registrationToken?: string;
        isActive?: boolean;
        roles?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              code?: string;
              description?: string;
              users?: {
                data?: {
                  id?: number;
                  attributes?: object;
                }[];
              };
              permissions?: {
                data?: {
                  id?: number;
                  attributes?: {
                    action?: string;
                    subject?: string;
                    properties?: any;
                    conditions?: any;
                    role?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    /** @format date-time */
                    createdAt?: string;
                    /** @format date-time */
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: object;
                      };
                    };
                  };
                }[];
              };
              /** @format date-time */
              createdAt?: string;
              /** @format date-time */
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: object;
                };
              };
            };
          }[];
        };
        blocked?: boolean;
        preferedLanguage?: string;
        /** @format date-time */
        createdAt?: string;
        /** @format date-time */
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: object;
          };
        };
      };
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: object;
    };
  };
  localizations?: {
    data?: SiteContent[];
  };
  locale?: string;
}

export interface SiteContentResponseDataObject {
  id?: number;
  attributes?: SiteContent;
}

export interface SiteContentResponse {
  data?: SiteContentResponseDataObject;
  meta?: object;
}

export interface UploadFile {
  id?: number;
  name?: string;
  alternativeText?: string;
  caption?: string;
  /** @format integer */
  width?: number;
  /** @format integer */
  height?: number;
  formats?: number;
  hash?: string;
  ext?: string;
  mime?: string;
  /** @format double */
  size?: number;
  url?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: object;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface UsersPermissionsRole {
  id?: number;
  name?: string;
  description?: string;
  type?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface UsersPermissionsUser {
  /** @example 1 */
  id?: number;
  /** @example "foo.bar" */
  username?: string;
  /** @example "foo.bar@strapi.io" */
  email?: string;
  /** @example "local" */
  provider?: string;
  /** @example true */
  confirmed?: boolean;
  /** @example false */
  blocked?: boolean;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.258Z"
   */
  createdAt?: string;
  /**
   * @format date-time
   * @example "2022-06-02T08:32:06.267Z"
   */
  updatedAt?: string;
}

export interface UsersPermissionsUserRegistration {
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
  jwt?: string;
  user?: UsersPermissionsUser;
}

export type UsersPermissionsPermissionsTree = Record<
  string,
  {
    /** every controller of the api */
    controllers?: Record<
      string,
      Record<
        string,
        {
          enabled?: boolean;
          policy?: string;
        }
      >
    >;
  }
>;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:1337/api";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title DOCUMENTATION
 * @version 1.0.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService YOUR_TERMS_OF_SERVICE_URL
 * @baseUrl http://localhost:1337/api
 * @externalDocs https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html
 * @contact TEAM <contact-email@something.io> (mywebsite.io)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  blogs = {
    /**
     * No description
     *
     * @tags Blog
     * @name GetBlogs
     * @request GET:/blogs
     * @secure
     */
    getBlogs: (
      query?: {
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Relations to return */
        populate?: string;
        /** Filters to apply */
        filters?: object;
        /** Locale to apply */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BlogListResponse, Error>({
        path: `/blogs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name PostBlogs
     * @request POST:/blogs
     * @secure
     */
    postBlogs: (data: BlogRequest, params: RequestParams = {}) =>
      this.request<BlogResponse, Error>({
        path: `/blogs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name GetBlogsId
     * @request GET:/blogs/{id}
     * @secure
     */
    getBlogsId: (id: number, params: RequestParams = {}) =>
      this.request<BlogResponse, Error>({
        path: `/blogs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name PutBlogsId
     * @request PUT:/blogs/{id}
     * @secure
     */
    putBlogsId: (id: number, data: BlogRequest, params: RequestParams = {}) =>
      this.request<BlogResponse, Error>({
        path: `/blogs/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name DeleteBlogsId
     * @request DELETE:/blogs/{id}
     * @secure
     */
    deleteBlogsId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/blogs/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  carousels = {
    /**
     * No description
     *
     * @tags Carousel
     * @name GetCarousels
     * @request GET:/carousels
     * @secure
     */
    getCarousels: (
      query?: {
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Relations to return */
        populate?: string;
        /** Filters to apply */
        filters?: object;
        /** Locale to apply */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CarouselListResponse, Error>({
        path: `/carousels`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Carousel
     * @name PostCarousels
     * @request POST:/carousels
     * @secure
     */
    postCarousels: (data: CarouselRequest, params: RequestParams = {}) =>
      this.request<CarouselResponse, Error>({
        path: `/carousels`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Carousel
     * @name GetCarouselsId
     * @request GET:/carousels/{id}
     * @secure
     */
    getCarouselsId: (id: number, params: RequestParams = {}) =>
      this.request<CarouselResponse, Error>({
        path: `/carousels/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Carousel
     * @name PutCarouselsId
     * @request PUT:/carousels/{id}
     * @secure
     */
    putCarouselsId: (id: number, data: CarouselRequest, params: RequestParams = {}) =>
      this.request<CarouselResponse, Error>({
        path: `/carousels/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Carousel
     * @name DeleteCarouselsId
     * @request DELETE:/carousels/{id}
     * @secure
     */
    deleteCarouselsId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/carousels/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Carousel
     * @name PostCarouselsIdLocalizations
     * @request POST:/carousels/{id}/localizations
     * @secure
     */
    postCarouselsIdLocalizations: (id: number, data: CarouselLocalizationRequest, params: RequestParams = {}) =>
      this.request<CarouselLocalizationResponse, Error>({
        path: `/carousels/${id}/localizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  menus = {
    /**
     * No description
     *
     * @tags Menu
     * @name GetMenus
     * @request GET:/menus
     * @secure
     */
    getMenus: (
      query?: {
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Relations to return */
        populate?: string;
        /** Filters to apply */
        filters?: object;
        /** Locale to apply */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MenuListResponse, Error>({
        path: `/menus`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Menu
     * @name PostMenus
     * @request POST:/menus
     * @secure
     */
    postMenus: (data: MenuRequest, params: RequestParams = {}) =>
      this.request<MenuResponse, Error>({
        path: `/menus`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Menu
     * @name GetMenusId
     * @request GET:/menus/{id}
     * @secure
     */
    getMenusId: (id: number, params: RequestParams = {}) =>
      this.request<MenuResponse, Error>({
        path: `/menus/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Menu
     * @name PutMenusId
     * @request PUT:/menus/{id}
     * @secure
     */
    putMenusId: (id: number, data: MenuRequest, params: RequestParams = {}) =>
      this.request<MenuResponse, Error>({
        path: `/menus/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Menu
     * @name DeleteMenusId
     * @request DELETE:/menus/{id}
     * @secure
     */
    deleteMenusId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/menus/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Menu
     * @name PostMenusIdLocalizations
     * @request POST:/menus/{id}/localizations
     * @secure
     */
    postMenusIdLocalizations: (id: number, data: MenuLocalizationRequest, params: RequestParams = {}) =>
      this.request<MenuLocalizationResponse, Error>({
        path: `/menus/${id}/localizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  siteContent = {
    /**
     * No description
     *
     * @tags Site-content
     * @name GetSiteContent
     * @request GET:/site-content
     * @secure
     */
    getSiteContent: (
      query?: {
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Relations to return */
        populate?: string;
        /** Filters to apply */
        filters?: object;
        /** Locale to apply */
        locale?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SiteContentResponse, Error>({
        path: `/site-content`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Site-content
     * @name PutSiteContent
     * @request PUT:/site-content
     * @secure
     */
    putSiteContent: (data: SiteContentRequest, params: RequestParams = {}) =>
      this.request<SiteContentResponse, Error>({
        path: `/site-content`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Site-content
     * @name DeleteSiteContent
     * @request DELETE:/site-content
     * @secure
     */
    deleteSiteContent: (params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/site-content`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Site-content
     * @name PostSiteContentLocalizations
     * @request POST:/site-content/localizations
     * @secure
     */
    postSiteContentLocalizations: (data: SiteContentLocalizationRequest, params: RequestParams = {}) =>
      this.request<SiteContentLocalizationResponse, Error>({
        path: `/site-content/localizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  upload = {
    /**
     * @description Upload files
     *
     * @tags Upload - File
     * @name UploadCreate
     * @request POST:/upload
     * @secure
     */
    uploadCreate: (
      data: {
        /** The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3). */
        path?: string;
        /** The ID of the entry which the file(s) will be linked to */
        refId?: string;
        /** The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant). */
        ref?: string;
        /** The field of the entry which the file(s) will be precisely linked to. */
        field?: string;
        files: File[];
      },
      params: RequestParams = {},
    ) =>
      this.request<UploadFile[], any>({
        path: `/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - File
     * @name FilesList
     * @request GET:/upload/files
     * @secure
     */
    filesList: (params: RequestParams = {}) =>
      this.request<UploadFile[], any>({
        path: `/upload/files`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - File
     * @name FilesDetail
     * @request GET:/upload/files/{id}
     * @secure
     */
    filesDetail: (id: string, params: RequestParams = {}) =>
      this.request<UploadFile, any>({
        path: `/upload/files/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - File
     * @name FilesDelete
     * @request DELETE:/upload/files/{id}
     * @secure
     */
    filesDelete: (id: string, params: RequestParams = {}) =>
      this.request<UploadFile, any>({
        path: `/upload/files/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  uploadIdId = {
    /**
     * @description Upload file information
     *
     * @tags Upload - File
     * @name UploadIdCreate
     * @request POST:/upload?id={id}
     * @secure
     */
    uploadIdCreate: (
      id: string,
      query: {
        /** File id */
        id: string;
      },
      data: {
        fileInfo?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
        };
        /** @format binary */
        files?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<UploadFile[], any>({
        path: `/upload?id=${id}`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  connect = {
    /**
     * @description Redirects to provider login before being redirect to /auth/{provider}/callback
     *
     * @tags Users-Permissions - Auth
     * @name ConnectDetail
     * @summary Login with a provider
     * @request GET:/connect/{provider}
     * @secure
     */
    connectDetail: (provider: string, params: RequestParams = {}) =>
      this.request<any, void | Error>({
        path: `/connect/${provider}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  auth = {
    /**
     * @description Returns a jwt token and user info
     *
     * @tags Users-Permissions - Auth
     * @name LocalCreate
     * @summary Local login
     * @request POST:/auth/local
     * @secure
     */
    localCreate: (
      data: {
        identifier?: string;
        password?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/local`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a jwt token and user info
     *
     * @tags Users-Permissions - Auth
     * @name LocalRegisterCreate
     * @summary Register a user
     * @request POST:/auth/local/register
     * @secure
     */
    localRegisterCreate: (
      data: {
        username?: string;
        email?: string;
        password?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/local/register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name CallbackDetail
     * @summary Default Callback from provider auth
     * @request GET:/auth/{provider}/callback
     * @secure
     */
    callbackDetail: (provider: string, params: RequestParams = {}) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/${provider}/callback`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ForgotPasswordCreate
     * @summary Send rest password email
     * @request POST:/auth/forgot-password
     * @secure
     */
    forgotPasswordCreate: (
      data: {
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          ok?: "true";
        },
        Error
      >({
        path: `/auth/forgot-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ResetPasswordCreate
     * @summary Rest user password
     * @request POST:/auth/reset-password
     * @secure
     */
    resetPasswordCreate: (
      data: {
        password?: string;
        passwordConfirmation?: string;
        code?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/reset-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ChangePasswordCreate
     * @summary Update user's own password
     * @request POST:/auth/change-password
     * @secure
     */
    changePasswordCreate: (
      data: {
        password: string;
        currentPassword: string;
        passwordConfirmation: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/change-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name EmailConfirmationList
     * @summary Confirm user email
     * @request GET:/auth/email-confirmation
     * @secure
     */
    emailConfirmationList: (
      query?: {
        /** confirmation token received by email */
        confirmation?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void | Error>({
        path: `/auth/email-confirmation`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name SendEmailConfirmationCreate
     * @summary Send confirmation email
     * @request POST:/auth/send-email-confirmation
     * @secure
     */
    sendEmailConfirmationCreate: (
      data: {
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          email?: string;
          sent?: "true";
        },
        Error
      >({
        path: `/auth/send-email-confirmation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  usersPermissions = {
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name PermissionsList
     * @summary Get default generated permissions
     * @request GET:/users-permissions/permissions
     * @secure
     */
    permissionsList: (params: RequestParams = {}) =>
      this.request<
        {
          permissions?: UsersPermissionsPermissionsTree;
        },
        Error
      >({
        path: `/users-permissions/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesList
     * @summary List roles
     * @request GET:/users-permissions/roles
     * @secure
     */
    rolesList: (params: RequestParams = {}) =>
      this.request<
        {
          roles?: (UsersPermissionsRole & {
            nb_users?: number;
          })[];
        },
        Error
      >({
        path: `/users-permissions/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesCreate
     * @summary Create a role
     * @request POST:/users-permissions/roles
     * @secure
     */
    rolesCreate: (
      data: {
        name?: string;
        description?: string;
        type?: string;
        permissions?: UsersPermissionsPermissionsTree;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          ok?: "true";
        },
        Error
      >({
        path: `/users-permissions/roles`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesDetail
     * @summary Get a role
     * @request GET:/users-permissions/roles/{id}
     * @secure
     */
    rolesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          role?: UsersPermissionsRole;
        },
        Error
      >({
        path: `/users-permissions/roles/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesUpdate
     * @summary Update a role
     * @request PUT:/users-permissions/roles/{role}
     * @secure
     */
    rolesUpdate: (
      role: string,
      data: {
        name?: string;
        description?: string;
        type?: string;
        permissions?: UsersPermissionsPermissionsTree;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          ok?: "true";
        },
        Error
      >({
        path: `/users-permissions/roles/${role}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesDelete
     * @summary Delete a role
     * @request DELETE:/users-permissions/roles/{role}
     * @secure
     */
    rolesDelete: (role: string, params: RequestParams = {}) =>
      this.request<
        {
          ok?: "true";
        },
        Error
      >({
        path: `/users-permissions/roles/${role}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersList
     * @summary Get list of users
     * @request GET:/users
     * @secure
     */
    usersList: (params: RequestParams = {}) =>
      this.request<UsersPermissionsUser[], Error>({
        path: `/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersCreate
     * @summary Create a user
     * @request POST:/users
     * @secure
     */
    usersCreate: (
      data: {
        email: string;
        username: string;
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UsersPermissionsUser & {
          role?: UsersPermissionsRole;
        },
        Error
      >({
        path: `/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersDetail
     * @summary Get a user
     * @request GET:/users/{id}
     * @secure
     */
    usersDetail: (id: string, params: RequestParams = {}) =>
      this.request<UsersPermissionsUser, Error>({
        path: `/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersUpdate
     * @summary Update a user
     * @request PUT:/users/{id}
     * @secure
     */
    usersUpdate: (
      id: string,
      data: {
        email: string;
        username: string;
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UsersPermissionsUser & {
          role?: UsersPermissionsRole;
        },
        Error
      >({
        path: `/users/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersDelete
     * @summary Delete a user
     * @request DELETE:/users/{id}
     * @secure
     */
    usersDelete: (id: string, params: RequestParams = {}) =>
      this.request<UsersPermissionsUser, Error>({
        path: `/users/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name GetUsers
     * @summary Get authenticated user info
     * @request GET:/users/me
     * @secure
     */
    getUsers: (params: RequestParams = {}) =>
      this.request<UsersPermissionsUser, Error>({
        path: `/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name CountList
     * @summary Get user count
     * @request GET:/users/count
     * @secure
     */
    countList: (params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/users/count`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
