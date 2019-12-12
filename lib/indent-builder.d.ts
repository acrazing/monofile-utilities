/*!
 *
 * Copyright 2018 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2018-01-26 23:34:33
 * @version 1.0.0
 * @desc indent-builder.ts
 */
export declare class IndentBuilder {
  readonly element: string;
  content: string;
  private prefix;
  constructor(element?: string);
  indent(): this;
  push(...lines: string[]): this;
  undent(): this;
}
