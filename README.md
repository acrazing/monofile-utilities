# monofile-utilities

A misc package include some utility functions/classes.

## Contents

1. constants
    - `ANY`: `undefined` with any type
    - `NULL`: `null` for null keyword validate
2. map
    - `IMap<T>`: a key/value struct `{[key: string|number]: T}` alias
    - `createMap`: create a hash map avoid use hidden class
    - `MMap<M, T>`: a key/value struct `{[K in keyof M]: T}` alias
3. nonenumerable
    - `nonenumerable`: a decorator set a property as nonenumerable
4. sleep
    - `sleep`: a cancelable setTimeout promise
5. storage
    - `local/cookie/storage`: a storage bus normalize cookie and localStorage API
6. store
    - `BaseStore`: a base store class for mobx
    - `createStore`: create a store mangle property & actions, auto wrap actions
7. validate

# LICENSE

MIT