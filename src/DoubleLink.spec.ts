/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-02-17 00:22:42
 */

import { DoubleLink, DoubleLinkNode } from './DoubleLink';

describe('LinkedList', function() {
  it('should append/prepend/drop', function() {
    const l1 = new DoubleLink<DoubleLinkNode<number>>();
    const l2 = new DoubleLink<DoubleLinkNode<number>>();
    const n1 = new DoubleLinkNode(1);
    const n2 = new DoubleLinkNode(2);
    const n3 = new DoubleLinkNode(3);
    const n4 = new DoubleLinkNode(4);
    const n5 = new DoubleLinkNode(5);
    l1.append(n1);
    expect(l1.head).toBe(n1);
    expect(l1.count).toBe(1);
    expect(n1.list).toBe(l1);
    expect(n1.prev).toBe(n1);
    expect(n1.next).toBe(n1);
    l2.prepend(n2);
    expect(l2.head).toBe(n2);
    expect(l2.count).toBe(1);
    expect(n2.list).toBe(l2);
    expect(n2.prev).toBe(n2);
    expect(n2.next).toBe(n2);
    l1.prepend(n3);
    expect(l1.count).toBe(2);
    expect(l1.items()[0]).toBe(n3);
    expect(l1.items()[1]).toBe(n1);
    l2.append(n4);
    expect(l2.count).toBe(2);
    expect(l2.items()[0]).toBe(n2);
    expect(l2.items()[1]).toBe(n4);
    expect(() => l1.drop(n5)).toThrow(ReferenceError);
    l1.drop(n1);
    expect(n1.list).toBeUndefined();
    expect(n1.prev).toBeUndefined();
    expect(n1.next).toBeUndefined();
    expect(l1.items()[0]).toBe(n3);
    expect(l1.count).toBe(1);
    expect(() => l1.drop(n1)).toThrow(ReferenceError);
    l1.drop(n3);
    expect(l1.count).toBe(0);
    expect(l1.head).toBeUndefined();
  });
});
