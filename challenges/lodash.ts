const lodash = [
  "add",
  "after",
  "at",
  "attempt",
  "before",
  "camelCase",
  "capitalize",
  "castArray",
  "ceil",
  "chunk",
  "clamp",
  "clone",
  "cloneDeep",
  "cloneDeepWith",
  "cloneWith",
  "compact",
  "cond",
  "conforms",
  "conformsTo",
  "countBy",
  "create",
  "debounce",
  "deburr",
  "defaultTo",
  "defaultToAny",
  "defaults",
  "defaultsDeep",
  "defer",
  "delay",
  "difference",
  "differenceBy",
  "differenceWith",
  "divide",
  "drop",
  "dropRight",
  "dropWhile",
  "each",
  "eachRight",
  "endsWith",
  "eq",
  "eqDeep",
  "escape",
  "escapeRegExp",
  "every",
  "everyValue",
  "filter",
  "filterObject",
  "findKey",
  "findLast",
  "findLastIndex",
  "findLastKey",
  "first",
  "flatMap",
  "flatMapDeep",
  "flatMapDepth",
  "flatten",
  "flattenDeep",
  "floor",
  "flow",
  "flowRight",
  "forEach",
  "forEachRight",
  "forOwn",
  "forOwnRight",
  "functions",
  "get",
  "groupBy",
  "gt",
  "gte",
  "has",
  "hasIn",
  "hasPath",
  "hasPathIn",
  "head",
  "inRange",
  "indexOf",
  "initial",
  "intersection",
  "intersectionBy",
  "intersectionWith",
  "invert",
  "invertBy",
  "invoke",
  "invokeMap",
  "isArguments",
  "isArrayBuffer",
  "isArrayLike",
  "isArrayLikeObject",
  "isBoolean",
  "isBuffer",
  "isDate",
  "isElement",
  "isEmpty",
  "isEqualWith",
  "isError",
  "isFunction",
  "isLength",
  "isMatch",
  "isMatchWith",
  "isNative",
  "isNil",
  "isNull",
  "isNumber",
  "isObject",
  "isObjectLike",
  "isPlainObject",
  "isRegExp",
  "isSet",
  "isString",
  "isSymbol",
  "isTypedArray",
  "isUndefined",
  "isWeakMap",
  "isWeakSet",
  "kebabCase",
  "keyBy",
  "keys",
  "keysIn",
  "last",
  "lastIndexOf",
  "lowerCase",
  "lowerFirst",
  "lt",
  "lte",
  "map",
  "mapKey",
  "mapObject",
  "mapValue",
  "matches",
  "matchesProperty",
  "maxBy",
  "mean",
  "meanBy",
  "memoize",
  "merge",
  "mergeWith",
  "method",
  "methodOf",
  "minBy",
  "multiply",
  "negate",
  "nth",
  "nthArg",
  "once",
  "orderBy",
  "over",
  "overArgs",
  "overEvery",
  "overSome",
  "pad",
  "padEnd",
  "padStart",
  "parseInt",
  "partition",
  "pick",
  "pickBy",
  "property",
  "propertyOf",
  "pull",
  "pullAll",
  "pullAllBy",
  "pullAllWith",
  "pullAt",
  "random",
  "range",
  "rangeRight",
  "reduce",
  "reduceRight",
  "reject",
  "remove",
  "repeat",
  "replace",
  "result",
  "round",
  "sample",
  "sampleSize",
  "set",
  "setWith",
  "shuffle",
  "size",
  "slice",
  "snakeCase",
  "some",
  "someValue",
  "sortedIndex",
  "sortedIndexBy",
  "sortedIndexOf",
  "sortedLastIndex",
  "sortedLastIndexBy",
  "sortedLastIndexOf",
  "sortedUniq",
  "sortedUniqBy",
  "split",
  "startCase",
  "startsWith",
  "subtract",
  "sum",
  "sumBy",
  "tail",
  "take",
  "takeRight",
  "takeRightWhile",
  "takeWhile",
  "throttle",
  "times",
  "toArray",
  "toFinite",
  "toInteger",
  "toLength",
  "toNumber",
  "toPath",
  "toPlainObject",
  "toSafeInteger",
  "toString",
  "transform",
  "trim",
  "trimEnd",
  "trimStart",
  "truncate",
  "unescape",
  "union",
  "unionBy",
  "unionWith",
  "uniq",
  "uniqBy",
  "uniqWith",
  "uniqueId",
  "unset",
  "unzip",
  "unzipWith",
  "update",
  "updateWith",
  "upperCase",
  "upperFirst",
  "values",
  "without",
  "words",
  "xor",
  "xorBy",
  "xorWith",
  "zip",
  "zipObject",
  "zipObjectDeep",
  "zipWith",
];

export default lodash.map((name) => ({
  name,
  project: "Lodash",
  projectUrl: "https://github.com/lodash/lodash",
  license: "MIT",
  licenseUrl: "https://raw.githubusercontent.com/lodash/lodash/master/LICENSE",
  source: `https://raw.githubusercontent.com/lodash/lodash/master/${name}.js`,
  language: "JavaScript",
}));
