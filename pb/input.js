/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from 'protobufjs/minimal';

// Common aliases
const $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

export const pb = ($root.pb = (() => {
  /**
   * Namespace pb.
   * @exports pb
   * @namespace
   */
  const pb = {};

  pb.HelloInput = (function() {
    /**
     * Properties of a HelloInput.
     * @memberof pb
     * @interface IHelloInput
     * @property {number|null} [Double_1] HelloInput Double_1
     * @property {number|null} [Float_1] HelloInput Float_1
     * @property {number|null} [Int32_1] HelloInput Int32_1
     * @property {number|Long|null} [Int64_1] HelloInput Int64_1
     * @property {number|null} [Uint32_1] HelloInput Uint32_1
     * @property {number|Long|null} [Uint64_1] HelloInput Uint64_1
     * @property {number|null} [Sint32_1] HelloInput Sint32_1
     * @property {number|Long|null} [Sint64_1] HelloInput Sint64_1
     * @property {number|null} [Fixed32_1] HelloInput Fixed32_1
     * @property {number|Long|null} [Fixed64_1] HelloInput Fixed64_1
     * @property {number|null} [Sfixed32_1] HelloInput Sfixed32_1
     * @property {number|Long|null} [Sfixed64_1] HelloInput Sfixed64_1
     * @property {boolean|null} [Bool_1] HelloInput Bool_1
     * @property {string|null} [String_1] HelloInput String_1
     * @property {Uint8Array|null} [Bytes_1] HelloInput Bytes_1
     * @property {pb.HelloInput.Enum|null} [Enum_1] HelloInput Enum_1
     * @property {Array.<number>|null} [RepeatedInt32_1] HelloInput RepeatedInt32_1
     * @property {Array.<string>|null} [RepeatedString_1] HelloInput RepeatedString_1
     * @property {pb.HelloInput.INested|null} [Nested_1] HelloInput Nested_1
     * @property {number|null} [Int32_3] HelloInput Int32_3
     * @property {string|null} [String_3] HelloInput String_3
     * @property {pb.HelloInput.INested|null} [Nested_2] HelloInput Nested_2
     * @property {Object.<string,string>|null} [MapUint32String_1] HelloInput MapUint32String_1
     * @property {Object.<string,pb.HelloInput.INested>|null} [MapStringNested_1] HelloInput MapStringNested_1
     */

    /**
     * Constructs a new HelloInput.
     * @memberof pb
     * @classdesc Represents a HelloInput.
     * @implements IHelloInput
     * @constructor
     * @param {pb.IHelloInput=} [properties] Properties to set
     */
    function HelloInput(properties) {
      this.RepeatedInt32_1 = [];
      this.RepeatedString_1 = [];
      this.MapUint32String_1 = {};
      this.MapStringNested_1 = {};
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * HelloInput Double_1.
     * @member {number} Double_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Double_1 = 0;

    /**
     * HelloInput Float_1.
     * @member {number} Float_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Float_1 = 0;

    /**
     * HelloInput Int32_1.
     * @member {number} Int32_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Int32_1 = 0;

    /**
     * HelloInput Int64_1.
     * @member {number|Long} Int64_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Int64_1 = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * HelloInput Uint32_1.
     * @member {number} Uint32_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Uint32_1 = 0;

    /**
     * HelloInput Uint64_1.
     * @member {number|Long} Uint64_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Uint64_1 = $util.Long
      ? $util.Long.fromBits(0, 0, true)
      : 0;

    /**
     * HelloInput Sint32_1.
     * @member {number} Sint32_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Sint32_1 = 0;

    /**
     * HelloInput Sint64_1.
     * @member {number|Long} Sint64_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Sint64_1 = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * HelloInput Fixed32_1.
     * @member {number} Fixed32_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Fixed32_1 = 0;

    /**
     * HelloInput Fixed64_1.
     * @member {number|Long} Fixed64_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Fixed64_1 = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * HelloInput Sfixed32_1.
     * @member {number} Sfixed32_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Sfixed32_1 = 0;

    /**
     * HelloInput Sfixed64_1.
     * @member {number|Long} Sfixed64_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Sfixed64_1 = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * HelloInput Bool_1.
     * @member {boolean} Bool_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Bool_1 = false;

    /**
     * HelloInput String_1.
     * @member {string} String_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.String_1 = '';

    /**
     * HelloInput Bytes_1.
     * @member {Uint8Array} Bytes_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Bytes_1 = $util.newBuffer([]);

    /**
     * HelloInput Enum_1.
     * @member {pb.HelloInput.Enum} Enum_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Enum_1 = 0;

    /**
     * HelloInput RepeatedInt32_1.
     * @member {Array.<number>} RepeatedInt32_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.RepeatedInt32_1 = $util.emptyArray;

    /**
     * HelloInput RepeatedString_1.
     * @member {Array.<string>} RepeatedString_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.RepeatedString_1 = $util.emptyArray;

    /**
     * HelloInput Nested_1.
     * @member {pb.HelloInput.INested|null|undefined} Nested_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Nested_1 = null;

    /**
     * HelloInput Int32_3.
     * @member {number} Int32_3
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Int32_3 = 0;

    /**
     * HelloInput String_3.
     * @member {string} String_3
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.String_3 = '';

    /**
     * HelloInput Nested_2.
     * @member {pb.HelloInput.INested|null|undefined} Nested_2
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.Nested_2 = null;

    /**
     * HelloInput MapUint32String_1.
     * @member {Object.<string,string>} MapUint32String_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.MapUint32String_1 = $util.emptyObject;

    /**
     * HelloInput MapStringNested_1.
     * @member {Object.<string,pb.HelloInput.INested>} MapStringNested_1
     * @memberof pb.HelloInput
     * @instance
     */
    HelloInput.prototype.MapStringNested_1 = $util.emptyObject;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * HelloInput Oneof_1.
     * @member {"Int32_3"|"String_3"|"Nested_2"|undefined} Oneof_1
     * @memberof pb.HelloInput
     * @instance
     */
    Object.defineProperty(HelloInput.prototype, 'Oneof_1', {
      get: $util.oneOfGetter(
        ($oneOfFields = ['Int32_3', 'String_3', 'Nested_2']),
      ),
      set: $util.oneOfSetter($oneOfFields),
    });

    /**
     * Creates a new HelloInput instance using the specified properties.
     * @function create
     * @memberof pb.HelloInput
     * @static
     * @param {pb.IHelloInput=} [properties] Properties to set
     * @returns {pb.HelloInput} HelloInput instance
     */
    HelloInput.create = function create(properties) {
      return new HelloInput(properties);
    };

    /**
     * Encodes the specified HelloInput message. Does not implicitly {@link pb.HelloInput.verify|verify} messages.
     * @function encode
     * @memberof pb.HelloInput
     * @static
     * @param {pb.IHelloInput} message HelloInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HelloInput.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.Double_1 != null && message.hasOwnProperty('Double_1'))
        writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.Double_1);
      if (message.Float_1 != null && message.hasOwnProperty('Float_1'))
        writer.uint32(/* id 2, wireType 5 =*/ 21).float(message.Float_1);
      if (message.Int32_1 != null && message.hasOwnProperty('Int32_1'))
        writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.Int32_1);
      if (message.Int64_1 != null && message.hasOwnProperty('Int64_1'))
        writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.Int64_1);
      if (message.Uint32_1 != null && message.hasOwnProperty('Uint32_1'))
        writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.Uint32_1);
      if (message.Uint64_1 != null && message.hasOwnProperty('Uint64_1'))
        writer.uint32(/* id 6, wireType 0 =*/ 48).uint64(message.Uint64_1);
      if (message.Sint32_1 != null && message.hasOwnProperty('Sint32_1'))
        writer.uint32(/* id 7, wireType 0 =*/ 56).sint32(message.Sint32_1);
      if (message.Sint64_1 != null && message.hasOwnProperty('Sint64_1'))
        writer.uint32(/* id 8, wireType 0 =*/ 64).sint64(message.Sint64_1);
      if (message.Fixed32_1 != null && message.hasOwnProperty('Fixed32_1'))
        writer.uint32(/* id 9, wireType 5 =*/ 77).fixed32(message.Fixed32_1);
      if (message.Fixed64_1 != null && message.hasOwnProperty('Fixed64_1'))
        writer.uint32(/* id 10, wireType 1 =*/ 81).fixed64(message.Fixed64_1);
      if (message.Sfixed32_1 != null && message.hasOwnProperty('Sfixed32_1'))
        writer.uint32(/* id 11, wireType 5 =*/ 93).sfixed32(message.Sfixed32_1);
      if (message.Sfixed64_1 != null && message.hasOwnProperty('Sfixed64_1'))
        writer.uint32(/* id 12, wireType 1 =*/ 97).sfixed64(message.Sfixed64_1);
      if (message.Bool_1 != null && message.hasOwnProperty('Bool_1'))
        writer.uint32(/* id 13, wireType 0 =*/ 104).bool(message.Bool_1);
      if (message.String_1 != null && message.hasOwnProperty('String_1'))
        writer.uint32(/* id 14, wireType 2 =*/ 114).string(message.String_1);
      if (message.Bytes_1 != null && message.hasOwnProperty('Bytes_1'))
        writer.uint32(/* id 15, wireType 2 =*/ 122).bytes(message.Bytes_1);
      if (message.Enum_1 != null && message.hasOwnProperty('Enum_1'))
        writer.uint32(/* id 16, wireType 0 =*/ 128).int32(message.Enum_1);
      if (message.RepeatedInt32_1 != null && message.RepeatedInt32_1.length) {
        writer.uint32(/* id 17, wireType 2 =*/ 138).fork();
        for (let i = 0; i < message.RepeatedInt32_1.length; ++i)
          writer.int32(message.RepeatedInt32_1[i]);
        writer.ldelim();
      }
      if (message.RepeatedString_1 != null && message.RepeatedString_1.length)
        for (let i = 0; i < message.RepeatedString_1.length; ++i)
          writer
            .uint32(/* id 18, wireType 2 =*/ 146)
            .string(message.RepeatedString_1[i]);
      if (message.Nested_1 != null && message.hasOwnProperty('Nested_1'))
        $root.pb.HelloInput.Nested.encode(
          message.Nested_1,
          writer.uint32(/* id 19, wireType 2 =*/ 154).fork(),
        ).ldelim();
      if (message.Int32_3 != null && message.hasOwnProperty('Int32_3'))
        writer.uint32(/* id 20, wireType 0 =*/ 160).int32(message.Int32_3);
      if (message.String_3 != null && message.hasOwnProperty('String_3'))
        writer.uint32(/* id 21, wireType 2 =*/ 170).string(message.String_3);
      if (message.Nested_2 != null && message.hasOwnProperty('Nested_2'))
        $root.pb.HelloInput.Nested.encode(
          message.Nested_2,
          writer.uint32(/* id 22, wireType 2 =*/ 178).fork(),
        ).ldelim();
      if (
        message.MapUint32String_1 != null &&
        message.hasOwnProperty('MapUint32String_1')
      )
        for (
          let keys = Object.keys(message.MapUint32String_1), i = 0;
          i < keys.length;
          ++i
        )
          writer
            .uint32(/* id 23, wireType 2 =*/ 186)
            .fork()
            .uint32(/* id 1, wireType 0 =*/ 8)
            .uint32(keys[i])
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.MapUint32String_1[keys[i]])
            .ldelim();
      if (
        message.MapStringNested_1 != null &&
        message.hasOwnProperty('MapStringNested_1')
      )
        for (
          let keys = Object.keys(message.MapStringNested_1), i = 0;
          i < keys.length;
          ++i
        ) {
          writer
            .uint32(/* id 24, wireType 2 =*/ 194)
            .fork()
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(keys[i]);
          $root.pb.HelloInput.Nested.encode(
            message.MapStringNested_1[keys[i]],
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork(),
          )
            .ldelim()
            .ldelim();
        }
      return writer;
    };

    /**
     * Encodes the specified HelloInput message, length delimited. Does not implicitly {@link pb.HelloInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pb.HelloInput
     * @static
     * @param {pb.IHelloInput} message HelloInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HelloInput.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HelloInput message from the specified reader or buffer.
     * @function decode
     * @memberof pb.HelloInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pb.HelloInput} HelloInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HelloInput.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      let end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.pb.HelloInput(),
        key;
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.Double_1 = reader.double();
            break;
          case 2:
            message.Float_1 = reader.float();
            break;
          case 3:
            message.Int32_1 = reader.int32();
            break;
          case 4:
            message.Int64_1 = reader.int64();
            break;
          case 5:
            message.Uint32_1 = reader.uint32();
            break;
          case 6:
            message.Uint64_1 = reader.uint64();
            break;
          case 7:
            message.Sint32_1 = reader.sint32();
            break;
          case 8:
            message.Sint64_1 = reader.sint64();
            break;
          case 9:
            message.Fixed32_1 = reader.fixed32();
            break;
          case 10:
            message.Fixed64_1 = reader.fixed64();
            break;
          case 11:
            message.Sfixed32_1 = reader.sfixed32();
            break;
          case 12:
            message.Sfixed64_1 = reader.sfixed64();
            break;
          case 13:
            message.Bool_1 = reader.bool();
            break;
          case 14:
            message.String_1 = reader.string();
            break;
          case 15:
            message.Bytes_1 = reader.bytes();
            break;
          case 16:
            message.Enum_1 = reader.int32();
            break;
          case 17:
            if (!(message.RepeatedInt32_1 && message.RepeatedInt32_1.length))
              message.RepeatedInt32_1 = [];
            if ((tag & 7) === 2) {
              let end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2)
                message.RepeatedInt32_1.push(reader.int32());
            } else message.RepeatedInt32_1.push(reader.int32());
            break;
          case 18:
            if (!(message.RepeatedString_1 && message.RepeatedString_1.length))
              message.RepeatedString_1 = [];
            message.RepeatedString_1.push(reader.string());
            break;
          case 19:
            message.Nested_1 = $root.pb.HelloInput.Nested.decode(
              reader,
              reader.uint32(),
            );
            break;
          case 20:
            message.Int32_3 = reader.int32();
            break;
          case 21:
            message.String_3 = reader.string();
            break;
          case 22:
            message.Nested_2 = $root.pb.HelloInput.Nested.decode(
              reader,
              reader.uint32(),
            );
            break;
          case 23:
            reader.skip().pos++;
            if (message.MapUint32String_1 === $util.emptyObject)
              message.MapUint32String_1 = {};
            key = reader.uint32();
            reader.pos++;
            message.MapUint32String_1[key] = reader.string();
            break;
          case 24:
            reader.skip().pos++;
            if (message.MapStringNested_1 === $util.emptyObject)
              message.MapStringNested_1 = {};
            key = reader.string();
            reader.pos++;
            message.MapStringNested_1[key] = $root.pb.HelloInput.Nested.decode(
              reader,
              reader.uint32(),
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a HelloInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pb.HelloInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pb.HelloInput} HelloInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HelloInput.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HelloInput message.
     * @function verify
     * @memberof pb.HelloInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HelloInput.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      let properties = {};
      if (message.Double_1 != null && message.hasOwnProperty('Double_1'))
        if (typeof message.Double_1 !== 'number')
          return 'Double_1: number expected';
      if (message.Float_1 != null && message.hasOwnProperty('Float_1'))
        if (typeof message.Float_1 !== 'number')
          return 'Float_1: number expected';
      if (message.Int32_1 != null && message.hasOwnProperty('Int32_1'))
        if (!$util.isInteger(message.Int32_1))
          return 'Int32_1: integer expected';
      if (message.Int64_1 != null && message.hasOwnProperty('Int64_1'))
        if (
          !$util.isInteger(message.Int64_1) &&
          !(
            message.Int64_1 &&
            $util.isInteger(message.Int64_1.low) &&
            $util.isInteger(message.Int64_1.high)
          )
        )
          return 'Int64_1: integer|Long expected';
      if (message.Uint32_1 != null && message.hasOwnProperty('Uint32_1'))
        if (!$util.isInteger(message.Uint32_1))
          return 'Uint32_1: integer expected';
      if (message.Uint64_1 != null && message.hasOwnProperty('Uint64_1'))
        if (
          !$util.isInteger(message.Uint64_1) &&
          !(
            message.Uint64_1 &&
            $util.isInteger(message.Uint64_1.low) &&
            $util.isInteger(message.Uint64_1.high)
          )
        )
          return 'Uint64_1: integer|Long expected';
      if (message.Sint32_1 != null && message.hasOwnProperty('Sint32_1'))
        if (!$util.isInteger(message.Sint32_1))
          return 'Sint32_1: integer expected';
      if (message.Sint64_1 != null && message.hasOwnProperty('Sint64_1'))
        if (
          !$util.isInteger(message.Sint64_1) &&
          !(
            message.Sint64_1 &&
            $util.isInteger(message.Sint64_1.low) &&
            $util.isInteger(message.Sint64_1.high)
          )
        )
          return 'Sint64_1: integer|Long expected';
      if (message.Fixed32_1 != null && message.hasOwnProperty('Fixed32_1'))
        if (!$util.isInteger(message.Fixed32_1))
          return 'Fixed32_1: integer expected';
      if (message.Fixed64_1 != null && message.hasOwnProperty('Fixed64_1'))
        if (
          !$util.isInteger(message.Fixed64_1) &&
          !(
            message.Fixed64_1 &&
            $util.isInteger(message.Fixed64_1.low) &&
            $util.isInteger(message.Fixed64_1.high)
          )
        )
          return 'Fixed64_1: integer|Long expected';
      if (message.Sfixed32_1 != null && message.hasOwnProperty('Sfixed32_1'))
        if (!$util.isInteger(message.Sfixed32_1))
          return 'Sfixed32_1: integer expected';
      if (message.Sfixed64_1 != null && message.hasOwnProperty('Sfixed64_1'))
        if (
          !$util.isInteger(message.Sfixed64_1) &&
          !(
            message.Sfixed64_1 &&
            $util.isInteger(message.Sfixed64_1.low) &&
            $util.isInteger(message.Sfixed64_1.high)
          )
        )
          return 'Sfixed64_1: integer|Long expected';
      if (message.Bool_1 != null && message.hasOwnProperty('Bool_1'))
        if (typeof message.Bool_1 !== 'boolean')
          return 'Bool_1: boolean expected';
      if (message.String_1 != null && message.hasOwnProperty('String_1'))
        if (!$util.isString(message.String_1))
          return 'String_1: string expected';
      if (message.Bytes_1 != null && message.hasOwnProperty('Bytes_1'))
        if (
          !(
            (message.Bytes_1 && typeof message.Bytes_1.length === 'number') ||
            $util.isString(message.Bytes_1)
          )
        )
          return 'Bytes_1: buffer expected';
      if (message.Enum_1 != null && message.hasOwnProperty('Enum_1'))
        switch (message.Enum_1) {
          default:
            return 'Enum_1: enum value expected';
          case 0:
          case 1:
            break;
        }
      if (
        message.RepeatedInt32_1 != null &&
        message.hasOwnProperty('RepeatedInt32_1')
      ) {
        if (!Array.isArray(message.RepeatedInt32_1))
          return 'RepeatedInt32_1: array expected';
        for (let i = 0; i < message.RepeatedInt32_1.length; ++i)
          if (!$util.isInteger(message.RepeatedInt32_1[i]))
            return 'RepeatedInt32_1: integer[] expected';
      }
      if (
        message.RepeatedString_1 != null &&
        message.hasOwnProperty('RepeatedString_1')
      ) {
        if (!Array.isArray(message.RepeatedString_1))
          return 'RepeatedString_1: array expected';
        for (let i = 0; i < message.RepeatedString_1.length; ++i)
          if (!$util.isString(message.RepeatedString_1[i]))
            return 'RepeatedString_1: string[] expected';
      }
      if (message.Nested_1 != null && message.hasOwnProperty('Nested_1')) {
        let error = $root.pb.HelloInput.Nested.verify(message.Nested_1);
        if (error) return 'Nested_1.' + error;
      }
      if (message.Int32_3 != null && message.hasOwnProperty('Int32_3')) {
        properties.Oneof_1 = 1;
        if (!$util.isInteger(message.Int32_3))
          return 'Int32_3: integer expected';
      }
      if (message.String_3 != null && message.hasOwnProperty('String_3')) {
        if (properties.Oneof_1 === 1) return 'Oneof_1: multiple values';
        properties.Oneof_1 = 1;
        if (!$util.isString(message.String_3))
          return 'String_3: string expected';
      }
      if (message.Nested_2 != null && message.hasOwnProperty('Nested_2')) {
        if (properties.Oneof_1 === 1) return 'Oneof_1: multiple values';
        properties.Oneof_1 = 1;
        {
          let error = $root.pb.HelloInput.Nested.verify(message.Nested_2);
          if (error) return 'Nested_2.' + error;
        }
      }
      if (
        message.MapUint32String_1 != null &&
        message.hasOwnProperty('MapUint32String_1')
      ) {
        if (!$util.isObject(message.MapUint32String_1))
          return 'MapUint32String_1: object expected';
        let key = Object.keys(message.MapUint32String_1);
        for (let i = 0; i < key.length; ++i) {
          if (!$util.key32Re.test(key[i]))
            return 'MapUint32String_1: integer key{k:uint32} expected';
          if (!$util.isString(message.MapUint32String_1[key[i]]))
            return 'MapUint32String_1: string{k:uint32} expected';
        }
      }
      if (
        message.MapStringNested_1 != null &&
        message.hasOwnProperty('MapStringNested_1')
      ) {
        if (!$util.isObject(message.MapStringNested_1))
          return 'MapStringNested_1: object expected';
        let key = Object.keys(message.MapStringNested_1);
        for (let i = 0; i < key.length; ++i) {
          let error = $root.pb.HelloInput.Nested.verify(
            message.MapStringNested_1[key[i]],
          );
          if (error) return 'MapStringNested_1.' + error;
        }
      }
      return null;
    };

    /**
     * Creates a HelloInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pb.HelloInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pb.HelloInput} HelloInput
     */
    HelloInput.fromObject = function fromObject(object) {
      if (object instanceof $root.pb.HelloInput) return object;
      let message = new $root.pb.HelloInput();
      if (object.Double_1 != null) message.Double_1 = Number(object.Double_1);
      if (object.Float_1 != null) message.Float_1 = Number(object.Float_1);
      if (object.Int32_1 != null) message.Int32_1 = object.Int32_1 | 0;
      if (object.Int64_1 != null)
        if ($util.Long)
          (message.Int64_1 = $util.Long.fromValue(
            object.Int64_1,
          )).unsigned = false;
        else if (typeof object.Int64_1 === 'string')
          message.Int64_1 = parseInt(object.Int64_1, 10);
        else if (typeof object.Int64_1 === 'number')
          message.Int64_1 = object.Int64_1;
        else if (typeof object.Int64_1 === 'object')
          message.Int64_1 = new $util.LongBits(
            object.Int64_1.low >>> 0,
            object.Int64_1.high >>> 0,
          ).toNumber();
      if (object.Uint32_1 != null) message.Uint32_1 = object.Uint32_1 >>> 0;
      if (object.Uint64_1 != null)
        if ($util.Long)
          (message.Uint64_1 = $util.Long.fromValue(
            object.Uint64_1,
          )).unsigned = true;
        else if (typeof object.Uint64_1 === 'string')
          message.Uint64_1 = parseInt(object.Uint64_1, 10);
        else if (typeof object.Uint64_1 === 'number')
          message.Uint64_1 = object.Uint64_1;
        else if (typeof object.Uint64_1 === 'object')
          message.Uint64_1 = new $util.LongBits(
            object.Uint64_1.low >>> 0,
            object.Uint64_1.high >>> 0,
          ).toNumber(true);
      if (object.Sint32_1 != null) message.Sint32_1 = object.Sint32_1 | 0;
      if (object.Sint64_1 != null)
        if ($util.Long)
          (message.Sint64_1 = $util.Long.fromValue(
            object.Sint64_1,
          )).unsigned = false;
        else if (typeof object.Sint64_1 === 'string')
          message.Sint64_1 = parseInt(object.Sint64_1, 10);
        else if (typeof object.Sint64_1 === 'number')
          message.Sint64_1 = object.Sint64_1;
        else if (typeof object.Sint64_1 === 'object')
          message.Sint64_1 = new $util.LongBits(
            object.Sint64_1.low >>> 0,
            object.Sint64_1.high >>> 0,
          ).toNumber();
      if (object.Fixed32_1 != null) message.Fixed32_1 = object.Fixed32_1 >>> 0;
      if (object.Fixed64_1 != null)
        if ($util.Long)
          (message.Fixed64_1 = $util.Long.fromValue(
            object.Fixed64_1,
          )).unsigned = false;
        else if (typeof object.Fixed64_1 === 'string')
          message.Fixed64_1 = parseInt(object.Fixed64_1, 10);
        else if (typeof object.Fixed64_1 === 'number')
          message.Fixed64_1 = object.Fixed64_1;
        else if (typeof object.Fixed64_1 === 'object')
          message.Fixed64_1 = new $util.LongBits(
            object.Fixed64_1.low >>> 0,
            object.Fixed64_1.high >>> 0,
          ).toNumber();
      if (object.Sfixed32_1 != null) message.Sfixed32_1 = object.Sfixed32_1 | 0;
      if (object.Sfixed64_1 != null)
        if ($util.Long)
          (message.Sfixed64_1 = $util.Long.fromValue(
            object.Sfixed64_1,
          )).unsigned = false;
        else if (typeof object.Sfixed64_1 === 'string')
          message.Sfixed64_1 = parseInt(object.Sfixed64_1, 10);
        else if (typeof object.Sfixed64_1 === 'number')
          message.Sfixed64_1 = object.Sfixed64_1;
        else if (typeof object.Sfixed64_1 === 'object')
          message.Sfixed64_1 = new $util.LongBits(
            object.Sfixed64_1.low >>> 0,
            object.Sfixed64_1.high >>> 0,
          ).toNumber();
      if (object.Bool_1 != null) message.Bool_1 = Boolean(object.Bool_1);
      if (object.String_1 != null) message.String_1 = String(object.String_1);
      if (object.Bytes_1 != null)
        if (typeof object.Bytes_1 === 'string')
          $util.base64.decode(
            object.Bytes_1,
            (message.Bytes_1 = $util.newBuffer(
              $util.base64.length(object.Bytes_1),
            )),
            0,
          );
        else if (object.Bytes_1.length) message.Bytes_1 = object.Bytes_1;
      switch (object.Enum_1) {
        case 'E_0':
        case 0:
          message.Enum_1 = 0;
          break;
        case 'E_1':
        case 1:
          message.Enum_1 = 1;
          break;
      }
      if (object.RepeatedInt32_1) {
        if (!Array.isArray(object.RepeatedInt32_1))
          throw TypeError('.pb.HelloInput.RepeatedInt32_1: array expected');
        message.RepeatedInt32_1 = [];
        for (let i = 0; i < object.RepeatedInt32_1.length; ++i)
          message.RepeatedInt32_1[i] = object.RepeatedInt32_1[i] | 0;
      }
      if (object.RepeatedString_1) {
        if (!Array.isArray(object.RepeatedString_1))
          throw TypeError('.pb.HelloInput.RepeatedString_1: array expected');
        message.RepeatedString_1 = [];
        for (let i = 0; i < object.RepeatedString_1.length; ++i)
          message.RepeatedString_1[i] = String(object.RepeatedString_1[i]);
      }
      if (object.Nested_1 != null) {
        if (typeof object.Nested_1 !== 'object')
          throw TypeError('.pb.HelloInput.Nested_1: object expected');
        message.Nested_1 = $root.pb.HelloInput.Nested.fromObject(
          object.Nested_1,
        );
      }
      if (object.Int32_3 != null) message.Int32_3 = object.Int32_3 | 0;
      if (object.String_3 != null) message.String_3 = String(object.String_3);
      if (object.Nested_2 != null) {
        if (typeof object.Nested_2 !== 'object')
          throw TypeError('.pb.HelloInput.Nested_2: object expected');
        message.Nested_2 = $root.pb.HelloInput.Nested.fromObject(
          object.Nested_2,
        );
      }
      if (object.MapUint32String_1) {
        if (typeof object.MapUint32String_1 !== 'object')
          throw TypeError('.pb.HelloInput.MapUint32String_1: object expected');
        message.MapUint32String_1 = {};
        for (
          let keys = Object.keys(object.MapUint32String_1), i = 0;
          i < keys.length;
          ++i
        )
          message.MapUint32String_1[keys[i]] = String(
            object.MapUint32String_1[keys[i]],
          );
      }
      if (object.MapStringNested_1) {
        if (typeof object.MapStringNested_1 !== 'object')
          throw TypeError('.pb.HelloInput.MapStringNested_1: object expected');
        message.MapStringNested_1 = {};
        for (
          let keys = Object.keys(object.MapStringNested_1), i = 0;
          i < keys.length;
          ++i
        ) {
          if (typeof object.MapStringNested_1[keys[i]] !== 'object')
            throw TypeError(
              '.pb.HelloInput.MapStringNested_1: object expected',
            );
          message.MapStringNested_1[
            keys[i]
          ] = $root.pb.HelloInput.Nested.fromObject(
            object.MapStringNested_1[keys[i]],
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a HelloInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pb.HelloInput
     * @static
     * @param {pb.HelloInput} message HelloInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HelloInput.toObject = function toObject(message, options) {
      if (!options) options = {};
      let object = {};
      if (options.arrays || options.defaults) {
        object.RepeatedInt32_1 = [];
        object.RepeatedString_1 = [];
      }
      if (options.objects || options.defaults) {
        object.MapUint32String_1 = {};
        object.MapStringNested_1 = {};
      }
      if (options.defaults) {
        object.Double_1 = 0;
        object.Float_1 = 0;
        object.Int32_1 = 0;
        if ($util.Long) {
          let long = new $util.Long(0, 0, false);
          object.Int64_1 =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.Int64_1 = options.longs === String ? '0' : 0;
        object.Uint32_1 = 0;
        if ($util.Long) {
          let long = new $util.Long(0, 0, true);
          object.Uint64_1 =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.Uint64_1 = options.longs === String ? '0' : 0;
        object.Sint32_1 = 0;
        if ($util.Long) {
          let long = new $util.Long(0, 0, false);
          object.Sint64_1 =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.Sint64_1 = options.longs === String ? '0' : 0;
        object.Fixed32_1 = 0;
        if ($util.Long) {
          let long = new $util.Long(0, 0, false);
          object.Fixed64_1 =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.Fixed64_1 = options.longs === String ? '0' : 0;
        object.Sfixed32_1 = 0;
        if ($util.Long) {
          let long = new $util.Long(0, 0, false);
          object.Sfixed64_1 =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.Sfixed64_1 = options.longs === String ? '0' : 0;
        object.Bool_1 = false;
        object.String_1 = '';
        if (options.bytes === String) object.Bytes_1 = '';
        else {
          object.Bytes_1 = [];
          if (options.bytes !== Array)
            object.Bytes_1 = $util.newBuffer(object.Bytes_1);
        }
        object.Enum_1 = options.enums === String ? 'E_0' : 0;
        object.Nested_1 = null;
      }
      if (message.Double_1 != null && message.hasOwnProperty('Double_1'))
        object.Double_1 =
          options.json && !isFinite(message.Double_1)
            ? String(message.Double_1)
            : message.Double_1;
      if (message.Float_1 != null && message.hasOwnProperty('Float_1'))
        object.Float_1 =
          options.json && !isFinite(message.Float_1)
            ? String(message.Float_1)
            : message.Float_1;
      if (message.Int32_1 != null && message.hasOwnProperty('Int32_1'))
        object.Int32_1 = message.Int32_1;
      if (message.Int64_1 != null && message.hasOwnProperty('Int64_1'))
        if (typeof message.Int64_1 === 'number')
          object.Int64_1 =
            options.longs === String
              ? String(message.Int64_1)
              : message.Int64_1;
        else
          object.Int64_1 =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.Int64_1)
              : options.longs === Number
              ? new $util.LongBits(
                  message.Int64_1.low >>> 0,
                  message.Int64_1.high >>> 0,
                ).toNumber()
              : message.Int64_1;
      if (message.Uint32_1 != null && message.hasOwnProperty('Uint32_1'))
        object.Uint32_1 = message.Uint32_1;
      if (message.Uint64_1 != null && message.hasOwnProperty('Uint64_1'))
        if (typeof message.Uint64_1 === 'number')
          object.Uint64_1 =
            options.longs === String
              ? String(message.Uint64_1)
              : message.Uint64_1;
        else
          object.Uint64_1 =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.Uint64_1)
              : options.longs === Number
              ? new $util.LongBits(
                  message.Uint64_1.low >>> 0,
                  message.Uint64_1.high >>> 0,
                ).toNumber(true)
              : message.Uint64_1;
      if (message.Sint32_1 != null && message.hasOwnProperty('Sint32_1'))
        object.Sint32_1 = message.Sint32_1;
      if (message.Sint64_1 != null && message.hasOwnProperty('Sint64_1'))
        if (typeof message.Sint64_1 === 'number')
          object.Sint64_1 =
            options.longs === String
              ? String(message.Sint64_1)
              : message.Sint64_1;
        else
          object.Sint64_1 =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.Sint64_1)
              : options.longs === Number
              ? new $util.LongBits(
                  message.Sint64_1.low >>> 0,
                  message.Sint64_1.high >>> 0,
                ).toNumber()
              : message.Sint64_1;
      if (message.Fixed32_1 != null && message.hasOwnProperty('Fixed32_1'))
        object.Fixed32_1 = message.Fixed32_1;
      if (message.Fixed64_1 != null && message.hasOwnProperty('Fixed64_1'))
        if (typeof message.Fixed64_1 === 'number')
          object.Fixed64_1 =
            options.longs === String
              ? String(message.Fixed64_1)
              : message.Fixed64_1;
        else
          object.Fixed64_1 =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.Fixed64_1)
              : options.longs === Number
              ? new $util.LongBits(
                  message.Fixed64_1.low >>> 0,
                  message.Fixed64_1.high >>> 0,
                ).toNumber()
              : message.Fixed64_1;
      if (message.Sfixed32_1 != null && message.hasOwnProperty('Sfixed32_1'))
        object.Sfixed32_1 = message.Sfixed32_1;
      if (message.Sfixed64_1 != null && message.hasOwnProperty('Sfixed64_1'))
        if (typeof message.Sfixed64_1 === 'number')
          object.Sfixed64_1 =
            options.longs === String
              ? String(message.Sfixed64_1)
              : message.Sfixed64_1;
        else
          object.Sfixed64_1 =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.Sfixed64_1)
              : options.longs === Number
              ? new $util.LongBits(
                  message.Sfixed64_1.low >>> 0,
                  message.Sfixed64_1.high >>> 0,
                ).toNumber()
              : message.Sfixed64_1;
      if (message.Bool_1 != null && message.hasOwnProperty('Bool_1'))
        object.Bool_1 = message.Bool_1;
      if (message.String_1 != null && message.hasOwnProperty('String_1'))
        object.String_1 = message.String_1;
      if (message.Bytes_1 != null && message.hasOwnProperty('Bytes_1'))
        object.Bytes_1 =
          options.bytes === String
            ? $util.base64.encode(message.Bytes_1, 0, message.Bytes_1.length)
            : options.bytes === Array
            ? Array.prototype.slice.call(message.Bytes_1)
            : message.Bytes_1;
      if (message.Enum_1 != null && message.hasOwnProperty('Enum_1'))
        object.Enum_1 =
          options.enums === String
            ? $root.pb.HelloInput.Enum[message.Enum_1]
            : message.Enum_1;
      if (message.RepeatedInt32_1 && message.RepeatedInt32_1.length) {
        object.RepeatedInt32_1 = [];
        for (let j = 0; j < message.RepeatedInt32_1.length; ++j)
          object.RepeatedInt32_1[j] = message.RepeatedInt32_1[j];
      }
      if (message.RepeatedString_1 && message.RepeatedString_1.length) {
        object.RepeatedString_1 = [];
        for (let j = 0; j < message.RepeatedString_1.length; ++j)
          object.RepeatedString_1[j] = message.RepeatedString_1[j];
      }
      if (message.Nested_1 != null && message.hasOwnProperty('Nested_1'))
        object.Nested_1 = $root.pb.HelloInput.Nested.toObject(
          message.Nested_1,
          options,
        );
      if (message.Int32_3 != null && message.hasOwnProperty('Int32_3')) {
        object.Int32_3 = message.Int32_3;
        if (options.oneofs) object.Oneof_1 = 'Int32_3';
      }
      if (message.String_3 != null && message.hasOwnProperty('String_3')) {
        object.String_3 = message.String_3;
        if (options.oneofs) object.Oneof_1 = 'String_3';
      }
      if (message.Nested_2 != null && message.hasOwnProperty('Nested_2')) {
        object.Nested_2 = $root.pb.HelloInput.Nested.toObject(
          message.Nested_2,
          options,
        );
        if (options.oneofs) object.Oneof_1 = 'Nested_2';
      }
      let keys2;
      if (
        message.MapUint32String_1 &&
        (keys2 = Object.keys(message.MapUint32String_1)).length
      ) {
        object.MapUint32String_1 = {};
        for (let j = 0; j < keys2.length; ++j)
          object.MapUint32String_1[keys2[j]] =
            message.MapUint32String_1[keys2[j]];
      }
      if (
        message.MapStringNested_1 &&
        (keys2 = Object.keys(message.MapStringNested_1)).length
      ) {
        object.MapStringNested_1 = {};
        for (let j = 0; j < keys2.length; ++j)
          object.MapStringNested_1[
            keys2[j]
          ] = $root.pb.HelloInput.Nested.toObject(
            message.MapStringNested_1[keys2[j]],
            options,
          );
      }
      return object;
    };

    /**
     * Converts this HelloInput to JSON.
     * @function toJSON
     * @memberof pb.HelloInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HelloInput.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Enum enum.
     * @name pb.HelloInput.Enum
     * @enum {string}
     * @property {number} E_0=0 E_0 value
     * @property {number} E_1=1 E_1 value
     */
    HelloInput.Enum = (function() {
      const valuesById = {},
        values = Object.create(valuesById);
      values[(valuesById[0] = 'E_0')] = 0;
      values[(valuesById[1] = 'E_1')] = 1;
      return values;
    })();

    HelloInput.Nested = (function() {
      /**
       * Properties of a Nested.
       * @memberof pb.HelloInput
       * @interface INested
       * @property {number|null} [Int32_2] Nested Int32_2
       * @property {string|null} [String_2] Nested String_2
       */

      /**
       * Constructs a new Nested.
       * @memberof pb.HelloInput
       * @classdesc Represents a Nested.
       * @implements INested
       * @constructor
       * @param {pb.HelloInput.INested=} [properties] Properties to set
       */
      function Nested(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Nested Int32_2.
       * @member {number} Int32_2
       * @memberof pb.HelloInput.Nested
       * @instance
       */
      Nested.prototype.Int32_2 = 0;

      /**
       * Nested String_2.
       * @member {string} String_2
       * @memberof pb.HelloInput.Nested
       * @instance
       */
      Nested.prototype.String_2 = '';

      /**
       * Creates a new Nested instance using the specified properties.
       * @function create
       * @memberof pb.HelloInput.Nested
       * @static
       * @param {pb.HelloInput.INested=} [properties] Properties to set
       * @returns {pb.HelloInput.Nested} Nested instance
       */
      Nested.create = function create(properties) {
        return new Nested(properties);
      };

      /**
       * Encodes the specified Nested message. Does not implicitly {@link pb.HelloInput.Nested.verify|verify} messages.
       * @function encode
       * @memberof pb.HelloInput.Nested
       * @static
       * @param {pb.HelloInput.INested} message Nested message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Nested.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.Int32_2 != null && message.hasOwnProperty('Int32_2'))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.Int32_2);
        if (message.String_2 != null && message.hasOwnProperty('String_2'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.String_2);
        return writer;
      };

      /**
       * Encodes the specified Nested message, length delimited. Does not implicitly {@link pb.HelloInput.Nested.verify|verify} messages.
       * @function encodeDelimited
       * @memberof pb.HelloInput.Nested
       * @static
       * @param {pb.HelloInput.INested} message Nested message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Nested.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a Nested message from the specified reader or buffer.
       * @function decode
       * @memberof pb.HelloInput.Nested
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {pb.HelloInput.Nested} Nested
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Nested.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.pb.HelloInput.Nested();
        while (reader.pos < end) {
          let tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.Int32_2 = reader.int32();
              break;
            case 2:
              message.String_2 = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a Nested message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof pb.HelloInput.Nested
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {pb.HelloInput.Nested} Nested
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Nested.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a Nested message.
       * @function verify
       * @memberof pb.HelloInput.Nested
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Nested.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.Int32_2 != null && message.hasOwnProperty('Int32_2'))
          if (!$util.isInteger(message.Int32_2))
            return 'Int32_2: integer expected';
        if (message.String_2 != null && message.hasOwnProperty('String_2'))
          if (!$util.isString(message.String_2))
            return 'String_2: string expected';
        return null;
      };

      /**
       * Creates a Nested message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof pb.HelloInput.Nested
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {pb.HelloInput.Nested} Nested
       */
      Nested.fromObject = function fromObject(object) {
        if (object instanceof $root.pb.HelloInput.Nested) return object;
        let message = new $root.pb.HelloInput.Nested();
        if (object.Int32_2 != null) message.Int32_2 = object.Int32_2 | 0;
        if (object.String_2 != null) message.String_2 = String(object.String_2);
        return message;
      };

      /**
       * Creates a plain object from a Nested message. Also converts values to other types if specified.
       * @function toObject
       * @memberof pb.HelloInput.Nested
       * @static
       * @param {pb.HelloInput.Nested} message Nested
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Nested.toObject = function toObject(message, options) {
        if (!options) options = {};
        let object = {};
        if (options.defaults) {
          object.Int32_2 = 0;
          object.String_2 = '';
        }
        if (message.Int32_2 != null && message.hasOwnProperty('Int32_2'))
          object.Int32_2 = message.Int32_2;
        if (message.String_2 != null && message.hasOwnProperty('String_2'))
          object.String_2 = message.String_2;
        return object;
      };

      /**
       * Converts this Nested to JSON.
       * @function toJSON
       * @memberof pb.HelloInput.Nested
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Nested.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Nested;
    })();

    return HelloInput;
  })();

  return pb;
})());

export { $root as default };
