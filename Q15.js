function add_suffix(a) {
  return function add(b) {
    let c = b.concat(a);
    return c;
  };
}
const add_ly = add_suffix("ly");
console.log(add_ly("hopeless") );
