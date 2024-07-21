export type Slice<I, R> = {
  name: string;
  initial: I;
  reducer: (state: I, setState: (state: I) => void) => R;
};

export type Config = {
  name: string;
  slices: Slice<unknown, unknown>[];
  persist: boolean;
};
