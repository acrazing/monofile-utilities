/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-12-15 13:14:45
 * @version 1.0.0
 * @desc append-query.ts
 */
/**
 * parse query object deeply
 * @param query
 */
export declare function parse<T>(query: string): T;
/**
 * serialize a object to query string
 * @param query
 * @param scope
 * @return {string}
 */
export declare function stringify(query?: any, scope?: string): string;
/**
 * append query to a url
 * @param link
 * @param query
 * @return {string}
 */
export declare function appendQuery(link: string, query: any): string;
