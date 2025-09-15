var minMutation = function(startGene, endGene, bank) {
  const bankSet = new Set(bank);
  if (!bankSet.has(endGene)) return -1; // end must be valid

  const chars = ['A', 'C', 'G', 'T'];
  const queue = [[startGene, 0]];
  const visited = new Set([startGene]);

  while (queue.length) {
    const [gene, steps] = queue.shift();

    if (gene === endGene) return steps;

    // Try all possible mutations
    for (let i = 0; i < gene.length; i++) {
      for (let ch of chars) {
        if (gene[i] === ch) continue;

        const mutated = gene.slice(0, i) + ch + gene.slice(i + 1);

        if (bankSet.has(mutated) && !visited.has(mutated)) {
          visited.add(mutated);
          queue.push([mutated, steps + 1]);
        }
      }
    }
  }
  return -1;
};
