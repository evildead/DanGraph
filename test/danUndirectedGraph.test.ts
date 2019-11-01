// mocha
import 'mocha';

// chai
import chai from 'chai';

// commons module
import { UndirectedGraph } from '../src/index';

const should = chai.should();
const expect = chai.expect;

describe('Test the DanUndirectedGraph', (): void => {
  it('addNode', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<string, undefined>();
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
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } });
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } });
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 4 } });
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 5 } });
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } });
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 6 } });
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } });
    myGraph.addArcToNode({ id: 6 }, { weight: 1, node: { id: 3 } });
    myGraph.countNodes().should.equal(6);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('removeNode', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } });
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } });
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 4 } });
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 5 } });
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } });
    myGraph.addArcToNode({ id: 4 }, { weight: 1, node: { id: 6 } });
    myGraph.addArcToNode({ id: 2 }, { weight: 1, node: { id: 3 } });
    myGraph.addArcToNode({ id: 6 }, { weight: 1, node: { id: 3 } });
    myGraph.removeNode(2);
    myGraph.countNodes().should.equal(5);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isConnected 1 (false)', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } });
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 3 } });
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 4 } });
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } });
    myGraph.addArcToNode({ id: 7 }, { weight: 1, node: { id: 8 } });
    myGraph.addArcToNode({ id: 7 }, { weight: 1, node: { id: 9 } });
    myGraph.countNodes().should.equal(9);
    myGraph.isConnected().should.equal(false);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isConnected 2 (true)', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } });
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 3 } });
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 4 } });
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } });
    myGraph.addArcToNode({ id: 7 }, { weight: 1, node: { id: 8 } });
    myGraph.addArcToNode({ id: 7 }, { weight: 1, node: { id: 9 } });
    myGraph.addArcToNode({ id: 3 }, { weight: 1, node: { id: 7 } });
    myGraph.addArcToNode({ id: 6 }, { weight: 1, node: { id: 8 } });
    myGraph.countNodes().should.equal(9);
    myGraph.isConnected().should.equal(true);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isAcyclic 1 (true)', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } });
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 3 } });
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 4 } });
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } });
    myGraph.addArcToNode({ id: 7 }, { weight: 1, node: { id: 8 } });
    myGraph.addArcToNode({ id: 7 }, { weight: 1, node: { id: 9 } });
    myGraph.countNodes().should.equal(9);
    myGraph.isAcyclic().should.equal(true);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isAcyclic 2 (true)', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } });
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 3 } });
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 4 } });
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } });
    myGraph.addArcToNode({ id: 7 }, { weight: 1, node: { id: 8 } });
    myGraph.addArcToNode({ id: 7 }, { weight: 1, node: { id: 9 } });
    myGraph.addArcToNode({ id: 3 }, { weight: 1, node: { id: 7 } });
    myGraph.addArcToNode({ id: 6 }, { weight: 1, node: { id: 8 } });
    myGraph.countNodes().should.equal(9);
    myGraph.isAcyclic().should.equal(true);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });
  it('isAcyclic 3 (false)', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 2 } });
    myGraph.addArcToNode({ id: 1 }, { weight: 1, node: { id: 3 } });
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 4 } });
    myGraph.addArcToNode({ id: 5 }, { weight: 1, node: { id: 6 } });
    myGraph.addArcToNode({ id: 7 }, { weight: 1, node: { id: 8 } });
    myGraph.addArcToNode({ id: 7 }, { weight: 1, node: { id: 9 } });
    myGraph.addArcToNode({ id: 3 }, { weight: 1, node: { id: 7 } });
    myGraph.addArcToNode({ id: 6 }, { weight: 1, node: { id: 8 } });
    myGraph.addArcToNode({ id: 3 }, { weight: 1, node: { id: 5 } });
    myGraph.countNodes().should.equal(9);
    myGraph.isAcyclic().should.equal(false);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });
});
