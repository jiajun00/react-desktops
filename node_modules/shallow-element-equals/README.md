# shallow-element-equals

Efficient shallow equality algorithm that also allows checks for react element equality of children props

## Why

`shouldComponentUpdate` is a powerful way to improve performance of react and react native applications,
but often you have components which you can expect to be "pure", but you also want them to have an API
that accepts children.

Having a `children` prop pretty much removes any chance of using a "shallow" equality comparison of props,
since `React.createElement` will return a new object reference on every call, so JSX elements are always
new object references.

`shallowElementEquals` takes this into account, and treats `children` props in a special way such that it will
assume that all of the children elements provided to a component are "pure" as well, and just the props/types
could be compared for an optimized comparison.

## Be careful using this

This is dangerous. Don't use this function if you don't understand its consequences.  By having a component adopt
a `shouldComponentUpdate` method like this, you are assuming something about the components that people are 
passing into your component as children that may not be true (ie, that they are pure). If this is not true,
the consumers of your component may have their application behave in ways that they do not expect, and the
reason will be completely opaque to them.

I would probably not recommend using this type of an optimization on public code or open source projects where
lots of people will be using it without understanding these assumptions.


## Installation

```bash
npm i shallow-element-equals --save
```


## Usage

```js
import shallowElementEquals from 'shallow-element-equals';

// ...

shouldComponentUpdate(nextProps) {
  return !shallowElementEquals(this.props, nextProps);
}
```


## Examples of how this works

See the [tests](test/shallowElementEquals-test.js) to understand better what this will match on.
