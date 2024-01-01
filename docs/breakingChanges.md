# Breaking changes

## Version 2

### Typescript build folder

The Typescript build folder was renamed to `build` (it was previously named `lib`)

### class DanUndirectedGraph

- The method `public getInnerGraph(): Map<I, DanNodeAndUndirectedArcs<I, D>>` was removed
- Added method `public getNodeAndUndirectedArcsFromNodeId(idNode: I)`
