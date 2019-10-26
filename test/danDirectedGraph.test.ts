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

  it('addNodeToNode', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addNodeToNode({ id: 1 }, { id: 2 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 2 }, { id: 3 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 2 }, { id: 4 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 4 }, { id: 5 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 5 }, { id: 6 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 4 }, { id: 6 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 2 }, { id: 3 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 6 }, { id: 3 }, ArcType.outgoing);
    myGraph.countNodes().should.equal(6);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('removeNode', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addNodeToNode({ id: 1 }, { id: 2 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 2 }, { id: 3 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 2 }, { id: 4 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 4 }, { id: 5 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 5 }, { id: 6 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 4 }, { id: 6 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 2 }, { id: 3 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 6 }, { id: 3 }, ArcType.outgoing);
    myGraph.removeNode(6);
    myGraph.countNodes().should.equal(5);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isAcyclic 1', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addNodeToNode({ id: 1 }, { id: 2 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 2 }, { id: 3 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 2 }, { id: 4 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 4 }, { id: 5 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 5 }, { id: 6 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 4 }, { id: 6 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 2 }, { id: 3 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 6 }, { id: 3 }, ArcType.outgoing);
    myGraph.isAcyclic().should.equal(true);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isAcyclic 2', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addNodeToNode({ id: 1 }, { id: 2 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 2 }, { id: 3 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 2 }, { id: 4 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 4 }, { id: 5 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 5 }, { id: 6 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 4 }, { id: 6 }, ArcType.incoming);
    myGraph.addNodeToNode({ id: 2 }, { id: 3 }, ArcType.outgoing);
    myGraph.addNodeToNode({ id: 6 }, { id: 3 }, ArcType.outgoing);
    myGraph.isAcyclic().should.equal(false);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isAcyclic 3', (): void => {
    const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
    myGraph.addNodeToNode({ id: 1 }, { id: 1 }, ArcType.incoming);
    myGraph.isAcyclic().should.equal(false);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });
});
