function sync(gen_src)
{
  console.assert(gen_src && gen_src.constructor && gen_src.constructor.name == 'GeneratorFunction');
  function interceptor(...args) {
    setTimeout(() => gen.next(args), 0);
  }
  let gen = gen_src(interceptor);
  gen.next();
}
export default sync;
