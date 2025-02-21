function powerset(array) {
  const sets = [[]];
  array.forEach((num) => {
    let newSets = [];
    sets.forEach((set) => {
      newSets.push([...set, num]);
    });
    sets.push(...newSets);
  });
  return sets;
}
