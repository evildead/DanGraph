// mocha
import 'mocha';

// chai
import chai from 'chai';

// commons module
import { DirectedGraph } from '../src/index';
import { ArcType } from '../src/directed_graph';

const should = chai.should();
const expect = chai.expect;

describe('Test the DanDirectedGraph', (): void => {
  it('addNode', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<string, undefined>();
    myGraph.addNode({ id: '1' });
    myGraph.countNodes().should.equal(1);
    myGraph.addNode({ id: '2' });
    myGraph.countNodes().should.equal(2);
    myGraph.addNode({ id: '3' });
    myGraph.countNodes().should.equal(3);
    myGraph.addNode({ id: '1' });
    myGraph.countNodes().should.equal(3);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('addArcToNode', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 4 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 5 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 6 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 6 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.countNodes().should.equal(6);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('removeNode', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 4 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 5 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 6 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 6 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.removeNode(6);
    myGraph.countNodes().should.equal(5);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isAcyclic 1 (true)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 4 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 5 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 6 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 6 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.isAcyclic().should.equal(true);
    const graphStr = myGraph.toString(true);
    console.log(graphStr);
  });

  it('isAcyclic 2 (false)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 4 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 5 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 6 } }, ArcType.incoming);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 6 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.isAcyclic().should.equal(false);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isAcyclic 3 (false)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 1 } }, ArcType.incoming);
    myGraph.isAcyclic().should.equal(false);
    const graphStr = myGraph.toString(true);
    console.log(graphStr);
  });

  it('sourceConnectedToAllNodes 1 (true)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 4 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 5 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 6 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 6 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.sourceConnectedToAllNodes(1).should.equal(true);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('sourceConnectedToAllNodes 2 (false)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 4 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 5 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 6 } }, ArcType.incoming);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 6 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 7 } }, ArcType.incoming);
    myGraph.sourceConnectedToAllNodes(1).should.equal(false);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('sourceConnectedToAllNodes 3 (true)', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 4 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 5 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 6 } }, ArcType.incoming);
    myGraph.addArcToNode({ id: 6 }, { weight: 1, node: { id: 3 } }, ArcType.outgoing);
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 7 } }, ArcType.incoming);
    myGraph.addArcToNode({ id: 3 }, { weight: 1, node: { id: 7 } }, ArcType.outgoing);
    myGraph.sourceConnectedToAllNodes(1).should.equal(true);
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
});
