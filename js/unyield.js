export default function sync(gs) { 
  let g = gs((...a) => setTimeout(() => g.next(a), 0)); 
  g.next();
}
