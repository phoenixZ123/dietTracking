
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserSession
 * 
 */
export type UserSession = $Result.DefaultSelection<Prisma.$UserSessionPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model MealItem
 * 
 */
export type MealItem = $Result.DefaultSelection<Prisma.$MealItemPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model DailyLog
 * 
 */
export type DailyLog = $Result.DefaultSelection<Prisma.$DailyLogPayload>
/**
 * Model WorkoutLog
 * 
 */
export type WorkoutLog = $Result.DefaultSelection<Prisma.$WorkoutLogPayload>
/**
 * Model WaterLog
 * 
 */
export type WaterLog = $Result.DefaultSelection<Prisma.$WaterLogPayload>
/**
 * Model WeightLog
 * 
 */
export type WeightLog = $Result.DefaultSelection<Prisma.$WeightLogPayload>
/**
 * Model Food
 * 
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model CaloriesLog
 * 
 */
export type CaloriesLog = $Result.DefaultSelection<Prisma.$CaloriesLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const ActivityLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type ActivityLevel = (typeof ActivityLevel)[keyof typeof ActivityLevel]


export const Unit: {
  g: 'g',
  ml: 'ml'
};

export type Unit = (typeof Unit)[keyof typeof Unit]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type ActivityLevel = $Enums.ActivityLevel

export const ActivityLevel: typeof $Enums.ActivityLevel

export type Unit = $Enums.Unit

