# Observar

```typescript
const list = new ObservableList<number>()
list.addArrayListener(() => console.log('array changed.'))
list.addArrayListener(() => console.log('element changed.'))

list.push(1) // 'array changed.'
list.val[0].val = 2 // 'element changed'
```

# Repository
```typescript
class Aaa extends SurrogateKeyEntity {}
class AaaRepository extends SurrogateKeyRepository<Aaa>{}

const repository = new AaaRepository()
const ent = new Aaa()

repository.insert(ent)
```

# DI
```typescript
class Aaa {}
const instance = Dependencies.inject(Aaa)
```