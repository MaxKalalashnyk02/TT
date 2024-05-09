async function bulkRun(tasks) {
  const results = [];
  
  for (const [func, params] of tasks) {
      const result = await new Promise(resolve => {
          func(...params, resolve);
      });
      results.push(result);
  }
  
  return results;
}

const f1 = (cb) => { cb(1); };
const f2 = (a, cb) => { cb(a); };
const f3 = (a, b, cb) => { setTimeout(() => cb([a, b]), 1000); };

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]]
]).then(console.log);
