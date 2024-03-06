import * as R from 'fp-ts/Record';
import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';
import { colors } from '@/tempData';
import { parse } from 'culori';

const uniqueColorsByGroup = pipe(
  colors,
  R.map((colorGroup) =>
    pipe(
      colorGroup,
      R.collect((_, colorValue) => colorValue),
      A.map(parse),
      (arr) => [...(new Set(arr))]
    )
  )
);

console.log(uniqueColorsByGroup);