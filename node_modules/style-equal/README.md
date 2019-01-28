# style-equal

An efficient equality algorithm for React Native inline styles


# Why

`shouldComponentUpdate` is a powerful way to improve performance of react and
react native applications, but often you will want to allow for a component to have
a style prop to make the style of something be configurable.

Since `style` in react native can be of many forms (an object, a number, an array of both,
or a nested array of both), it is not trivial or practical to implement an equality test for these props
in the `shouldComponentUpdate` method.


## Installation

```sh
npm i style-equal --save
```



## Usage

```
import styleEqual from 'style-equal';

// ...

shouldComponentUpdate(nextProps) {
  return !styleEqual(this.props.style, nextProps.style);
}

```


## Caveats

The `styleEqual` algorithm is implemented to be fast and efficient for usage
with `shouldComponentUpdate` methods in react. The algorithm will never give
a false-positive (ie, saying two things are equal when they are not), however,
there are things that are semantically equivalent that the algorithm will 
return false for. One example of this is when comparing two styles such as:

```
styleEqual([1, false, 2], [1, 2]) // returns false
```

The above will always render the same styles, however the algorithm is built
to assume that the position of a style will not change "slots" of the array.
