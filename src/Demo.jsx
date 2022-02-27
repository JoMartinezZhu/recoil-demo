import React from "react";
import { atom, selector, useRecoilValue, useRecoilState } from "recoil";

const delay = () => new Promise(r => setTimeout(r, 1000));

const numState = atom({
  key: "num",
  default: 1
});

const numx10Val = selector({
  key: "numx10",
  get: ({ get }) => {
    const num = get(numState);
    return num * 10;
  }
});

const asyncNumx10Val = selector({
  key: "asyncNumx10",
  get: async ({ get }) => {
    const num = get(numState);// 这句话不能放在delay之下
    await delay();
    return num * 10;
  }
});

const NumView = () => {
  const [num, setNum] = useRecoilState(numState);

  const add = () => setNum(num + 1);

  return (
    <div>
      {num}
      <br />
      <button onClick={add}>add</button>
    </div>
  );
};

const NumValView = () => {
  const numx10 = useRecoilValue(numx10Val);

  return (
    <div>
      numx10 :{numx10}
      <br />
    </div>
  );
};

const AsyncNumValView = () => {
  const asyncNumx10 = useRecoilValue(asyncNumx10Val);

  return (
    <div>
      asyncNumx10 :{asyncNumx10}
      <br />
    </div>
  );
};

export default () => {
  return (
    <>
      <NumView />
      <NumValView />
      <AsyncNumValView />
    </>
  );
};
