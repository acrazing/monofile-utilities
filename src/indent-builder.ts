/*!
 *
 * Copyright 2018 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2018-01-26 23:34:33
 * @version 1.0.0
 * @desc indent-builder.ts
 */

export class IndentBuilder {
  content = '';
  private prefix = '';

  constructor (readonly element = '  ') {
  }

  indent () {
    this.prefix += this.element;
    return this;
  }

  push (...lines: string[]) {
    for (const line of lines) {
      this.content += this.prefix + line + '\n';
    }
    return this;
  }

  undent () {
    this.prefix = this.prefix.substr(0, this.prefix.length
      - this.element.length);
    return this;
  }
}
