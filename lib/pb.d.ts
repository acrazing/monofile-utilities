/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-12-16 11:26:16
 */
/// <reference types="node" />
import Long from 'long';
export declare type PbNumType =
  | 'double'
  | 'float'
  | 'int32'
  | 'int64'
  | 'uint32'
  | 'uint64'
  | 'sint32'
  | 'sint64'
  | 'fixed32'
  | 'fixed64'
  | 'sfixed32'
  | 'sfixed64';
export declare type PbBoolType = 'bool';
export declare type PbStrType = 'string';
export declare type PbBufType = 'bytes';
export declare type PbScalarType =
  | PbNumType
  | PbBoolType
  | PbStrType
  | PbBufType;
export declare type PbComplexType =
  | 'map'
  | 'repeated'
  | 'oneof'
  | 'nested'
  | 'enum';
export interface PbBaseSchema {
  pos: number;
  type: PbScalarType | PbComplexType;
}
export interface PbScalarSchema extends PbBaseSchema {
  type: PbScalarType;
}
export interface PbEnumSchema extends PbBaseSchema {
  type: 'enum';
  enum: Record<number, string> & Record<string, number>;
}
export interface PbRepeatedSchema extends PbBaseSchema {
  type: 'repeated';
  elem: PbSchema;
}
export interface PbMapSchema extends PbBaseSchema {
  type: 'map';
  key: PbScalarSchema;
  value: PbSchema;
}
export interface PbOneofSchema extends PbBaseSchema {
  type: 'oneof';
  oneof: Record<number, PbSchema>;
}
export interface PbNestedSchema extends PbBaseSchema {
  type: 'nested';
  shape: Record<string, PbSchema>;
}
export declare type PbSchema =
  | PbScalarSchema
  | PbEnumSchema
  | PbRepeatedSchema
  | PbMapSchema
  | PbOneofSchema
  | PbNestedSchema;
export declare function pbEncode(schema: PbSchema, data: any): Buffer;
export declare function pbDecode(schema: PbSchema, data: Buffer): any;
export interface PbSize {
  size: number;
  string?: Buffer;
  number?: Long;
  fields?: Record<number, PbSize>;
}
export declare function pbSize(schema: PbSchema, data: any): PbSize;
