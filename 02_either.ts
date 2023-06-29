type Either<E, A> =
  | {
      readonly _tag: 'Left'
      readonly left: E
    }
  | {
      readonly _tag: 'Right'
      readonly right: A
    }
