/* eslint-disable node/no-unpublished-import */
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
    expect(myGraph.hasNodeId(6)).to.be.true;
    myGraph.removeNode(6);
    expect(myGraph.hasNodeId(6)).to.be.false;
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
    if (sourceConnected) {
      console.log('node 0 HAS a path to all of the other nodes in the graph');
    } else {
      console.log('node 0 DOES NOT HAVE a path to all of the other nodes in the graph');
    }
    console.log(`${isAcyclic ? 'the graph is acyclic' : 'the graph is not acyclic'}`);
  });

  it('Depth-First iterator: first example', (): void => {
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

  it('Depth-First iterator: second example', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<string, undefined>();
    // 'A' -> 'B'
    myGraph.addArcToNode(
      new CDanNode({ id: 'A' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'B' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'A' -> 'C'
    myGraph.addArcToNode(
      new CDanNode({ id: 'A' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'C' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'B' -> 'D'
    myGraph.addArcToNode(
      new CDanNode({ id: 'B' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'D' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'B' -> 'E'
    myGraph.addArcToNode(
      new CDanNode({ id: 'B' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'E' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'C' -> 'F'
    myGraph.addArcToNode(
      new CDanNode({ id: 'C' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'F' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'C' -> 'G'
    myGraph.addArcToNode(
      new CDanNode({ id: 'C' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'G' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'E' -> 'H'
    myGraph.addArcToNode(
      new CDanNode({ id: 'E' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'H' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'E' -> 'I'
    myGraph.addArcToNode(
      new CDanNode({ id: 'E' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'I' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'G' -> 'J'
    myGraph.addArcToNode(
      new CDanNode({ id: 'G' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'J' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'G' -> 'K'
    myGraph.addArcToNode(
      new CDanNode({ id: 'G' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'K' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'H' -> 'L'
    myGraph.addArcToNode(
      new CDanNode({ id: 'H' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'L' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'H' -> 'M'
    myGraph.addArcToNode(
      new CDanNode({ id: 'H' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'M' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'H' -> 'N'
    myGraph.addArcToNode(
      new CDanNode({ id: 'H' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'N' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'I' -> 'O'
    myGraph.addArcToNode(
      new CDanNode({ id: 'I' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'O' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'I' -> 'P'
    myGraph.addArcToNode(
      new CDanNode({ id: 'I' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'P' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'K' -> 'Q'
    myGraph.addArcToNode(
      new CDanNode({ id: 'K' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'Q' }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.countNodes().should.equal(17);

    const it = myGraph.getDepthFirstIterator('A');
    let finalString = '';
    while (it.hasNext()) {
      const node = it.next();
      expect(node).not.to.be.undefined;
      if (node !== undefined) {
        finalString += node.id;
      }
    }
    finalString.should.equal('ABDEHLMNIOPCFGJKQ');
  });

  it('Breadth-First iterator: first example', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    // 1 -> 2
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 1 -> 3
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 1 -> 4
    myGraph.addArcToNode(
      new CDanNode({ id: 1 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 2 -> 5
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 2 -> 6
    myGraph.addArcToNode(
      new CDanNode({ id: 2 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 4 -> 7
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 4 -> 8
    myGraph.addArcToNode(
      new CDanNode({ id: 4 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 5 -> 9
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 9 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 5 -> 10
    myGraph.addArcToNode(
      new CDanNode({ id: 5 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 10 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 7 -> 11
    myGraph.addArcToNode(
      new CDanNode({ id: 7 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 11 }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 7 -> 12
    myGraph.addArcToNode(
      new CDanNode({ id: 7 }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 12 }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.countNodes().should.equal(12);

    const it = myGraph.getBreadthFirstIterator(1);
    let counter = 1;
    while (it.hasNext()) {
      const node = it.next();
      expect(node).not.to.be.undefined;
      if (node !== undefined) {
        node.id.should.equal(counter++);
        console.log(`Breadth-first iterator - Node ${node !== undefined ? node.id : 'undefined'}`);
      }
    }
  });

  it('Breadth-First iterator: second example', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<string, undefined>();
    // 'A' -> 'B'
    myGraph.addArcToNode(
      new CDanNode({ id: 'A' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'B' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'A' -> 'C'
    myGraph.addArcToNode(
      new CDanNode({ id: 'A' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'C' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'B' -> 'D'
    myGraph.addArcToNode(
      new CDanNode({ id: 'B' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'D' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'B' -> 'E'
    myGraph.addArcToNode(
      new CDanNode({ id: 'B' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'E' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'C' -> 'F'
    myGraph.addArcToNode(
      new CDanNode({ id: 'C' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'F' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'C' -> 'G'
    myGraph.addArcToNode(
      new CDanNode({ id: 'C' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'G' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'E' -> 'H'
    myGraph.addArcToNode(
      new CDanNode({ id: 'E' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'H' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'E' -> 'I'
    myGraph.addArcToNode(
      new CDanNode({ id: 'E' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'I' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'G' -> 'J'
    myGraph.addArcToNode(
      new CDanNode({ id: 'G' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'J' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'G' -> 'K'
    myGraph.addArcToNode(
      new CDanNode({ id: 'G' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'K' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'H' -> 'L'
    myGraph.addArcToNode(
      new CDanNode({ id: 'H' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'L' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'H' -> 'M'
    myGraph.addArcToNode(
      new CDanNode({ id: 'H' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'M' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'H' -> 'N'
    myGraph.addArcToNode(
      new CDanNode({ id: 'H' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'N' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'I' -> 'O'
    myGraph.addArcToNode(
      new CDanNode({ id: 'I' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'O' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'I' -> 'P'
    myGraph.addArcToNode(
      new CDanNode({ id: 'I' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'P' }) }),
      DirectedGraph.ArcType.outgoing
    );
    // 'K' -> 'Q'
    myGraph.addArcToNode(
      new CDanNode({ id: 'K' }),
      new CDanArc({ weight: 1, node: new CDanNode({ id: 'Q' }) }),
      DirectedGraph.ArcType.outgoing
    );
    myGraph.countNodes().should.equal(17);

    const it = myGraph.getBreadthFirstIterator('A');
    let finalString = '';
    while (it.hasNext()) {
      const node = it.next();
      expect(node).not.to.be.undefined;
      if (node !== undefined) {
        finalString += node.id;
      }
    }
    finalString.should.equal('ABCDEFGHIJKLMNOPQ');
  });
});
