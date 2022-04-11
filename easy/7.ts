interface Todo {
  title: string;
  description: string;
}

const todo: Readonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

// todo.title = "Hello"; // 无法分配到 "title" ，因为它是只读属性。
// todo.description = "barFoo"; // 无法分配到 "description" ，因为它是只读属性。

/**
 * Readonly类型接受一个类型，并且所有的key和key的类型都和之前相同
 * 只是相当于给每个key都加上了readonly属性
 */

// 举例

interface ReadonlyTodo {
  readonly title: string;
  readonly description: string;
}

const test1: ReadonlyTodo = {
  title: "1",
  description: "2",
};

// test1.title = '2'; 报错

// 所以我们的ReadOnly其实就是给原来的interface的每个属性都加上一个readonly

// 代码如下：

type MyReadonly<T> = {
  readonly /* 这个就是重点 */ [/* readonly之后的就是相当于 复刻了原有接口 */ key in keyof T]: T[key];
};
