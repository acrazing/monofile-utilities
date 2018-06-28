/*!
 * Copyright 2018 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2018-06-28 22:52:35
 */

import { Arguments } from 'yargs';
import { argv, piclick } from './piclick';
import yargs = require('yargs');

export interface MainArguments extends Arguments {

}

export class Main {
  @argv(
    yargs
      .usage('display arguments')
      .number('m').demandOption('m'),
  )
  static main(args: MainArguments) {
    console.log(args);
  }

  hello() {
  }
}

export class Second {
  static hello() {
  }
}

piclick(module);