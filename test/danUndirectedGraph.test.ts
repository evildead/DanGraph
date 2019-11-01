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
});
