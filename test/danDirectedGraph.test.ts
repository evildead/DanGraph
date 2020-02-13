// mocha
import 'mocha';

// chai
import chai from 'chai';

// commons module
import { DirectedGraph, CDanNode, CDanArc } from '../src/index';

const should = chai.should();
const expect = chai.expect;

describe('Test the DanDirectedGraph', (): void => {
  it('addNode', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<string, undefined>();
    myGraph.addNode(new CDanNode({ id: '1' }));
    myGraph.countNodes().should.equal(1);
    myGraph.addNode(new CDanNode({ id: '2' }));
    myGraph.countNodes().should.equal(2);
    myGraph.addNode(new CDanNode({ id: '3' }));
    myGraph.countNodes().should.equal(3);
    myGraph.addNode(new CDanNode({ id: '1' }));
    myGraph.countNodes().should.equal(3);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('addArcToNode', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 6 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.countNodes().should.equal(6);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('removeNode', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 6 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.removeNode(6);
    myGraph.countNodes().should.equal(5);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isAcyclic 1 (true)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 6 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.isAcyclic().should.equal(true);
    const graphStr = myGraph.toString(true);
    console.log(graphStr);
  });

  it('isAcyclic 2 (false)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 6 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.isAcyclic().should.equal(false);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isAcyclic 3 (false)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 1 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.isAcyclic().should.equal(false);
    const graphStr = myGraph.toString(true);
    console.log(graphStr);
  });

  it('isAcyclic 4 (false)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.isAcyclic().should.equal(false);
    const graphStr = myGraph.toString(true);
    console.log(graphStr);
  });

  it('isAcyclic 5 (false)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 6 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 3 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.isAcyclic().should.equal(false);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isAcyclic 6 (true)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 6 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 3 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.isAcyclic().should.equal(true);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('sourceConnectedToAllNodes 1 (true)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 6 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.sourceConnectedToAllNodes(1).should.equal(true);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('sourceConnectedToAllNodes 2 (false)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 6 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.sourceConnectedToAllNodes(1).should.equal(false);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('sourceConnectedToAllNodes 3 (true)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 6 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 3 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.sourceConnectedToAllNodes(1).should.equal(true);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('sourceConnectedToAllNodes 4 (false)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 6 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.addArcToNode(
      new CDanNode({ id: 3 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }),
      DirectedGraph.ArcType.incoming
    );
    myGraph.sourceConnectedToAllNodes(1).should.equal(false);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('generateConsecutiveNodeGraph', (): void => {
    const myGraph = DirectedGraph.DanDirectedGraph.generateConsecutiveNodeGraph(1000);
    myGraph.countNodes().should.equal(1000);
    myGraph.sourceConnectedToAllNodes(0).should.equal(true);
    myGraph.isAcyclic().should.equal(true);
  });

  it('generateRandomNodeGraph', (): void => {
    const myGraph = DirectedGraph.DanDirectedGraph.generateRandomNodeGraph(1000);
    myGraph.countNodes().should.equal(1000);
    const sourceConnected = myGraph.sourceConnectedToAllNodes(0);
    const isAcyclic = myGraph.isAcyclic();
    console.log(
      `${
        sourceConnected
          ? 'node 0 HAS a path to all of the other nodes in the graph'
          : 'node 0 DOES NOT HAVE a path to all of the other nodes in the graph'
      }`
    );
    console.log(`${isAcyclic ? 'the graph is acyclic' : 'the graph is not acyclic'}`);
  });

  it('DepthFirst iterator', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    // 1 -> 2
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 1 -> 7
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 2 -> 3
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 2 -> 6
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 3 -> 4
    myGraph.addArcToNode(
      new CDanNode({ id: 3 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 3 -> 5
    myGraph.addArcToNode(
      new CDanNode({ id: 3 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 7 -> 8
    myGraph.addArcToNode(
      new CDanNode({ id: 7 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 7 -> 9
    myGraph.addArcToNode(
      new CDanNode({ id: 7 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 9 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 7 -> 12
    myGraph.addArcToNode(
      new CDanNode({ id: 7 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 12 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 9 -> 10
    myGraph.addArcToNode(
      new CDanNode({ id: 9 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 10 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 10 -> 11
    myGraph.addArcToNode(
      new CDanNode({ id: 10 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 11 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 12 -> 13
    myGraph.addArcToNode(
      new CDanNode({ id: 12 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 13 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.countNodes().should.equal(13);

    const it = myGraph.getDepthFirstIterator(1);
    let counter = 1;
    while (it.hasNext()) {
      const node = it.next();
      expect(node).not.to.be.undefined;
      if (node !== undefined) {
        node.id.should.equal(counter++);
        console.log(`Depth first iterator - Node ${node !== undefined ? node.id : 'undefined'}`);
      }
    }
  });
});
