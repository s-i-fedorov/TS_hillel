function createTree (depth:number):{}|null {
    if (depth <= 0) {
        return null
    }
    return {
        value: depth,
        child: createTree(depth-1)
    }
}

console.log(createTree(4))