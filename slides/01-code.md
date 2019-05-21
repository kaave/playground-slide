# Code

```typescript
type User = {
  name: string;
  age: number;
};

type Family = {
  father: User;
  mother: User;
};

type ChildDetail<T, K> = { [key in keyof T]: K extends keyof T[key] ? T[key][K] : never };
type UserName = ChildDetail<Family, 'name'>;
```
