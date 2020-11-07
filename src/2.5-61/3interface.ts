interface Person {
  name: string
  parent: people[]
  children: people[]
}
interface people {
  name: string
  age: number
}
const obj: Person = {
  name: 'parent',
  // dd:123,
  parent: [
    {
      name: 'grog123123e',
      age: 12,
    },
    {
      name: 'tom',
      age: 12,
    },
    {
      name: 'pik',
      age: 12,
    },
  ],
  children: [
    {
      name: 'groge',
      age: 12,
    },
    {
      name: 'tom',
      age: 12,
    },
    {
      name: 'pik',
      age: 12,
    },
  ],
}
console.log(obj)
