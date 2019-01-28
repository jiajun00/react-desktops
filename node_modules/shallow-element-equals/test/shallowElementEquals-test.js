var assert = require('chai').assert;
var React = require('react');

var shallowElementEquals = require('../');

const Foo = () => {};
const Bar = () => {};

describe('shallowElementEquals(a, b)', () => {
  describe('succeeds on', () => {
    it('single child and no props', () => {
      const a = (
        <Foo>
          <Bar />
        </Foo>
      );
      const b = (
        <Foo>
          <Bar />
        </Foo>
      );
      assert(shallowElementEquals(a.props, b.props));
    });

    it('multiple child and no props', () => {
      const a = (
        <Foo>
          <Bar />
          <Foo />
          <Bar />
        </Foo>
      );
      const b = (
        <Foo>
          <Bar />
          <Foo />
          <Bar />
        </Foo>
      );
      assert(shallowElementEquals(a.props, b.props));
    });

    it('multiple children from array', () => {
      const a = (
        <Foo>
          {Array.from({ length: 10 }).map((_, i) => (
            <Bar key={i} someProp={i} />
          ))}
        </Foo>
      );
      const b = (
        <Foo>
          {Array.from({ length: 10 }).map((_, i) => (
            <Bar key={i} someProp={i} />
          ))}
        </Foo>
      );
      assert(shallowElementEquals(a.props, b.props));
    });

    it('multiple children from array and arguments', () => {
      const a = (
        <Foo>
          <Foo />
          {Array.from({ length: 10 }).map((_, i) => (
            <Bar key={i} someProp={i} />
          ))}
        </Foo>
      );
      const b = (
        <Foo>
          <Foo />
          {Array.from({ length: 10 }).map((_, i) => (
            <Bar key={i} someProp={i} />
          ))}
        </Foo>
      );
      assert(shallowElementEquals(a.props, b.props));
    });

    it('nested children', () => {
      const a = (
        <Foo>
          <Foo boo="foo">
            <Foo bam="baz">
              <Bar foo="bar" />
            </Foo>
          </Foo>
        </Foo>
      );
      const b = (
        <Foo>
          <Foo boo="foo">
            <Foo bam="baz">
              <Bar foo="bar" />
            </Foo>
          </Foo>
        </Foo>
      );
      assert(shallowElementEquals(a.props, b.props));
    });

    it('style props', () => {
      const a = (
        <Foo>
          <Foo style={[1, 2, false, { color: 'blue' }]}>
            <Bar foo="bar" />
          </Foo>
        </Foo>
      );
      const b = (
        <Foo>
          <Foo style={[1, 2, false, { color: 'blue' }]}>
            <Bar foo="bar" />
          </Foo>
        </Foo>
      );
      assert(shallowElementEquals(a.props, b.props));
    });
  });

  describe('fails on', () => {
    it('single child with different props', () => {
      const a = (
        <Foo>
          <Bar foo="bar" />
        </Foo>
      );
      const b = (
        <Foo>
          <Bar />
        </Foo>
      );
      assert(!shallowElementEquals(a.props, b.props));
    });

    it('single nested child with different props', () => {
      const a = (
        <Foo>
          <Foo>
            <Bar foo="bar" />
          </Foo>
        </Foo>
      );
      const b = (
        <Foo>
          <Foo>
            <Bar foo="bam" />
          </Foo>
        </Foo>
      );
      assert(!shallowElementEquals(a.props, b.props));
    });

    it('array of children with different lengths', () => {
      const a = (
        <Foo>
          {Array.from({ length: 10 }).map((_, i) => (
            <Bar key={i} someProp={i} />
          ))}
        </Foo>
      );
      const b = (
        <Foo>
          {Array.from({ length: 9 }).map((_, i) => (
            <Bar key={i} someProp={i} />
          ))}
        </Foo>
      );
      assert(!shallowElementEquals(a.props, b.props));
    });

    it('array of children with elements switched', () => {
      const a = (
        <Foo>
          {Array.from({ length: 10 }).map((_, i) => (
            <Bar key={i} someProp={i} />
          ))}
        </Foo>
      );
      const children = Array.from({ length: 9 }).map((_, i) => (
        <Bar key={i} someProp={i} />
      ));
      children.splice(5, 0,
        <Bar key={10} someProp={10} />
      );
      const b = (
        <Foo>
          {children}
        </Foo>
      );
      assert(!shallowElementEquals(a.props, b.props));
    });

    it('array of children with elements switched', () => {
      const a = (
        <Foo>
          {Array.from({ length: 10 }).map((_, i) => (
            <Bar key={i} someProp={i} />
          ))}
        </Foo>
      );
      const children = Array.from({ length: 10 }).map((_, i) => (
        <Bar key={i} someProp={i} />
      ));
      children.splice(5, 1,
        <Bar key={5} someProp={999} />
      );
      const b = (
        <Foo>
          {children}
        </Foo>
      );
      assert(!shallowElementEquals(a.props, b.props));
    });

    it('single element with new object prop', () => {
      const a = (
        <Foo bar={{}} />
      );
      const b = (
        <Foo bar={{}} />
      );
      assert(!shallowElementEquals(a.props, b.props));
    });

    it('style props', () => {
      const a = (
        <Foo>
          <Foo style={[1, 2, false, { color: 'blue' }]}>
            <Bar foo="bar" />
          </Foo>
        </Foo>
      );
      const b = (
        <Foo>
          <Foo style={[1, 2, false, { color: 'red' }]}>
            <Bar foo="bar" />
          </Foo>
        </Foo>
      );
      assert(!shallowElementEquals(a.props, b.props));
    });

  });
});
