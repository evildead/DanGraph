// mocha
import 'mocha';

// chai
import chai from 'chai';

// commons module
import { UndirectedGraph, CDanNode, CDanArc } from '../src/index';

const should = chai.should();
const expect = chai.expect;

describe('Test the DanUndirectedGraph', (): void => {
  it('addNode', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<string, undefined>();
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
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 2 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 2 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 4 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 4 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 6 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }));
    myGraph.countNodes().should.equal(6);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('removeNode', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 2 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 2 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 4 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 4 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 6 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }));
    myGraph.removeNode(2);
    myGraph.countNodes().should.equal(5);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isConnected 1 (false)', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 9 }) }));
    myGraph.countNodes().should.equal(9);
    myGraph.isConnected().should.equal(false);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isConnected 2 (true)', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 9 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 3 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 6 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));
    myGraph.countNodes().should.equal(9);
    myGraph.isConnected().should.equal(true);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isAcyclic 1 (true)', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 9 }) }));
    myGraph.countNodes().should.equal(9);
    myGraph.isAcyclic().should.equal(true);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('isAcyclic 2 (true)', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 9 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 3 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 6 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));
    myGraph.countNodes().should.equal(9);
    myGraph.isAcyclic().should.equal(true);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });
  
  it('isAcyclic 3 (false)', (): void => {
    const myGraph = new UndirectedGraph.DanUndirectedGraph<number, undefined>();
    myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 9 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 3 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 6 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));
    myGraph.addArcToNode(new CDanNode({ id: 3 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }));
    myGraph.countNodes().should.equal(9);
    myGraph.isAcyclic().should.equal(false);
    const graphStr = myGraph.toString();
    console.log(graphStr);
  });

  it('generateConsecutiveNodeGraph', (): void => {
    const myGraph = UndirectedGraph.DanUndirectedGraph.generateConsecutiveNodeGraph(1000);
    myGraph.countNodes().should.equal(1000);
    myGraph.isConnected().should.equal(true);
    myGraph.isAcyclic().should.equal(true);
  });

  it('generateRandomNodeGraph', (): void => {
    const myGraph = UndirectedGraph.DanUndirectedGraph.generateRandomNodeGraph(1000);
    myGraph.countNodes().should.equal(1000);
    const isConnected = myGraph.isConnected();
    const isAcyclic = myGraph.isAcyclic();
    console.log(`${isConnected ? 'the graph is connected' : 'the graph is not connected'}`);
    console.log(`${isAcyclic ? 'the graph is acyclic' : 'the graph is not acyclic'}`);
  });
});
