/*!
 *
 * Copyright 2018 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2018-01-26 23:33:30
 * @version 1.0.0
 * @desc piclick.ts
 */

import Yargs, { Argv } from 'yargs';
import { ANY } from './consts';

const kArgvOptions = '__piclick_argv_options__';

export function argv(opts: Argv) {
  return (target: any, propertyKey: string) => {
    if (!target.hasOwnProperty(kArgvOptions)) {
      Object.defineProperty(target, kArgvOptions, {
        configurable: false,
        enumerable: false,
        value: Object.create(target[kArgvOptions] || null),
      });
    }
    target[kArgvOptions][propertyKey] = opts;
  };
}

function normalizeName(name: string) {
  return name
    .replace(/_/g, '-')
    .replace(/^[A-Z]/, ($0) => $0.toLowerCase())
    .replace(/[A-Z]/g, ($0) => '-' + $0.toLowerCase());
}

function error(reason: string, commands: Record<string, any>) {
  process.stderr.write(
    `ERROR: ${reason}\n\nAvailable commands:\n` +
      Object.keys(commands)
        .sort()
        .map((name) => {
          const actor: any = commands[name];
          if (typeof actor !== 'function') {
            return `- ${name}\n`;
          }
          let output = `- ${name}\n`;
          const subs = normalizeProto(actor, normalizeProto(actor.prototype));
          if (Object.keys(subs).length === 0) {
            return output;
          }
          return (
            output +
            Object.keys(subs)
              .sort()
              .map((sub) => `  - ${name}.${sub}\n`)
              .join('')
          );
        })
        .join('') +
      '\n',
  );
  process.exit(1);
}

function format(time: number) {
  if (time < 60e3) {
    return (time / 1e3).toFixed(3) + 's';
  }
  if (time < 36e5) {
    return (time / 60e3).toFixed(2) + 'm';
  }
  return (time / 36e5).toFixed(2) + 'h';
}

function normalizeProto(
  p: any,
  prev: Record<string, string> = {},
): Record<string, string> {
  if (p === Object.prototype || p === Function.prototype || !p) {
    return prev;
  }
  // deep first
  normalizeProto(Object.getPrototypeOf(p), prev);
  const isFunc = typeof p === 'function';
  return Object.getOwnPropertyNames(p)
    .filter((name) => {
      if (kArgvOptions === name) {
        return false;
      }
      return isFunc
        ? ['length', 'prototype', 'name'].indexOf(name) === -1
        : ['constructor'].indexOf(name) === -1;
    })
    .reduce((previousValue, currentValue) => {
      previousValue[normalizeName(currentValue)] = currentValue;
      return previousValue;
    }, prev);
}

/**
 * execute a module in terminal
 * @param module
 */
export function piclick(module: NodeModule) {
  if (module.parent) {
    return;
  }
  const now = +new Date();
  const commands = Object.keys(module.exports).reduce((prev, now) => {
    prev[normalizeName(now)] = module.exports[now];
    return prev;
  }, {} as Record<string, any>);
  const args = process.argv.slice(2);
  let cmd = 'main';
  const arg0 = args[0];
  if (arg0 && arg0.charAt(0) !== '-') {
    cmd = normalizeName(arg0);
    args.shift();
  }
  if (!commands.hasOwnProperty(cmd)) {
    error(`Could not find the command \`${cmd}\``, commands);
  }
  let actor = commands[cmd];
  if (typeof actor !== 'function') {
    console.log(JSON.stringify(actor), void 0, 2);
    return;
  }
  let opts: Argv = ANY;
  const staticCmds = normalizeProto(actor);
  const protoCmds = normalizeProto(actor.prototype);
  if (
    // we think it is class, need to check the child command
    Object.keys(staticCmds).length > 0 ||
    Object.keys(protoCmds).length > 0
  ) {
    let func = 'main';
    const arg1 = args[0];
    if (arg1 && arg1.charAt(0) !== '-') {
      func = normalizeName(arg1);
      args.shift();
    }
    if (staticCmds[func]) {
      opts = actor[kArgvOptions] && actor[kArgvOptions][staticCmds[func]];
      actor =
        typeof actor[staticCmds[func]] === 'function'
          ? actor[staticCmds[func]].bind(actor)
          : actor[staticCmds[func]];
    } else if (protoCmds[func]) {
      actor = new actor();
      opts = actor[kArgvOptions] && actor[kArgvOptions][protoCmds[func]];
      actor =
        typeof actor[protoCmds[func]] === 'function'
          ? actor[protoCmds[func]].bind(actor)
          : actor[protoCmds[func]];
    } else {
      error(`Could not find the command \`${cmd}.${func}\``, commands);
    }
    if (typeof actor !== 'function') {
      console.log(JSON.stringify(actor, void 0, 2));
      return;
    }
  }
  const yargs: typeof Yargs = require('yargs');
  const argv = opts === void 0 ? yargs.parse(args) : opts.parse(args);
  process.stderr.write(`Starting command \`${cmd}\`...\n`);
  process.on('exit', (code) => {
    if (code === 0) {
      process.stderr.write(
        `Finished successfully in ${format(+new Date() - now)}.\n`,
      );
    } else {
      process.stderr.write(
        `Process exited with code \`${code}\` in ${format(
          +new Date() - now,
        )}.\n`,
      );
    }
  });
  actor(argv);
}
