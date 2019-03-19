const funA = a => b => {
  // if (b) {
  //   console.log(b);
  //   return b;
  // }
  console.log("haha");
  console.log(a);
  console.log(b);
  return a;
};

export default a => funA(a);