export const Unit: typeof $Enums.Unit

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userSession`: Exposes CRUD operations for the **UserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessions
    * const userSessions = await prisma.userSession.findMany()
    * ```
    */
  get userSession(): Prisma.UserSessionDelegate<ExtArgs>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs>;

  /**
   * `prisma.mealItem`: Exposes CRUD operations for the **MealItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealItems
    * const mealItems = await prisma.mealItem.findMany()
    * ```
    */
  get mealItem(): Prisma.MealItemDelegate<ExtArgs>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs>;

  /**
   * `prisma.dailyLog`: Exposes CRUD operations for the **DailyLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyLogs
    * const dailyLogs = await prisma.dailyLog.findMany()
    * ```
    */
  get dailyLog(): Prisma.DailyLogDelegate<ExtArgs>;

  /**
   * `prisma.workoutLog`: Exposes CRUD operations for the **WorkoutLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutLogs
    * const workoutLogs = await prisma.workoutLog.findMany()
    * ```
    */
  get workoutLog(): Prisma.WorkoutLogDelegate<ExtArgs>;

  /**
   * `prisma.waterLog`: Exposes CRUD operations for the **WaterLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaterLogs
    * const waterLogs = await prisma.waterLog.findMany()
    * ```
    */
  get waterLog(): Prisma.WaterLogDelegate<ExtArgs>;

  /**
   * `prisma.weightLog`: Exposes CRUD operations for the **WeightLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeightLogs
    * const weightLogs = await prisma.weightLog.findMany()
    * ```
    */
  get weightLog(): Prisma.WeightLogDelegate<ExtArgs>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs>;

  /**
   * `prisma.caloriesLog`: Exposes CRUD operations for the **CaloriesLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaloriesLogs
    * const caloriesLogs = await prisma.caloriesLog.findMany()
    * ```
    */
  get caloriesLog(): Prisma.CaloriesLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    User: 'User',
    UserSession: 'UserSession',
    Profile: 'Profile',
    Meal: 'Meal',
    MealItem: 'MealItem',
    Exercise: 'Exercise',
    DailyLog: 'DailyLog',
    WorkoutLog: 'WorkoutLog',
    WaterLog: 'WaterLog',
    WeightLog: 'WeightLog',
    Food: 'Food',
    CaloriesLog: 'CaloriesLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "role" | "user" | "userSession" | "profile" | "meal" | "mealItem" | "exercise" | "dailyLog" | "workoutLog" | "waterLog" | "weightLog" | "food" | "caloriesLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserSession: {
        payload: Prisma.$UserSessionPayload<ExtArgs>
        fields: Prisma.UserSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findFirst: {
            args: Prisma.UserSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findMany: {
            args: Prisma.UserSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          create: {
            args: Prisma.UserSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          createMany: {
            args: Prisma.UserSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          delete: {
            args: Prisma.UserSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          update: {
            args: Prisma.UserSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          aggregate: {
            args: Prisma.UserSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSession>
          }
          groupBy: {
            args: Prisma.UserSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSessionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      MealItem: {
        payload: Prisma.$MealItemPayload<ExtArgs>
        fields: Prisma.MealItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>
          }
          findFirst: {
            args: Prisma.MealItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>
          }
          findMany: {
            args: Prisma.MealItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>[]
          }
          create: {
            args: Prisma.MealItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>
          }
          createMany: {
            args: Prisma.MealItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>[]
          }
          delete: {
            args: Prisma.MealItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>
          }
          update: {
            args: Prisma.MealItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>
          }
          deleteMany: {
            args: Prisma.MealItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MealItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>
          }
          aggregate: {
            args: Prisma.MealItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealItem>
          }
          groupBy: {
            args: Prisma.MealItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealItemCountArgs<ExtArgs>
            result: $Utils.Optional<MealItemCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      DailyLog: {
        payload: Prisma.$DailyLogPayload<ExtArgs>
        fields: Prisma.DailyLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          findFirst: {
            args: Prisma.DailyLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          findMany: {
            args: Prisma.DailyLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          create: {
            args: Prisma.DailyLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          createMany: {
            args: Prisma.DailyLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>[]
          }
          delete: {
            args: Prisma.DailyLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          update: {
            args: Prisma.DailyLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          deleteMany: {
            args: Prisma.DailyLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyLogPayload>
          }
          aggregate: {
            args: Prisma.DailyLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyLog>
          }
          groupBy: {
            args: Prisma.DailyLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyLogCountArgs<ExtArgs>
            result: $Utils.Optional<DailyLogCountAggregateOutputType> | number
          }
        }
      }
      WorkoutLog: {
        payload: Prisma.$WorkoutLogPayload<ExtArgs>
        fields: Prisma.WorkoutLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          findFirst: {
            args: Prisma.WorkoutLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          findMany: {
            args: Prisma.WorkoutLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          create: {
            args: Prisma.WorkoutLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          createMany: {
            args: Prisma.WorkoutLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          delete: {
            args: Prisma.WorkoutLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          update: {
            args: Prisma.WorkoutLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkoutLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          aggregate: {
            args: Prisma.WorkoutLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutLog>
          }
          groupBy: {
            args: Prisma.WorkoutLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutLogCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutLogCountAggregateOutputType> | number
          }
        }
      }
      WaterLog: {
        payload: Prisma.$WaterLogPayload<ExtArgs>
        fields: Prisma.WaterLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaterLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaterLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          findFirst: {
            args: Prisma.WaterLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaterLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          findMany: {
            args: Prisma.WaterLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>[]
          }
          create: {
            args: Prisma.WaterLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          createMany: {
            args: Prisma.WaterLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaterLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>[]
          }
          delete: {
            args: Prisma.WaterLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          update: {
            args: Prisma.WaterLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          deleteMany: {
            args: Prisma.WaterLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaterLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WaterLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          aggregate: {
            args: Prisma.WaterLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaterLog>
          }
          groupBy: {
            args: Prisma.WaterLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaterLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaterLogCountArgs<ExtArgs>
            result: $Utils.Optional<WaterLogCountAggregateOutputType> | number
          }
        }
      }
      WeightLog: {
        payload: Prisma.$WeightLogPayload<ExtArgs>
        fields: Prisma.WeightLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeightLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeightLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>
          }
          findFirst: {
            args: Prisma.WeightLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeightLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>
          }
          findMany: {
            args: Prisma.WeightLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>[]
          }
          create: {
            args: Prisma.WeightLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>
          }
          createMany: {
            args: Prisma.WeightLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeightLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>[]
          }
          delete: {
            args: Prisma.WeightLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>
          }
          update: {
            args: Prisma.WeightLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>
          }
          deleteMany: {
            args: Prisma.WeightLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeightLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeightLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeightLogPayload>
          }
          aggregate: {
            args: Prisma.WeightLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeightLog>
          }
          groupBy: {
            args: Prisma.WeightLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeightLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeightLogCountArgs<ExtArgs>
            result: $Utils.Optional<WeightLogCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      CaloriesLog: {
        payload: Prisma.$CaloriesLogPayload<ExtArgs>
        fields: Prisma.CaloriesLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaloriesLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaloriesLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaloriesLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaloriesLogPayload>
          }
          findFirst: {
            args: Prisma.CaloriesLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaloriesLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaloriesLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaloriesLogPayload>
          }
          findMany: {
            args: Prisma.CaloriesLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaloriesLogPayload>[]
          }
          create: {
            args: Prisma.CaloriesLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaloriesLogPayload>
          }
          createMany: {
            args: Prisma.CaloriesLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaloriesLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaloriesLogPayload>[]
          }
          delete: {
            args: Prisma.CaloriesLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaloriesLogPayload>
          }
          update: {
            args: Prisma.CaloriesLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaloriesLogPayload>
          }
          deleteMany: {
            args: Prisma.CaloriesLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaloriesLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CaloriesLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaloriesLogPayload>
          }
          aggregate: {
            args: Prisma.CaloriesLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaloriesLog>
          }
          groupBy: {
            args: Prisma.CaloriesLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaloriesLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaloriesLogCountArgs<ExtArgs>
            result: $Utils.Optional<CaloriesLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    dailyLogs: number
    workoutLogs: number
    waterLogs: number
    weightLogs: number
    food: number
    items: number
    caloriesLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyLogs?: boolean | UserCountOutputTypeCountDailyLogsArgs
    workoutLogs?: boolean | UserCountOutputTypeCountWorkoutLogsArgs
    waterLogs?: boolean | UserCountOutputTypeCountWaterLogsArgs
    weightLogs?: boolean | UserCountOutputTypeCountWeightLogsArgs
    food?: boolean | UserCountOutputTypeCountFoodArgs
    items?: boolean | UserCountOutputTypeCountItemsArgs
    caloriesLogs?: boolean | UserCountOutputTypeCountCaloriesLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWaterLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeightLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeightLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCaloriesLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaloriesLogWhereInput
  }


  /**
   * Count Type MealCountOutputType
   */

  export type MealCountOutputType = {
    items: number
    caloriesLogs: number
  }

  export type MealCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | MealCountOutputTypeCountItemsArgs
    caloriesLogs?: boolean | MealCountOutputTypeCountCaloriesLogsArgs
  }

  // Custom InputTypes
  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     */
    select?: MealCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealItemWhereInput
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountCaloriesLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaloriesLogWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    workoutLogs: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutLogs?: boolean | ExerciseCountOutputTypeCountWorkoutLogsArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountWorkoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
  }


  /**
   * Count Type DailyLogCountOutputType
   */

  export type DailyLogCountOutputType = {
    meals: number
    workoutLogs: number
  }

  export type DailyLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | DailyLogCountOutputTypeCountMealsArgs
    workoutLogs?: boolean | DailyLogCountOutputTypeCountWorkoutLogsArgs
  }

  // Custom InputTypes
  /**
   * DailyLogCountOutputType without action
   */
  export type DailyLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLogCountOutputType
     */
    select?: DailyLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyLogCountOutputType without action
   */
  export type DailyLogCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }

  /**
   * DailyLogCountOutputType without action
   */
  export type DailyLogCountOutputTypeCountWorkoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
  }


  /**
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    mealItems: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealItems?: boolean | FoodCountOutputTypeCountMealItemsArgs
  }

  // Custom InputTypes
  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountMealItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    isActive: boolean | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    isActive: boolean | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    isActive: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    isActive?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    isActive?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    isActive?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    isActive: boolean
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    isActive?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    isActive?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      isActive: boolean
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly created_at: FieldRef<"Role", 'DateTime'>
    readonly isActive: FieldRef<"Role", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone_no: string | null
    password: string | null
    name: string | null
    roleId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone_no: string | null
    password: string | null
    name: string | null
    roleId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone_no: number
    password: number
    name: number
    roleId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone_no?: true
    password?: true
    name?: true
    roleId?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone_no?: true
    password?: true
    name?: true
    roleId?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone_no?: true
    password?: true
    name?: true
    roleId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    phone_no: string | null
    password: string
    name: string
    roleId: number
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone_no?: boolean
    password?: boolean
    name?: boolean
    roleId?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    dailyLogs?: boolean | User$dailyLogsArgs<ExtArgs>
    workoutLogs?: boolean | User$workoutLogsArgs<ExtArgs>
    waterLogs?: boolean | User$waterLogsArgs<ExtArgs>
    weightLogs?: boolean | User$weightLogsArgs<ExtArgs>
    userSession?: boolean | User$userSessionArgs<ExtArgs>
    food?: boolean | User$foodArgs<ExtArgs>
    items?: boolean | User$itemsArgs<ExtArgs>
    caloriesLogs?: boolean | User$caloriesLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone_no?: boolean
    password?: boolean
    name?: boolean
    roleId?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone_no?: boolean
    password?: boolean
    name?: boolean
    roleId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    dailyLogs?: boolean | User$dailyLogsArgs<ExtArgs>
    workoutLogs?: boolean | User$workoutLogsArgs<ExtArgs>
    waterLogs?: boolean | User$waterLogsArgs<ExtArgs>
    weightLogs?: boolean | User$weightLogsArgs<ExtArgs>
    userSession?: boolean | User$userSessionArgs<ExtArgs>
    food?: boolean | User$foodArgs<ExtArgs>
    items?: boolean | User$itemsArgs<ExtArgs>
    caloriesLogs?: boolean | User$caloriesLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      dailyLogs: Prisma.$DailyLogPayload<ExtArgs>[]
      workoutLogs: Prisma.$WorkoutLogPayload<ExtArgs>[]
      waterLogs: Prisma.$WaterLogPayload<ExtArgs>[]
      weightLogs: Prisma.$WeightLogPayload<ExtArgs>[]
      userSession: Prisma.$UserSessionPayload<ExtArgs> | null
      food: Prisma.$FoodPayload<ExtArgs>[]
      items: Prisma.$MealItemPayload<ExtArgs>[]
      caloriesLogs: Prisma.$CaloriesLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      phone_no: string | null
      password: string
      name: string
      roleId: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    dailyLogs<T extends User$dailyLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findMany"> | Null>
    workoutLogs<T extends User$workoutLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany"> | Null>
    waterLogs<T extends User$waterLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$waterLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findMany"> | Null>
    weightLogs<T extends User$weightLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$weightLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "findMany"> | Null>
    userSession<T extends User$userSessionArgs<ExtArgs> = {}>(args?: Subset<T, User$userSessionArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    food<T extends User$foodArgs<ExtArgs> = {}>(args?: Subset<T, User$foodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany"> | Null>
    items<T extends User$itemsArgs<ExtArgs> = {}>(args?: Subset<T, User$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findMany"> | Null>
    caloriesLogs<T extends User$caloriesLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$caloriesLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaloriesLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone_no: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.dailyLogs
   */
  export type User$dailyLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    where?: DailyLogWhereInput
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    cursor?: DailyLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * User.workoutLogs
   */
  export type User$workoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    cursor?: WorkoutLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * User.waterLogs
   */
  export type User$waterLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    where?: WaterLogWhereInput
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    cursor?: WaterLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaterLogScalarFieldEnum | WaterLogScalarFieldEnum[]
  }

  /**
   * User.weightLogs
   */
  export type User$weightLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    where?: WeightLogWhereInput
    orderBy?: WeightLogOrderByWithRelationInput | WeightLogOrderByWithRelationInput[]
    cursor?: WeightLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeightLogScalarFieldEnum | WeightLogScalarFieldEnum[]
  }

  /**
   * User.userSession
   */
  export type User$userSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    where?: UserSessionWhereInput
  }

  /**
   * User.food
   */
  export type User$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * User.items
   */
  export type User$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    where?: MealItemWhereInput
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    cursor?: MealItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealItemScalarFieldEnum | MealItemScalarFieldEnum[]
  }

  /**
   * User.caloriesLogs
   */
  export type User$caloriesLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogInclude<ExtArgs> | null
    where?: CaloriesLogWhereInput
    orderBy?: CaloriesLogOrderByWithRelationInput | CaloriesLogOrderByWithRelationInput[]
    cursor?: CaloriesLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaloriesLogScalarFieldEnum | CaloriesLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserSession
   */

  export type AggregateUserSession = {
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  export type UserSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshToken: string | null
    device_type: string | null
    userAgent: string | null
    ipAddress: string | null
    is_online: boolean | null
    firebase_key: string | null
    createdAt: Date | null
    updatedAt: Date | null
    last_seen: Date | null
  }

  export type UserSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    refreshToken: string | null
    device_type: string | null
    userAgent: string | null
    ipAddress: string | null
    is_online: boolean | null
    firebase_key: string | null
    createdAt: Date | null
    updatedAt: Date | null
    last_seen: Date | null
  }

  export type UserSessionCountAggregateOutputType = {
    id: number
    userId: number
    refreshToken: number
    device_type: number
    userAgent: number
    ipAddress: number
    is_online: number
    firebase_key: number
    createdAt: number
    updatedAt: number
    last_seen: number
    _all: number
  }


  export type UserSessionMinAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    device_type?: true
    userAgent?: true
    ipAddress?: true
    is_online?: true
    firebase_key?: true
    createdAt?: true
    updatedAt?: true
    last_seen?: true
  }

  export type UserSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    device_type?: true
    userAgent?: true
    ipAddress?: true
    is_online?: true
    firebase_key?: true
    createdAt?: true
    updatedAt?: true
    last_seen?: true
  }

  export type UserSessionCountAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    device_type?: true
    userAgent?: true
    ipAddress?: true
    is_online?: true
    firebase_key?: true
    createdAt?: true
    updatedAt?: true
    last_seen?: true
    _all?: true
  }

  export type UserSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSession to aggregate.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessions
    **/
    _count?: true | UserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionMaxAggregateInputType
  }

  export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSession[P]>
      : GetScalarType<T[P], AggregateUserSession[P]>
  }




  export type UserSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithAggregationInput | UserSessionOrderByWithAggregationInput[]
    by: UserSessionScalarFieldEnum[] | UserSessionScalarFieldEnum
    having?: UserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionCountAggregateInputType | true
    _min?: UserSessionMinAggregateInputType
    _max?: UserSessionMaxAggregateInputType
  }

  export type UserSessionGroupByOutputType = {
    id: string
    userId: string
    refreshToken: string
    device_type: string
    userAgent: string
    ipAddress: string | null
    is_online: boolean
    firebase_key: string | null
    createdAt: Date
    updatedAt: Date
    last_seen: Date | null
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    device_type?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    is_online?: boolean
    firebase_key?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    last_seen?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    device_type?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    is_online?: boolean
    firebase_key?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    last_seen?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    device_type?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    is_online?: boolean
    firebase_key?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    last_seen?: boolean
  }

  export type UserSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      refreshToken: string
      device_type: string
      userAgent: string
      ipAddress: string | null
      is_online: boolean
      firebase_key: string | null
      createdAt: Date
      updatedAt: Date
      last_seen: Date | null
    }, ExtArgs["result"]["userSession"]>
    composites: {}
  }

  type UserSessionGetPayload<S extends boolean | null | undefined | UserSessionDefaultArgs> = $Result.GetResult<Prisma.$UserSessionPayload, S>

  type UserSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserSessionCountAggregateInputType | true
    }

  export interface UserSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSession'], meta: { name: 'UserSession' } }
    /**
     * Find zero or one UserSession that matches the filter.
     * @param {UserSessionFindUniqueArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionFindUniqueArgs>(args: SelectSubset<T, UserSessionFindUniqueArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserSessionFindUniqueOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionFindFirstArgs>(args?: SelectSubset<T, UserSessionFindFirstArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSession.findMany()
     * 
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionWithIdOnly = await prisma.userSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSessionFindManyArgs>(args?: SelectSubset<T, UserSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserSession.
     * @param {UserSessionCreateArgs} args - Arguments to create a UserSession.
     * @example
     * // Create one UserSession
     * const UserSession = await prisma.userSession.create({
     *   data: {
     *     // ... data to create a UserSession
     *   }
     * })
     * 
     */
    create<T extends UserSessionCreateArgs>(args: SelectSubset<T, UserSessionCreateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserSessions.
     * @param {UserSessionCreateManyArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionCreateManyArgs>(args?: SelectSubset<T, UserSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSessions and returns the data saved in the database.
     * @param {UserSessionCreateManyAndReturnArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserSession.
     * @param {UserSessionDeleteArgs} args - Arguments to delete one UserSession.
     * @example
     * // Delete one UserSession
     * const UserSession = await prisma.userSession.delete({
     *   where: {
     *     // ... filter to delete one UserSession
     *   }
     * })
     * 
     */
    delete<T extends UserSessionDeleteArgs>(args: SelectSubset<T, UserSessionDeleteArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserSession.
     * @param {UserSessionUpdateArgs} args - Arguments to update one UserSession.
     * @example
     * // Update one UserSession
     * const userSession = await prisma.userSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionUpdateArgs>(args: SelectSubset<T, UserSessionUpdateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionDeleteManyArgs>(args?: SelectSubset<T, UserSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionUpdateManyArgs>(args: SelectSubset<T, UserSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSession.
     * @param {UserSessionUpsertArgs} args - Arguments to update or create a UserSession.
     * @example
     * // Update or create a UserSession
     * const userSession = await prisma.userSession.upsert({
     *   create: {
     *     // ... data to create a UserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSession we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionUpsertArgs>(args: SelectSubset<T, UserSessionUpsertArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSession.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
    **/
    count<T extends UserSessionCountArgs>(
      args?: Subset<T, UserSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSessionAggregateArgs>(args: Subset<T, UserSessionAggregateArgs>): Prisma.PrismaPromise<GetUserSessionAggregateType<T>>

    /**
     * Group by UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSession model
   */
  readonly fields: UserSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSession model
   */ 
  interface UserSessionFieldRefs {
    readonly id: FieldRef<"UserSession", 'String'>
    readonly userId: FieldRef<"UserSession", 'String'>
    readonly refreshToken: FieldRef<"UserSession", 'String'>
    readonly device_type: FieldRef<"UserSession", 'String'>
    readonly userAgent: FieldRef<"UserSession", 'String'>
    readonly ipAddress: FieldRef<"UserSession", 'String'>
    readonly is_online: FieldRef<"UserSession", 'Boolean'>
    readonly firebase_key: FieldRef<"UserSession", 'String'>
    readonly createdAt: FieldRef<"UserSession", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSession", 'DateTime'>
    readonly last_seen: FieldRef<"UserSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSession findUnique
   */
  export type UserSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findUniqueOrThrow
   */
  export type UserSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findFirst
   */
  export type UserSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findFirstOrThrow
   */
  export type UserSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findMany
   */
  export type UserSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession create
   */
  export type UserSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSession.
     */
    data: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
  }

  /**
   * UserSession createMany
   */
  export type UserSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSession createManyAndReturn
   */
  export type UserSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSession update
   */
  export type UserSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSession.
     */
    data: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
    /**
     * Choose, which UserSession to update.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession updateMany
   */
  export type UserSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
  }

  /**
   * UserSession upsert
   */
  export type UserSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSession to update in case it exists.
     */
    where: UserSessionWhereUniqueInput
    /**
     * In case the UserSession found by the `where` argument doesn't exist, create a new UserSession with this data.
     */
    create: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
    /**
     * In case the UserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
  }

  /**
   * UserSession delete
   */
  export type UserSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter which UserSession to delete.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession deleteMany
   */
  export type UserSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessions to delete
     */
    where?: UserSessionWhereInput
  }

  /**
   * UserSession without action
   */
  export type UserSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    heightCm: number | null
    weightLb: number | null
    goalWeight: number | null
  }

  export type ProfileSumAggregateOutputType = {
    heightCm: number | null
    weightLb: number | null
    goalWeight: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    heightCm: number | null
    weightLb: number | null
    goalWeight: number | null
    activityLvl: $Enums.ActivityLevel | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gender: $Enums.Gender | null
    birthDate: Date | null
    heightCm: number | null
    weightLb: number | null
    goalWeight: number | null
    activityLvl: $Enums.ActivityLevel | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    gender: number
    birthDate: number
    heightCm: number
    weightLb: number
    goalWeight: number
    activityLvl: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    heightCm?: true
    weightLb?: true
    goalWeight?: true
  }

  export type ProfileSumAggregateInputType = {
    heightCm?: true
    weightLb?: true
    goalWeight?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    birthDate?: true
    heightCm?: true
    weightLb?: true
    goalWeight?: true
    activityLvl?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    birthDate?: true
    heightCm?: true
    weightLb?: true
    goalWeight?: true
    activityLvl?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    birthDate?: true
    heightCm?: true
    weightLb?: true
    goalWeight?: true
    activityLvl?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: string
    gender: $Enums.Gender | null
    birthDate: Date | null
    heightCm: number | null
    weightLb: number | null
    goalWeight: number | null
    activityLvl: $Enums.ActivityLevel
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    birthDate?: boolean
    heightCm?: boolean
    weightLb?: boolean
    goalWeight?: boolean
    activityLvl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    birthDate?: boolean
    heightCm?: boolean
    weightLb?: boolean
    goalWeight?: boolean
    activityLvl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    gender?: boolean
    birthDate?: boolean
    heightCm?: boolean
    weightLb?: boolean
    goalWeight?: boolean
    activityLvl?: boolean
  }

  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gender: $Enums.Gender | null
      birthDate: Date | null
      heightCm: number | null
      weightLb: number | null
      goalWeight: number | null
      activityLvl: $Enums.ActivityLevel
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly gender: FieldRef<"Profile", 'Gender'>
    readonly birthDate: FieldRef<"Profile", 'DateTime'>
    readonly heightCm: FieldRef<"Profile", 'Float'>
    readonly weightLb: FieldRef<"Profile", 'Float'>
    readonly goalWeight: FieldRef<"Profile", 'Float'>
    readonly activityLvl: FieldRef<"Profile", 'ActivityLevel'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealMinAggregateOutputType = {
    id: string | null
    name: string | null
    logId: string | null
  }

  export type MealMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logId: string | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    name: number
    logId: number
    _all: number
  }


  export type MealMinAggregateInputType = {
    id?: true
    name?: true
    logId?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    name?: true
    logId?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    name?: true
    logId?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: string
    name: string
    logId: string
    _count: MealCountAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logId?: boolean
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
    items?: boolean | Meal$itemsArgs<ExtArgs>
    caloriesLogs?: boolean | Meal$caloriesLogsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logId?: boolean
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    name?: boolean
    logId?: boolean
  }

  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
    items?: boolean | Meal$itemsArgs<ExtArgs>
    caloriesLogs?: boolean | Meal$caloriesLogsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      dailyLog: Prisma.$DailyLogPayload<ExtArgs>
      items: Prisma.$MealItemPayload<ExtArgs>[]
      caloriesLogs: Prisma.$CaloriesLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logId: string
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyLog<T extends DailyLogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyLogDefaultArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends Meal$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findMany"> | Null>
    caloriesLogs<T extends Meal$caloriesLogsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$caloriesLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaloriesLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meal model
   */ 
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'String'>
    readonly name: FieldRef<"Meal", 'String'>
    readonly logId: FieldRef<"Meal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
  }

  /**
   * Meal.items
   */
  export type Meal$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    where?: MealItemWhereInput
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    cursor?: MealItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealItemScalarFieldEnum | MealItemScalarFieldEnum[]
  }

  /**
   * Meal.caloriesLogs
   */
  export type Meal$caloriesLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogInclude<ExtArgs> | null
    where?: CaloriesLogWhereInput
    orderBy?: CaloriesLogOrderByWithRelationInput | CaloriesLogOrderByWithRelationInput[]
    cursor?: CaloriesLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaloriesLogScalarFieldEnum | CaloriesLogScalarFieldEnum[]
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model MealItem
   */

  export type AggregateMealItem = {
    _count: MealItemCountAggregateOutputType | null
    _avg: MealItemAvgAggregateOutputType | null
    _sum: MealItemSumAggregateOutputType | null
    _min: MealItemMinAggregateOutputType | null
    _max: MealItemMaxAggregateOutputType | null
  }

  export type MealItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type MealItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type MealItemMinAggregateOutputType = {
    id: string | null
    mealId: string | null
    foodId: string | null
    quantity: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealItemMaxAggregateOutputType = {
    id: string | null
    mealId: string | null
    foodId: string | null
    quantity: number | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealItemCountAggregateOutputType = {
    id: number
    mealId: number
    foodId: number
    quantity: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MealItemAvgAggregateInputType = {
    quantity?: true
  }

  export type MealItemSumAggregateInputType = {
    quantity?: true
  }

  export type MealItemMinAggregateInputType = {
    id?: true
    mealId?: true
    foodId?: true
    quantity?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealItemMaxAggregateInputType = {
    id?: true
    mealId?: true
    foodId?: true
    quantity?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealItemCountAggregateInputType = {
    id?: true
    mealId?: true
    foodId?: true
    quantity?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MealItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealItem to aggregate.
     */
    where?: MealItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealItems to fetch.
     */
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealItems
    **/
    _count?: true | MealItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealItemMaxAggregateInputType
  }

  export type GetMealItemAggregateType<T extends MealItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMealItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealItem[P]>
      : GetScalarType<T[P], AggregateMealItem[P]>
  }




  export type MealItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealItemWhereInput
    orderBy?: MealItemOrderByWithAggregationInput | MealItemOrderByWithAggregationInput[]
    by: MealItemScalarFieldEnum[] | MealItemScalarFieldEnum
    having?: MealItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealItemCountAggregateInputType | true
    _avg?: MealItemAvgAggregateInputType
    _sum?: MealItemSumAggregateInputType
    _min?: MealItemMinAggregateInputType
    _max?: MealItemMaxAggregateInputType
  }

  export type MealItemGroupByOutputType = {
    id: string
    mealId: string
    foodId: string
    quantity: number
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: MealItemCountAggregateOutputType | null
    _avg: MealItemAvgAggregateOutputType | null
    _sum: MealItemSumAggregateOutputType | null
    _min: MealItemMinAggregateOutputType | null
    _max: MealItemMaxAggregateOutputType | null
  }

  type GetMealItemGroupByPayload<T extends MealItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealItemGroupByOutputType[P]>
            : GetScalarType<T[P], MealItemGroupByOutputType[P]>
        }
      >
    >


  export type MealItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    foodId?: boolean
    quantity?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealItem"]>

  export type MealItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    foodId?: boolean
    quantity?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealItem"]>

  export type MealItemSelectScalar = {
    id?: boolean
    mealId?: boolean
    foodId?: boolean
    quantity?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MealItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    food?: boolean | FoodDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MealItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealItem"
    objects: {
      meal: Prisma.$MealPayload<ExtArgs>
      food: Prisma.$FoodPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mealId: string
      foodId: string
      quantity: number
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mealItem"]>
    composites: {}
  }

  type MealItemGetPayload<S extends boolean | null | undefined | MealItemDefaultArgs> = $Result.GetResult<Prisma.$MealItemPayload, S>

  type MealItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MealItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MealItemCountAggregateInputType | true
    }

  export interface MealItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealItem'], meta: { name: 'MealItem' } }
    /**
     * Find zero or one MealItem that matches the filter.
     * @param {MealItemFindUniqueArgs} args - Arguments to find a MealItem
     * @example
     * // Get one MealItem
     * const mealItem = await prisma.mealItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealItemFindUniqueArgs>(args: SelectSubset<T, MealItemFindUniqueArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MealItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MealItemFindUniqueOrThrowArgs} args - Arguments to find a MealItem
     * @example
     * // Get one MealItem
     * const mealItem = await prisma.mealItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MealItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MealItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemFindFirstArgs} args - Arguments to find a MealItem
     * @example
     * // Get one MealItem
     * const mealItem = await prisma.mealItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealItemFindFirstArgs>(args?: SelectSubset<T, MealItemFindFirstArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MealItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemFindFirstOrThrowArgs} args - Arguments to find a MealItem
     * @example
     * // Get one MealItem
     * const mealItem = await prisma.mealItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MealItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MealItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealItems
     * const mealItems = await prisma.mealItem.findMany()
     * 
     * // Get first 10 MealItems
     * const mealItems = await prisma.mealItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealItemWithIdOnly = await prisma.mealItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealItemFindManyArgs>(args?: SelectSubset<T, MealItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MealItem.
     * @param {MealItemCreateArgs} args - Arguments to create a MealItem.
     * @example
     * // Create one MealItem
     * const MealItem = await prisma.mealItem.create({
     *   data: {
     *     // ... data to create a MealItem
     *   }
     * })
     * 
     */
    create<T extends MealItemCreateArgs>(args: SelectSubset<T, MealItemCreateArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MealItems.
     * @param {MealItemCreateManyArgs} args - Arguments to create many MealItems.
     * @example
     * // Create many MealItems
     * const mealItem = await prisma.mealItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealItemCreateManyArgs>(args?: SelectSubset<T, MealItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealItems and returns the data saved in the database.
     * @param {MealItemCreateManyAndReturnArgs} args - Arguments to create many MealItems.
     * @example
     * // Create many MealItems
     * const mealItem = await prisma.mealItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealItems and only return the `id`
     * const mealItemWithIdOnly = await prisma.mealItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MealItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MealItem.
     * @param {MealItemDeleteArgs} args - Arguments to delete one MealItem.
     * @example
     * // Delete one MealItem
     * const MealItem = await prisma.mealItem.delete({
     *   where: {
     *     // ... filter to delete one MealItem
     *   }
     * })
     * 
     */
    delete<T extends MealItemDeleteArgs>(args: SelectSubset<T, MealItemDeleteArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MealItem.
     * @param {MealItemUpdateArgs} args - Arguments to update one MealItem.
     * @example
     * // Update one MealItem
     * const mealItem = await prisma.mealItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealItemUpdateArgs>(args: SelectSubset<T, MealItemUpdateArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MealItems.
     * @param {MealItemDeleteManyArgs} args - Arguments to filter MealItems to delete.
     * @example
     * // Delete a few MealItems
     * const { count } = await prisma.mealItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealItemDeleteManyArgs>(args?: SelectSubset<T, MealItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealItems
     * const mealItem = await prisma.mealItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealItemUpdateManyArgs>(args: SelectSubset<T, MealItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MealItem.
     * @param {MealItemUpsertArgs} args - Arguments to update or create a MealItem.
     * @example
     * // Update or create a MealItem
     * const mealItem = await prisma.mealItem.upsert({
     *   create: {
     *     // ... data to create a MealItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealItem we want to update
     *   }
     * })
     */
    upsert<T extends MealItemUpsertArgs>(args: SelectSubset<T, MealItemUpsertArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MealItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemCountArgs} args - Arguments to filter MealItems to count.
     * @example
     * // Count the number of MealItems
     * const count = await prisma.mealItem.count({
     *   where: {
     *     // ... the filter for the MealItems we want to count
     *   }
     * })
    **/
    count<T extends MealItemCountArgs>(
      args?: Subset<T, MealItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealItemAggregateArgs>(args: Subset<T, MealItemAggregateArgs>): Prisma.PrismaPromise<GetMealItemAggregateType<T>>

    /**
     * Group by MealItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealItemGroupByArgs['orderBy'] }
        : { orderBy?: MealItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealItem model
   */
  readonly fields: MealItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealItem model
   */ 
  interface MealItemFieldRefs {
    readonly id: FieldRef<"MealItem", 'String'>
    readonly mealId: FieldRef<"MealItem", 'String'>
    readonly foodId: FieldRef<"MealItem", 'String'>
    readonly quantity: FieldRef<"MealItem", 'Float'>
    readonly userId: FieldRef<"MealItem", 'String'>
    readonly createdAt: FieldRef<"MealItem", 'DateTime'>
    readonly updatedAt: FieldRef<"MealItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MealItem findUnique
   */
  export type MealItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * Filter, which MealItem to fetch.
     */
    where: MealItemWhereUniqueInput
  }

  /**
   * MealItem findUniqueOrThrow
   */
  export type MealItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * Filter, which MealItem to fetch.
     */
    where: MealItemWhereUniqueInput
  }

  /**
   * MealItem findFirst
   */
  export type MealItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * Filter, which MealItem to fetch.
     */
    where?: MealItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealItems to fetch.
     */
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealItems.
     */
    cursor?: MealItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealItems.
     */
    distinct?: MealItemScalarFieldEnum | MealItemScalarFieldEnum[]
  }

  /**
   * MealItem findFirstOrThrow
   */
  export type MealItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * Filter, which MealItem to fetch.
     */
    where?: MealItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealItems to fetch.
     */
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealItems.
     */
    cursor?: MealItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealItems.
     */
    distinct?: MealItemScalarFieldEnum | MealItemScalarFieldEnum[]
  }

  /**
   * MealItem findMany
   */
  export type MealItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * Filter, which MealItems to fetch.
     */
    where?: MealItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealItems to fetch.
     */
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealItems.
     */
    cursor?: MealItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealItems.
     */
    skip?: number
    distinct?: MealItemScalarFieldEnum | MealItemScalarFieldEnum[]
  }

  /**
   * MealItem create
   */
  export type MealItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MealItem.
     */
    data: XOR<MealItemCreateInput, MealItemUncheckedCreateInput>
  }

  /**
   * MealItem createMany
   */
  export type MealItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealItems.
     */
    data: MealItemCreateManyInput | MealItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealItem createManyAndReturn
   */
  export type MealItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MealItems.
     */
    data: MealItemCreateManyInput | MealItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealItem update
   */
  export type MealItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MealItem.
     */
    data: XOR<MealItemUpdateInput, MealItemUncheckedUpdateInput>
    /**
     * Choose, which MealItem to update.
     */
    where: MealItemWhereUniqueInput
  }

  /**
   * MealItem updateMany
   */
  export type MealItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealItems.
     */
    data: XOR<MealItemUpdateManyMutationInput, MealItemUncheckedUpdateManyInput>
    /**
     * Filter which MealItems to update
     */
    where?: MealItemWhereInput
  }

  /**
   * MealItem upsert
   */
  export type MealItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MealItem to update in case it exists.
     */
    where: MealItemWhereUniqueInput
    /**
     * In case the MealItem found by the `where` argument doesn't exist, create a new MealItem with this data.
     */
    create: XOR<MealItemCreateInput, MealItemUncheckedCreateInput>
    /**
     * In case the MealItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealItemUpdateInput, MealItemUncheckedUpdateInput>
  }

  /**
   * MealItem delete
   */
  export type MealItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * Filter which MealItem to delete.
     */
    where: MealItemWhereUniqueInput
  }

  /**
   * MealItem deleteMany
   */
  export type MealItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealItems to delete
     */
    where?: MealItemWhereInput
  }

  /**
   * MealItem without action
   */
  export type MealItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    id: number | null
    caloriesBurnedPerMin: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    id: number | null
    caloriesBurnedPerMin: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: number | null
    name: string | null
    caloriesBurnedPerMin: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    caloriesBurnedPerMin: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    caloriesBurnedPerMin: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    id?: true
    caloriesBurnedPerMin?: true
  }

  export type ExerciseSumAggregateInputType = {
    id?: true
    caloriesBurnedPerMin?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    caloriesBurnedPerMin?: true
    created_at?: true
    updated_at?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    caloriesBurnedPerMin?: true
    created_at?: true
    updated_at?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    caloriesBurnedPerMin?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: number
    name: string
    caloriesBurnedPerMin: number
    created_at: Date
    updated_at: Date
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    caloriesBurnedPerMin?: boolean
    created_at?: boolean
    updated_at?: boolean
    workoutLogs?: boolean | Exercise$workoutLogsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    caloriesBurnedPerMin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    caloriesBurnedPerMin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutLogs?: boolean | Exercise$workoutLogsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      workoutLogs: Prisma.$WorkoutLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      caloriesBurnedPerMin: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workoutLogs<T extends Exercise$workoutLogsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$workoutLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exercise model
   */ 
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'Int'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly caloriesBurnedPerMin: FieldRef<"Exercise", 'Float'>
    readonly created_at: FieldRef<"Exercise", 'DateTime'>
    readonly updated_at: FieldRef<"Exercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
  }

  /**
   * Exercise.workoutLogs
   */
  export type Exercise$workoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    cursor?: WorkoutLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model DailyLog
   */

  export type AggregateDailyLog = {
    _count: DailyLogCountAggregateOutputType | null
    _min: DailyLogMinAggregateOutputType | null
    _max: DailyLogMaxAggregateOutputType | null
  }

  export type DailyLogMinAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
  }

  export type DailyLogMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
  }

  export type DailyLogCountAggregateOutputType = {
    id: number
    date: number
    userId: number
    _all: number
  }


  export type DailyLogMinAggregateInputType = {
    id?: true
    date?: true
    userId?: true
  }

  export type DailyLogMaxAggregateInputType = {
    id?: true
    date?: true
    userId?: true
  }

  export type DailyLogCountAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    _all?: true
  }

  export type DailyLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyLog to aggregate.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyLogs
    **/
    _count?: true | DailyLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyLogMaxAggregateInputType
  }

  export type GetDailyLogAggregateType<T extends DailyLogAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyLog[P]>
      : GetScalarType<T[P], AggregateDailyLog[P]>
  }




  export type DailyLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyLogWhereInput
    orderBy?: DailyLogOrderByWithAggregationInput | DailyLogOrderByWithAggregationInput[]
    by: DailyLogScalarFieldEnum[] | DailyLogScalarFieldEnum
    having?: DailyLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyLogCountAggregateInputType | true
    _min?: DailyLogMinAggregateInputType
    _max?: DailyLogMaxAggregateInputType
  }

  export type DailyLogGroupByOutputType = {
    id: string
    date: Date
    userId: string
    _count: DailyLogCountAggregateOutputType | null
    _min: DailyLogMinAggregateOutputType | null
    _max: DailyLogMaxAggregateOutputType | null
  }

  type GetDailyLogGroupByPayload<T extends DailyLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyLogGroupByOutputType[P]>
            : GetScalarType<T[P], DailyLogGroupByOutputType[P]>
        }
      >
    >


  export type DailyLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    meals?: boolean | DailyLog$mealsArgs<ExtArgs>
    workoutLogs?: boolean | DailyLog$workoutLogsArgs<ExtArgs>
    _count?: boolean | DailyLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyLog"]>

  export type DailyLogSelectScalar = {
    id?: boolean
    date?: boolean
    userId?: boolean
  }

  export type DailyLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    meals?: boolean | DailyLog$mealsArgs<ExtArgs>
    workoutLogs?: boolean | DailyLog$workoutLogsArgs<ExtArgs>
    _count?: boolean | DailyLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DailyLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      meals: Prisma.$MealPayload<ExtArgs>[]
      workoutLogs: Prisma.$WorkoutLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      userId: string
    }, ExtArgs["result"]["dailyLog"]>
    composites: {}
  }

  type DailyLogGetPayload<S extends boolean | null | undefined | DailyLogDefaultArgs> = $Result.GetResult<Prisma.$DailyLogPayload, S>

  type DailyLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyLogCountAggregateInputType | true
    }

  export interface DailyLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyLog'], meta: { name: 'DailyLog' } }
    /**
     * Find zero or one DailyLog that matches the filter.
     * @param {DailyLogFindUniqueArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyLogFindUniqueArgs>(args: SelectSubset<T, DailyLogFindUniqueArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyLogFindUniqueOrThrowArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyLogFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindFirstArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyLogFindFirstArgs>(args?: SelectSubset<T, DailyLogFindFirstArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindFirstOrThrowArgs} args - Arguments to find a DailyLog
     * @example
     * // Get one DailyLog
     * const dailyLog = await prisma.dailyLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyLogFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyLogs
     * const dailyLogs = await prisma.dailyLog.findMany()
     * 
     * // Get first 10 DailyLogs
     * const dailyLogs = await prisma.dailyLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyLogFindManyArgs>(args?: SelectSubset<T, DailyLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyLog.
     * @param {DailyLogCreateArgs} args - Arguments to create a DailyLog.
     * @example
     * // Create one DailyLog
     * const DailyLog = await prisma.dailyLog.create({
     *   data: {
     *     // ... data to create a DailyLog
     *   }
     * })
     * 
     */
    create<T extends DailyLogCreateArgs>(args: SelectSubset<T, DailyLogCreateArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyLogs.
     * @param {DailyLogCreateManyArgs} args - Arguments to create many DailyLogs.
     * @example
     * // Create many DailyLogs
     * const dailyLog = await prisma.dailyLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyLogCreateManyArgs>(args?: SelectSubset<T, DailyLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyLogs and returns the data saved in the database.
     * @param {DailyLogCreateManyAndReturnArgs} args - Arguments to create many DailyLogs.
     * @example
     * // Create many DailyLogs
     * const dailyLog = await prisma.dailyLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyLogs and only return the `id`
     * const dailyLogWithIdOnly = await prisma.dailyLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyLogCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyLog.
     * @param {DailyLogDeleteArgs} args - Arguments to delete one DailyLog.
     * @example
     * // Delete one DailyLog
     * const DailyLog = await prisma.dailyLog.delete({
     *   where: {
     *     // ... filter to delete one DailyLog
     *   }
     * })
     * 
     */
    delete<T extends DailyLogDeleteArgs>(args: SelectSubset<T, DailyLogDeleteArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyLog.
     * @param {DailyLogUpdateArgs} args - Arguments to update one DailyLog.
     * @example
     * // Update one DailyLog
     * const dailyLog = await prisma.dailyLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyLogUpdateArgs>(args: SelectSubset<T, DailyLogUpdateArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyLogs.
     * @param {DailyLogDeleteManyArgs} args - Arguments to filter DailyLogs to delete.
     * @example
     * // Delete a few DailyLogs
     * const { count } = await prisma.dailyLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyLogDeleteManyArgs>(args?: SelectSubset<T, DailyLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyLogs
     * const dailyLog = await prisma.dailyLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyLogUpdateManyArgs>(args: SelectSubset<T, DailyLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyLog.
     * @param {DailyLogUpsertArgs} args - Arguments to update or create a DailyLog.
     * @example
     * // Update or create a DailyLog
     * const dailyLog = await prisma.dailyLog.upsert({
     *   create: {
     *     // ... data to create a DailyLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyLog we want to update
     *   }
     * })
     */
    upsert<T extends DailyLogUpsertArgs>(args: SelectSubset<T, DailyLogUpsertArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogCountArgs} args - Arguments to filter DailyLogs to count.
     * @example
     * // Count the number of DailyLogs
     * const count = await prisma.dailyLog.count({
     *   where: {
     *     // ... the filter for the DailyLogs we want to count
     *   }
     * })
    **/
    count<T extends DailyLogCountArgs>(
      args?: Subset<T, DailyLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyLogAggregateArgs>(args: Subset<T, DailyLogAggregateArgs>): Prisma.PrismaPromise<GetDailyLogAggregateType<T>>

    /**
     * Group by DailyLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyLogGroupByArgs['orderBy'] }
        : { orderBy?: DailyLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyLog model
   */
  readonly fields: DailyLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    meals<T extends DailyLog$mealsArgs<ExtArgs> = {}>(args?: Subset<T, DailyLog$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany"> | Null>
    workoutLogs<T extends DailyLog$workoutLogsArgs<ExtArgs> = {}>(args?: Subset<T, DailyLog$workoutLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyLog model
   */ 
  interface DailyLogFieldRefs {
    readonly id: FieldRef<"DailyLog", 'String'>
    readonly date: FieldRef<"DailyLog", 'DateTime'>
    readonly userId: FieldRef<"DailyLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyLog findUnique
   */
  export type DailyLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog findUniqueOrThrow
   */
  export type DailyLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog findFirst
   */
  export type DailyLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLogs.
     */
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog findFirstOrThrow
   */
  export type DailyLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLog to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLogs.
     */
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog findMany
   */
  export type DailyLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter, which DailyLogs to fetch.
     */
    where?: DailyLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLogs to fetch.
     */
    orderBy?: DailyLogOrderByWithRelationInput | DailyLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyLogs.
     */
    cursor?: DailyLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLogs.
     */
    skip?: number
    distinct?: DailyLogScalarFieldEnum | DailyLogScalarFieldEnum[]
  }

  /**
   * DailyLog create
   */
  export type DailyLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyLog.
     */
    data: XOR<DailyLogCreateInput, DailyLogUncheckedCreateInput>
  }

  /**
   * DailyLog createMany
   */
  export type DailyLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyLogs.
     */
    data: DailyLogCreateManyInput | DailyLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyLog createManyAndReturn
   */
  export type DailyLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyLogs.
     */
    data: DailyLogCreateManyInput | DailyLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyLog update
   */
  export type DailyLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyLog.
     */
    data: XOR<DailyLogUpdateInput, DailyLogUncheckedUpdateInput>
    /**
     * Choose, which DailyLog to update.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog updateMany
   */
  export type DailyLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyLogs.
     */
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyInput>
    /**
     * Filter which DailyLogs to update
     */
    where?: DailyLogWhereInput
  }

  /**
   * DailyLog upsert
   */
  export type DailyLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyLog to update in case it exists.
     */
    where: DailyLogWhereUniqueInput
    /**
     * In case the DailyLog found by the `where` argument doesn't exist, create a new DailyLog with this data.
     */
    create: XOR<DailyLogCreateInput, DailyLogUncheckedCreateInput>
    /**
     * In case the DailyLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyLogUpdateInput, DailyLogUncheckedUpdateInput>
  }

  /**
   * DailyLog delete
   */
  export type DailyLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
    /**
     * Filter which DailyLog to delete.
     */
    where: DailyLogWhereUniqueInput
  }

  /**
   * DailyLog deleteMany
   */
  export type DailyLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyLogs to delete
     */
    where?: DailyLogWhereInput
  }

  /**
   * DailyLog.meals
   */
  export type DailyLog$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * DailyLog.workoutLogs
   */
  export type DailyLog$workoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    cursor?: WorkoutLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * DailyLog without action
   */
  export type DailyLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyLog
     */
    select?: DailyLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyLogInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutLog
   */

  export type AggregateWorkoutLog = {
    _count: WorkoutLogCountAggregateOutputType | null
    _avg: WorkoutLogAvgAggregateOutputType | null
    _sum: WorkoutLogSumAggregateOutputType | null
    _min: WorkoutLogMinAggregateOutputType | null
    _max: WorkoutLogMaxAggregateOutputType | null
  }

  export type WorkoutLogAvgAggregateOutputType = {
    exerciseId: number | null
    durationMin: number | null
  }

  export type WorkoutLogSumAggregateOutputType = {
    exerciseId: number | null
    durationMin: number | null
  }

  export type WorkoutLogMinAggregateOutputType = {
    id: string | null
    dailyLogId: string | null
    userId: string | null
    exerciseId: number | null
    durationMin: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WorkoutLogMaxAggregateOutputType = {
    id: string | null
    dailyLogId: string | null
    userId: string | null
    exerciseId: number | null
    durationMin: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WorkoutLogCountAggregateOutputType = {
    id: number
    dailyLogId: number
    userId: number
    exerciseId: number
    durationMin: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WorkoutLogAvgAggregateInputType = {
    exerciseId?: true
    durationMin?: true
  }

  export type WorkoutLogSumAggregateInputType = {
    exerciseId?: true
    durationMin?: true
  }

  export type WorkoutLogMinAggregateInputType = {
    id?: true
    dailyLogId?: true
    userId?: true
    exerciseId?: true
    durationMin?: true
    created_at?: true
    updated_at?: true
  }

  export type WorkoutLogMaxAggregateInputType = {
    id?: true
    dailyLogId?: true
    userId?: true
    exerciseId?: true
    durationMin?: true
    created_at?: true
    updated_at?: true
  }

  export type WorkoutLogCountAggregateInputType = {
    id?: true
    dailyLogId?: true
    userId?: true
    exerciseId?: true
    durationMin?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WorkoutLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutLog to aggregate.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutLogs
    **/
    _count?: true | WorkoutLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutLogMaxAggregateInputType
  }

  export type GetWorkoutLogAggregateType<T extends WorkoutLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutLog[P]>
      : GetScalarType<T[P], AggregateWorkoutLog[P]>
  }




  export type WorkoutLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithAggregationInput | WorkoutLogOrderByWithAggregationInput[]
    by: WorkoutLogScalarFieldEnum[] | WorkoutLogScalarFieldEnum
    having?: WorkoutLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutLogCountAggregateInputType | true
    _avg?: WorkoutLogAvgAggregateInputType
    _sum?: WorkoutLogSumAggregateInputType
    _min?: WorkoutLogMinAggregateInputType
    _max?: WorkoutLogMaxAggregateInputType
  }

  export type WorkoutLogGroupByOutputType = {
    id: string
    dailyLogId: string
    userId: string
    exerciseId: number
    durationMin: number
    created_at: Date
    updated_at: Date
    _count: WorkoutLogCountAggregateOutputType | null
    _avg: WorkoutLogAvgAggregateOutputType | null
    _sum: WorkoutLogSumAggregateOutputType | null
    _min: WorkoutLogMinAggregateOutputType | null
    _max: WorkoutLogMaxAggregateOutputType | null
  }

  type GetWorkoutLogGroupByPayload<T extends WorkoutLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutLogGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutLogGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyLogId?: boolean
    userId?: boolean
    exerciseId?: boolean
    durationMin?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyLogId?: boolean
    userId?: boolean
    exerciseId?: boolean
    durationMin?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectScalar = {
    id?: boolean
    dailyLogId?: boolean
    userId?: boolean
    exerciseId?: boolean
    durationMin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WorkoutLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }
  export type WorkoutLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    dailyLog?: boolean | DailyLogDefaultArgs<ExtArgs>
  }

  export type $WorkoutLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
      dailyLog: Prisma.$DailyLogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dailyLogId: string
      userId: string
      exerciseId: number
      durationMin: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["workoutLog"]>
    composites: {}
  }

  type WorkoutLogGetPayload<S extends boolean | null | undefined | WorkoutLogDefaultArgs> = $Result.GetResult<Prisma.$WorkoutLogPayload, S>

  type WorkoutLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkoutLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkoutLogCountAggregateInputType | true
    }

  export interface WorkoutLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutLog'], meta: { name: 'WorkoutLog' } }
    /**
     * Find zero or one WorkoutLog that matches the filter.
     * @param {WorkoutLogFindUniqueArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutLogFindUniqueArgs>(args: SelectSubset<T, WorkoutLogFindUniqueArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkoutLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkoutLogFindUniqueOrThrowArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkoutLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindFirstArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutLogFindFirstArgs>(args?: SelectSubset<T, WorkoutLogFindFirstArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkoutLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindFirstOrThrowArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkoutLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutLogs
     * const workoutLogs = await prisma.workoutLog.findMany()
     * 
     * // Get first 10 WorkoutLogs
     * const workoutLogs = await prisma.workoutLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutLogWithIdOnly = await prisma.workoutLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutLogFindManyArgs>(args?: SelectSubset<T, WorkoutLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkoutLog.
     * @param {WorkoutLogCreateArgs} args - Arguments to create a WorkoutLog.
     * @example
     * // Create one WorkoutLog
     * const WorkoutLog = await prisma.workoutLog.create({
     *   data: {
     *     // ... data to create a WorkoutLog
     *   }
     * })
     * 
     */
    create<T extends WorkoutLogCreateArgs>(args: SelectSubset<T, WorkoutLogCreateArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkoutLogs.
     * @param {WorkoutLogCreateManyArgs} args - Arguments to create many WorkoutLogs.
     * @example
     * // Create many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutLogCreateManyArgs>(args?: SelectSubset<T, WorkoutLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutLogs and returns the data saved in the database.
     * @param {WorkoutLogCreateManyAndReturnArgs} args - Arguments to create many WorkoutLogs.
     * @example
     * // Create many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutLogs and only return the `id`
     * const workoutLogWithIdOnly = await prisma.workoutLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkoutLog.
     * @param {WorkoutLogDeleteArgs} args - Arguments to delete one WorkoutLog.
     * @example
     * // Delete one WorkoutLog
     * const WorkoutLog = await prisma.workoutLog.delete({
     *   where: {
     *     // ... filter to delete one WorkoutLog
     *   }
     * })
     * 
     */
    delete<T extends WorkoutLogDeleteArgs>(args: SelectSubset<T, WorkoutLogDeleteArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkoutLog.
     * @param {WorkoutLogUpdateArgs} args - Arguments to update one WorkoutLog.
     * @example
     * // Update one WorkoutLog
     * const workoutLog = await prisma.workoutLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutLogUpdateArgs>(args: SelectSubset<T, WorkoutLogUpdateArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkoutLogs.
     * @param {WorkoutLogDeleteManyArgs} args - Arguments to filter WorkoutLogs to delete.
     * @example
     * // Delete a few WorkoutLogs
     * const { count } = await prisma.workoutLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutLogDeleteManyArgs>(args?: SelectSubset<T, WorkoutLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutLogUpdateManyArgs>(args: SelectSubset<T, WorkoutLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkoutLog.
     * @param {WorkoutLogUpsertArgs} args - Arguments to update or create a WorkoutLog.
     * @example
     * // Update or create a WorkoutLog
     * const workoutLog = await prisma.workoutLog.upsert({
     *   create: {
     *     // ... data to create a WorkoutLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutLog we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutLogUpsertArgs>(args: SelectSubset<T, WorkoutLogUpsertArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkoutLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogCountArgs} args - Arguments to filter WorkoutLogs to count.
     * @example
     * // Count the number of WorkoutLogs
     * const count = await prisma.workoutLog.count({
     *   where: {
     *     // ... the filter for the WorkoutLogs we want to count
     *   }
     * })
    **/
    count<T extends WorkoutLogCountArgs>(
      args?: Subset<T, WorkoutLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutLogAggregateArgs>(args: Subset<T, WorkoutLogAggregateArgs>): Prisma.PrismaPromise<GetWorkoutLogAggregateType<T>>

    /**
     * Group by WorkoutLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutLogGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutLog model
   */
  readonly fields: WorkoutLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    dailyLog<T extends DailyLogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyLogDefaultArgs<ExtArgs>>): Prisma__DailyLogClient<$Result.GetResult<Prisma.$DailyLogPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutLog model
   */ 
  interface WorkoutLogFieldRefs {
    readonly id: FieldRef<"WorkoutLog", 'String'>
    readonly dailyLogId: FieldRef<"WorkoutLog", 'String'>
    readonly userId: FieldRef<"WorkoutLog", 'String'>
    readonly exerciseId: FieldRef<"WorkoutLog", 'Int'>
    readonly durationMin: FieldRef<"WorkoutLog", 'Float'>
    readonly created_at: FieldRef<"WorkoutLog", 'DateTime'>
    readonly updated_at: FieldRef<"WorkoutLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutLog findUnique
   */
  export type WorkoutLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog findUniqueOrThrow
   */
  export type WorkoutLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog findFirst
   */
  export type WorkoutLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutLogs.
     */
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog findFirstOrThrow
   */
  export type WorkoutLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutLogs.
     */
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog findMany
   */
  export type WorkoutLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLogs to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog create
   */
  export type WorkoutLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutLog.
     */
    data: XOR<WorkoutLogCreateInput, WorkoutLogUncheckedCreateInput>
  }

  /**
   * WorkoutLog createMany
   */
  export type WorkoutLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutLogs.
     */
    data: WorkoutLogCreateManyInput | WorkoutLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutLog createManyAndReturn
   */
  export type WorkoutLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkoutLogs.
     */
    data: WorkoutLogCreateManyInput | WorkoutLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutLog update
   */
  export type WorkoutLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutLog.
     */
    data: XOR<WorkoutLogUpdateInput, WorkoutLogUncheckedUpdateInput>
    /**
     * Choose, which WorkoutLog to update.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog updateMany
   */
  export type WorkoutLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutLogs.
     */
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutLogs to update
     */
    where?: WorkoutLogWhereInput
  }

  /**
   * WorkoutLog upsert
   */
  export type WorkoutLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutLog to update in case it exists.
     */
    where: WorkoutLogWhereUniqueInput
    /**
     * In case the WorkoutLog found by the `where` argument doesn't exist, create a new WorkoutLog with this data.
     */
    create: XOR<WorkoutLogCreateInput, WorkoutLogUncheckedCreateInput>
    /**
     * In case the WorkoutLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutLogUpdateInput, WorkoutLogUncheckedUpdateInput>
  }

  /**
   * WorkoutLog delete
   */
  export type WorkoutLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter which WorkoutLog to delete.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog deleteMany
   */
  export type WorkoutLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutLogs to delete
     */
    where?: WorkoutLogWhereInput
  }

  /**
   * WorkoutLog without action
   */
  export type WorkoutLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
  }


  /**
   * Model WaterLog
   */

  export type AggregateWaterLog = {
    _count: WaterLogCountAggregateOutputType | null
    _avg: WaterLogAvgAggregateOutputType | null
    _sum: WaterLogSumAggregateOutputType | null
    _min: WaterLogMinAggregateOutputType | null
    _max: WaterLogMaxAggregateOutputType | null
  }

  export type WaterLogAvgAggregateOutputType = {
    amount: number | null
    totalCalories: number | null
  }

  export type WaterLogSumAggregateOutputType = {
    amount: number | null
    totalCalories: number | null
  }

  export type WaterLogMinAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
    amount: number | null
    totalCalories: number | null
  }

  export type WaterLogMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
    amount: number | null
    totalCalories: number | null
  }

  export type WaterLogCountAggregateOutputType = {
    id: number
    date: number
    userId: number
    amount: number
    totalCalories: number
    _all: number
  }


  export type WaterLogAvgAggregateInputType = {
    amount?: true
    totalCalories?: true
  }

  export type WaterLogSumAggregateInputType = {
    amount?: true
    totalCalories?: true
  }

  export type WaterLogMinAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    amount?: true
    totalCalories?: true
  }

  export type WaterLogMaxAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    amount?: true
    totalCalories?: true
  }

  export type WaterLogCountAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    amount?: true
    totalCalories?: true
    _all?: true
  }

  export type WaterLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterLog to aggregate.
     */
    where?: WaterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterLogs to fetch.
     */
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaterLogs
    **/
    _count?: true | WaterLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaterLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaterLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaterLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaterLogMaxAggregateInputType
  }

  export type GetWaterLogAggregateType<T extends WaterLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWaterLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaterLog[P]>
      : GetScalarType<T[P], AggregateWaterLog[P]>
  }




  export type WaterLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterLogWhereInput
    orderBy?: WaterLogOrderByWithAggregationInput | WaterLogOrderByWithAggregationInput[]
    by: WaterLogScalarFieldEnum[] | WaterLogScalarFieldEnum
    having?: WaterLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaterLogCountAggregateInputType | true
    _avg?: WaterLogAvgAggregateInputType
    _sum?: WaterLogSumAggregateInputType
    _min?: WaterLogMinAggregateInputType
    _max?: WaterLogMaxAggregateInputType
  }

  export type WaterLogGroupByOutputType = {
    id: string
    date: Date
    userId: string
    amount: number
    totalCalories: number | null
    _count: WaterLogCountAggregateOutputType | null
    _avg: WaterLogAvgAggregateOutputType | null
    _sum: WaterLogSumAggregateOutputType | null
    _min: WaterLogMinAggregateOutputType | null
    _max: WaterLogMaxAggregateOutputType | null
  }

  type GetWaterLogGroupByPayload<T extends WaterLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaterLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaterLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaterLogGroupByOutputType[P]>
            : GetScalarType<T[P], WaterLogGroupByOutputType[P]>
        }
      >
    >


  export type WaterLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    amount?: boolean
    totalCalories?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterLog"]>

  export type WaterLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    amount?: boolean
    totalCalories?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterLog"]>

  export type WaterLogSelectScalar = {
    id?: boolean
    date?: boolean
    userId?: boolean
    amount?: boolean
    totalCalories?: boolean
  }

  export type WaterLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WaterLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WaterLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaterLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      userId: string
      amount: number
      totalCalories: number | null
    }, ExtArgs["result"]["waterLog"]>
    composites: {}
  }

  type WaterLogGetPayload<S extends boolean | null | undefined | WaterLogDefaultArgs> = $Result.GetResult<Prisma.$WaterLogPayload, S>

  type WaterLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WaterLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WaterLogCountAggregateInputType | true
    }

  export interface WaterLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaterLog'], meta: { name: 'WaterLog' } }
    /**
     * Find zero or one WaterLog that matches the filter.
     * @param {WaterLogFindUniqueArgs} args - Arguments to find a WaterLog
     * @example
     * // Get one WaterLog
     * const waterLog = await prisma.waterLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaterLogFindUniqueArgs>(args: SelectSubset<T, WaterLogFindUniqueArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WaterLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WaterLogFindUniqueOrThrowArgs} args - Arguments to find a WaterLog
     * @example
     * // Get one WaterLog
     * const waterLog = await prisma.waterLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaterLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WaterLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WaterLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogFindFirstArgs} args - Arguments to find a WaterLog
     * @example
     * // Get one WaterLog
     * const waterLog = await prisma.waterLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaterLogFindFirstArgs>(args?: SelectSubset<T, WaterLogFindFirstArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WaterLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogFindFirstOrThrowArgs} args - Arguments to find a WaterLog
     * @example
     * // Get one WaterLog
     * const waterLog = await prisma.waterLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaterLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WaterLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WaterLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaterLogs
     * const waterLogs = await prisma.waterLog.findMany()
     * 
     * // Get first 10 WaterLogs
     * const waterLogs = await prisma.waterLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waterLogWithIdOnly = await prisma.waterLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaterLogFindManyArgs>(args?: SelectSubset<T, WaterLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WaterLog.
     * @param {WaterLogCreateArgs} args - Arguments to create a WaterLog.
     * @example
     * // Create one WaterLog
     * const WaterLog = await prisma.waterLog.create({
     *   data: {
     *     // ... data to create a WaterLog
     *   }
     * })
     * 
     */
    create<T extends WaterLogCreateArgs>(args: SelectSubset<T, WaterLogCreateArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WaterLogs.
     * @param {WaterLogCreateManyArgs} args - Arguments to create many WaterLogs.
     * @example
     * // Create many WaterLogs
     * const waterLog = await prisma.waterLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaterLogCreateManyArgs>(args?: SelectSubset<T, WaterLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaterLogs and returns the data saved in the database.
     * @param {WaterLogCreateManyAndReturnArgs} args - Arguments to create many WaterLogs.
     * @example
     * // Create many WaterLogs
     * const waterLog = await prisma.waterLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaterLogs and only return the `id`
     * const waterLogWithIdOnly = await prisma.waterLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaterLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WaterLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WaterLog.
     * @param {WaterLogDeleteArgs} args - Arguments to delete one WaterLog.
     * @example
     * // Delete one WaterLog
     * const WaterLog = await prisma.waterLog.delete({
     *   where: {
     *     // ... filter to delete one WaterLog
     *   }
     * })
     * 
     */
    delete<T extends WaterLogDeleteArgs>(args: SelectSubset<T, WaterLogDeleteArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WaterLog.
     * @param {WaterLogUpdateArgs} args - Arguments to update one WaterLog.
     * @example
     * // Update one WaterLog
     * const waterLog = await prisma.waterLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaterLogUpdateArgs>(args: SelectSubset<T, WaterLogUpdateArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WaterLogs.
     * @param {WaterLogDeleteManyArgs} args - Arguments to filter WaterLogs to delete.
     * @example
     * // Delete a few WaterLogs
     * const { count } = await prisma.waterLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaterLogDeleteManyArgs>(args?: SelectSubset<T, WaterLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaterLogs
     * const waterLog = await prisma.waterLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaterLogUpdateManyArgs>(args: SelectSubset<T, WaterLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WaterLog.
     * @param {WaterLogUpsertArgs} args - Arguments to update or create a WaterLog.
     * @example
     * // Update or create a WaterLog
     * const waterLog = await prisma.waterLog.upsert({
     *   create: {
     *     // ... data to create a WaterLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaterLog we want to update
     *   }
     * })
     */
    upsert<T extends WaterLogUpsertArgs>(args: SelectSubset<T, WaterLogUpsertArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WaterLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogCountArgs} args - Arguments to filter WaterLogs to count.
     * @example
     * // Count the number of WaterLogs
     * const count = await prisma.waterLog.count({
     *   where: {
     *     // ... the filter for the WaterLogs we want to count
     *   }
     * })
    **/
    count<T extends WaterLogCountArgs>(
      args?: Subset<T, WaterLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaterLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaterLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaterLogAggregateArgs>(args: Subset<T, WaterLogAggregateArgs>): Prisma.PrismaPromise<GetWaterLogAggregateType<T>>

    /**
     * Group by WaterLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaterLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaterLogGroupByArgs['orderBy'] }
        : { orderBy?: WaterLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaterLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaterLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaterLog model
   */
  readonly fields: WaterLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaterLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaterLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WaterLog model
   */ 
  interface WaterLogFieldRefs {
    readonly id: FieldRef<"WaterLog", 'String'>
    readonly date: FieldRef<"WaterLog", 'DateTime'>
    readonly userId: FieldRef<"WaterLog", 'String'>
    readonly amount: FieldRef<"WaterLog", 'Float'>
    readonly totalCalories: FieldRef<"WaterLog", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * WaterLog findUnique
   */
  export type WaterLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLog to fetch.
     */
    where: WaterLogWhereUniqueInput
  }

  /**
   * WaterLog findUniqueOrThrow
   */
  export type WaterLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLog to fetch.
     */
    where: WaterLogWhereUniqueInput
  }

  /**
   * WaterLog findFirst
   */
  export type WaterLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLog to fetch.
     */
    where?: WaterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterLogs to fetch.
     */
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterLogs.
     */
    cursor?: WaterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterLogs.
     */
    distinct?: WaterLogScalarFieldEnum | WaterLogScalarFieldEnum[]
  }

  /**
   * WaterLog findFirstOrThrow
   */
  export type WaterLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLog to fetch.
     */
    where?: WaterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterLogs to fetch.
     */
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterLogs.
     */
    cursor?: WaterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterLogs.
     */
    distinct?: WaterLogScalarFieldEnum | WaterLogScalarFieldEnum[]
  }

  /**
   * WaterLog findMany
   */
  export type WaterLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLogs to fetch.
     */
    where?: WaterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterLogs to fetch.
     */
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaterLogs.
     */
    cursor?: WaterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterLogs.
     */
    skip?: number
    distinct?: WaterLogScalarFieldEnum | WaterLogScalarFieldEnum[]
  }

  /**
   * WaterLog create
   */
  export type WaterLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WaterLog.
     */
    data: XOR<WaterLogCreateInput, WaterLogUncheckedCreateInput>
  }

  /**
   * WaterLog createMany
   */
  export type WaterLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaterLogs.
     */
    data: WaterLogCreateManyInput | WaterLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaterLog createManyAndReturn
   */
  export type WaterLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WaterLogs.
     */
    data: WaterLogCreateManyInput | WaterLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaterLog update
   */
  export type WaterLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WaterLog.
     */
    data: XOR<WaterLogUpdateInput, WaterLogUncheckedUpdateInput>
    /**
     * Choose, which WaterLog to update.
     */
    where: WaterLogWhereUniqueInput
  }

  /**
   * WaterLog updateMany
   */
  export type WaterLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaterLogs.
     */
    data: XOR<WaterLogUpdateManyMutationInput, WaterLogUncheckedUpdateManyInput>
    /**
     * Filter which WaterLogs to update
     */
    where?: WaterLogWhereInput
  }

  /**
   * WaterLog upsert
   */
  export type WaterLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WaterLog to update in case it exists.
     */
    where: WaterLogWhereUniqueInput
    /**
     * In case the WaterLog found by the `where` argument doesn't exist, create a new WaterLog with this data.
     */
    create: XOR<WaterLogCreateInput, WaterLogUncheckedCreateInput>
    /**
     * In case the WaterLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaterLogUpdateInput, WaterLogUncheckedUpdateInput>
  }

  /**
   * WaterLog delete
   */
  export type WaterLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter which WaterLog to delete.
     */
    where: WaterLogWhereUniqueInput
  }

  /**
   * WaterLog deleteMany
   */
  export type WaterLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterLogs to delete
     */
    where?: WaterLogWhereInput
  }

  /**
   * WaterLog without action
   */
  export type WaterLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
  }


  /**
   * Model WeightLog
   */

  export type AggregateWeightLog = {
    _count: WeightLogCountAggregateOutputType | null
    _avg: WeightLogAvgAggregateOutputType | null
    _sum: WeightLogSumAggregateOutputType | null
    _min: WeightLogMinAggregateOutputType | null
    _max: WeightLogMaxAggregateOutputType | null
  }

  export type WeightLogAvgAggregateOutputType = {
    weightLb: number | null
    totalBurnCalories: number | null
  }

  export type WeightLogSumAggregateOutputType = {
    weightLb: number | null
    totalBurnCalories: number | null
  }

  export type WeightLogMinAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
    weightLb: number | null
    totalBurnCalories: number | null
  }

  export type WeightLogMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
    weightLb: number | null
    totalBurnCalories: number | null
  }

  export type WeightLogCountAggregateOutputType = {
    id: number
    date: number
    userId: number
    weightLb: number
    totalBurnCalories: number
    _all: number
  }


  export type WeightLogAvgAggregateInputType = {
    weightLb?: true
    totalBurnCalories?: true
  }

  export type WeightLogSumAggregateInputType = {
    weightLb?: true
    totalBurnCalories?: true
  }

  export type WeightLogMinAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    weightLb?: true
    totalBurnCalories?: true
  }

  export type WeightLogMaxAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    weightLb?: true
    totalBurnCalories?: true
  }

  export type WeightLogCountAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    weightLb?: true
    totalBurnCalories?: true
    _all?: true
  }

  export type WeightLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightLog to aggregate.
     */
    where?: WeightLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightLogs to fetch.
     */
    orderBy?: WeightLogOrderByWithRelationInput | WeightLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeightLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeightLogs
    **/
    _count?: true | WeightLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeightLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeightLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeightLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeightLogMaxAggregateInputType
  }

  export type GetWeightLogAggregateType<T extends WeightLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWeightLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeightLog[P]>
      : GetScalarType<T[P], AggregateWeightLog[P]>
  }




  export type WeightLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeightLogWhereInput
    orderBy?: WeightLogOrderByWithAggregationInput | WeightLogOrderByWithAggregationInput[]
    by: WeightLogScalarFieldEnum[] | WeightLogScalarFieldEnum
    having?: WeightLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeightLogCountAggregateInputType | true
    _avg?: WeightLogAvgAggregateInputType
    _sum?: WeightLogSumAggregateInputType
    _min?: WeightLogMinAggregateInputType
    _max?: WeightLogMaxAggregateInputType
  }

  export type WeightLogGroupByOutputType = {
    id: string
    date: Date
    userId: string
    weightLb: number | null
    totalBurnCalories: number | null
    _count: WeightLogCountAggregateOutputType | null
    _avg: WeightLogAvgAggregateOutputType | null
    _sum: WeightLogSumAggregateOutputType | null
    _min: WeightLogMinAggregateOutputType | null
    _max: WeightLogMaxAggregateOutputType | null
  }

  type GetWeightLogGroupByPayload<T extends WeightLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeightLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeightLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeightLogGroupByOutputType[P]>
            : GetScalarType<T[P], WeightLogGroupByOutputType[P]>
        }
      >
    >


  export type WeightLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    weightLb?: boolean
    totalBurnCalories?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightLog"]>

  export type WeightLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    weightLb?: boolean
    totalBurnCalories?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weightLog"]>

  export type WeightLogSelectScalar = {
    id?: boolean
    date?: boolean
    userId?: boolean
    weightLb?: boolean
    totalBurnCalories?: boolean
  }

  export type WeightLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeightLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeightLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeightLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      userId: string
      weightLb: number | null
      totalBurnCalories: number | null
    }, ExtArgs["result"]["weightLog"]>
    composites: {}
  }

  type WeightLogGetPayload<S extends boolean | null | undefined | WeightLogDefaultArgs> = $Result.GetResult<Prisma.$WeightLogPayload, S>

  type WeightLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeightLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WeightLogCountAggregateInputType | true
    }

  export interface WeightLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeightLog'], meta: { name: 'WeightLog' } }
    /**
     * Find zero or one WeightLog that matches the filter.
     * @param {WeightLogFindUniqueArgs} args - Arguments to find a WeightLog
     * @example
     * // Get one WeightLog
     * const weightLog = await prisma.weightLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeightLogFindUniqueArgs>(args: SelectSubset<T, WeightLogFindUniqueArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WeightLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WeightLogFindUniqueOrThrowArgs} args - Arguments to find a WeightLog
     * @example
     * // Get one WeightLog
     * const weightLog = await prisma.weightLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeightLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WeightLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WeightLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogFindFirstArgs} args - Arguments to find a WeightLog
     * @example
     * // Get one WeightLog
     * const weightLog = await prisma.weightLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeightLogFindFirstArgs>(args?: SelectSubset<T, WeightLogFindFirstArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WeightLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogFindFirstOrThrowArgs} args - Arguments to find a WeightLog
     * @example
     * // Get one WeightLog
     * const weightLog = await prisma.weightLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeightLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WeightLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WeightLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeightLogs
     * const weightLogs = await prisma.weightLog.findMany()
     * 
     * // Get first 10 WeightLogs
     * const weightLogs = await prisma.weightLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weightLogWithIdOnly = await prisma.weightLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeightLogFindManyArgs>(args?: SelectSubset<T, WeightLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WeightLog.
     * @param {WeightLogCreateArgs} args - Arguments to create a WeightLog.
     * @example
     * // Create one WeightLog
     * const WeightLog = await prisma.weightLog.create({
     *   data: {
     *     // ... data to create a WeightLog
     *   }
     * })
     * 
     */
    create<T extends WeightLogCreateArgs>(args: SelectSubset<T, WeightLogCreateArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WeightLogs.
     * @param {WeightLogCreateManyArgs} args - Arguments to create many WeightLogs.
     * @example
     * // Create many WeightLogs
     * const weightLog = await prisma.weightLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeightLogCreateManyArgs>(args?: SelectSubset<T, WeightLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeightLogs and returns the data saved in the database.
     * @param {WeightLogCreateManyAndReturnArgs} args - Arguments to create many WeightLogs.
     * @example
     * // Create many WeightLogs
     * const weightLog = await prisma.weightLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeightLogs and only return the `id`
     * const weightLogWithIdOnly = await prisma.weightLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeightLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WeightLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WeightLog.
     * @param {WeightLogDeleteArgs} args - Arguments to delete one WeightLog.
     * @example
     * // Delete one WeightLog
     * const WeightLog = await prisma.weightLog.delete({
     *   where: {
     *     // ... filter to delete one WeightLog
     *   }
     * })
     * 
     */
    delete<T extends WeightLogDeleteArgs>(args: SelectSubset<T, WeightLogDeleteArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WeightLog.
     * @param {WeightLogUpdateArgs} args - Arguments to update one WeightLog.
     * @example
     * // Update one WeightLog
     * const weightLog = await prisma.weightLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeightLogUpdateArgs>(args: SelectSubset<T, WeightLogUpdateArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WeightLogs.
     * @param {WeightLogDeleteManyArgs} args - Arguments to filter WeightLogs to delete.
     * @example
     * // Delete a few WeightLogs
     * const { count } = await prisma.weightLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeightLogDeleteManyArgs>(args?: SelectSubset<T, WeightLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeightLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeightLogs
     * const weightLog = await prisma.weightLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeightLogUpdateManyArgs>(args: SelectSubset<T, WeightLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeightLog.
     * @param {WeightLogUpsertArgs} args - Arguments to update or create a WeightLog.
     * @example
     * // Update or create a WeightLog
     * const weightLog = await prisma.weightLog.upsert({
     *   create: {
     *     // ... data to create a WeightLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeightLog we want to update
     *   }
     * })
     */
    upsert<T extends WeightLogUpsertArgs>(args: SelectSubset<T, WeightLogUpsertArgs<ExtArgs>>): Prisma__WeightLogClient<$Result.GetResult<Prisma.$WeightLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WeightLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogCountArgs} args - Arguments to filter WeightLogs to count.
     * @example
     * // Count the number of WeightLogs
     * const count = await prisma.weightLog.count({
     *   where: {
     *     // ... the filter for the WeightLogs we want to count
     *   }
     * })
    **/
    count<T extends WeightLogCountArgs>(
      args?: Subset<T, WeightLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeightLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeightLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeightLogAggregateArgs>(args: Subset<T, WeightLogAggregateArgs>): Prisma.PrismaPromise<GetWeightLogAggregateType<T>>

    /**
     * Group by WeightLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeightLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeightLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeightLogGroupByArgs['orderBy'] }
        : { orderBy?: WeightLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeightLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeightLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeightLog model
   */
  readonly fields: WeightLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeightLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeightLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeightLog model
   */ 
  interface WeightLogFieldRefs {
    readonly id: FieldRef<"WeightLog", 'String'>
    readonly date: FieldRef<"WeightLog", 'DateTime'>
    readonly userId: FieldRef<"WeightLog", 'String'>
    readonly weightLb: FieldRef<"WeightLog", 'Float'>
    readonly totalBurnCalories: FieldRef<"WeightLog", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * WeightLog findUnique
   */
  export type WeightLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * Filter, which WeightLog to fetch.
     */
    where: WeightLogWhereUniqueInput
  }

  /**
   * WeightLog findUniqueOrThrow
   */
  export type WeightLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * Filter, which WeightLog to fetch.
     */
    where: WeightLogWhereUniqueInput
  }

  /**
   * WeightLog findFirst
   */
  export type WeightLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * Filter, which WeightLog to fetch.
     */
    where?: WeightLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightLogs to fetch.
     */
    orderBy?: WeightLogOrderByWithRelationInput | WeightLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightLogs.
     */
    cursor?: WeightLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightLogs.
     */
    distinct?: WeightLogScalarFieldEnum | WeightLogScalarFieldEnum[]
  }

  /**
   * WeightLog findFirstOrThrow
   */
  export type WeightLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * Filter, which WeightLog to fetch.
     */
    where?: WeightLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightLogs to fetch.
     */
    orderBy?: WeightLogOrderByWithRelationInput | WeightLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeightLogs.
     */
    cursor?: WeightLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeightLogs.
     */
    distinct?: WeightLogScalarFieldEnum | WeightLogScalarFieldEnum[]
  }

  /**
   * WeightLog findMany
   */
  export type WeightLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * Filter, which WeightLogs to fetch.
     */
    where?: WeightLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeightLogs to fetch.
     */
    orderBy?: WeightLogOrderByWithRelationInput | WeightLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeightLogs.
     */
    cursor?: WeightLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeightLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeightLogs.
     */
    skip?: number
    distinct?: WeightLogScalarFieldEnum | WeightLogScalarFieldEnum[]
  }

  /**
   * WeightLog create
   */
  export type WeightLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WeightLog.
     */
    data: XOR<WeightLogCreateInput, WeightLogUncheckedCreateInput>
  }

  /**
   * WeightLog createMany
   */
  export type WeightLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeightLogs.
     */
    data: WeightLogCreateManyInput | WeightLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeightLog createManyAndReturn
   */
  export type WeightLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WeightLogs.
     */
    data: WeightLogCreateManyInput | WeightLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeightLog update
   */
  export type WeightLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WeightLog.
     */
    data: XOR<WeightLogUpdateInput, WeightLogUncheckedUpdateInput>
    /**
     * Choose, which WeightLog to update.
     */
    where: WeightLogWhereUniqueInput
  }

  /**
   * WeightLog updateMany
   */
  export type WeightLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeightLogs.
     */
    data: XOR<WeightLogUpdateManyMutationInput, WeightLogUncheckedUpdateManyInput>
    /**
     * Filter which WeightLogs to update
     */
    where?: WeightLogWhereInput
  }

  /**
   * WeightLog upsert
   */
  export type WeightLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WeightLog to update in case it exists.
     */
    where: WeightLogWhereUniqueInput
    /**
     * In case the WeightLog found by the `where` argument doesn't exist, create a new WeightLog with this data.
     */
    create: XOR<WeightLogCreateInput, WeightLogUncheckedCreateInput>
    /**
     * In case the WeightLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeightLogUpdateInput, WeightLogUncheckedUpdateInput>
  }

  /**
   * WeightLog delete
   */
  export type WeightLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
    /**
     * Filter which WeightLog to delete.
     */
    where: WeightLogWhereUniqueInput
  }

  /**
   * WeightLog deleteMany
   */
  export type WeightLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeightLogs to delete
     */
    where?: WeightLogWhereInput
  }

  /**
   * WeightLog without action
   */
  export type WeightLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeightLog
     */
    select?: WeightLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeightLogInclude<ExtArgs> | null
  }


  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    servingSize: number | null
  }

  export type FoodSumAggregateOutputType = {
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    servingSize: number | null
  }

  export type FoodMinAggregateOutputType = {
    id: string | null
    name: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    servingSize: number | null
    unit: $Enums.Unit | null
    food_image: string | null
    created_at: Date | null
    updated_at: Date | null
    userId: string | null
  }

  export type FoodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    servingSize: number | null
    unit: $Enums.Unit | null
    food_image: string | null
    created_at: Date | null
    updated_at: Date | null
    userId: string | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    name: number
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    unit: number
    food_image: number
    created_at: number
    updated_at: number
    userId: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    servingSize?: true
  }

  export type FoodSumAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    servingSize?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    servingSize?: true
    unit?: true
    food_image?: true
    created_at?: true
    updated_at?: true
    userId?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    servingSize?: true
    unit?: true
    food_image?: true
    created_at?: true
    updated_at?: true
    userId?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    servingSize?: true
    unit?: true
    food_image?: true
    created_at?: true
    updated_at?: true
    userId?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    unit: $Enums.Unit
    food_image: string | null
    created_at: Date
    updated_at: Date
    userId: string
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    servingSize?: boolean
    unit?: boolean
    food_image?: boolean
    created_at?: boolean
    updated_at?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mealItems?: boolean | Food$mealItemsArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    servingSize?: boolean
    unit?: boolean
    food_image?: boolean
    created_at?: boolean
    updated_at?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    servingSize?: boolean
    unit?: boolean
    food_image?: boolean
    created_at?: boolean
    updated_at?: boolean
    userId?: boolean
  }

  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mealItems?: boolean | Food$mealItemsArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      mealItems: Prisma.$MealItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      calories: number
      protein: number
      carbs: number
      fat: number
      servingSize: number
      unit: $Enums.Unit
      food_image: string | null
      created_at: Date
      updated_at: Date
      userId: string
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodFindUniqueArgs>(args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodFindFirstArgs>(args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodFindManyArgs>(args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends FoodCreateArgs>(args: SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Foods.
     * @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCreateManyArgs>(args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Foods and returns the data saved in the database.
     * @param {FoodCreateManyAndReturnArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends FoodDeleteArgs>(args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodUpdateArgs>(args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodDeleteManyArgs>(args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodUpdateManyArgs>(args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends FoodUpsertArgs>(args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    mealItems<T extends Food$mealItemsArgs<ExtArgs> = {}>(args?: Subset<T, Food$mealItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Food model
   */ 
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'String'>
    readonly name: FieldRef<"Food", 'String'>
    readonly calories: FieldRef<"Food", 'Float'>
    readonly protein: FieldRef<"Food", 'Float'>
    readonly carbs: FieldRef<"Food", 'Float'>
    readonly fat: FieldRef<"Food", 'Float'>
    readonly servingSize: FieldRef<"Food", 'Float'>
    readonly unit: FieldRef<"Food", 'Unit'>
    readonly food_image: FieldRef<"Food", 'String'>
    readonly created_at: FieldRef<"Food", 'DateTime'>
    readonly updated_at: FieldRef<"Food", 'DateTime'>
    readonly userId: FieldRef<"Food", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }

  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food createManyAndReturn
   */
  export type FoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
  }

  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }

  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
  }

  /**
   * Food.mealItems
   */
  export type Food$mealItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    where?: MealItemWhereInput
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    cursor?: MealItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealItemScalarFieldEnum | MealItemScalarFieldEnum[]
  }

  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
  }


  /**
   * Model CaloriesLog
   */

  export type AggregateCaloriesLog = {
    _count: CaloriesLogCountAggregateOutputType | null
    _avg: CaloriesLogAvgAggregateOutputType | null
    _sum: CaloriesLogSumAggregateOutputType | null
    _min: CaloriesLogMinAggregateOutputType | null
    _max: CaloriesLogMaxAggregateOutputType | null
  }

  export type CaloriesLogAvgAggregateOutputType = {
    quantity: number | null
    totalCalories: number | null
    totalProtein: number | null
    totalCarbs: number | null
    totalFat: number | null
  }

  export type CaloriesLogSumAggregateOutputType = {
    quantity: number | null
    totalCalories: number | null
    totalProtein: number | null
    totalCarbs: number | null
    totalFat: number | null
  }

  export type CaloriesLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mealId: string | null
    date: Date | null
    meal: string | null
    foodName: string | null
    quantity: number | null
    totalCalories: number | null
    totalProtein: number | null
    totalCarbs: number | null
    totalFat: number | null
    createdAt: Date | null
    updated_at: Date | null
  }

  export type CaloriesLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mealId: string | null
    date: Date | null
    meal: string | null
    foodName: string | null
    quantity: number | null
    totalCalories: number | null
    totalProtein: number | null
    totalCarbs: number | null
    totalFat: number | null
    createdAt: Date | null
    updated_at: Date | null
  }

  export type CaloriesLogCountAggregateOutputType = {
    id: number
    userId: number
    mealId: number
    date: number
    meal: number
    foodName: number
    quantity: number
    totalCalories: number
    totalProtein: number
    totalCarbs: number
    totalFat: number
    createdAt: number
    updated_at: number
    _all: number
  }


  export type CaloriesLogAvgAggregateInputType = {
    quantity?: true
    totalCalories?: true
    totalProtein?: true
    totalCarbs?: true
    totalFat?: true
  }

  export type CaloriesLogSumAggregateInputType = {
    quantity?: true
    totalCalories?: true
    totalProtein?: true
    totalCarbs?: true
    totalFat?: true
  }

  export type CaloriesLogMinAggregateInputType = {
    id?: true
    userId?: true
    mealId?: true
    date?: true
    meal?: true
    foodName?: true
    quantity?: true
    totalCalories?: true
    totalProtein?: true
    totalCarbs?: true
    totalFat?: true
    createdAt?: true
    updated_at?: true
  }

  export type CaloriesLogMaxAggregateInputType = {
    id?: true
    userId?: true
    mealId?: true
    date?: true
    meal?: true
    foodName?: true
    quantity?: true
    totalCalories?: true
    totalProtein?: true
    totalCarbs?: true
    totalFat?: true
    createdAt?: true
    updated_at?: true
  }

  export type CaloriesLogCountAggregateInputType = {
    id?: true
    userId?: true
    mealId?: true
    date?: true
    meal?: true
    foodName?: true
    quantity?: true
    totalCalories?: true
    totalProtein?: true
    totalCarbs?: true
    totalFat?: true
    createdAt?: true
    updated_at?: true
    _all?: true
  }

  export type CaloriesLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaloriesLog to aggregate.
     */
    where?: CaloriesLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaloriesLogs to fetch.
     */
    orderBy?: CaloriesLogOrderByWithRelationInput | CaloriesLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaloriesLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaloriesLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaloriesLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaloriesLogs
    **/
    _count?: true | CaloriesLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaloriesLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaloriesLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaloriesLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaloriesLogMaxAggregateInputType
  }

  export type GetCaloriesLogAggregateType<T extends CaloriesLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCaloriesLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaloriesLog[P]>
      : GetScalarType<T[P], AggregateCaloriesLog[P]>
  }




  export type CaloriesLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaloriesLogWhereInput
    orderBy?: CaloriesLogOrderByWithAggregationInput | CaloriesLogOrderByWithAggregationInput[]
    by: CaloriesLogScalarFieldEnum[] | CaloriesLogScalarFieldEnum
    having?: CaloriesLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaloriesLogCountAggregateInputType | true
    _avg?: CaloriesLogAvgAggregateInputType
    _sum?: CaloriesLogSumAggregateInputType
    _min?: CaloriesLogMinAggregateInputType
    _max?: CaloriesLogMaxAggregateInputType
  }

  export type CaloriesLogGroupByOutputType = {
    id: string
    userId: string
    mealId: string | null
    date: Date
    meal: string
    foodName: string
    quantity: number
    totalCalories: number
    totalProtein: number | null
    totalCarbs: number | null
    totalFat: number | null
    createdAt: Date
    updated_at: Date
    _count: CaloriesLogCountAggregateOutputType | null
    _avg: CaloriesLogAvgAggregateOutputType | null
    _sum: CaloriesLogSumAggregateOutputType | null
    _min: CaloriesLogMinAggregateOutputType | null
    _max: CaloriesLogMaxAggregateOutputType | null
  }

  type GetCaloriesLogGroupByPayload<T extends CaloriesLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaloriesLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaloriesLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaloriesLogGroupByOutputType[P]>
            : GetScalarType<T[P], CaloriesLogGroupByOutputType[P]>
        }
      >
    >


  export type CaloriesLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mealId?: boolean
    date?: boolean
    meal?: boolean
    foodName?: boolean
    quantity?: boolean
    totalCalories?: boolean
    totalProtein?: boolean
    totalCarbs?: boolean
    totalFat?: boolean
    createdAt?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mealRelation?: boolean | CaloriesLog$mealRelationArgs<ExtArgs>
  }, ExtArgs["result"]["caloriesLog"]>

  export type CaloriesLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mealId?: boolean
    date?: boolean
    meal?: boolean
    foodName?: boolean
    quantity?: boolean
    totalCalories?: boolean
    totalProtein?: boolean
    totalCarbs?: boolean
    totalFat?: boolean
    createdAt?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mealRelation?: boolean | CaloriesLog$mealRelationArgs<ExtArgs>
  }, ExtArgs["result"]["caloriesLog"]>

  export type CaloriesLogSelectScalar = {
    id?: boolean
    userId?: boolean
    mealId?: boolean
    date?: boolean
    meal?: boolean
    foodName?: boolean
    quantity?: boolean
    totalCalories?: boolean
    totalProtein?: boolean
    totalCarbs?: boolean
    totalFat?: boolean
    createdAt?: boolean
    updated_at?: boolean
  }

  export type CaloriesLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mealRelation?: boolean | CaloriesLog$mealRelationArgs<ExtArgs>
  }
  export type CaloriesLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mealRelation?: boolean | CaloriesLog$mealRelationArgs<ExtArgs>
  }

  export type $CaloriesLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaloriesLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      mealRelation: Prisma.$MealPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mealId: string | null
      date: Date
      meal: string
      foodName: string
      quantity: number
      totalCalories: number
      totalProtein: number | null
      totalCarbs: number | null
      totalFat: number | null
      createdAt: Date
      updated_at: Date
    }, ExtArgs["result"]["caloriesLog"]>
    composites: {}
  }

  type CaloriesLogGetPayload<S extends boolean | null | undefined | CaloriesLogDefaultArgs> = $Result.GetResult<Prisma.$CaloriesLogPayload, S>

  type CaloriesLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CaloriesLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CaloriesLogCountAggregateInputType | true
    }

  export interface CaloriesLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaloriesLog'], meta: { name: 'CaloriesLog' } }
    /**
     * Find zero or one CaloriesLog that matches the filter.
     * @param {CaloriesLogFindUniqueArgs} args - Arguments to find a CaloriesLog
     * @example
     * // Get one CaloriesLog
     * const caloriesLog = await prisma.caloriesLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaloriesLogFindUniqueArgs>(args: SelectSubset<T, CaloriesLogFindUniqueArgs<ExtArgs>>): Prisma__CaloriesLogClient<$Result.GetResult<Prisma.$CaloriesLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CaloriesLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CaloriesLogFindUniqueOrThrowArgs} args - Arguments to find a CaloriesLog
     * @example
     * // Get one CaloriesLog
     * const caloriesLog = await prisma.caloriesLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaloriesLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CaloriesLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaloriesLogClient<$Result.GetResult<Prisma.$CaloriesLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CaloriesLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesLogFindFirstArgs} args - Arguments to find a CaloriesLog
     * @example
     * // Get one CaloriesLog
     * const caloriesLog = await prisma.caloriesLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaloriesLogFindFirstArgs>(args?: SelectSubset<T, CaloriesLogFindFirstArgs<ExtArgs>>): Prisma__CaloriesLogClient<$Result.GetResult<Prisma.$CaloriesLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CaloriesLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesLogFindFirstOrThrowArgs} args - Arguments to find a CaloriesLog
     * @example
     * // Get one CaloriesLog
     * const caloriesLog = await prisma.caloriesLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaloriesLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CaloriesLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaloriesLogClient<$Result.GetResult<Prisma.$CaloriesLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CaloriesLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaloriesLogs
     * const caloriesLogs = await prisma.caloriesLog.findMany()
     * 
     * // Get first 10 CaloriesLogs
     * const caloriesLogs = await prisma.caloriesLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caloriesLogWithIdOnly = await prisma.caloriesLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaloriesLogFindManyArgs>(args?: SelectSubset<T, CaloriesLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaloriesLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CaloriesLog.
     * @param {CaloriesLogCreateArgs} args - Arguments to create a CaloriesLog.
     * @example
     * // Create one CaloriesLog
     * const CaloriesLog = await prisma.caloriesLog.create({
     *   data: {
     *     // ... data to create a CaloriesLog
     *   }
     * })
     * 
     */
    create<T extends CaloriesLogCreateArgs>(args: SelectSubset<T, CaloriesLogCreateArgs<ExtArgs>>): Prisma__CaloriesLogClient<$Result.GetResult<Prisma.$CaloriesLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CaloriesLogs.
     * @param {CaloriesLogCreateManyArgs} args - Arguments to create many CaloriesLogs.
     * @example
     * // Create many CaloriesLogs
     * const caloriesLog = await prisma.caloriesLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaloriesLogCreateManyArgs>(args?: SelectSubset<T, CaloriesLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CaloriesLogs and returns the data saved in the database.
     * @param {CaloriesLogCreateManyAndReturnArgs} args - Arguments to create many CaloriesLogs.
     * @example
     * // Create many CaloriesLogs
     * const caloriesLog = await prisma.caloriesLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CaloriesLogs and only return the `id`
     * const caloriesLogWithIdOnly = await prisma.caloriesLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaloriesLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CaloriesLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaloriesLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CaloriesLog.
     * @param {CaloriesLogDeleteArgs} args - Arguments to delete one CaloriesLog.
     * @example
     * // Delete one CaloriesLog
     * const CaloriesLog = await prisma.caloriesLog.delete({
     *   where: {
     *     // ... filter to delete one CaloriesLog
     *   }
     * })
     * 
     */
    delete<T extends CaloriesLogDeleteArgs>(args: SelectSubset<T, CaloriesLogDeleteArgs<ExtArgs>>): Prisma__CaloriesLogClient<$Result.GetResult<Prisma.$CaloriesLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CaloriesLog.
     * @param {CaloriesLogUpdateArgs} args - Arguments to update one CaloriesLog.
     * @example
     * // Update one CaloriesLog
     * const caloriesLog = await prisma.caloriesLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaloriesLogUpdateArgs>(args: SelectSubset<T, CaloriesLogUpdateArgs<ExtArgs>>): Prisma__CaloriesLogClient<$Result.GetResult<Prisma.$CaloriesLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CaloriesLogs.
     * @param {CaloriesLogDeleteManyArgs} args - Arguments to filter CaloriesLogs to delete.
     * @example
     * // Delete a few CaloriesLogs
     * const { count } = await prisma.caloriesLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaloriesLogDeleteManyArgs>(args?: SelectSubset<T, CaloriesLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaloriesLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaloriesLogs
     * const caloriesLog = await prisma.caloriesLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaloriesLogUpdateManyArgs>(args: SelectSubset<T, CaloriesLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CaloriesLog.
     * @param {CaloriesLogUpsertArgs} args - Arguments to update or create a CaloriesLog.
     * @example
     * // Update or create a CaloriesLog
     * const caloriesLog = await prisma.caloriesLog.upsert({
     *   create: {
     *     // ... data to create a CaloriesLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaloriesLog we want to update
     *   }
     * })
     */
    upsert<T extends CaloriesLogUpsertArgs>(args: SelectSubset<T, CaloriesLogUpsertArgs<ExtArgs>>): Prisma__CaloriesLogClient<$Result.GetResult<Prisma.$CaloriesLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CaloriesLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesLogCountArgs} args - Arguments to filter CaloriesLogs to count.
     * @example
     * // Count the number of CaloriesLogs
     * const count = await prisma.caloriesLog.count({
     *   where: {
     *     // ... the filter for the CaloriesLogs we want to count
     *   }
     * })
    **/
    count<T extends CaloriesLogCountArgs>(
      args?: Subset<T, CaloriesLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaloriesLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaloriesLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaloriesLogAggregateArgs>(args: Subset<T, CaloriesLogAggregateArgs>): Prisma.PrismaPromise<GetCaloriesLogAggregateType<T>>

    /**
     * Group by CaloriesLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaloriesLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaloriesLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaloriesLogGroupByArgs['orderBy'] }
        : { orderBy?: CaloriesLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaloriesLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaloriesLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaloriesLog model
   */
  readonly fields: CaloriesLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaloriesLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaloriesLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    mealRelation<T extends CaloriesLog$mealRelationArgs<ExtArgs> = {}>(args?: Subset<T, CaloriesLog$mealRelationArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CaloriesLog model
   */ 
  interface CaloriesLogFieldRefs {
    readonly id: FieldRef<"CaloriesLog", 'String'>
    readonly userId: FieldRef<"CaloriesLog", 'String'>
    readonly mealId: FieldRef<"CaloriesLog", 'String'>
    readonly date: FieldRef<"CaloriesLog", 'DateTime'>
    readonly meal: FieldRef<"CaloriesLog", 'String'>
    readonly foodName: FieldRef<"CaloriesLog", 'String'>
    readonly quantity: FieldRef<"CaloriesLog", 'Float'>
    readonly totalCalories: FieldRef<"CaloriesLog", 'Float'>
    readonly totalProtein: FieldRef<"CaloriesLog", 'Float'>
    readonly totalCarbs: FieldRef<"CaloriesLog", 'Float'>
    readonly totalFat: FieldRef<"CaloriesLog", 'Float'>
    readonly createdAt: FieldRef<"CaloriesLog", 'DateTime'>
    readonly updated_at: FieldRef<"CaloriesLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CaloriesLog findUnique
   */
  export type CaloriesLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogInclude<ExtArgs> | null
    /**
     * Filter, which CaloriesLog to fetch.
     */
    where: CaloriesLogWhereUniqueInput
  }

  /**
   * CaloriesLog findUniqueOrThrow
   */
  export type CaloriesLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogInclude<ExtArgs> | null
    /**
     * Filter, which CaloriesLog to fetch.
     */
    where: CaloriesLogWhereUniqueInput
  }

  /**
   * CaloriesLog findFirst
   */
  export type CaloriesLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogInclude<ExtArgs> | null
    /**
     * Filter, which CaloriesLog to fetch.
     */
    where?: CaloriesLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaloriesLogs to fetch.
     */
    orderBy?: CaloriesLogOrderByWithRelationInput | CaloriesLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaloriesLogs.
     */
    cursor?: CaloriesLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaloriesLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaloriesLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaloriesLogs.
     */
    distinct?: CaloriesLogScalarFieldEnum | CaloriesLogScalarFieldEnum[]
  }

  /**
   * CaloriesLog findFirstOrThrow
   */
  export type CaloriesLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogInclude<ExtArgs> | null
    /**
     * Filter, which CaloriesLog to fetch.
     */
    where?: CaloriesLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaloriesLogs to fetch.
     */
    orderBy?: CaloriesLogOrderByWithRelationInput | CaloriesLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaloriesLogs.
     */
    cursor?: CaloriesLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaloriesLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaloriesLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaloriesLogs.
     */
    distinct?: CaloriesLogScalarFieldEnum | CaloriesLogScalarFieldEnum[]
  }

  /**
   * CaloriesLog findMany
   */
  export type CaloriesLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogInclude<ExtArgs> | null
    /**
     * Filter, which CaloriesLogs to fetch.
     */
    where?: CaloriesLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaloriesLogs to fetch.
     */
    orderBy?: CaloriesLogOrderByWithRelationInput | CaloriesLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaloriesLogs.
     */
    cursor?: CaloriesLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaloriesLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaloriesLogs.
     */
    skip?: number
    distinct?: CaloriesLogScalarFieldEnum | CaloriesLogScalarFieldEnum[]
  }

  /**
   * CaloriesLog create
   */
  export type CaloriesLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogInclude<ExtArgs> | null
    /**
     * The data needed to create a CaloriesLog.
     */
    data: XOR<CaloriesLogCreateInput, CaloriesLogUncheckedCreateInput>
  }

  /**
   * CaloriesLog createMany
   */
  export type CaloriesLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaloriesLogs.
     */
    data: CaloriesLogCreateManyInput | CaloriesLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CaloriesLog createManyAndReturn
   */
  export type CaloriesLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CaloriesLogs.
     */
    data: CaloriesLogCreateManyInput | CaloriesLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CaloriesLog update
   */
  export type CaloriesLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogInclude<ExtArgs> | null
    /**
     * The data needed to update a CaloriesLog.
     */
    data: XOR<CaloriesLogUpdateInput, CaloriesLogUncheckedUpdateInput>
    /**
     * Choose, which CaloriesLog to update.
     */
    where: CaloriesLogWhereUniqueInput
  }

  /**
   * CaloriesLog updateMany
   */
  export type CaloriesLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaloriesLogs.
     */
    data: XOR<CaloriesLogUpdateManyMutationInput, CaloriesLogUncheckedUpdateManyInput>
    /**
     * Filter which CaloriesLogs to update
     */
    where?: CaloriesLogWhereInput
  }

  /**
   * CaloriesLog upsert
   */
  export type CaloriesLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogInclude<ExtArgs> | null
    /**
     * The filter to search for the CaloriesLog to update in case it exists.
     */
    where: CaloriesLogWhereUniqueInput
    /**
     * In case the CaloriesLog found by the `where` argument doesn't exist, create a new CaloriesLog with this data.
     */
    create: XOR<CaloriesLogCreateInput, CaloriesLogUncheckedCreateInput>
    /**
     * In case the CaloriesLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaloriesLogUpdateInput, CaloriesLogUncheckedUpdateInput>
  }

  /**
   * CaloriesLog delete
   */
  export type CaloriesLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogInclude<ExtArgs> | null
    /**
     * Filter which CaloriesLog to delete.
     */
    where: CaloriesLogWhereUniqueInput
  }

  /**
   * CaloriesLog deleteMany
   */
  export type CaloriesLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaloriesLogs to delete
     */
    where?: CaloriesLogWhereInput
  }

  /**
   * CaloriesLog.mealRelation
   */
  export type CaloriesLog$mealRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
  }

  /**
   * CaloriesLog without action
   */
  export type CaloriesLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaloriesLog
     */
    select?: CaloriesLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaloriesLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    isActive: 'isActive'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone_no: 'phone_no',
    password: 'password',
    name: 'name',
    roleId: 'roleId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    refreshToken: 'refreshToken',
    device_type: 'device_type',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    is_online: 'is_online',
    firebase_key: 'firebase_key',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    last_seen: 'last_seen'
  };

  export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gender: 'gender',
    birthDate: 'birthDate',
    heightCm: 'heightCm',
    weightLb: 'weightLb',
    goalWeight: 'goalWeight',
    activityLvl: 'activityLvl'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logId: 'logId'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const MealItemScalarFieldEnum: {
    id: 'id',
    mealId: 'mealId',
    foodId: 'foodId',
    quantity: 'quantity',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MealItemScalarFieldEnum = (typeof MealItemScalarFieldEnum)[keyof typeof MealItemScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    caloriesBurnedPerMin: 'caloriesBurnedPerMin',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const DailyLogScalarFieldEnum: {
    id: 'id',
    date: 'date',
    userId: 'userId'
  };

  export type DailyLogScalarFieldEnum = (typeof DailyLogScalarFieldEnum)[keyof typeof DailyLogScalarFieldEnum]


  export const WorkoutLogScalarFieldEnum: {
    id: 'id',
    dailyLogId: 'dailyLogId',
    userId: 'userId',
    exerciseId: 'exerciseId',
    durationMin: 'durationMin',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WorkoutLogScalarFieldEnum = (typeof WorkoutLogScalarFieldEnum)[keyof typeof WorkoutLogScalarFieldEnum]


  export const WaterLogScalarFieldEnum: {
    id: 'id',
    date: 'date',
    userId: 'userId',
    amount: 'amount',
    totalCalories: 'totalCalories'
  };

  export type WaterLogScalarFieldEnum = (typeof WaterLogScalarFieldEnum)[keyof typeof WaterLogScalarFieldEnum]


  export const WeightLogScalarFieldEnum: {
    id: 'id',
    date: 'date',
    userId: 'userId',
    weightLb: 'weightLb',
    totalBurnCalories: 'totalBurnCalories'
  };

  export type WeightLogScalarFieldEnum = (typeof WeightLogScalarFieldEnum)[keyof typeof WeightLogScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat',
    servingSize: 'servingSize',
    unit: 'unit',
    food_image: 'food_image',
    created_at: 'created_at',
    updated_at: 'updated_at',
    userId: 'userId'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const CaloriesLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mealId: 'mealId',
    date: 'date',
    meal: 'meal',
    foodName: 'foodName',
    quantity: 'quantity',
    totalCalories: 'totalCalories',
    totalProtein: 'totalProtein',
    totalCarbs: 'totalCarbs',
    totalFat: 'totalFat',
    createdAt: 'createdAt',
    updated_at: 'updated_at'
  };

  export type CaloriesLogScalarFieldEnum = (typeof CaloriesLogScalarFieldEnum)[keyof typeof CaloriesLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ActivityLevel'
   */
  export type EnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel'>
    


  /**
   * Reference to a field of type 'ActivityLevel[]'
   */
  export type ListEnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel[]'>
    


  /**
   * Reference to a field of type 'Unit'
   */
  export type EnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unit'>
    


  /**
   * Reference to a field of type 'Unit[]'
   */
  export type ListEnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unit[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    created_at?: DateTimeFilter<"Role"> | Date | string
    isActive?: BoolFilter<"Role"> | boolean
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    isActive?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    created_at?: DateTimeFilter<"Role"> | Date | string
    isActive?: BoolFilter<"Role"> | boolean
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    isActive?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    created_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Role"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone_no?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
    dailyLogs?: DailyLogListRelationFilter
    workoutLogs?: WorkoutLogListRelationFilter
    waterLogs?: WaterLogListRelationFilter
    weightLogs?: WeightLogListRelationFilter
    userSession?: XOR<UserSessionNullableRelationFilter, UserSessionWhereInput> | null
    food?: FoodListRelationFilter
    items?: MealItemListRelationFilter
    caloriesLogs?: CaloriesLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_no?: SortOrderInput | SortOrder
    password?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: RoleOrderByWithRelationInput
    profile?: ProfileOrderByWithRelationInput
    dailyLogs?: DailyLogOrderByRelationAggregateInput
    workoutLogs?: WorkoutLogOrderByRelationAggregateInput
    waterLogs?: WaterLogOrderByRelationAggregateInput
    weightLogs?: WeightLogOrderByRelationAggregateInput
    userSession?: UserSessionOrderByWithRelationInput
    food?: FoodOrderByRelationAggregateInput
    items?: MealItemOrderByRelationAggregateInput
    caloriesLogs?: CaloriesLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_no?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null
    dailyLogs?: DailyLogListRelationFilter
    workoutLogs?: WorkoutLogListRelationFilter
    waterLogs?: WaterLogListRelationFilter
    weightLogs?: WeightLogListRelationFilter
    userSession?: XOR<UserSessionNullableRelationFilter, UserSessionWhereInput> | null
    food?: FoodListRelationFilter
    items?: MealItemListRelationFilter
    caloriesLogs?: CaloriesLogListRelationFilter
  }, "id" | "email" | "phone_no">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_no?: SortOrderInput | SortOrder
    password?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone_no?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    roleId?: IntWithAggregatesFilter<"User"> | number
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserSessionWhereInput = {
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    id?: StringFilter<"UserSession"> | string
    userId?: StringFilter<"UserSession"> | string
    refreshToken?: StringFilter<"UserSession"> | string
    device_type?: StringFilter<"UserSession"> | string
    userAgent?: StringFilter<"UserSession"> | string
    ipAddress?: StringNullableFilter<"UserSession"> | string | null
    is_online?: BoolFilter<"UserSession"> | boolean
    firebase_key?: StringNullableFilter<"UserSession"> | string | null
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeFilter<"UserSession"> | Date | string
    last_seen?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    device_type?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    is_online?: SortOrder
    firebase_key?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    last_seen?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    refreshToken?: StringFilter<"UserSession"> | string
    device_type?: StringFilter<"UserSession"> | string
    userAgent?: StringFilter<"UserSession"> | string
    ipAddress?: StringNullableFilter<"UserSession"> | string | null
    is_online?: BoolFilter<"UserSession"> | boolean
    firebase_key?: StringNullableFilter<"UserSession"> | string | null
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeFilter<"UserSession"> | Date | string
    last_seen?: DateTimeNullableFilter<"UserSession"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    device_type?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    is_online?: SortOrder
    firebase_key?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    last_seen?: SortOrderInput | SortOrder
    _count?: UserSessionCountOrderByAggregateInput
    _max?: UserSessionMaxOrderByAggregateInput
    _min?: UserSessionMinOrderByAggregateInput
  }

  export type UserSessionScalarWhereWithAggregatesInput = {
    AND?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    OR?: UserSessionScalarWhereWithAggregatesInput[]
    NOT?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSession"> | string
    userId?: StringWithAggregatesFilter<"UserSession"> | string
    refreshToken?: StringWithAggregatesFilter<"UserSession"> | string
    device_type?: StringWithAggregatesFilter<"UserSession"> | string
    userAgent?: StringWithAggregatesFilter<"UserSession"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    is_online?: BoolWithAggregatesFilter<"UserSession"> | boolean
    firebase_key?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
    last_seen?: DateTimeNullableWithAggregatesFilter<"UserSession"> | Date | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    userId?: StringFilter<"Profile"> | string
    gender?: EnumGenderNullableFilter<"Profile"> | $Enums.Gender | null
    birthDate?: DateTimeNullableFilter<"Profile"> | Date | string | null
    heightCm?: FloatNullableFilter<"Profile"> | number | null
    weightLb?: FloatNullableFilter<"Profile"> | number | null
    goalWeight?: FloatNullableFilter<"Profile"> | number | null
    activityLvl?: EnumActivityLevelFilter<"Profile"> | $Enums.ActivityLevel
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    weightLb?: SortOrderInput | SortOrder
    goalWeight?: SortOrderInput | SortOrder
    activityLvl?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    gender?: EnumGenderNullableFilter<"Profile"> | $Enums.Gender | null
    birthDate?: DateTimeNullableFilter<"Profile"> | Date | string | null
    heightCm?: FloatNullableFilter<"Profile"> | number | null
    weightLb?: FloatNullableFilter<"Profile"> | number | null
    goalWeight?: FloatNullableFilter<"Profile"> | number | null
    activityLvl?: EnumActivityLevelFilter<"Profile"> | $Enums.ActivityLevel
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    weightLb?: SortOrderInput | SortOrder
    goalWeight?: SortOrderInput | SortOrder
    activityLvl?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    userId?: StringWithAggregatesFilter<"Profile"> | string
    gender?: EnumGenderNullableWithAggregatesFilter<"Profile"> | $Enums.Gender | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    heightCm?: FloatNullableWithAggregatesFilter<"Profile"> | number | null
    weightLb?: FloatNullableWithAggregatesFilter<"Profile"> | number | null
    goalWeight?: FloatNullableWithAggregatesFilter<"Profile"> | number | null
    activityLvl?: EnumActivityLevelWithAggregatesFilter<"Profile"> | $Enums.ActivityLevel
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    logId?: StringFilter<"Meal"> | string
    dailyLog?: XOR<DailyLogRelationFilter, DailyLogWhereInput>
    items?: MealItemListRelationFilter
    caloriesLogs?: CaloriesLogListRelationFilter
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logId?: SortOrder
    dailyLog?: DailyLogOrderByWithRelationInput
    items?: MealItemOrderByRelationAggregateInput
    caloriesLogs?: CaloriesLogOrderByRelationAggregateInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    name?: StringFilter<"Meal"> | string
    logId?: StringFilter<"Meal"> | string
    dailyLog?: XOR<DailyLogRelationFilter, DailyLogWhereInput>
    items?: MealItemListRelationFilter
    caloriesLogs?: CaloriesLogListRelationFilter
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logId?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meal"> | string
    name?: StringWithAggregatesFilter<"Meal"> | string
    logId?: StringWithAggregatesFilter<"Meal"> | string
  }

  export type MealItemWhereInput = {
    AND?: MealItemWhereInput | MealItemWhereInput[]
    OR?: MealItemWhereInput[]
    NOT?: MealItemWhereInput | MealItemWhereInput[]
    id?: StringFilter<"MealItem"> | string
    mealId?: StringFilter<"MealItem"> | string
    foodId?: StringFilter<"MealItem"> | string
    quantity?: FloatFilter<"MealItem"> | number
    userId?: StringFilter<"MealItem"> | string
    createdAt?: DateTimeFilter<"MealItem"> | Date | string
    updatedAt?: DateTimeFilter<"MealItem"> | Date | string
    meal?: XOR<MealRelationFilter, MealWhereInput>
    food?: XOR<FoodRelationFilter, FoodWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MealItemOrderByWithRelationInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meal?: MealOrderByWithRelationInput
    food?: FoodOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MealItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealItemWhereInput | MealItemWhereInput[]
    OR?: MealItemWhereInput[]
    NOT?: MealItemWhereInput | MealItemWhereInput[]
    mealId?: StringFilter<"MealItem"> | string
    foodId?: StringFilter<"MealItem"> | string
    quantity?: FloatFilter<"MealItem"> | number
    userId?: StringFilter<"MealItem"> | string
    createdAt?: DateTimeFilter<"MealItem"> | Date | string
    updatedAt?: DateTimeFilter<"MealItem"> | Date | string
    meal?: XOR<MealRelationFilter, MealWhereInput>
    food?: XOR<FoodRelationFilter, FoodWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MealItemOrderByWithAggregationInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MealItemCountOrderByAggregateInput
    _avg?: MealItemAvgOrderByAggregateInput
    _max?: MealItemMaxOrderByAggregateInput
    _min?: MealItemMinOrderByAggregateInput
    _sum?: MealItemSumOrderByAggregateInput
  }

  export type MealItemScalarWhereWithAggregatesInput = {
    AND?: MealItemScalarWhereWithAggregatesInput | MealItemScalarWhereWithAggregatesInput[]
    OR?: MealItemScalarWhereWithAggregatesInput[]
    NOT?: MealItemScalarWhereWithAggregatesInput | MealItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealItem"> | string
    mealId?: StringWithAggregatesFilter<"MealItem"> | string
    foodId?: StringWithAggregatesFilter<"MealItem"> | string
    quantity?: FloatWithAggregatesFilter<"MealItem"> | number
    userId?: StringWithAggregatesFilter<"MealItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MealItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MealItem"> | Date | string
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: IntFilter<"Exercise"> | number
    name?: StringFilter<"Exercise"> | string
    caloriesBurnedPerMin?: FloatFilter<"Exercise"> | number
    created_at?: DateTimeFilter<"Exercise"> | Date | string
    updated_at?: DateTimeFilter<"Exercise"> | Date | string
    workoutLogs?: WorkoutLogListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    caloriesBurnedPerMin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    workoutLogs?: WorkoutLogOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    caloriesBurnedPerMin?: FloatFilter<"Exercise"> | number
    created_at?: DateTimeFilter<"Exercise"> | Date | string
    updated_at?: DateTimeFilter<"Exercise"> | Date | string
    workoutLogs?: WorkoutLogListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    caloriesBurnedPerMin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exercise"> | number
    name?: StringWithAggregatesFilter<"Exercise"> | string
    caloriesBurnedPerMin?: FloatWithAggregatesFilter<"Exercise"> | number
    created_at?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
  }

  export type DailyLogWhereInput = {
    AND?: DailyLogWhereInput | DailyLogWhereInput[]
    OR?: DailyLogWhereInput[]
    NOT?: DailyLogWhereInput | DailyLogWhereInput[]
    id?: StringFilter<"DailyLog"> | string
    date?: DateTimeFilter<"DailyLog"> | Date | string
    userId?: StringFilter<"DailyLog"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    meals?: MealListRelationFilter
    workoutLogs?: WorkoutLogListRelationFilter
  }

  export type DailyLogOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    meals?: MealOrderByRelationAggregateInput
    workoutLogs?: WorkoutLogOrderByRelationAggregateInput
  }

  export type DailyLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyLogWhereInput | DailyLogWhereInput[]
    OR?: DailyLogWhereInput[]
    NOT?: DailyLogWhereInput | DailyLogWhereInput[]
    date?: DateTimeFilter<"DailyLog"> | Date | string
    userId?: StringFilter<"DailyLog"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    meals?: MealListRelationFilter
    workoutLogs?: WorkoutLogListRelationFilter
  }, "id">

  export type DailyLogOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    _count?: DailyLogCountOrderByAggregateInput
    _max?: DailyLogMaxOrderByAggregateInput
    _min?: DailyLogMinOrderByAggregateInput
  }

  export type DailyLogScalarWhereWithAggregatesInput = {
    AND?: DailyLogScalarWhereWithAggregatesInput | DailyLogScalarWhereWithAggregatesInput[]
    OR?: DailyLogScalarWhereWithAggregatesInput[]
    NOT?: DailyLogScalarWhereWithAggregatesInput | DailyLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyLog"> | string
    date?: DateTimeWithAggregatesFilter<"DailyLog"> | Date | string
    userId?: StringWithAggregatesFilter<"DailyLog"> | string
  }

  export type WorkoutLogWhereInput = {
    AND?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    OR?: WorkoutLogWhereInput[]
    NOT?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    id?: StringFilter<"WorkoutLog"> | string
    dailyLogId?: StringFilter<"WorkoutLog"> | string
    userId?: StringFilter<"WorkoutLog"> | string
    exerciseId?: IntFilter<"WorkoutLog"> | number
    durationMin?: FloatFilter<"WorkoutLog"> | number
    created_at?: DateTimeFilter<"WorkoutLog"> | Date | string
    updated_at?: DateTimeFilter<"WorkoutLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    exercise?: XOR<ExerciseRelationFilter, ExerciseWhereInput>
    dailyLog?: XOR<DailyLogRelationFilter, DailyLogWhereInput>
  }

  export type WorkoutLogOrderByWithRelationInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    durationMin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
    dailyLog?: DailyLogOrderByWithRelationInput
  }

  export type WorkoutLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    OR?: WorkoutLogWhereInput[]
    NOT?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    dailyLogId?: StringFilter<"WorkoutLog"> | string
    userId?: StringFilter<"WorkoutLog"> | string
    exerciseId?: IntFilter<"WorkoutLog"> | number
    durationMin?: FloatFilter<"WorkoutLog"> | number
    created_at?: DateTimeFilter<"WorkoutLog"> | Date | string
    updated_at?: DateTimeFilter<"WorkoutLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    exercise?: XOR<ExerciseRelationFilter, ExerciseWhereInput>
    dailyLog?: XOR<DailyLogRelationFilter, DailyLogWhereInput>
  }, "id">

  export type WorkoutLogOrderByWithAggregationInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    durationMin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WorkoutLogCountOrderByAggregateInput
    _avg?: WorkoutLogAvgOrderByAggregateInput
    _max?: WorkoutLogMaxOrderByAggregateInput
    _min?: WorkoutLogMinOrderByAggregateInput
    _sum?: WorkoutLogSumOrderByAggregateInput
  }

  export type WorkoutLogScalarWhereWithAggregatesInput = {
    AND?: WorkoutLogScalarWhereWithAggregatesInput | WorkoutLogScalarWhereWithAggregatesInput[]
    OR?: WorkoutLogScalarWhereWithAggregatesInput[]
    NOT?: WorkoutLogScalarWhereWithAggregatesInput | WorkoutLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutLog"> | string
    dailyLogId?: StringWithAggregatesFilter<"WorkoutLog"> | string
    userId?: StringWithAggregatesFilter<"WorkoutLog"> | string
    exerciseId?: IntWithAggregatesFilter<"WorkoutLog"> | number
    durationMin?: FloatWithAggregatesFilter<"WorkoutLog"> | number
    created_at?: DateTimeWithAggregatesFilter<"WorkoutLog"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"WorkoutLog"> | Date | string
  }

  export type WaterLogWhereInput = {
    AND?: WaterLogWhereInput | WaterLogWhereInput[]
    OR?: WaterLogWhereInput[]
    NOT?: WaterLogWhereInput | WaterLogWhereInput[]
    id?: StringFilter<"WaterLog"> | string
    date?: DateTimeFilter<"WaterLog"> | Date | string
    userId?: StringFilter<"WaterLog"> | string
    amount?: FloatFilter<"WaterLog"> | number
    totalCalories?: FloatNullableFilter<"WaterLog"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WaterLogOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    totalCalories?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WaterLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WaterLogWhereInput | WaterLogWhereInput[]
    OR?: WaterLogWhereInput[]
    NOT?: WaterLogWhereInput | WaterLogWhereInput[]
    date?: DateTimeFilter<"WaterLog"> | Date | string
    userId?: StringFilter<"WaterLog"> | string
    amount?: FloatFilter<"WaterLog"> | number
    totalCalories?: FloatNullableFilter<"WaterLog"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type WaterLogOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    totalCalories?: SortOrderInput | SortOrder
    _count?: WaterLogCountOrderByAggregateInput
    _avg?: WaterLogAvgOrderByAggregateInput
    _max?: WaterLogMaxOrderByAggregateInput
    _min?: WaterLogMinOrderByAggregateInput
    _sum?: WaterLogSumOrderByAggregateInput
  }

  export type WaterLogScalarWhereWithAggregatesInput = {
    AND?: WaterLogScalarWhereWithAggregatesInput | WaterLogScalarWhereWithAggregatesInput[]
    OR?: WaterLogScalarWhereWithAggregatesInput[]
    NOT?: WaterLogScalarWhereWithAggregatesInput | WaterLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaterLog"> | string
    date?: DateTimeWithAggregatesFilter<"WaterLog"> | Date | string
    userId?: StringWithAggregatesFilter<"WaterLog"> | string
    amount?: FloatWithAggregatesFilter<"WaterLog"> | number
    totalCalories?: FloatNullableWithAggregatesFilter<"WaterLog"> | number | null
  }

  export type WeightLogWhereInput = {
    AND?: WeightLogWhereInput | WeightLogWhereInput[]
    OR?: WeightLogWhereInput[]
    NOT?: WeightLogWhereInput | WeightLogWhereInput[]
    id?: StringFilter<"WeightLog"> | string
    date?: DateTimeFilter<"WeightLog"> | Date | string
    userId?: StringFilter<"WeightLog"> | string
    weightLb?: FloatNullableFilter<"WeightLog"> | number | null
    totalBurnCalories?: FloatNullableFilter<"WeightLog"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WeightLogOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    weightLb?: SortOrderInput | SortOrder
    totalBurnCalories?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WeightLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: WeightLogUserIdDateCompoundUniqueInput
    AND?: WeightLogWhereInput | WeightLogWhereInput[]
    OR?: WeightLogWhereInput[]
    NOT?: WeightLogWhereInput | WeightLogWhereInput[]
    date?: DateTimeFilter<"WeightLog"> | Date | string
    userId?: StringFilter<"WeightLog"> | string
    weightLb?: FloatNullableFilter<"WeightLog"> | number | null
    totalBurnCalories?: FloatNullableFilter<"WeightLog"> | number | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type WeightLogOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    weightLb?: SortOrderInput | SortOrder
    totalBurnCalories?: SortOrderInput | SortOrder
    _count?: WeightLogCountOrderByAggregateInput
    _avg?: WeightLogAvgOrderByAggregateInput
    _max?: WeightLogMaxOrderByAggregateInput
    _min?: WeightLogMinOrderByAggregateInput
    _sum?: WeightLogSumOrderByAggregateInput
  }

  export type WeightLogScalarWhereWithAggregatesInput = {
    AND?: WeightLogScalarWhereWithAggregatesInput | WeightLogScalarWhereWithAggregatesInput[]
    OR?: WeightLogScalarWhereWithAggregatesInput[]
    NOT?: WeightLogScalarWhereWithAggregatesInput | WeightLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeightLog"> | string
    date?: DateTimeWithAggregatesFilter<"WeightLog"> | Date | string
    userId?: StringWithAggregatesFilter<"WeightLog"> | string
    weightLb?: FloatNullableWithAggregatesFilter<"WeightLog"> | number | null
    totalBurnCalories?: FloatNullableWithAggregatesFilter<"WeightLog"> | number | null
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: StringFilter<"Food"> | string
    name?: StringFilter<"Food"> | string
    calories?: FloatFilter<"Food"> | number
    protein?: FloatFilter<"Food"> | number
    carbs?: FloatFilter<"Food"> | number
    fat?: FloatFilter<"Food"> | number
    servingSize?: FloatFilter<"Food"> | number
    unit?: EnumUnitFilter<"Food"> | $Enums.Unit
    food_image?: StringNullableFilter<"Food"> | string | null
    created_at?: DateTimeFilter<"Food"> | Date | string
    updated_at?: DateTimeFilter<"Food"> | Date | string
    userId?: StringFilter<"Food"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    mealItems?: MealItemListRelationFilter
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
    unit?: SortOrder
    food_image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    mealItems?: MealItemOrderByRelationAggregateInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    name?: StringFilter<"Food"> | string
    calories?: FloatFilter<"Food"> | number
    protein?: FloatFilter<"Food"> | number
    carbs?: FloatFilter<"Food"> | number
    fat?: FloatFilter<"Food"> | number
    servingSize?: FloatFilter<"Food"> | number
    unit?: EnumUnitFilter<"Food"> | $Enums.Unit
    food_image?: StringNullableFilter<"Food"> | string | null
    created_at?: DateTimeFilter<"Food"> | Date | string
    updated_at?: DateTimeFilter<"Food"> | Date | string
    userId?: StringFilter<"Food"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    mealItems?: MealItemListRelationFilter
  }, "id">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
    unit?: SortOrder
    food_image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userId?: SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Food"> | string
    name?: StringWithAggregatesFilter<"Food"> | string
    calories?: FloatWithAggregatesFilter<"Food"> | number
    protein?: FloatWithAggregatesFilter<"Food"> | number
    carbs?: FloatWithAggregatesFilter<"Food"> | number
    fat?: FloatWithAggregatesFilter<"Food"> | number
    servingSize?: FloatWithAggregatesFilter<"Food"> | number
    unit?: EnumUnitWithAggregatesFilter<"Food"> | $Enums.Unit
    food_image?: StringNullableWithAggregatesFilter<"Food"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    userId?: StringWithAggregatesFilter<"Food"> | string
  }

  export type CaloriesLogWhereInput = {
    AND?: CaloriesLogWhereInput | CaloriesLogWhereInput[]
    OR?: CaloriesLogWhereInput[]
    NOT?: CaloriesLogWhereInput | CaloriesLogWhereInput[]
    id?: StringFilter<"CaloriesLog"> | string
    userId?: StringFilter<"CaloriesLog"> | string
    mealId?: StringNullableFilter<"CaloriesLog"> | string | null
    date?: DateTimeFilter<"CaloriesLog"> | Date | string
    meal?: StringFilter<"CaloriesLog"> | string
    foodName?: StringFilter<"CaloriesLog"> | string
    quantity?: FloatFilter<"CaloriesLog"> | number
    totalCalories?: FloatFilter<"CaloriesLog"> | number
    totalProtein?: FloatNullableFilter<"CaloriesLog"> | number | null
    totalCarbs?: FloatNullableFilter<"CaloriesLog"> | number | null
    totalFat?: FloatNullableFilter<"CaloriesLog"> | number | null
    createdAt?: DateTimeFilter<"CaloriesLog"> | Date | string
    updated_at?: DateTimeFilter<"CaloriesLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    mealRelation?: XOR<MealNullableRelationFilter, MealWhereInput> | null
  }

  export type CaloriesLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mealId?: SortOrderInput | SortOrder
    date?: SortOrder
    meal?: SortOrder
    foodName?: SortOrder
    quantity?: SortOrder
    totalCalories?: SortOrder
    totalProtein?: SortOrderInput | SortOrder
    totalCarbs?: SortOrderInput | SortOrder
    totalFat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    mealRelation?: MealOrderByWithRelationInput
  }

  export type CaloriesLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CaloriesLogWhereInput | CaloriesLogWhereInput[]
    OR?: CaloriesLogWhereInput[]
    NOT?: CaloriesLogWhereInput | CaloriesLogWhereInput[]
    userId?: StringFilter<"CaloriesLog"> | string
    mealId?: StringNullableFilter<"CaloriesLog"> | string | null
    date?: DateTimeFilter<"CaloriesLog"> | Date | string
    meal?: StringFilter<"CaloriesLog"> | string
    foodName?: StringFilter<"CaloriesLog"> | string
    quantity?: FloatFilter<"CaloriesLog"> | number
    totalCalories?: FloatFilter<"CaloriesLog"> | number
    totalProtein?: FloatNullableFilter<"CaloriesLog"> | number | null
    totalCarbs?: FloatNullableFilter<"CaloriesLog"> | number | null
    totalFat?: FloatNullableFilter<"CaloriesLog"> | number | null
    createdAt?: DateTimeFilter<"CaloriesLog"> | Date | string
    updated_at?: DateTimeFilter<"CaloriesLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    mealRelation?: XOR<MealNullableRelationFilter, MealWhereInput> | null
  }, "id">

  export type CaloriesLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mealId?: SortOrderInput | SortOrder
    date?: SortOrder
    meal?: SortOrder
    foodName?: SortOrder
    quantity?: SortOrder
    totalCalories?: SortOrder
    totalProtein?: SortOrderInput | SortOrder
    totalCarbs?: SortOrderInput | SortOrder
    totalFat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updated_at?: SortOrder
    _count?: CaloriesLogCountOrderByAggregateInput
    _avg?: CaloriesLogAvgOrderByAggregateInput
    _max?: CaloriesLogMaxOrderByAggregateInput
    _min?: CaloriesLogMinOrderByAggregateInput
    _sum?: CaloriesLogSumOrderByAggregateInput
  }

  export type CaloriesLogScalarWhereWithAggregatesInput = {
    AND?: CaloriesLogScalarWhereWithAggregatesInput | CaloriesLogScalarWhereWithAggregatesInput[]
    OR?: CaloriesLogScalarWhereWithAggregatesInput[]
    NOT?: CaloriesLogScalarWhereWithAggregatesInput | CaloriesLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CaloriesLog"> | string
    userId?: StringWithAggregatesFilter<"CaloriesLog"> | string
    mealId?: StringNullableWithAggregatesFilter<"CaloriesLog"> | string | null
    date?: DateTimeWithAggregatesFilter<"CaloriesLog"> | Date | string
    meal?: StringWithAggregatesFilter<"CaloriesLog"> | string
    foodName?: StringWithAggregatesFilter<"CaloriesLog"> | string
    quantity?: FloatWithAggregatesFilter<"CaloriesLog"> | number
    totalCalories?: FloatWithAggregatesFilter<"CaloriesLog"> | number
    totalProtein?: FloatNullableWithAggregatesFilter<"CaloriesLog"> | number | null
    totalCarbs?: FloatNullableWithAggregatesFilter<"CaloriesLog"> | number | null
    totalFat?: FloatNullableWithAggregatesFilter<"CaloriesLog"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CaloriesLog"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CaloriesLog"> | Date | string
  }

  export type RoleCreateInput = {
    name: string
    created_at?: Date | string
    isActive?: boolean
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    isActive?: boolean
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    isActive?: boolean
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    userSession?: UserSessionCreateNestedOneWithoutUserInput
    food?: FoodCreateNestedManyWithoutUserInput
    items?: MealItemCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    userSession?: UserSessionUncheckedCreateNestedOneWithoutUserInput
    food?: FoodUncheckedCreateNestedManyWithoutUserInput
    items?: MealItemUncheckedCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUpdateOneWithoutUserNestedInput
    food?: FoodUpdateManyWithoutUserNestedInput
    items?: MealItemUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUncheckedUpdateOneWithoutUserNestedInput
    food?: FoodUncheckedUpdateManyWithoutUserNestedInput
    items?: MealItemUncheckedUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionCreateInput = {
    id?: string
    refreshToken: string
    device_type: string
    userAgent: string
    ipAddress?: string | null
    is_online?: boolean
    firebase_key?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    last_seen?: Date | string | null
    user: UserCreateNestedOneWithoutUserSessionInput
  }

  export type UserSessionUncheckedCreateInput = {
    id?: string
    userId: string
    refreshToken: string
    device_type: string
    userAgent: string
    ipAddress?: string | null
    is_online?: boolean
    firebase_key?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    last_seen?: Date | string | null
  }

  export type UserSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    is_online?: BoolFieldUpdateOperationsInput | boolean
    firebase_key?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserSessionNestedInput
  }

  export type UserSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    is_online?: BoolFieldUpdateOperationsInput | boolean
    firebase_key?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionCreateManyInput = {
    id?: string
    userId: string
    refreshToken: string
    device_type: string
    userAgent: string
    ipAddress?: string | null
    is_online?: boolean
    firebase_key?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    last_seen?: Date | string | null
  }

  export type UserSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    is_online?: BoolFieldUpdateOperationsInput | boolean
    firebase_key?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    is_online?: BoolFieldUpdateOperationsInput | boolean
    firebase_key?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileCreateInput = {
    id?: string
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    heightCm?: number | null
    weightLb?: number | null
    goalWeight?: number | null
    activityLvl?: $Enums.ActivityLevel
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: string
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    heightCm?: number | null
    weightLb?: number | null
    goalWeight?: number | null
    activityLvl?: $Enums.ActivityLevel
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    goalWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLvl?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    goalWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLvl?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: string
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    heightCm?: number | null
    weightLb?: number | null
    goalWeight?: number | null
    activityLvl?: $Enums.ActivityLevel
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    goalWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLvl?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    goalWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLvl?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
  }

  export type MealCreateInput = {
    id?: string
    name: string
    dailyLog: DailyLogCreateNestedOneWithoutMealsInput
    items?: MealItemCreateNestedManyWithoutMealInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutMealRelationInput
  }

  export type MealUncheckedCreateInput = {
    id?: string
    name: string
    logId: string
    items?: MealItemUncheckedCreateNestedManyWithoutMealInput
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutMealRelationInput
  }

  export type MealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dailyLog?: DailyLogUpdateOneRequiredWithoutMealsNestedInput
    items?: MealItemUpdateManyWithoutMealNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutMealRelationNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logId?: StringFieldUpdateOperationsInput | string
    items?: MealItemUncheckedUpdateManyWithoutMealNestedInput
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutMealRelationNestedInput
  }

  export type MealCreateManyInput = {
    id?: string
    name: string
    logId: string
  }

  export type MealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logId?: StringFieldUpdateOperationsInput | string
  }

  export type MealItemCreateInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meal: MealCreateNestedOneWithoutItemsInput
    food: FoodCreateNestedOneWithoutMealItemsInput
    user: UserCreateNestedOneWithoutItemsInput
  }

  export type MealItemUncheckedCreateInput = {
    id?: string
    mealId: string
    foodId: string
    quantity: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateOneRequiredWithoutItemsNestedInput
    food?: FoodUpdateOneRequiredWithoutMealItemsNestedInput
    user?: UserUpdateOneRequiredWithoutItemsNestedInput
  }

  export type MealItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealItemCreateManyInput = {
    id?: string
    mealId: string
    foodId: string
    quantity: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateInput = {
    name: string
    caloriesBurnedPerMin: number
    created_at?: Date | string
    updated_at?: Date | string
    workoutLogs?: WorkoutLogCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: number
    name: string
    caloriesBurnedPerMin: number
    created_at?: Date | string
    updated_at?: Date | string
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    caloriesBurnedPerMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutLogs?: WorkoutLogUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    caloriesBurnedPerMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: number
    name: string
    caloriesBurnedPerMin: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ExerciseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    caloriesBurnedPerMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    caloriesBurnedPerMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyLogCreateInput = {
    id?: string
    date: Date | string
    user: UserCreateNestedOneWithoutDailyLogsInput
    meals?: MealCreateNestedManyWithoutDailyLogInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogUncheckedCreateInput = {
    id?: string
    date: Date | string
    userId: string
    meals?: MealUncheckedCreateNestedManyWithoutDailyLogInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyLogsNestedInput
    meals?: MealUpdateManyWithoutDailyLogNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    meals?: MealUncheckedUpdateManyWithoutDailyLogNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogCreateManyInput = {
    id?: string
    date: Date | string
    userId: string
  }

  export type DailyLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutLogCreateInput = {
    id?: string
    durationMin: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutWorkoutLogsInput
    exercise: ExerciseCreateNestedOneWithoutWorkoutLogsInput
    dailyLog: DailyLogCreateNestedOneWithoutWorkoutLogsInput
  }

  export type WorkoutLogUncheckedCreateInput = {
    id?: string
    dailyLogId: string
    userId: string
    exerciseId: number
    durationMin: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkoutLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutLogsNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutLogsNestedInput
    dailyLog?: DailyLogUpdateOneRequiredWithoutWorkoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLogId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exerciseId?: IntFieldUpdateOperationsInput | number
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogCreateManyInput = {
    id?: string
    dailyLogId: string
    userId: string
    exerciseId: number
    durationMin: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkoutLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLogId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exerciseId?: IntFieldUpdateOperationsInput | number
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogCreateInput = {
    id?: string
    date: Date | string
    amount: number
    totalCalories?: number | null
    user: UserCreateNestedOneWithoutWaterLogsInput
  }

  export type WaterLogUncheckedCreateInput = {
    id?: string
    date: Date | string
    userId: string
    amount: number
    totalCalories?: number | null
  }

  export type WaterLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    totalCalories?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutWaterLogsNestedInput
  }

  export type WaterLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    totalCalories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WaterLogCreateManyInput = {
    id?: string
    date: Date | string
    userId: string
    amount: number
    totalCalories?: number | null
  }

  export type WaterLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    totalCalories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WaterLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    totalCalories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WeightLogCreateInput = {
    id?: string
    date: Date | string
    weightLb?: number | null
    totalBurnCalories?: number | null
    user: UserCreateNestedOneWithoutWeightLogsInput
  }

  export type WeightLogUncheckedCreateInput = {
    id?: string
    date: Date | string
    userId: string
    weightLb?: number | null
    totalBurnCalories?: number | null
  }

  export type WeightLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBurnCalories?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutWeightLogsNestedInput
  }

  export type WeightLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBurnCalories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WeightLogCreateManyInput = {
    id?: string
    date: Date | string
    userId: string
    weightLb?: number | null
    totalBurnCalories?: number | null
  }

  export type WeightLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBurnCalories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WeightLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBurnCalories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FoodCreateInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    unit: $Enums.Unit
    food_image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutFoodInput
    mealItems?: MealItemCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    unit: $Enums.Unit
    food_image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    userId: string
    mealItems?: MealItemUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    food_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoodNestedInput
    mealItems?: MealItemUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    food_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    mealItems?: MealItemUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateManyInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    unit: $Enums.Unit
    food_image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    userId: string
  }

  export type FoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    food_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    food_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CaloriesLogCreateInput = {
    id?: string
    date: Date | string
    meal: string
    foodName: string
    quantity: number
    totalCalories: number
    totalProtein?: number | null
    totalCarbs?: number | null
    totalFat?: number | null
    createdAt?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCaloriesLogsInput
    mealRelation?: MealCreateNestedOneWithoutCaloriesLogsInput
  }

  export type CaloriesLogUncheckedCreateInput = {
    id?: string
    userId: string
    mealId?: string | null
    date: Date | string
    meal: string
    foodName: string
    quantity: number
    totalCalories: number
    totalProtein?: number | null
    totalCarbs?: number | null
    totalFat?: number | null
    createdAt?: Date | string
    updated_at?: Date | string
  }

  export type CaloriesLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCarbs?: NullableFloatFieldUpdateOperationsInput | number | null
    totalFat?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCaloriesLogsNestedInput
    mealRelation?: MealUpdateOneWithoutCaloriesLogsNestedInput
  }

  export type CaloriesLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mealId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCarbs?: NullableFloatFieldUpdateOperationsInput | number | null
    totalFat?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaloriesLogCreateManyInput = {
    id?: string
    userId: string
    mealId?: string | null
    date: Date | string
    meal: string
    foodName: string
    quantity: number
    totalCalories: number
    totalProtein?: number | null
    totalCarbs?: number | null
    totalFat?: number | null
    createdAt?: Date | string
    updated_at?: Date | string
  }

  export type CaloriesLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCarbs?: NullableFloatFieldUpdateOperationsInput | number | null
    totalFat?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaloriesLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mealId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCarbs?: NullableFloatFieldUpdateOperationsInput | number | null
    totalFat?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    isActive?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    isActive?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    isActive?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type ProfileNullableRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type DailyLogListRelationFilter = {
    every?: DailyLogWhereInput
    some?: DailyLogWhereInput
    none?: DailyLogWhereInput
  }

  export type WorkoutLogListRelationFilter = {
    every?: WorkoutLogWhereInput
    some?: WorkoutLogWhereInput
    none?: WorkoutLogWhereInput
  }

  export type WaterLogListRelationFilter = {
    every?: WaterLogWhereInput
    some?: WaterLogWhereInput
    none?: WaterLogWhereInput
  }

  export type WeightLogListRelationFilter = {
    every?: WeightLogWhereInput
    some?: WeightLogWhereInput
    none?: WeightLogWhereInput
  }

  export type UserSessionNullableRelationFilter = {
    is?: UserSessionWhereInput | null
    isNot?: UserSessionWhereInput | null
  }

  export type FoodListRelationFilter = {
    every?: FoodWhereInput
    some?: FoodWhereInput
    none?: FoodWhereInput
  }

  export type MealItemListRelationFilter = {
    every?: MealItemWhereInput
    some?: MealItemWhereInput
    none?: MealItemWhereInput
  }

  export type CaloriesLogListRelationFilter = {
    every?: CaloriesLogWhereInput
    some?: CaloriesLogWhereInput
    none?: CaloriesLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DailyLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaterLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeightLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaloriesLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone_no?: SortOrder
    password?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    device_type?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    is_online?: SortOrder
    firebase_key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    last_seen?: SortOrder
  }

  export type UserSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    device_type?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    is_online?: SortOrder
    firebase_key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    last_seen?: SortOrder
  }

  export type UserSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    device_type?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    is_online?: SortOrder
    firebase_key?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    last_seen?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumActivityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelFilter<$PrismaModel> | $Enums.ActivityLevel
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    heightCm?: SortOrder
    weightLb?: SortOrder
    goalWeight?: SortOrder
    activityLvl?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    heightCm?: SortOrder
    weightLb?: SortOrder
    goalWeight?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    heightCm?: SortOrder
    weightLb?: SortOrder
    goalWeight?: SortOrder
    activityLvl?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    heightCm?: SortOrder
    weightLb?: SortOrder
    goalWeight?: SortOrder
    activityLvl?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    heightCm?: SortOrder
    weightLb?: SortOrder
    goalWeight?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumActivityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityLevelFilter<$PrismaModel>
    _max?: NestedEnumActivityLevelFilter<$PrismaModel>
  }

  export type DailyLogRelationFilter = {
    is?: DailyLogWhereInput
    isNot?: DailyLogWhereInput
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logId?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logId?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MealRelationFilter = {
    is?: MealWhereInput
    isNot?: MealWhereInput
  }

  export type FoodRelationFilter = {
    is?: FoodWhereInput
    isNot?: FoodWhereInput
  }

  export type MealItemCountOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type MealItemMaxOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealItemMinOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    caloriesBurnedPerMin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
    caloriesBurnedPerMin?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    caloriesBurnedPerMin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    caloriesBurnedPerMin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    id?: SortOrder
    caloriesBurnedPerMin?: SortOrder
  }

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyLogCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type DailyLogMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type DailyLogMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type ExerciseRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type WorkoutLogCountOrderByAggregateInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    durationMin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkoutLogAvgOrderByAggregateInput = {
    exerciseId?: SortOrder
    durationMin?: SortOrder
  }

  export type WorkoutLogMaxOrderByAggregateInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    durationMin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkoutLogMinOrderByAggregateInput = {
    id?: SortOrder
    dailyLogId?: SortOrder
    userId?: SortOrder
    exerciseId?: SortOrder
    durationMin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WorkoutLogSumOrderByAggregateInput = {
    exerciseId?: SortOrder
    durationMin?: SortOrder
  }

  export type WaterLogCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    totalCalories?: SortOrder
  }

  export type WaterLogAvgOrderByAggregateInput = {
    amount?: SortOrder
    totalCalories?: SortOrder
  }

  export type WaterLogMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    totalCalories?: SortOrder
  }

  export type WaterLogMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    totalCalories?: SortOrder
  }

  export type WaterLogSumOrderByAggregateInput = {
    amount?: SortOrder
    totalCalories?: SortOrder
  }

  export type WeightLogUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type WeightLogCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    weightLb?: SortOrder
    totalBurnCalories?: SortOrder
  }

  export type WeightLogAvgOrderByAggregateInput = {
    weightLb?: SortOrder
    totalBurnCalories?: SortOrder
  }

  export type WeightLogMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    weightLb?: SortOrder
    totalBurnCalories?: SortOrder
  }

  export type WeightLogMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    weightLb?: SortOrder
    totalBurnCalories?: SortOrder
  }

  export type WeightLogSumOrderByAggregateInput = {
    weightLb?: SortOrder
    totalBurnCalories?: SortOrder
  }

  export type EnumUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitFilter<$PrismaModel> | $Enums.Unit
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
    unit?: SortOrder
    food_image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userId?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
    unit?: SortOrder
    food_image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userId?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
    unit?: SortOrder
    food_image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userId?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
  }

  export type EnumUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitWithAggregatesFilter<$PrismaModel> | $Enums.Unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitFilter<$PrismaModel>
    _max?: NestedEnumUnitFilter<$PrismaModel>
  }

  export type MealNullableRelationFilter = {
    is?: MealWhereInput | null
    isNot?: MealWhereInput | null
  }

  export type CaloriesLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mealId?: SortOrder
    date?: SortOrder
    meal?: SortOrder
    foodName?: SortOrder
    quantity?: SortOrder
    totalCalories?: SortOrder
    totalProtein?: SortOrder
    totalCarbs?: SortOrder
    totalFat?: SortOrder
    createdAt?: SortOrder
    updated_at?: SortOrder
  }

  export type CaloriesLogAvgOrderByAggregateInput = {
    quantity?: SortOrder
    totalCalories?: SortOrder
    totalProtein?: SortOrder
    totalCarbs?: SortOrder
    totalFat?: SortOrder
  }

  export type CaloriesLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mealId?: SortOrder
    date?: SortOrder
    meal?: SortOrder
    foodName?: SortOrder
    quantity?: SortOrder
    totalCalories?: SortOrder
    totalProtein?: SortOrder
    totalCarbs?: SortOrder
    totalFat?: SortOrder
    createdAt?: SortOrder
    updated_at?: SortOrder
  }

  export type CaloriesLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mealId?: SortOrder
    date?: SortOrder
    meal?: SortOrder
    foodName?: SortOrder
    quantity?: SortOrder
    totalCalories?: SortOrder
    totalProtein?: SortOrder
    totalCarbs?: SortOrder
    totalFat?: SortOrder
    createdAt?: SortOrder
    updated_at?: SortOrder
  }

  export type CaloriesLogSumOrderByAggregateInput = {
    quantity?: SortOrder
    totalCalories?: SortOrder
    totalProtein?: SortOrder
    totalCarbs?: SortOrder
    totalFat?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type DailyLogCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type WorkoutLogCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type WaterLogCreateNestedManyWithoutUserInput = {
    create?: XOR<WaterLogCreateWithoutUserInput, WaterLogUncheckedCreateWithoutUserInput> | WaterLogCreateWithoutUserInput[] | WaterLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterLogCreateOrConnectWithoutUserInput | WaterLogCreateOrConnectWithoutUserInput[]
    createMany?: WaterLogCreateManyUserInputEnvelope
    connect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
  }

  export type WeightLogCreateNestedManyWithoutUserInput = {
    create?: XOR<WeightLogCreateWithoutUserInput, WeightLogUncheckedCreateWithoutUserInput> | WeightLogCreateWithoutUserInput[] | WeightLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightLogCreateOrConnectWithoutUserInput | WeightLogCreateOrConnectWithoutUserInput[]
    createMany?: WeightLogCreateManyUserInputEnvelope
    connect?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
  }

  export type UserSessionCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput
    connect?: UserSessionWhereUniqueInput
  }

  export type FoodCreateNestedManyWithoutUserInput = {
    create?: XOR<FoodCreateWithoutUserInput, FoodUncheckedCreateWithoutUserInput> | FoodCreateWithoutUserInput[] | FoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutUserInput | FoodCreateOrConnectWithoutUserInput[]
    createMany?: FoodCreateManyUserInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type MealItemCreateNestedManyWithoutUserInput = {
    create?: XOR<MealItemCreateWithoutUserInput, MealItemUncheckedCreateWithoutUserInput> | MealItemCreateWithoutUserInput[] | MealItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutUserInput | MealItemCreateOrConnectWithoutUserInput[]
    createMany?: MealItemCreateManyUserInputEnvelope
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
  }

  export type CaloriesLogCreateNestedManyWithoutUserInput = {
    create?: XOR<CaloriesLogCreateWithoutUserInput, CaloriesLogUncheckedCreateWithoutUserInput> | CaloriesLogCreateWithoutUserInput[] | CaloriesLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaloriesLogCreateOrConnectWithoutUserInput | CaloriesLogCreateOrConnectWithoutUserInput[]
    createMany?: CaloriesLogCreateManyUserInputEnvelope
    connect?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type DailyLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
  }

  export type WorkoutLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type WaterLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WaterLogCreateWithoutUserInput, WaterLogUncheckedCreateWithoutUserInput> | WaterLogCreateWithoutUserInput[] | WaterLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterLogCreateOrConnectWithoutUserInput | WaterLogCreateOrConnectWithoutUserInput[]
    createMany?: WaterLogCreateManyUserInputEnvelope
    connect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
  }

  export type WeightLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeightLogCreateWithoutUserInput, WeightLogUncheckedCreateWithoutUserInput> | WeightLogCreateWithoutUserInput[] | WeightLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightLogCreateOrConnectWithoutUserInput | WeightLogCreateOrConnectWithoutUserInput[]
    createMany?: WeightLogCreateManyUserInputEnvelope
    connect?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
  }

  export type UserSessionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput
    connect?: UserSessionWhereUniqueInput
  }

  export type FoodUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FoodCreateWithoutUserInput, FoodUncheckedCreateWithoutUserInput> | FoodCreateWithoutUserInput[] | FoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutUserInput | FoodCreateOrConnectWithoutUserInput[]
    createMany?: FoodCreateManyUserInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type MealItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealItemCreateWithoutUserInput, MealItemUncheckedCreateWithoutUserInput> | MealItemCreateWithoutUserInput[] | MealItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutUserInput | MealItemCreateOrConnectWithoutUserInput[]
    createMany?: MealItemCreateManyUserInputEnvelope
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
  }

  export type CaloriesLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CaloriesLogCreateWithoutUserInput, CaloriesLogUncheckedCreateWithoutUserInput> | CaloriesLogCreateWithoutUserInput[] | CaloriesLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaloriesLogCreateOrConnectWithoutUserInput | CaloriesLogCreateOrConnectWithoutUserInput[]
    createMany?: CaloriesLogCreateManyUserInputEnvelope
    connect?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type DailyLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutUserInput | DailyLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutUserInput | DailyLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutUserInput | DailyLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type WorkoutLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutUserInput | WorkoutLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutUserInput | WorkoutLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutUserInput | WorkoutLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type WaterLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<WaterLogCreateWithoutUserInput, WaterLogUncheckedCreateWithoutUserInput> | WaterLogCreateWithoutUserInput[] | WaterLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterLogCreateOrConnectWithoutUserInput | WaterLogCreateOrConnectWithoutUserInput[]
    upsert?: WaterLogUpsertWithWhereUniqueWithoutUserInput | WaterLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WaterLogCreateManyUserInputEnvelope
    set?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    disconnect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    delete?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    connect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    update?: WaterLogUpdateWithWhereUniqueWithoutUserInput | WaterLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WaterLogUpdateManyWithWhereWithoutUserInput | WaterLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WaterLogScalarWhereInput | WaterLogScalarWhereInput[]
  }

  export type WeightLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeightLogCreateWithoutUserInput, WeightLogUncheckedCreateWithoutUserInput> | WeightLogCreateWithoutUserInput[] | WeightLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightLogCreateOrConnectWithoutUserInput | WeightLogCreateOrConnectWithoutUserInput[]
    upsert?: WeightLogUpsertWithWhereUniqueWithoutUserInput | WeightLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeightLogCreateManyUserInputEnvelope
    set?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    disconnect?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    delete?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    connect?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    update?: WeightLogUpdateWithWhereUniqueWithoutUserInput | WeightLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeightLogUpdateManyWithWhereWithoutUserInput | WeightLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeightLogScalarWhereInput | WeightLogScalarWhereInput[]
  }

  export type UserSessionUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput
    upsert?: UserSessionUpsertWithoutUserInput
    disconnect?: UserSessionWhereInput | boolean
    delete?: UserSessionWhereInput | boolean
    connect?: UserSessionWhereUniqueInput
    update?: XOR<XOR<UserSessionUpdateToOneWithWhereWithoutUserInput, UserSessionUpdateWithoutUserInput>, UserSessionUncheckedUpdateWithoutUserInput>
  }

  export type FoodUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoodCreateWithoutUserInput, FoodUncheckedCreateWithoutUserInput> | FoodCreateWithoutUserInput[] | FoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutUserInput | FoodCreateOrConnectWithoutUserInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutUserInput | FoodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoodCreateManyUserInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutUserInput | FoodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutUserInput | FoodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type MealItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealItemCreateWithoutUserInput, MealItemUncheckedCreateWithoutUserInput> | MealItemCreateWithoutUserInput[] | MealItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutUserInput | MealItemCreateOrConnectWithoutUserInput[]
    upsert?: MealItemUpsertWithWhereUniqueWithoutUserInput | MealItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealItemCreateManyUserInputEnvelope
    set?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    disconnect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    delete?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    update?: MealItemUpdateWithWhereUniqueWithoutUserInput | MealItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealItemUpdateManyWithWhereWithoutUserInput | MealItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
  }

  export type CaloriesLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<CaloriesLogCreateWithoutUserInput, CaloriesLogUncheckedCreateWithoutUserInput> | CaloriesLogCreateWithoutUserInput[] | CaloriesLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaloriesLogCreateOrConnectWithoutUserInput | CaloriesLogCreateOrConnectWithoutUserInput[]
    upsert?: CaloriesLogUpsertWithWhereUniqueWithoutUserInput | CaloriesLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CaloriesLogCreateManyUserInputEnvelope
    set?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    disconnect?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    delete?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    connect?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    update?: CaloriesLogUpdateWithWhereUniqueWithoutUserInput | CaloriesLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CaloriesLogUpdateManyWithWhereWithoutUserInput | CaloriesLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CaloriesLogScalarWhereInput | CaloriesLogScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type DailyLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput> | DailyLogCreateWithoutUserInput[] | DailyLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyLogCreateOrConnectWithoutUserInput | DailyLogCreateOrConnectWithoutUserInput[]
    upsert?: DailyLogUpsertWithWhereUniqueWithoutUserInput | DailyLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyLogCreateManyUserInputEnvelope
    set?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    disconnect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    delete?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    connect?: DailyLogWhereUniqueInput | DailyLogWhereUniqueInput[]
    update?: DailyLogUpdateWithWhereUniqueWithoutUserInput | DailyLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyLogUpdateManyWithWhereWithoutUserInput | DailyLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
  }

  export type WorkoutLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutUserInput | WorkoutLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutUserInput | WorkoutLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutUserInput | WorkoutLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type WaterLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WaterLogCreateWithoutUserInput, WaterLogUncheckedCreateWithoutUserInput> | WaterLogCreateWithoutUserInput[] | WaterLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterLogCreateOrConnectWithoutUserInput | WaterLogCreateOrConnectWithoutUserInput[]
    upsert?: WaterLogUpsertWithWhereUniqueWithoutUserInput | WaterLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WaterLogCreateManyUserInputEnvelope
    set?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    disconnect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    delete?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    connect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    update?: WaterLogUpdateWithWhereUniqueWithoutUserInput | WaterLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WaterLogUpdateManyWithWhereWithoutUserInput | WaterLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WaterLogScalarWhereInput | WaterLogScalarWhereInput[]
  }

  export type WeightLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeightLogCreateWithoutUserInput, WeightLogUncheckedCreateWithoutUserInput> | WeightLogCreateWithoutUserInput[] | WeightLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeightLogCreateOrConnectWithoutUserInput | WeightLogCreateOrConnectWithoutUserInput[]
    upsert?: WeightLogUpsertWithWhereUniqueWithoutUserInput | WeightLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeightLogCreateManyUserInputEnvelope
    set?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    disconnect?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    delete?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    connect?: WeightLogWhereUniqueInput | WeightLogWhereUniqueInput[]
    update?: WeightLogUpdateWithWhereUniqueWithoutUserInput | WeightLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeightLogUpdateManyWithWhereWithoutUserInput | WeightLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeightLogScalarWhereInput | WeightLogScalarWhereInput[]
  }

  export type UserSessionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSessionCreateOrConnectWithoutUserInput
    upsert?: UserSessionUpsertWithoutUserInput
    disconnect?: UserSessionWhereInput | boolean
    delete?: UserSessionWhereInput | boolean
    connect?: UserSessionWhereUniqueInput
    update?: XOR<XOR<UserSessionUpdateToOneWithWhereWithoutUserInput, UserSessionUpdateWithoutUserInput>, UserSessionUncheckedUpdateWithoutUserInput>
  }

  export type FoodUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FoodCreateWithoutUserInput, FoodUncheckedCreateWithoutUserInput> | FoodCreateWithoutUserInput[] | FoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutUserInput | FoodCreateOrConnectWithoutUserInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutUserInput | FoodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FoodCreateManyUserInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutUserInput | FoodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutUserInput | FoodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type MealItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealItemCreateWithoutUserInput, MealItemUncheckedCreateWithoutUserInput> | MealItemCreateWithoutUserInput[] | MealItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutUserInput | MealItemCreateOrConnectWithoutUserInput[]
    upsert?: MealItemUpsertWithWhereUniqueWithoutUserInput | MealItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealItemCreateManyUserInputEnvelope
    set?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    disconnect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    delete?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    update?: MealItemUpdateWithWhereUniqueWithoutUserInput | MealItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealItemUpdateManyWithWhereWithoutUserInput | MealItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
  }

  export type CaloriesLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CaloriesLogCreateWithoutUserInput, CaloriesLogUncheckedCreateWithoutUserInput> | CaloriesLogCreateWithoutUserInput[] | CaloriesLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CaloriesLogCreateOrConnectWithoutUserInput | CaloriesLogCreateOrConnectWithoutUserInput[]
    upsert?: CaloriesLogUpsertWithWhereUniqueWithoutUserInput | CaloriesLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CaloriesLogCreateManyUserInputEnvelope
    set?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    disconnect?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    delete?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    connect?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    update?: CaloriesLogUpdateWithWhereUniqueWithoutUserInput | CaloriesLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CaloriesLogUpdateManyWithWhereWithoutUserInput | CaloriesLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CaloriesLogScalarWhereInput | CaloriesLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserSessionInput = {
    create?: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSessionInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutUserSessionNestedInput = {
    create?: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSessionInput
    upsert?: UserUpsertWithoutUserSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSessionInput, UserUpdateWithoutUserSessionInput>, UserUncheckedUpdateWithoutUserSessionInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumActivityLevelFieldUpdateOperationsInput = {
    set?: $Enums.ActivityLevel
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type DailyLogCreateNestedOneWithoutMealsInput = {
    create?: XOR<DailyLogCreateWithoutMealsInput, DailyLogUncheckedCreateWithoutMealsInput>
    connectOrCreate?: DailyLogCreateOrConnectWithoutMealsInput
    connect?: DailyLogWhereUniqueInput
  }

  export type MealItemCreateNestedManyWithoutMealInput = {
    create?: XOR<MealItemCreateWithoutMealInput, MealItemUncheckedCreateWithoutMealInput> | MealItemCreateWithoutMealInput[] | MealItemUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutMealInput | MealItemCreateOrConnectWithoutMealInput[]
    createMany?: MealItemCreateManyMealInputEnvelope
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
  }

  export type CaloriesLogCreateNestedManyWithoutMealRelationInput = {
    create?: XOR<CaloriesLogCreateWithoutMealRelationInput, CaloriesLogUncheckedCreateWithoutMealRelationInput> | CaloriesLogCreateWithoutMealRelationInput[] | CaloriesLogUncheckedCreateWithoutMealRelationInput[]
    connectOrCreate?: CaloriesLogCreateOrConnectWithoutMealRelationInput | CaloriesLogCreateOrConnectWithoutMealRelationInput[]
    createMany?: CaloriesLogCreateManyMealRelationInputEnvelope
    connect?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
  }

  export type MealItemUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<MealItemCreateWithoutMealInput, MealItemUncheckedCreateWithoutMealInput> | MealItemCreateWithoutMealInput[] | MealItemUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutMealInput | MealItemCreateOrConnectWithoutMealInput[]
    createMany?: MealItemCreateManyMealInputEnvelope
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
  }

  export type CaloriesLogUncheckedCreateNestedManyWithoutMealRelationInput = {
    create?: XOR<CaloriesLogCreateWithoutMealRelationInput, CaloriesLogUncheckedCreateWithoutMealRelationInput> | CaloriesLogCreateWithoutMealRelationInput[] | CaloriesLogUncheckedCreateWithoutMealRelationInput[]
    connectOrCreate?: CaloriesLogCreateOrConnectWithoutMealRelationInput | CaloriesLogCreateOrConnectWithoutMealRelationInput[]
    createMany?: CaloriesLogCreateManyMealRelationInputEnvelope
    connect?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
  }

  export type DailyLogUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<DailyLogCreateWithoutMealsInput, DailyLogUncheckedCreateWithoutMealsInput>
    connectOrCreate?: DailyLogCreateOrConnectWithoutMealsInput
    upsert?: DailyLogUpsertWithoutMealsInput
    connect?: DailyLogWhereUniqueInput
    update?: XOR<XOR<DailyLogUpdateToOneWithWhereWithoutMealsInput, DailyLogUpdateWithoutMealsInput>, DailyLogUncheckedUpdateWithoutMealsInput>
  }

  export type MealItemUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealItemCreateWithoutMealInput, MealItemUncheckedCreateWithoutMealInput> | MealItemCreateWithoutMealInput[] | MealItemUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutMealInput | MealItemCreateOrConnectWithoutMealInput[]
    upsert?: MealItemUpsertWithWhereUniqueWithoutMealInput | MealItemUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealItemCreateManyMealInputEnvelope
    set?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    disconnect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    delete?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    update?: MealItemUpdateWithWhereUniqueWithoutMealInput | MealItemUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealItemUpdateManyWithWhereWithoutMealInput | MealItemUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
  }

  export type CaloriesLogUpdateManyWithoutMealRelationNestedInput = {
    create?: XOR<CaloriesLogCreateWithoutMealRelationInput, CaloriesLogUncheckedCreateWithoutMealRelationInput> | CaloriesLogCreateWithoutMealRelationInput[] | CaloriesLogUncheckedCreateWithoutMealRelationInput[]
    connectOrCreate?: CaloriesLogCreateOrConnectWithoutMealRelationInput | CaloriesLogCreateOrConnectWithoutMealRelationInput[]
    upsert?: CaloriesLogUpsertWithWhereUniqueWithoutMealRelationInput | CaloriesLogUpsertWithWhereUniqueWithoutMealRelationInput[]
    createMany?: CaloriesLogCreateManyMealRelationInputEnvelope
    set?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    disconnect?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    delete?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    connect?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    update?: CaloriesLogUpdateWithWhereUniqueWithoutMealRelationInput | CaloriesLogUpdateWithWhereUniqueWithoutMealRelationInput[]
    updateMany?: CaloriesLogUpdateManyWithWhereWithoutMealRelationInput | CaloriesLogUpdateManyWithWhereWithoutMealRelationInput[]
    deleteMany?: CaloriesLogScalarWhereInput | CaloriesLogScalarWhereInput[]
  }

  export type MealItemUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealItemCreateWithoutMealInput, MealItemUncheckedCreateWithoutMealInput> | MealItemCreateWithoutMealInput[] | MealItemUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutMealInput | MealItemCreateOrConnectWithoutMealInput[]
    upsert?: MealItemUpsertWithWhereUniqueWithoutMealInput | MealItemUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealItemCreateManyMealInputEnvelope
    set?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    disconnect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    delete?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    update?: MealItemUpdateWithWhereUniqueWithoutMealInput | MealItemUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealItemUpdateManyWithWhereWithoutMealInput | MealItemUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
  }

  export type CaloriesLogUncheckedUpdateManyWithoutMealRelationNestedInput = {
    create?: XOR<CaloriesLogCreateWithoutMealRelationInput, CaloriesLogUncheckedCreateWithoutMealRelationInput> | CaloriesLogCreateWithoutMealRelationInput[] | CaloriesLogUncheckedCreateWithoutMealRelationInput[]
    connectOrCreate?: CaloriesLogCreateOrConnectWithoutMealRelationInput | CaloriesLogCreateOrConnectWithoutMealRelationInput[]
    upsert?: CaloriesLogUpsertWithWhereUniqueWithoutMealRelationInput | CaloriesLogUpsertWithWhereUniqueWithoutMealRelationInput[]
    createMany?: CaloriesLogCreateManyMealRelationInputEnvelope
    set?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    disconnect?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    delete?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    connect?: CaloriesLogWhereUniqueInput | CaloriesLogWhereUniqueInput[]
    update?: CaloriesLogUpdateWithWhereUniqueWithoutMealRelationInput | CaloriesLogUpdateWithWhereUniqueWithoutMealRelationInput[]
    updateMany?: CaloriesLogUpdateManyWithWhereWithoutMealRelationInput | CaloriesLogUpdateManyWithWhereWithoutMealRelationInput[]
    deleteMany?: CaloriesLogScalarWhereInput | CaloriesLogScalarWhereInput[]
  }

  export type MealCreateNestedOneWithoutItemsInput = {
    create?: XOR<MealCreateWithoutItemsInput, MealUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MealCreateOrConnectWithoutItemsInput
    connect?: MealWhereUniqueInput
  }

  export type FoodCreateNestedOneWithoutMealItemsInput = {
    create?: XOR<FoodCreateWithoutMealItemsInput, FoodUncheckedCreateWithoutMealItemsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutMealItemsInput
    connect?: FoodWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutItemsInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MealUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<MealCreateWithoutItemsInput, MealUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MealCreateOrConnectWithoutItemsInput
    upsert?: MealUpsertWithoutItemsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutItemsInput, MealUpdateWithoutItemsInput>, MealUncheckedUpdateWithoutItemsInput>
  }

  export type FoodUpdateOneRequiredWithoutMealItemsNestedInput = {
    create?: XOR<FoodCreateWithoutMealItemsInput, FoodUncheckedCreateWithoutMealItemsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutMealItemsInput
    upsert?: FoodUpsertWithoutMealItemsInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutMealItemsInput, FoodUpdateWithoutMealItemsInput>, FoodUncheckedUpdateWithoutMealItemsInput>
  }

  export type UserUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    upsert?: UserUpsertWithoutItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemsInput, UserUpdateWithoutItemsInput>, UserUncheckedUpdateWithoutItemsInput>
  }

  export type WorkoutLogCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutLogCreateWithoutExerciseInput, WorkoutLogUncheckedCreateWithoutExerciseInput> | WorkoutLogCreateWithoutExerciseInput[] | WorkoutLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutExerciseInput | WorkoutLogCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutLogCreateManyExerciseInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type WorkoutLogUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutLogCreateWithoutExerciseInput, WorkoutLogUncheckedCreateWithoutExerciseInput> | WorkoutLogCreateWithoutExerciseInput[] | WorkoutLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutExerciseInput | WorkoutLogCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutLogCreateManyExerciseInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type WorkoutLogUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutExerciseInput, WorkoutLogUncheckedCreateWithoutExerciseInput> | WorkoutLogCreateWithoutExerciseInput[] | WorkoutLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutExerciseInput | WorkoutLogCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutExerciseInput | WorkoutLogUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutLogCreateManyExerciseInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutExerciseInput | WorkoutLogUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutExerciseInput | WorkoutLogUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type WorkoutLogUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutExerciseInput, WorkoutLogUncheckedCreateWithoutExerciseInput> | WorkoutLogCreateWithoutExerciseInput[] | WorkoutLogUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutExerciseInput | WorkoutLogCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutExerciseInput | WorkoutLogUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutLogCreateManyExerciseInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutExerciseInput | WorkoutLogUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutExerciseInput | WorkoutLogUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDailyLogsInput = {
    create?: XOR<UserCreateWithoutDailyLogsInput, UserUncheckedCreateWithoutDailyLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyLogsInput
    connect?: UserWhereUniqueInput
  }

  export type MealCreateNestedManyWithoutDailyLogInput = {
    create?: XOR<MealCreateWithoutDailyLogInput, MealUncheckedCreateWithoutDailyLogInput> | MealCreateWithoutDailyLogInput[] | MealUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyLogInput | MealCreateOrConnectWithoutDailyLogInput[]
    createMany?: MealCreateManyDailyLogInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type WorkoutLogCreateNestedManyWithoutDailyLogInput = {
    create?: XOR<WorkoutLogCreateWithoutDailyLogInput, WorkoutLogUncheckedCreateWithoutDailyLogInput> | WorkoutLogCreateWithoutDailyLogInput[] | WorkoutLogUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutDailyLogInput | WorkoutLogCreateOrConnectWithoutDailyLogInput[]
    createMany?: WorkoutLogCreateManyDailyLogInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutDailyLogInput = {
    create?: XOR<MealCreateWithoutDailyLogInput, MealUncheckedCreateWithoutDailyLogInput> | MealCreateWithoutDailyLogInput[] | MealUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyLogInput | MealCreateOrConnectWithoutDailyLogInput[]
    createMany?: MealCreateManyDailyLogInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type WorkoutLogUncheckedCreateNestedManyWithoutDailyLogInput = {
    create?: XOR<WorkoutLogCreateWithoutDailyLogInput, WorkoutLogUncheckedCreateWithoutDailyLogInput> | WorkoutLogCreateWithoutDailyLogInput[] | WorkoutLogUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutDailyLogInput | WorkoutLogCreateOrConnectWithoutDailyLogInput[]
    createMany?: WorkoutLogCreateManyDailyLogInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDailyLogsNestedInput = {
    create?: XOR<UserCreateWithoutDailyLogsInput, UserUncheckedCreateWithoutDailyLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyLogsInput
    upsert?: UserUpsertWithoutDailyLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyLogsInput, UserUpdateWithoutDailyLogsInput>, UserUncheckedUpdateWithoutDailyLogsInput>
  }

  export type MealUpdateManyWithoutDailyLogNestedInput = {
    create?: XOR<MealCreateWithoutDailyLogInput, MealUncheckedCreateWithoutDailyLogInput> | MealCreateWithoutDailyLogInput[] | MealUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyLogInput | MealCreateOrConnectWithoutDailyLogInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutDailyLogInput | MealUpsertWithWhereUniqueWithoutDailyLogInput[]
    createMany?: MealCreateManyDailyLogInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutDailyLogInput | MealUpdateWithWhereUniqueWithoutDailyLogInput[]
    updateMany?: MealUpdateManyWithWhereWithoutDailyLogInput | MealUpdateManyWithWhereWithoutDailyLogInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type WorkoutLogUpdateManyWithoutDailyLogNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutDailyLogInput, WorkoutLogUncheckedCreateWithoutDailyLogInput> | WorkoutLogCreateWithoutDailyLogInput[] | WorkoutLogUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutDailyLogInput | WorkoutLogCreateOrConnectWithoutDailyLogInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutDailyLogInput | WorkoutLogUpsertWithWhereUniqueWithoutDailyLogInput[]
    createMany?: WorkoutLogCreateManyDailyLogInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutDailyLogInput | WorkoutLogUpdateWithWhereUniqueWithoutDailyLogInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutDailyLogInput | WorkoutLogUpdateManyWithWhereWithoutDailyLogInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type MealUncheckedUpdateManyWithoutDailyLogNestedInput = {
    create?: XOR<MealCreateWithoutDailyLogInput, MealUncheckedCreateWithoutDailyLogInput> | MealCreateWithoutDailyLogInput[] | MealUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyLogInput | MealCreateOrConnectWithoutDailyLogInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutDailyLogInput | MealUpsertWithWhereUniqueWithoutDailyLogInput[]
    createMany?: MealCreateManyDailyLogInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutDailyLogInput | MealUpdateWithWhereUniqueWithoutDailyLogInput[]
    updateMany?: MealUpdateManyWithWhereWithoutDailyLogInput | MealUpdateManyWithWhereWithoutDailyLogInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type WorkoutLogUncheckedUpdateManyWithoutDailyLogNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutDailyLogInput, WorkoutLogUncheckedCreateWithoutDailyLogInput> | WorkoutLogCreateWithoutDailyLogInput[] | WorkoutLogUncheckedCreateWithoutDailyLogInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutDailyLogInput | WorkoutLogCreateOrConnectWithoutDailyLogInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutDailyLogInput | WorkoutLogUpsertWithWhereUniqueWithoutDailyLogInput[]
    createMany?: WorkoutLogCreateManyDailyLogInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutDailyLogInput | WorkoutLogUpdateWithWhereUniqueWithoutDailyLogInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutDailyLogInput | WorkoutLogUpdateManyWithWhereWithoutDailyLogInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkoutLogsInput = {
    create?: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutWorkoutLogsInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutLogsInput, ExerciseUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutLogsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type DailyLogCreateNestedOneWithoutWorkoutLogsInput = {
    create?: XOR<DailyLogCreateWithoutWorkoutLogsInput, DailyLogUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: DailyLogCreateOrConnectWithoutWorkoutLogsInput
    connect?: DailyLogWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWorkoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutLogsInput
    upsert?: UserUpsertWithoutWorkoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutLogsInput, UserUpdateWithoutWorkoutLogsInput>, UserUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type ExerciseUpdateOneRequiredWithoutWorkoutLogsNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutLogsInput, ExerciseUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutLogsInput
    upsert?: ExerciseUpsertWithoutWorkoutLogsInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutWorkoutLogsInput, ExerciseUpdateWithoutWorkoutLogsInput>, ExerciseUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type DailyLogUpdateOneRequiredWithoutWorkoutLogsNestedInput = {
    create?: XOR<DailyLogCreateWithoutWorkoutLogsInput, DailyLogUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: DailyLogCreateOrConnectWithoutWorkoutLogsInput
    upsert?: DailyLogUpsertWithoutWorkoutLogsInput
    connect?: DailyLogWhereUniqueInput
    update?: XOR<XOR<DailyLogUpdateToOneWithWhereWithoutWorkoutLogsInput, DailyLogUpdateWithoutWorkoutLogsInput>, DailyLogUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type UserCreateNestedOneWithoutWaterLogsInput = {
    create?: XOR<UserCreateWithoutWaterLogsInput, UserUncheckedCreateWithoutWaterLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaterLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWaterLogsNestedInput = {
    create?: XOR<UserCreateWithoutWaterLogsInput, UserUncheckedCreateWithoutWaterLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaterLogsInput
    upsert?: UserUpsertWithoutWaterLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWaterLogsInput, UserUpdateWithoutWaterLogsInput>, UserUncheckedUpdateWithoutWaterLogsInput>
  }

  export type UserCreateNestedOneWithoutWeightLogsInput = {
    create?: XOR<UserCreateWithoutWeightLogsInput, UserUncheckedCreateWithoutWeightLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeightLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWeightLogsNestedInput = {
    create?: XOR<UserCreateWithoutWeightLogsInput, UserUncheckedCreateWithoutWeightLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeightLogsInput
    upsert?: UserUpsertWithoutWeightLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeightLogsInput, UserUpdateWithoutWeightLogsInput>, UserUncheckedUpdateWithoutWeightLogsInput>
  }

  export type UserCreateNestedOneWithoutFoodInput = {
    create?: XOR<UserCreateWithoutFoodInput, UserUncheckedCreateWithoutFoodInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoodInput
    connect?: UserWhereUniqueInput
  }

  export type MealItemCreateNestedManyWithoutFoodInput = {
    create?: XOR<MealItemCreateWithoutFoodInput, MealItemUncheckedCreateWithoutFoodInput> | MealItemCreateWithoutFoodInput[] | MealItemUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutFoodInput | MealItemCreateOrConnectWithoutFoodInput[]
    createMany?: MealItemCreateManyFoodInputEnvelope
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
  }

  export type MealItemUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<MealItemCreateWithoutFoodInput, MealItemUncheckedCreateWithoutFoodInput> | MealItemCreateWithoutFoodInput[] | MealItemUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutFoodInput | MealItemCreateOrConnectWithoutFoodInput[]
    createMany?: MealItemCreateManyFoodInputEnvelope
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
  }

  export type EnumUnitFieldUpdateOperationsInput = {
    set?: $Enums.Unit
  }

  export type UserUpdateOneRequiredWithoutFoodNestedInput = {
    create?: XOR<UserCreateWithoutFoodInput, UserUncheckedCreateWithoutFoodInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoodInput
    upsert?: UserUpsertWithoutFoodInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFoodInput, UserUpdateWithoutFoodInput>, UserUncheckedUpdateWithoutFoodInput>
  }

  export type MealItemUpdateManyWithoutFoodNestedInput = {
    create?: XOR<MealItemCreateWithoutFoodInput, MealItemUncheckedCreateWithoutFoodInput> | MealItemCreateWithoutFoodInput[] | MealItemUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutFoodInput | MealItemCreateOrConnectWithoutFoodInput[]
    upsert?: MealItemUpsertWithWhereUniqueWithoutFoodInput | MealItemUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: MealItemCreateManyFoodInputEnvelope
    set?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    disconnect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    delete?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    update?: MealItemUpdateWithWhereUniqueWithoutFoodInput | MealItemUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: MealItemUpdateManyWithWhereWithoutFoodInput | MealItemUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
  }

  export type MealItemUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<MealItemCreateWithoutFoodInput, MealItemUncheckedCreateWithoutFoodInput> | MealItemCreateWithoutFoodInput[] | MealItemUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutFoodInput | MealItemCreateOrConnectWithoutFoodInput[]
    upsert?: MealItemUpsertWithWhereUniqueWithoutFoodInput | MealItemUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: MealItemCreateManyFoodInputEnvelope
    set?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    disconnect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    delete?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    update?: MealItemUpdateWithWhereUniqueWithoutFoodInput | MealItemUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: MealItemUpdateManyWithWhereWithoutFoodInput | MealItemUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCaloriesLogsInput = {
    create?: XOR<UserCreateWithoutCaloriesLogsInput, UserUncheckedCreateWithoutCaloriesLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCaloriesLogsInput
    connect?: UserWhereUniqueInput
  }

  export type MealCreateNestedOneWithoutCaloriesLogsInput = {
    create?: XOR<MealCreateWithoutCaloriesLogsInput, MealUncheckedCreateWithoutCaloriesLogsInput>
    connectOrCreate?: MealCreateOrConnectWithoutCaloriesLogsInput
    connect?: MealWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCaloriesLogsNestedInput = {
    create?: XOR<UserCreateWithoutCaloriesLogsInput, UserUncheckedCreateWithoutCaloriesLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCaloriesLogsInput
    upsert?: UserUpsertWithoutCaloriesLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCaloriesLogsInput, UserUpdateWithoutCaloriesLogsInput>, UserUncheckedUpdateWithoutCaloriesLogsInput>
  }

  export type MealUpdateOneWithoutCaloriesLogsNestedInput = {
    create?: XOR<MealCreateWithoutCaloriesLogsInput, MealUncheckedCreateWithoutCaloriesLogsInput>
    connectOrCreate?: MealCreateOrConnectWithoutCaloriesLogsInput
    upsert?: MealUpsertWithoutCaloriesLogsInput
    disconnect?: MealWhereInput | boolean
    delete?: MealWhereInput | boolean
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutCaloriesLogsInput, MealUpdateWithoutCaloriesLogsInput>, MealUncheckedUpdateWithoutCaloriesLogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumActivityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelFilter<$PrismaModel> | $Enums.ActivityLevel
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumActivityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityLevelFilter<$PrismaModel>
    _max?: NestedEnumActivityLevelFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitFilter<$PrismaModel> | $Enums.Unit
  }

  export type NestedEnumUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitWithAggregatesFilter<$PrismaModel> | $Enums.Unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitFilter<$PrismaModel>
    _max?: NestedEnumUnitFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    userSession?: UserSessionCreateNestedOneWithoutUserInput
    food?: FoodCreateNestedManyWithoutUserInput
    items?: MealItemCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    userSession?: UserSessionUncheckedCreateNestedOneWithoutUserInput
    food?: FoodUncheckedCreateNestedManyWithoutUserInput
    items?: MealItemUncheckedCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone_no?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    created_at?: Date | string
    isActive?: boolean
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    created_at?: Date | string
    isActive?: boolean
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    heightCm?: number | null
    weightLb?: number | null
    goalWeight?: number | null
    activityLvl?: $Enums.ActivityLevel
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    gender?: $Enums.Gender | null
    birthDate?: Date | string | null
    heightCm?: number | null
    weightLb?: number | null
    goalWeight?: number | null
    activityLvl?: $Enums.ActivityLevel
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type DailyLogCreateWithoutUserInput = {
    id?: string
    date: Date | string
    meals?: MealCreateNestedManyWithoutDailyLogInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutDailyLogInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogCreateOrConnectWithoutUserInput = {
    where: DailyLogWhereUniqueInput
    create: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput>
  }

  export type DailyLogCreateManyUserInputEnvelope = {
    data: DailyLogCreateManyUserInput | DailyLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutLogCreateWithoutUserInput = {
    id?: string
    durationMin: number
    created_at?: Date | string
    updated_at?: Date | string
    exercise: ExerciseCreateNestedOneWithoutWorkoutLogsInput
    dailyLog: DailyLogCreateNestedOneWithoutWorkoutLogsInput
  }

  export type WorkoutLogUncheckedCreateWithoutUserInput = {
    id?: string
    dailyLogId: string
    exerciseId: number
    durationMin: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkoutLogCreateOrConnectWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    create: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput>
  }

  export type WorkoutLogCreateManyUserInputEnvelope = {
    data: WorkoutLogCreateManyUserInput | WorkoutLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WaterLogCreateWithoutUserInput = {
    id?: string
    date: Date | string
    amount: number
    totalCalories?: number | null
  }

  export type WaterLogUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    amount: number
    totalCalories?: number | null
  }

  export type WaterLogCreateOrConnectWithoutUserInput = {
    where: WaterLogWhereUniqueInput
    create: XOR<WaterLogCreateWithoutUserInput, WaterLogUncheckedCreateWithoutUserInput>
  }

  export type WaterLogCreateManyUserInputEnvelope = {
    data: WaterLogCreateManyUserInput | WaterLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WeightLogCreateWithoutUserInput = {
    id?: string
    date: Date | string
    weightLb?: number | null
    totalBurnCalories?: number | null
  }

  export type WeightLogUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    weightLb?: number | null
    totalBurnCalories?: number | null
  }

  export type WeightLogCreateOrConnectWithoutUserInput = {
    where: WeightLogWhereUniqueInput
    create: XOR<WeightLogCreateWithoutUserInput, WeightLogUncheckedCreateWithoutUserInput>
  }

  export type WeightLogCreateManyUserInputEnvelope = {
    data: WeightLogCreateManyUserInput | WeightLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSessionCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    device_type: string
    userAgent: string
    ipAddress?: string | null
    is_online?: boolean
    firebase_key?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    last_seen?: Date | string | null
  }

  export type UserSessionUncheckedCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    device_type: string
    userAgent: string
    ipAddress?: string | null
    is_online?: boolean
    firebase_key?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    last_seen?: Date | string | null
  }

  export type UserSessionCreateOrConnectWithoutUserInput = {
    where: UserSessionWhereUniqueInput
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
  }

  export type FoodCreateWithoutUserInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    unit: $Enums.Unit
    food_image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    mealItems?: MealItemCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    unit: $Enums.Unit
    food_image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    mealItems?: MealItemUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutUserInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutUserInput, FoodUncheckedCreateWithoutUserInput>
  }

  export type FoodCreateManyUserInputEnvelope = {
    data: FoodCreateManyUserInput | FoodCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MealItemCreateWithoutUserInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meal: MealCreateNestedOneWithoutItemsInput
    food: FoodCreateNestedOneWithoutMealItemsInput
  }

  export type MealItemUncheckedCreateWithoutUserInput = {
    id?: string
    mealId: string
    foodId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealItemCreateOrConnectWithoutUserInput = {
    where: MealItemWhereUniqueInput
    create: XOR<MealItemCreateWithoutUserInput, MealItemUncheckedCreateWithoutUserInput>
  }

  export type MealItemCreateManyUserInputEnvelope = {
    data: MealItemCreateManyUserInput | MealItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CaloriesLogCreateWithoutUserInput = {
    id?: string
    date: Date | string
    meal: string
    foodName: string
    quantity: number
    totalCalories: number
    totalProtein?: number | null
    totalCarbs?: number | null
    totalFat?: number | null
    createdAt?: Date | string
    updated_at?: Date | string
    mealRelation?: MealCreateNestedOneWithoutCaloriesLogsInput
  }

  export type CaloriesLogUncheckedCreateWithoutUserInput = {
    id?: string
    mealId?: string | null
    date: Date | string
    meal: string
    foodName: string
    quantity: number
    totalCalories: number
    totalProtein?: number | null
    totalCarbs?: number | null
    totalFat?: number | null
    createdAt?: Date | string
    updated_at?: Date | string
  }

  export type CaloriesLogCreateOrConnectWithoutUserInput = {
    where: CaloriesLogWhereUniqueInput
    create: XOR<CaloriesLogCreateWithoutUserInput, CaloriesLogUncheckedCreateWithoutUserInput>
  }

  export type CaloriesLogCreateManyUserInputEnvelope = {
    data: CaloriesLogCreateManyUserInput | CaloriesLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    goalWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLvl?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    goalWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLvl?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
  }

  export type DailyLogUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyLogWhereUniqueInput
    update: XOR<DailyLogUpdateWithoutUserInput, DailyLogUncheckedUpdateWithoutUserInput>
    create: XOR<DailyLogCreateWithoutUserInput, DailyLogUncheckedCreateWithoutUserInput>
  }

  export type DailyLogUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyLogWhereUniqueInput
    data: XOR<DailyLogUpdateWithoutUserInput, DailyLogUncheckedUpdateWithoutUserInput>
  }

  export type DailyLogUpdateManyWithWhereWithoutUserInput = {
    where: DailyLogScalarWhereInput
    data: XOR<DailyLogUpdateManyMutationInput, DailyLogUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyLogScalarWhereInput = {
    AND?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
    OR?: DailyLogScalarWhereInput[]
    NOT?: DailyLogScalarWhereInput | DailyLogScalarWhereInput[]
    id?: StringFilter<"DailyLog"> | string
    date?: DateTimeFilter<"DailyLog"> | Date | string
    userId?: StringFilter<"DailyLog"> | string
  }

  export type WorkoutLogUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    update: XOR<WorkoutLogUpdateWithoutUserInput, WorkoutLogUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput>
  }

  export type WorkoutLogUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    data: XOR<WorkoutLogUpdateWithoutUserInput, WorkoutLogUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutLogUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutLogScalarWhereInput
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutLogScalarWhereInput = {
    AND?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
    OR?: WorkoutLogScalarWhereInput[]
    NOT?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
    id?: StringFilter<"WorkoutLog"> | string
    dailyLogId?: StringFilter<"WorkoutLog"> | string
    userId?: StringFilter<"WorkoutLog"> | string
    exerciseId?: IntFilter<"WorkoutLog"> | number
    durationMin?: FloatFilter<"WorkoutLog"> | number
    created_at?: DateTimeFilter<"WorkoutLog"> | Date | string
    updated_at?: DateTimeFilter<"WorkoutLog"> | Date | string
  }

  export type WaterLogUpsertWithWhereUniqueWithoutUserInput = {
    where: WaterLogWhereUniqueInput
    update: XOR<WaterLogUpdateWithoutUserInput, WaterLogUncheckedUpdateWithoutUserInput>
    create: XOR<WaterLogCreateWithoutUserInput, WaterLogUncheckedCreateWithoutUserInput>
  }

  export type WaterLogUpdateWithWhereUniqueWithoutUserInput = {
    where: WaterLogWhereUniqueInput
    data: XOR<WaterLogUpdateWithoutUserInput, WaterLogUncheckedUpdateWithoutUserInput>
  }

  export type WaterLogUpdateManyWithWhereWithoutUserInput = {
    where: WaterLogScalarWhereInput
    data: XOR<WaterLogUpdateManyMutationInput, WaterLogUncheckedUpdateManyWithoutUserInput>
  }

  export type WaterLogScalarWhereInput = {
    AND?: WaterLogScalarWhereInput | WaterLogScalarWhereInput[]
    OR?: WaterLogScalarWhereInput[]
    NOT?: WaterLogScalarWhereInput | WaterLogScalarWhereInput[]
    id?: StringFilter<"WaterLog"> | string
    date?: DateTimeFilter<"WaterLog"> | Date | string
    userId?: StringFilter<"WaterLog"> | string
    amount?: FloatFilter<"WaterLog"> | number
    totalCalories?: FloatNullableFilter<"WaterLog"> | number | null
  }

  export type WeightLogUpsertWithWhereUniqueWithoutUserInput = {
    where: WeightLogWhereUniqueInput
    update: XOR<WeightLogUpdateWithoutUserInput, WeightLogUncheckedUpdateWithoutUserInput>
    create: XOR<WeightLogCreateWithoutUserInput, WeightLogUncheckedCreateWithoutUserInput>
  }

  export type WeightLogUpdateWithWhereUniqueWithoutUserInput = {
    where: WeightLogWhereUniqueInput
    data: XOR<WeightLogUpdateWithoutUserInput, WeightLogUncheckedUpdateWithoutUserInput>
  }

  export type WeightLogUpdateManyWithWhereWithoutUserInput = {
    where: WeightLogScalarWhereInput
    data: XOR<WeightLogUpdateManyMutationInput, WeightLogUncheckedUpdateManyWithoutUserInput>
  }

  export type WeightLogScalarWhereInput = {
    AND?: WeightLogScalarWhereInput | WeightLogScalarWhereInput[]
    OR?: WeightLogScalarWhereInput[]
    NOT?: WeightLogScalarWhereInput | WeightLogScalarWhereInput[]
    id?: StringFilter<"WeightLog"> | string
    date?: DateTimeFilter<"WeightLog"> | Date | string
    userId?: StringFilter<"WeightLog"> | string
    weightLb?: FloatNullableFilter<"WeightLog"> | number | null
    totalBurnCalories?: FloatNullableFilter<"WeightLog"> | number | null
  }

  export type UserSessionUpsertWithoutUserInput = {
    update: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSessionCreateWithoutUserInput, UserSessionUncheckedCreateWithoutUserInput>
    where?: UserSessionWhereInput
  }

  export type UserSessionUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSessionWhereInput
    data: XOR<UserSessionUpdateWithoutUserInput, UserSessionUncheckedUpdateWithoutUserInput>
  }

  export type UserSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    is_online?: BoolFieldUpdateOperationsInput | boolean
    firebase_key?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    device_type?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    is_online?: BoolFieldUpdateOperationsInput | boolean
    firebase_key?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FoodUpsertWithWhereUniqueWithoutUserInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutUserInput, FoodUncheckedUpdateWithoutUserInput>
    create: XOR<FoodCreateWithoutUserInput, FoodUncheckedCreateWithoutUserInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutUserInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutUserInput, FoodUncheckedUpdateWithoutUserInput>
  }

  export type FoodUpdateManyWithWhereWithoutUserInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutUserInput>
  }

  export type FoodScalarWhereInput = {
    AND?: FoodScalarWhereInput | FoodScalarWhereInput[]
    OR?: FoodScalarWhereInput[]
    NOT?: FoodScalarWhereInput | FoodScalarWhereInput[]
    id?: StringFilter<"Food"> | string
    name?: StringFilter<"Food"> | string
    calories?: FloatFilter<"Food"> | number
    protein?: FloatFilter<"Food"> | number
    carbs?: FloatFilter<"Food"> | number
    fat?: FloatFilter<"Food"> | number
    servingSize?: FloatFilter<"Food"> | number
    unit?: EnumUnitFilter<"Food"> | $Enums.Unit
    food_image?: StringNullableFilter<"Food"> | string | null
    created_at?: DateTimeFilter<"Food"> | Date | string
    updated_at?: DateTimeFilter<"Food"> | Date | string
    userId?: StringFilter<"Food"> | string
  }

  export type MealItemUpsertWithWhereUniqueWithoutUserInput = {
    where: MealItemWhereUniqueInput
    update: XOR<MealItemUpdateWithoutUserInput, MealItemUncheckedUpdateWithoutUserInput>
    create: XOR<MealItemCreateWithoutUserInput, MealItemUncheckedCreateWithoutUserInput>
  }

  export type MealItemUpdateWithWhereUniqueWithoutUserInput = {
    where: MealItemWhereUniqueInput
    data: XOR<MealItemUpdateWithoutUserInput, MealItemUncheckedUpdateWithoutUserInput>
  }

  export type MealItemUpdateManyWithWhereWithoutUserInput = {
    where: MealItemScalarWhereInput
    data: XOR<MealItemUpdateManyMutationInput, MealItemUncheckedUpdateManyWithoutUserInput>
  }

  export type MealItemScalarWhereInput = {
    AND?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
    OR?: MealItemScalarWhereInput[]
    NOT?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
    id?: StringFilter<"MealItem"> | string
    mealId?: StringFilter<"MealItem"> | string
    foodId?: StringFilter<"MealItem"> | string
    quantity?: FloatFilter<"MealItem"> | number
    userId?: StringFilter<"MealItem"> | string
    createdAt?: DateTimeFilter<"MealItem"> | Date | string
    updatedAt?: DateTimeFilter<"MealItem"> | Date | string
  }

  export type CaloriesLogUpsertWithWhereUniqueWithoutUserInput = {
    where: CaloriesLogWhereUniqueInput
    update: XOR<CaloriesLogUpdateWithoutUserInput, CaloriesLogUncheckedUpdateWithoutUserInput>
    create: XOR<CaloriesLogCreateWithoutUserInput, CaloriesLogUncheckedCreateWithoutUserInput>
  }

  export type CaloriesLogUpdateWithWhereUniqueWithoutUserInput = {
    where: CaloriesLogWhereUniqueInput
    data: XOR<CaloriesLogUpdateWithoutUserInput, CaloriesLogUncheckedUpdateWithoutUserInput>
  }

  export type CaloriesLogUpdateManyWithWhereWithoutUserInput = {
    where: CaloriesLogScalarWhereInput
    data: XOR<CaloriesLogUpdateManyMutationInput, CaloriesLogUncheckedUpdateManyWithoutUserInput>
  }

  export type CaloriesLogScalarWhereInput = {
    AND?: CaloriesLogScalarWhereInput | CaloriesLogScalarWhereInput[]
    OR?: CaloriesLogScalarWhereInput[]
    NOT?: CaloriesLogScalarWhereInput | CaloriesLogScalarWhereInput[]
    id?: StringFilter<"CaloriesLog"> | string
    userId?: StringFilter<"CaloriesLog"> | string
    mealId?: StringNullableFilter<"CaloriesLog"> | string | null
    date?: DateTimeFilter<"CaloriesLog"> | Date | string
    meal?: StringFilter<"CaloriesLog"> | string
    foodName?: StringFilter<"CaloriesLog"> | string
    quantity?: FloatFilter<"CaloriesLog"> | number
    totalCalories?: FloatFilter<"CaloriesLog"> | number
    totalProtein?: FloatNullableFilter<"CaloriesLog"> | number | null
    totalCarbs?: FloatNullableFilter<"CaloriesLog"> | number | null
    totalFat?: FloatNullableFilter<"CaloriesLog"> | number | null
    createdAt?: DateTimeFilter<"CaloriesLog"> | Date | string
    updated_at?: DateTimeFilter<"CaloriesLog"> | Date | string
  }

  export type UserCreateWithoutUserSessionInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    food?: FoodCreateNestedManyWithoutUserInput
    items?: MealItemCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSessionInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    food?: FoodUncheckedCreateNestedManyWithoutUserInput
    items?: MealItemUncheckedCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
  }

  export type UserUpsertWithoutUserSessionInput = {
    update: XOR<UserUpdateWithoutUserSessionInput, UserUncheckedUpdateWithoutUserSessionInput>
    create: XOR<UserCreateWithoutUserSessionInput, UserUncheckedCreateWithoutUserSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSessionInput, UserUncheckedUpdateWithoutUserSessionInput>
  }

  export type UserUpdateWithoutUserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    food?: FoodUpdateManyWithoutUserNestedInput
    items?: MealItemUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    food?: FoodUncheckedUpdateManyWithoutUserNestedInput
    items?: MealItemUncheckedUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    userSession?: UserSessionCreateNestedOneWithoutUserInput
    food?: FoodCreateNestedManyWithoutUserInput
    items?: MealItemCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    userSession?: UserSessionUncheckedCreateNestedOneWithoutUserInput
    food?: FoodUncheckedCreateNestedManyWithoutUserInput
    items?: MealItemUncheckedCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUpdateOneWithoutUserNestedInput
    food?: FoodUpdateManyWithoutUserNestedInput
    items?: MealItemUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUncheckedUpdateOneWithoutUserNestedInput
    food?: FoodUncheckedUpdateManyWithoutUserNestedInput
    items?: MealItemUncheckedUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DailyLogCreateWithoutMealsInput = {
    id?: string
    date: Date | string
    user: UserCreateNestedOneWithoutDailyLogsInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogUncheckedCreateWithoutMealsInput = {
    id?: string
    date: Date | string
    userId: string
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogCreateOrConnectWithoutMealsInput = {
    where: DailyLogWhereUniqueInput
    create: XOR<DailyLogCreateWithoutMealsInput, DailyLogUncheckedCreateWithoutMealsInput>
  }

  export type MealItemCreateWithoutMealInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutMealItemsInput
    user: UserCreateNestedOneWithoutItemsInput
  }

  export type MealItemUncheckedCreateWithoutMealInput = {
    id?: string
    foodId: string
    quantity: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealItemCreateOrConnectWithoutMealInput = {
    where: MealItemWhereUniqueInput
    create: XOR<MealItemCreateWithoutMealInput, MealItemUncheckedCreateWithoutMealInput>
  }

  export type MealItemCreateManyMealInputEnvelope = {
    data: MealItemCreateManyMealInput | MealItemCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type CaloriesLogCreateWithoutMealRelationInput = {
    id?: string
    date: Date | string
    meal: string
    foodName: string
    quantity: number
    totalCalories: number
    totalProtein?: number | null
    totalCarbs?: number | null
    totalFat?: number | null
    createdAt?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCaloriesLogsInput
  }

  export type CaloriesLogUncheckedCreateWithoutMealRelationInput = {
    id?: string
    userId: string
    date: Date | string
    meal: string
    foodName: string
    quantity: number
    totalCalories: number
    totalProtein?: number | null
    totalCarbs?: number | null
    totalFat?: number | null
    createdAt?: Date | string
    updated_at?: Date | string
  }

  export type CaloriesLogCreateOrConnectWithoutMealRelationInput = {
    where: CaloriesLogWhereUniqueInput
    create: XOR<CaloriesLogCreateWithoutMealRelationInput, CaloriesLogUncheckedCreateWithoutMealRelationInput>
  }

  export type CaloriesLogCreateManyMealRelationInputEnvelope = {
    data: CaloriesLogCreateManyMealRelationInput | CaloriesLogCreateManyMealRelationInput[]
    skipDuplicates?: boolean
  }

  export type DailyLogUpsertWithoutMealsInput = {
    update: XOR<DailyLogUpdateWithoutMealsInput, DailyLogUncheckedUpdateWithoutMealsInput>
    create: XOR<DailyLogCreateWithoutMealsInput, DailyLogUncheckedCreateWithoutMealsInput>
    where?: DailyLogWhereInput
  }

  export type DailyLogUpdateToOneWithWhereWithoutMealsInput = {
    where?: DailyLogWhereInput
    data: XOR<DailyLogUpdateWithoutMealsInput, DailyLogUncheckedUpdateWithoutMealsInput>
  }

  export type DailyLogUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyLogsNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogUncheckedUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutDailyLogNestedInput
  }

  export type MealItemUpsertWithWhereUniqueWithoutMealInput = {
    where: MealItemWhereUniqueInput
    update: XOR<MealItemUpdateWithoutMealInput, MealItemUncheckedUpdateWithoutMealInput>
    create: XOR<MealItemCreateWithoutMealInput, MealItemUncheckedCreateWithoutMealInput>
  }

  export type MealItemUpdateWithWhereUniqueWithoutMealInput = {
    where: MealItemWhereUniqueInput
    data: XOR<MealItemUpdateWithoutMealInput, MealItemUncheckedUpdateWithoutMealInput>
  }

  export type MealItemUpdateManyWithWhereWithoutMealInput = {
    where: MealItemScalarWhereInput
    data: XOR<MealItemUpdateManyMutationInput, MealItemUncheckedUpdateManyWithoutMealInput>
  }

  export type CaloriesLogUpsertWithWhereUniqueWithoutMealRelationInput = {
    where: CaloriesLogWhereUniqueInput
    update: XOR<CaloriesLogUpdateWithoutMealRelationInput, CaloriesLogUncheckedUpdateWithoutMealRelationInput>
    create: XOR<CaloriesLogCreateWithoutMealRelationInput, CaloriesLogUncheckedCreateWithoutMealRelationInput>
  }

  export type CaloriesLogUpdateWithWhereUniqueWithoutMealRelationInput = {
    where: CaloriesLogWhereUniqueInput
    data: XOR<CaloriesLogUpdateWithoutMealRelationInput, CaloriesLogUncheckedUpdateWithoutMealRelationInput>
  }

  export type CaloriesLogUpdateManyWithWhereWithoutMealRelationInput = {
    where: CaloriesLogScalarWhereInput
    data: XOR<CaloriesLogUpdateManyMutationInput, CaloriesLogUncheckedUpdateManyWithoutMealRelationInput>
  }

  export type MealCreateWithoutItemsInput = {
    id?: string
    name: string
    dailyLog: DailyLogCreateNestedOneWithoutMealsInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutMealRelationInput
  }

  export type MealUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    logId: string
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutMealRelationInput
  }

  export type MealCreateOrConnectWithoutItemsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutItemsInput, MealUncheckedCreateWithoutItemsInput>
  }

  export type FoodCreateWithoutMealItemsInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    unit: $Enums.Unit
    food_image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutMealItemsInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    unit: $Enums.Unit
    food_image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    userId: string
  }

  export type FoodCreateOrConnectWithoutMealItemsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutMealItemsInput, FoodUncheckedCreateWithoutMealItemsInput>
  }

  export type UserCreateWithoutItemsInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    userSession?: UserSessionCreateNestedOneWithoutUserInput
    food?: FoodCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutItemsInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    userSession?: UserSessionUncheckedCreateNestedOneWithoutUserInput
    food?: FoodUncheckedCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
  }

  export type MealUpsertWithoutItemsInput = {
    update: XOR<MealUpdateWithoutItemsInput, MealUncheckedUpdateWithoutItemsInput>
    create: XOR<MealCreateWithoutItemsInput, MealUncheckedCreateWithoutItemsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutItemsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutItemsInput, MealUncheckedUpdateWithoutItemsInput>
  }

  export type MealUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dailyLog?: DailyLogUpdateOneRequiredWithoutMealsNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutMealRelationNestedInput
  }

  export type MealUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logId?: StringFieldUpdateOperationsInput | string
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutMealRelationNestedInput
  }

  export type FoodUpsertWithoutMealItemsInput = {
    update: XOR<FoodUpdateWithoutMealItemsInput, FoodUncheckedUpdateWithoutMealItemsInput>
    create: XOR<FoodCreateWithoutMealItemsInput, FoodUncheckedCreateWithoutMealItemsInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutMealItemsInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutMealItemsInput, FoodUncheckedUpdateWithoutMealItemsInput>
  }

  export type FoodUpdateWithoutMealItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    food_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutMealItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    food_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutItemsInput = {
    update: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUpdateOneWithoutUserNestedInput
    food?: FoodUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUncheckedUpdateOneWithoutUserNestedInput
    food?: FoodUncheckedUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutLogCreateWithoutExerciseInput = {
    id?: string
    durationMin: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutWorkoutLogsInput
    dailyLog: DailyLogCreateNestedOneWithoutWorkoutLogsInput
  }

  export type WorkoutLogUncheckedCreateWithoutExerciseInput = {
    id?: string
    dailyLogId: string
    userId: string
    durationMin: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkoutLogCreateOrConnectWithoutExerciseInput = {
    where: WorkoutLogWhereUniqueInput
    create: XOR<WorkoutLogCreateWithoutExerciseInput, WorkoutLogUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutLogCreateManyExerciseInputEnvelope = {
    data: WorkoutLogCreateManyExerciseInput | WorkoutLogCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutLogUpsertWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutLogWhereUniqueInput
    update: XOR<WorkoutLogUpdateWithoutExerciseInput, WorkoutLogUncheckedUpdateWithoutExerciseInput>
    create: XOR<WorkoutLogCreateWithoutExerciseInput, WorkoutLogUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutLogUpdateWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutLogWhereUniqueInput
    data: XOR<WorkoutLogUpdateWithoutExerciseInput, WorkoutLogUncheckedUpdateWithoutExerciseInput>
  }

  export type WorkoutLogUpdateManyWithWhereWithoutExerciseInput = {
    where: WorkoutLogScalarWhereInput
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyWithoutExerciseInput>
  }

  export type UserCreateWithoutDailyLogsInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    userSession?: UserSessionCreateNestedOneWithoutUserInput
    food?: FoodCreateNestedManyWithoutUserInput
    items?: MealItemCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyLogsInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    userSession?: UserSessionUncheckedCreateNestedOneWithoutUserInput
    food?: FoodUncheckedCreateNestedManyWithoutUserInput
    items?: MealItemUncheckedCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyLogsInput, UserUncheckedCreateWithoutDailyLogsInput>
  }

  export type MealCreateWithoutDailyLogInput = {
    id?: string
    name: string
    items?: MealItemCreateNestedManyWithoutMealInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutMealRelationInput
  }

  export type MealUncheckedCreateWithoutDailyLogInput = {
    id?: string
    name: string
    items?: MealItemUncheckedCreateNestedManyWithoutMealInput
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutMealRelationInput
  }

  export type MealCreateOrConnectWithoutDailyLogInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutDailyLogInput, MealUncheckedCreateWithoutDailyLogInput>
  }

  export type MealCreateManyDailyLogInputEnvelope = {
    data: MealCreateManyDailyLogInput | MealCreateManyDailyLogInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutLogCreateWithoutDailyLogInput = {
    id?: string
    durationMin: number
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutWorkoutLogsInput
    exercise: ExerciseCreateNestedOneWithoutWorkoutLogsInput
  }

  export type WorkoutLogUncheckedCreateWithoutDailyLogInput = {
    id?: string
    userId: string
    exerciseId: number
    durationMin: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkoutLogCreateOrConnectWithoutDailyLogInput = {
    where: WorkoutLogWhereUniqueInput
    create: XOR<WorkoutLogCreateWithoutDailyLogInput, WorkoutLogUncheckedCreateWithoutDailyLogInput>
  }

  export type WorkoutLogCreateManyDailyLogInputEnvelope = {
    data: WorkoutLogCreateManyDailyLogInput | WorkoutLogCreateManyDailyLogInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDailyLogsInput = {
    update: XOR<UserUpdateWithoutDailyLogsInput, UserUncheckedUpdateWithoutDailyLogsInput>
    create: XOR<UserCreateWithoutDailyLogsInput, UserUncheckedCreateWithoutDailyLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyLogsInput, UserUncheckedUpdateWithoutDailyLogsInput>
  }

  export type UserUpdateWithoutDailyLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUpdateOneWithoutUserNestedInput
    food?: FoodUpdateManyWithoutUserNestedInput
    items?: MealItemUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUncheckedUpdateOneWithoutUserNestedInput
    food?: FoodUncheckedUpdateManyWithoutUserNestedInput
    items?: MealItemUncheckedUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealUpsertWithWhereUniqueWithoutDailyLogInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutDailyLogInput, MealUncheckedUpdateWithoutDailyLogInput>
    create: XOR<MealCreateWithoutDailyLogInput, MealUncheckedCreateWithoutDailyLogInput>
  }

  export type MealUpdateWithWhereUniqueWithoutDailyLogInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutDailyLogInput, MealUncheckedUpdateWithoutDailyLogInput>
  }

  export type MealUpdateManyWithWhereWithoutDailyLogInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutDailyLogInput>
  }

  export type MealScalarWhereInput = {
    AND?: MealScalarWhereInput | MealScalarWhereInput[]
    OR?: MealScalarWhereInput[]
    NOT?: MealScalarWhereInput | MealScalarWhereInput[]
    id?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    logId?: StringFilter<"Meal"> | string
  }

  export type WorkoutLogUpsertWithWhereUniqueWithoutDailyLogInput = {
    where: WorkoutLogWhereUniqueInput
    update: XOR<WorkoutLogUpdateWithoutDailyLogInput, WorkoutLogUncheckedUpdateWithoutDailyLogInput>
    create: XOR<WorkoutLogCreateWithoutDailyLogInput, WorkoutLogUncheckedCreateWithoutDailyLogInput>
  }

  export type WorkoutLogUpdateWithWhereUniqueWithoutDailyLogInput = {
    where: WorkoutLogWhereUniqueInput
    data: XOR<WorkoutLogUpdateWithoutDailyLogInput, WorkoutLogUncheckedUpdateWithoutDailyLogInput>
  }

  export type WorkoutLogUpdateManyWithWhereWithoutDailyLogInput = {
    where: WorkoutLogScalarWhereInput
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyWithoutDailyLogInput>
  }

  export type UserCreateWithoutWorkoutLogsInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    userSession?: UserSessionCreateNestedOneWithoutUserInput
    food?: FoodCreateNestedManyWithoutUserInput
    items?: MealItemCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutLogsInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    userSession?: UserSessionUncheckedCreateNestedOneWithoutUserInput
    food?: FoodUncheckedCreateNestedManyWithoutUserInput
    items?: MealItemUncheckedCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
  }

  export type ExerciseCreateWithoutWorkoutLogsInput = {
    name: string
    caloriesBurnedPerMin: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ExerciseUncheckedCreateWithoutWorkoutLogsInput = {
    id?: number
    name: string
    caloriesBurnedPerMin: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ExerciseCreateOrConnectWithoutWorkoutLogsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutWorkoutLogsInput, ExerciseUncheckedCreateWithoutWorkoutLogsInput>
  }

  export type DailyLogCreateWithoutWorkoutLogsInput = {
    id?: string
    date: Date | string
    user: UserCreateNestedOneWithoutDailyLogsInput
    meals?: MealCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogUncheckedCreateWithoutWorkoutLogsInput = {
    id?: string
    date: Date | string
    userId: string
    meals?: MealUncheckedCreateNestedManyWithoutDailyLogInput
  }

  export type DailyLogCreateOrConnectWithoutWorkoutLogsInput = {
    where: DailyLogWhereUniqueInput
    create: XOR<DailyLogCreateWithoutWorkoutLogsInput, DailyLogUncheckedCreateWithoutWorkoutLogsInput>
  }

  export type UserUpsertWithoutWorkoutLogsInput = {
    update: XOR<UserUpdateWithoutWorkoutLogsInput, UserUncheckedUpdateWithoutWorkoutLogsInput>
    create: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutLogsInput, UserUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type UserUpdateWithoutWorkoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUpdateOneWithoutUserNestedInput
    food?: FoodUpdateManyWithoutUserNestedInput
    items?: MealItemUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUncheckedUpdateOneWithoutUserNestedInput
    food?: FoodUncheckedUpdateManyWithoutUserNestedInput
    items?: MealItemUncheckedUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExerciseUpsertWithoutWorkoutLogsInput = {
    update: XOR<ExerciseUpdateWithoutWorkoutLogsInput, ExerciseUncheckedUpdateWithoutWorkoutLogsInput>
    create: XOR<ExerciseCreateWithoutWorkoutLogsInput, ExerciseUncheckedCreateWithoutWorkoutLogsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutWorkoutLogsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutWorkoutLogsInput, ExerciseUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type ExerciseUpdateWithoutWorkoutLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    caloriesBurnedPerMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateWithoutWorkoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    caloriesBurnedPerMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyLogUpsertWithoutWorkoutLogsInput = {
    update: XOR<DailyLogUpdateWithoutWorkoutLogsInput, DailyLogUncheckedUpdateWithoutWorkoutLogsInput>
    create: XOR<DailyLogCreateWithoutWorkoutLogsInput, DailyLogUncheckedCreateWithoutWorkoutLogsInput>
    where?: DailyLogWhereInput
  }

  export type DailyLogUpdateToOneWithWhereWithoutWorkoutLogsInput = {
    where?: DailyLogWhereInput
    data: XOR<DailyLogUpdateWithoutWorkoutLogsInput, DailyLogUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type DailyLogUpdateWithoutWorkoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyLogsNestedInput
    meals?: MealUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogUncheckedUpdateWithoutWorkoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    meals?: MealUncheckedUpdateManyWithoutDailyLogNestedInput
  }

  export type UserCreateWithoutWaterLogsInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    userSession?: UserSessionCreateNestedOneWithoutUserInput
    food?: FoodCreateNestedManyWithoutUserInput
    items?: MealItemCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWaterLogsInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    userSession?: UserSessionUncheckedCreateNestedOneWithoutUserInput
    food?: FoodUncheckedCreateNestedManyWithoutUserInput
    items?: MealItemUncheckedCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWaterLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWaterLogsInput, UserUncheckedCreateWithoutWaterLogsInput>
  }

  export type UserUpsertWithoutWaterLogsInput = {
    update: XOR<UserUpdateWithoutWaterLogsInput, UserUncheckedUpdateWithoutWaterLogsInput>
    create: XOR<UserCreateWithoutWaterLogsInput, UserUncheckedCreateWithoutWaterLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWaterLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWaterLogsInput, UserUncheckedUpdateWithoutWaterLogsInput>
  }

  export type UserUpdateWithoutWaterLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUpdateOneWithoutUserNestedInput
    food?: FoodUpdateManyWithoutUserNestedInput
    items?: MealItemUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWaterLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUncheckedUpdateOneWithoutUserNestedInput
    food?: FoodUncheckedUpdateManyWithoutUserNestedInput
    items?: MealItemUncheckedUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWeightLogsInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    userSession?: UserSessionCreateNestedOneWithoutUserInput
    food?: FoodCreateNestedManyWithoutUserInput
    items?: MealItemCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWeightLogsInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    userSession?: UserSessionUncheckedCreateNestedOneWithoutUserInput
    food?: FoodUncheckedCreateNestedManyWithoutUserInput
    items?: MealItemUncheckedCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWeightLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeightLogsInput, UserUncheckedCreateWithoutWeightLogsInput>
  }

  export type UserUpsertWithoutWeightLogsInput = {
    update: XOR<UserUpdateWithoutWeightLogsInput, UserUncheckedUpdateWithoutWeightLogsInput>
    create: XOR<UserCreateWithoutWeightLogsInput, UserUncheckedCreateWithoutWeightLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeightLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeightLogsInput, UserUncheckedUpdateWithoutWeightLogsInput>
  }

  export type UserUpdateWithoutWeightLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUpdateOneWithoutUserNestedInput
    food?: FoodUpdateManyWithoutUserNestedInput
    items?: MealItemUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWeightLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUncheckedUpdateOneWithoutUserNestedInput
    food?: FoodUncheckedUpdateManyWithoutUserNestedInput
    items?: MealItemUncheckedUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFoodInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    userSession?: UserSessionCreateNestedOneWithoutUserInput
    items?: MealItemCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFoodInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    userSession?: UserSessionUncheckedCreateNestedOneWithoutUserInput
    items?: MealItemUncheckedCreateNestedManyWithoutUserInput
    caloriesLogs?: CaloriesLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFoodInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFoodInput, UserUncheckedCreateWithoutFoodInput>
  }

  export type MealItemCreateWithoutFoodInput = {
    id?: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meal: MealCreateNestedOneWithoutItemsInput
    user: UserCreateNestedOneWithoutItemsInput
  }

  export type MealItemUncheckedCreateWithoutFoodInput = {
    id?: string
    mealId: string
    quantity: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealItemCreateOrConnectWithoutFoodInput = {
    where: MealItemWhereUniqueInput
    create: XOR<MealItemCreateWithoutFoodInput, MealItemUncheckedCreateWithoutFoodInput>
  }

  export type MealItemCreateManyFoodInputEnvelope = {
    data: MealItemCreateManyFoodInput | MealItemCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFoodInput = {
    update: XOR<UserUpdateWithoutFoodInput, UserUncheckedUpdateWithoutFoodInput>
    create: XOR<UserCreateWithoutFoodInput, UserUncheckedCreateWithoutFoodInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFoodInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFoodInput, UserUncheckedUpdateWithoutFoodInput>
  }

  export type UserUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUpdateOneWithoutUserNestedInput
    items?: MealItemUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUncheckedUpdateOneWithoutUserNestedInput
    items?: MealItemUncheckedUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealItemUpsertWithWhereUniqueWithoutFoodInput = {
    where: MealItemWhereUniqueInput
    update: XOR<MealItemUpdateWithoutFoodInput, MealItemUncheckedUpdateWithoutFoodInput>
    create: XOR<MealItemCreateWithoutFoodInput, MealItemUncheckedCreateWithoutFoodInput>
  }

  export type MealItemUpdateWithWhereUniqueWithoutFoodInput = {
    where: MealItemWhereUniqueInput
    data: XOR<MealItemUpdateWithoutFoodInput, MealItemUncheckedUpdateWithoutFoodInput>
  }

  export type MealItemUpdateManyWithWhereWithoutFoodInput = {
    where: MealItemScalarWhereInput
    data: XOR<MealItemUpdateManyMutationInput, MealItemUncheckedUpdateManyWithoutFoodInput>
  }

  export type UserCreateWithoutCaloriesLogsInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogCreateNestedManyWithoutUserInput
    userSession?: UserSessionCreateNestedOneWithoutUserInput
    food?: FoodCreateNestedManyWithoutUserInput
    items?: MealItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCaloriesLogsInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    roleId: number
    created_at?: Date | string
    updated_at?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    dailyLogs?: DailyLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    weightLogs?: WeightLogUncheckedCreateNestedManyWithoutUserInput
    userSession?: UserSessionUncheckedCreateNestedOneWithoutUserInput
    food?: FoodUncheckedCreateNestedManyWithoutUserInput
    items?: MealItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCaloriesLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCaloriesLogsInput, UserUncheckedCreateWithoutCaloriesLogsInput>
  }

  export type MealCreateWithoutCaloriesLogsInput = {
    id?: string
    name: string
    dailyLog: DailyLogCreateNestedOneWithoutMealsInput
    items?: MealItemCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutCaloriesLogsInput = {
    id?: string
    name: string
    logId: string
    items?: MealItemUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutCaloriesLogsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutCaloriesLogsInput, MealUncheckedCreateWithoutCaloriesLogsInput>
  }

  export type UserUpsertWithoutCaloriesLogsInput = {
    update: XOR<UserUpdateWithoutCaloriesLogsInput, UserUncheckedUpdateWithoutCaloriesLogsInput>
    create: XOR<UserCreateWithoutCaloriesLogsInput, UserUncheckedCreateWithoutCaloriesLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCaloriesLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCaloriesLogsInput, UserUncheckedUpdateWithoutCaloriesLogsInput>
  }

  export type UserUpdateWithoutCaloriesLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUpdateOneWithoutUserNestedInput
    food?: FoodUpdateManyWithoutUserNestedInput
    items?: MealItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCaloriesLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUncheckedUpdateOneWithoutUserNestedInput
    food?: FoodUncheckedUpdateManyWithoutUserNestedInput
    items?: MealItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealUpsertWithoutCaloriesLogsInput = {
    update: XOR<MealUpdateWithoutCaloriesLogsInput, MealUncheckedUpdateWithoutCaloriesLogsInput>
    create: XOR<MealCreateWithoutCaloriesLogsInput, MealUncheckedCreateWithoutCaloriesLogsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutCaloriesLogsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutCaloriesLogsInput, MealUncheckedUpdateWithoutCaloriesLogsInput>
  }

  export type MealUpdateWithoutCaloriesLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dailyLog?: DailyLogUpdateOneRequiredWithoutMealsNestedInput
    items?: MealItemUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutCaloriesLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logId?: StringFieldUpdateOperationsInput | string
    items?: MealItemUncheckedUpdateManyWithoutMealNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email?: string | null
    phone_no?: string | null
    password: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUpdateOneWithoutUserNestedInput
    food?: FoodUpdateManyWithoutUserNestedInput
    items?: MealItemUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    dailyLogs?: DailyLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    weightLogs?: WeightLogUncheckedUpdateManyWithoutUserNestedInput
    userSession?: UserSessionUncheckedUpdateOneWithoutUserNestedInput
    food?: FoodUncheckedUpdateManyWithoutUserNestedInput
    items?: MealItemUncheckedUpdateManyWithoutUserNestedInput
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_no?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyLogCreateManyUserInput = {
    id?: string
    date: Date | string
  }

  export type WorkoutLogCreateManyUserInput = {
    id?: string
    dailyLogId: string
    exerciseId: number
    durationMin: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WaterLogCreateManyUserInput = {
    id?: string
    date: Date | string
    amount: number
    totalCalories?: number | null
  }

  export type WeightLogCreateManyUserInput = {
    id?: string
    date: Date | string
    weightLb?: number | null
    totalBurnCalories?: number | null
  }

  export type FoodCreateManyUserInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    unit: $Enums.Unit
    food_image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MealItemCreateManyUserInput = {
    id?: string
    mealId: string
    foodId: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaloriesLogCreateManyUserInput = {
    id?: string
    mealId?: string | null
    date: Date | string
    meal: string
    foodName: string
    quantity: number
    totalCalories: number
    totalProtein?: number | null
    totalCarbs?: number | null
    totalFat?: number | null
    createdAt?: Date | string
    updated_at?: Date | string
  }

  export type DailyLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutDailyLogNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutDailyLogNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutDailyLogNestedInput
  }

  export type DailyLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutLogsNestedInput
    dailyLog?: DailyLogUpdateOneRequiredWithoutWorkoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLogId?: StringFieldUpdateOperationsInput | string
    exerciseId?: IntFieldUpdateOperationsInput | number
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLogId?: StringFieldUpdateOperationsInput | string
    exerciseId?: IntFieldUpdateOperationsInput | number
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    totalCalories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WaterLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    totalCalories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WaterLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: FloatFieldUpdateOperationsInput | number
    totalCalories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WeightLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBurnCalories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WeightLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBurnCalories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WeightLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weightLb?: NullableFloatFieldUpdateOperationsInput | number | null
    totalBurnCalories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FoodUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    food_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mealItems?: MealItemUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    food_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mealItems?: MealItemUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    food_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateOneRequiredWithoutItemsNestedInput
    food?: FoodUpdateOneRequiredWithoutMealItemsNestedInput
  }

  export type MealItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaloriesLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCarbs?: NullableFloatFieldUpdateOperationsInput | number | null
    totalFat?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mealRelation?: MealUpdateOneWithoutCaloriesLogsNestedInput
  }

  export type CaloriesLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCarbs?: NullableFloatFieldUpdateOperationsInput | number | null
    totalFat?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaloriesLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCarbs?: NullableFloatFieldUpdateOperationsInput | number | null
    totalFat?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealItemCreateManyMealInput = {
    id?: string
    foodId: string
    quantity: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaloriesLogCreateManyMealRelationInput = {
    id?: string
    userId: string
    date: Date | string
    meal: string
    foodName: string
    quantity: number
    totalCalories: number
    totalProtein?: number | null
    totalCarbs?: number | null
    totalFat?: number | null
    createdAt?: Date | string
    updated_at?: Date | string
  }

  export type MealItemUpdateWithoutMealInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutMealItemsNestedInput
    user?: UserUpdateOneRequiredWithoutItemsNestedInput
  }

  export type MealItemUncheckedUpdateWithoutMealInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealItemUncheckedUpdateManyWithoutMealInput = {
    id?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaloriesLogUpdateWithoutMealRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCarbs?: NullableFloatFieldUpdateOperationsInput | number | null
    totalFat?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCaloriesLogsNestedInput
  }

  export type CaloriesLogUncheckedUpdateWithoutMealRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCarbs?: NullableFloatFieldUpdateOperationsInput | number | null
    totalFat?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaloriesLogUncheckedUpdateManyWithoutMealRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: StringFieldUpdateOperationsInput | string
    foodName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: NullableFloatFieldUpdateOperationsInput | number | null
    totalCarbs?: NullableFloatFieldUpdateOperationsInput | number | null
    totalFat?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogCreateManyExerciseInput = {
    id?: string
    dailyLogId: string
    userId: string
    durationMin: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WorkoutLogUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutLogsNestedInput
    dailyLog?: DailyLogUpdateOneRequiredWithoutWorkoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLogId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyLogId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateManyDailyLogInput = {
    id?: string
    name: string
  }

  export type WorkoutLogCreateManyDailyLogInput = {
    id?: string
    userId: string
    exerciseId: number
    durationMin: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MealUpdateWithoutDailyLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    items?: MealItemUpdateManyWithoutMealNestedInput
    caloriesLogs?: CaloriesLogUpdateManyWithoutMealRelationNestedInput
  }

  export type MealUncheckedUpdateWithoutDailyLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    items?: MealItemUncheckedUpdateManyWithoutMealNestedInput
    caloriesLogs?: CaloriesLogUncheckedUpdateManyWithoutMealRelationNestedInput
  }

  export type MealUncheckedUpdateManyWithoutDailyLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutLogUpdateWithoutDailyLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutLogsNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateWithoutDailyLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exerciseId?: IntFieldUpdateOperationsInput | number
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogUncheckedUpdateManyWithoutDailyLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exerciseId?: IntFieldUpdateOperationsInput | number
    durationMin?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealItemCreateManyFoodInput = {
    id?: string
    mealId: string
    quantity: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealItemUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateOneRequiredWithoutItemsNestedInput
    user?: UserUpdateOneRequiredWithoutItemsNestedInput
  }

  export type MealItemUncheckedUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealItemUncheckedUpdateManyWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    mealId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MealCountOutputTypeDefaultArgs instead
     */
    export type MealCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MealCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExerciseCountOutputTypeDefaultArgs instead
     */
    export type ExerciseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExerciseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyLogCountOutputTypeDefaultArgs instead
     */
    export type DailyLogCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyLogCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoodCountOutputTypeDefaultArgs instead
     */
    export type FoodCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserSessionDefaultArgs instead
     */
    export type UserSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileDefaultArgs instead
     */
    export type ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MealDefaultArgs instead
     */
    export type MealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MealDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MealItemDefaultArgs instead
     */
    export type MealItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MealItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExerciseDefaultArgs instead
     */
    export type ExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExerciseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyLogDefaultArgs instead
     */
    export type DailyLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkoutLogDefaultArgs instead
     */
    export type WorkoutLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkoutLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaterLogDefaultArgs instead
     */
    export type WaterLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaterLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeightLogDefaultArgs instead
     */
    export type WeightLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeightLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoodDefaultArgs instead
     */
    export type FoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CaloriesLogDefaultArgs instead
     */
    export type CaloriesLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CaloriesLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}