/*!
 *
 * Copyright 2018 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2018-01-26 23:33:30
 * @version 1.0.0
 * @desc piclick.ts
 */
/// <reference types="node" />
import { Argv } from 'yargs';
export declare function argv(
  opts: Argv,
): (target: any, propertyKey: string) => void;
/**
 * execute a module in terminal
 * @param module
 */
export declare function piclick(module: NodeModule): void;
