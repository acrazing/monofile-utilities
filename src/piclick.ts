/*!
 *
 * Copyright 2018 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2018-01-26 23:33:30
 * @version 1.0.0
 * @desc piclick.ts
 */

import yargs = require('yargs');
import { SMap } from './map';

function normalizeName(name: string) {
  return name.replace(/_/g, '-')
    .replace(/^[A-Z]/, ($0) => $0.toLowerCase())
    .replace(/[A-Z]/g, ($0) => '-' + $0.toLowerCase());
}

function error(reason: string, commands: SMap<any>) {
  process.stderr.write(
    `ERROR: ${reason}\n\nAvailable commands:\n`
    + Object.keys(commands).map((name) => {
      const actor: any = commands[name];
      if (typeof actor !== 'function' || Object.getOwnPropertyNames(actor.prototype).length < 2) {
        return `- ${name}\n`;
      }
      let output = '';
      if ('main' in actor.prototype) {
        output = `- ${name}\n`;
      }
      return output + Object.getOwnPropertyNames(actor.prototype)
        .filter((name) => name !== 'constructor' && name !== 'main')
        .map((sub) => `- ${name}.${sub}\n`)
        .join('');
    }).join('') + '\n',
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

export function piclick(module: NodeModule) {
  const now = +new Date();
  if (module.parent) {
    return;
  }
  const commands = Object.keys(module.exports).reduce((prev, now) => {
    prev[normalizeName(now)] = module.exports[now];
    return prev;
  }, {} as SMap<any>);
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
  let actor: any = commands[cmd];
  if (typeof actor !== 'function') {
    console.log(JSON.stringify(actor), void 0, 2);
    return;
  }
  if (Object.getOwnPropertyNames(actor.prototype).length > 1) {
    let func = 'main';
    actor = new actor();
    const arg1 = args[0];
    if (arg1 && arg1.charAt(0) !== '-') {
      func = arg1;
      args.shift();
    }
    if (!(func in actor)) {
      error(`Cound not find the command \`${cmd}.${func}\``, commands);
    }
    if (typeof actor[func] !== 'function') {
      console.log(JSON.stringify(actor[func], void 0, 2));
      return;
    }
    actor = actor[func].bind(actor);
  }
  process.stderr.write(`Starting command \`${cmd}\`...\n`);
  process.on('exit', (code) => {
    if (code === 0) {
      process.stderr.write(`Finished successfully in ${format(+new Date - now)}.\n`);
    }
    else {
      process.stderr.write(`Process exited with code \`${code}\` in ${format(+new Date - now)}.\n`);
    }
  });
  actor(yargs.parse(args));
}
