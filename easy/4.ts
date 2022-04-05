/**
 * This is a simple test interface
 */
interface Test {
  name: string;
  age: number;
}

type Name = Pick<Test, "name">;
// 使用Pick的时候 如果写 Pick<Test, "aaa"> 的话
// 就会报错 类型“"aaa"”不满足约束“keyof Test” 
// 所以Pick的第二个泛型参数得是 keyof Test


type MyPick<T, K extends keyof T /* T类型中的key */> = {
    [key in K] : T[key];
  }

let name: Name = {
  name: "1",
  // age: 10, 报错
};



type newAge = MyPick<Test, 'age'>;

let age: newAge = {
    age: 10,
}

export { name };
