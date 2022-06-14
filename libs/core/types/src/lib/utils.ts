export type RecuresiveKeyOf<Obj> = {
  [TKey1 in keyof Obj & (string | number)]: {
    [TKey2 in keyof Obj[TKey1] & (string | number)]: `${TKey1}.${TKey2}`;
  }[keyof Obj[TKey1] & (string | number)];
}[keyof Obj & (string | number)];

export type Maybe<T> = T | null;
