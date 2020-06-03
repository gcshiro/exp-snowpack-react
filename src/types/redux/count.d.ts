/**
 * @interface
 * Countのstoreの型を定義する
 */
interface ICountStore {
  count: number;
}

/**
 * @interface
 * CountのPayloadの型を定義する
 */
interface ICountPayloadType {
  plusCount: number;
}
