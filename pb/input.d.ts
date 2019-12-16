import * as $protobuf from 'protobufjs';
/** Namespace pb. */
export namespace pb {
  /** Properties of a HelloInput. */
  interface IHelloInput {
    /** HelloInput Double_1 */
    Double_1?: number | null;

    /** HelloInput Float_1 */
    Float_1?: number | null;

    /** HelloInput Int32_1 */
    Int32_1?: number | null;

    /** HelloInput Int64_1 */
    Int64_1?: number | Long | null;

    /** HelloInput Uint32_1 */
    Uint32_1?: number | null;

    /** HelloInput Uint64_1 */
    Uint64_1?: number | Long | null;

    /** HelloInput Sint32_1 */
    Sint32_1?: number | null;

    /** HelloInput Sint64_1 */
    Sint64_1?: number | Long | null;

    /** HelloInput Fixed32_1 */
    Fixed32_1?: number | null;

    /** HelloInput Fixed64_1 */
    Fixed64_1?: number | Long | null;

    /** HelloInput Sfixed32_1 */
    Sfixed32_1?: number | null;

    /** HelloInput Sfixed64_1 */
    Sfixed64_1?: number | Long | null;

    /** HelloInput Bool_1 */
    Bool_1?: boolean | null;

    /** HelloInput String_1 */
    String_1?: string | null;

    /** HelloInput Bytes_1 */
    Bytes_1?: Uint8Array | null;

    /** HelloInput Enum_1 */
    Enum_1?: pb.HelloInput.Enum | null;

    /** HelloInput RepeatedInt32_1 */
    RepeatedInt32_1?: number[] | null;

    /** HelloInput RepeatedString_1 */
    RepeatedString_1?: string[] | null;

    /** HelloInput Nested_1 */
    Nested_1?: pb.HelloInput.INested | null;

    /** HelloInput Int32_3 */
    Int32_3?: number | null;

    /** HelloInput String_3 */
    String_3?: string | null;

    /** HelloInput Nested_2 */
    Nested_2?: pb.HelloInput.INested | null;

    /** HelloInput MapUint32String_1 */
    MapUint32String_1?: { [k: string]: string } | null;

    /** HelloInput MapStringNested_1 */
    MapStringNested_1?: { [k: string]: pb.HelloInput.INested } | null;
  }

  /** Represents a HelloInput. */
  class HelloInput implements IHelloInput {
    /**
     * Constructs a new HelloInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: pb.IHelloInput);

    /** HelloInput Double_1. */
    public Double_1: number;

    /** HelloInput Float_1. */
    public Float_1: number;

    /** HelloInput Int32_1. */
    public Int32_1: number;

    /** HelloInput Int64_1. */
    public Int64_1: number | Long;

    /** HelloInput Uint32_1. */
    public Uint32_1: number;

    /** HelloInput Uint64_1. */
    public Uint64_1: number | Long;

    /** HelloInput Sint32_1. */
    public Sint32_1: number;

    /** HelloInput Sint64_1. */
    public Sint64_1: number | Long;

    /** HelloInput Fixed32_1. */
    public Fixed32_1: number;

    /** HelloInput Fixed64_1. */
    public Fixed64_1: number | Long;

    /** HelloInput Sfixed32_1. */
    public Sfixed32_1: number;

    /** HelloInput Sfixed64_1. */
    public Sfixed64_1: number | Long;

    /** HelloInput Bool_1. */
    public Bool_1: boolean;

    /** HelloInput String_1. */
    public String_1: string;

    /** HelloInput Bytes_1. */
    public Bytes_1: Uint8Array;

    /** HelloInput Enum_1. */
    public Enum_1: pb.HelloInput.Enum;

    /** HelloInput RepeatedInt32_1. */
    public RepeatedInt32_1: number[];

    /** HelloInput RepeatedString_1. */
    public RepeatedString_1: string[];

    /** HelloInput Nested_1. */
    public Nested_1?: pb.HelloInput.INested | null;

    /** HelloInput Int32_3. */
    public Int32_3: number;

    /** HelloInput String_3. */
    public String_3: string;

    /** HelloInput Nested_2. */
    public Nested_2?: pb.HelloInput.INested | null;

    /** HelloInput MapUint32String_1. */
    public MapUint32String_1: { [k: string]: string };

    /** HelloInput MapStringNested_1. */
    public MapStringNested_1: { [k: string]: pb.HelloInput.INested };

    /** HelloInput Oneof_1. */
    public Oneof_1?: 'Int32_3' | 'String_3' | 'Nested_2';

    /**
     * Creates a new HelloInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HelloInput instance
     */
    public static create(properties?: pb.IHelloInput): pb.HelloInput;

    /**
     * Encodes the specified HelloInput message. Does not implicitly {@link pb.HelloInput.verify|verify} messages.
     * @param message HelloInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: pb.IHelloInput,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Encodes the specified HelloInput message, length delimited. Does not implicitly {@link pb.HelloInput.verify|verify} messages.
     * @param message HelloInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: pb.IHelloInput,
      writer?: $protobuf.Writer,
    ): $protobuf.Writer;

    /**
     * Decodes a HelloInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HelloInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number,
    ): pb.HelloInput;

    /**
     * Decodes a HelloInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HelloInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array,
    ): pb.HelloInput;

    /**
     * Verifies a HelloInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a HelloInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HelloInput
     */
    public static fromObject(object: { [k: string]: any }): pb.HelloInput;

    /**
     * Creates a plain object from a HelloInput message. Also converts values to other types if specified.
     * @param message HelloInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: pb.HelloInput,
      options?: $protobuf.IConversionOptions,
    ): { [k: string]: any };

    /**
     * Converts this HelloInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  namespace HelloInput {
    /** Enum enum. */
    enum Enum {
      E_0 = 0,
      E_1 = 1,
    }

    /** Properties of a Nested. */
    interface INested {
      /** Nested Int32_2 */
      Int32_2?: number | null;

      /** Nested String_2 */
      String_2?: string | null;
    }

    /** Represents a Nested. */
    class Nested implements INested {
      /**
       * Constructs a new Nested.
       * @param [properties] Properties to set
       */
      constructor(properties?: pb.HelloInput.INested);

      /** Nested Int32_2. */
      public Int32_2: number;

      /** Nested String_2. */
      public String_2: string;

      /**
       * Creates a new Nested instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Nested instance
       */
      public static create(
        properties?: pb.HelloInput.INested,
      ): pb.HelloInput.Nested;

      /**
       * Encodes the specified Nested message. Does not implicitly {@link pb.HelloInput.Nested.verify|verify} messages.
       * @param message Nested message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: pb.HelloInput.INested,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Encodes the specified Nested message, length delimited. Does not implicitly {@link pb.HelloInput.Nested.verify|verify} messages.
       * @param message Nested message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: pb.HelloInput.INested,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a Nested message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Nested
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): pb.HelloInput.Nested;

      /**
       * Decodes a Nested message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Nested
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): pb.HelloInput.Nested;

      /**
       * Verifies a Nested message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a Nested message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Nested
       */
      public static fromObject(object: {
        [k: string]: any;
      }): pb.HelloInput.Nested;

      /**
       * Creates a plain object from a Nested message. Also converts values to other types if specified.
       * @param message Nested
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: pb.HelloInput.Nested,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this Nested to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }
}
