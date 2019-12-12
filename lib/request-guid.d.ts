/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-01-17 12:14:56
 */
/// <reference types="node" />
export interface GuidData {
  index: number;
  timestamp: number;
  localIP: number;
  remoteIP: number;
}
export interface FriendlyGuidData {
  index: number;
  timestamp: string;
  localIP: string;
  remoteIP: string;
}
export declare type IpInput = number | string;
export declare const GUID_RE: RegExp;
export declare function isGuid(guid: string): boolean;
/**
 * localIP: if is not ok, as 0
 * remoteIP: if is not ok, as 0xffffffff
 */
export declare type Encoder = (localIP: IpInput, remoteIP: IpInput) => string;
export declare type Decoder = {
  (guid: string): GuidData;
  (guid: string, friendly: true): FriendlyGuidData;
};
export declare type SecretInput = Buffer | string;
export interface MiddlewareOptions<N> {
  secret: SecretInput;
  header?: string;
  name: N;
  trustHeader?: boolean;
}
export declare function createEncoder(secret: SecretInput): Encoder;
export declare function createDecoder(secret: SecretInput): Decoder;
