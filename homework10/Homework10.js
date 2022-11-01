// 1.
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, a, ...z] = arr;

console.log(x);
console.log(y);
console.log(z);

// 2.
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let [name1, name2, name3, name4] = data.names;
let [age1, age2, age3, age4] = data.ages;

console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

// 3.
function mul(...params) {
  let result = 0;
  for (let i = 0; i < params.length; i++) {
    if (typeof params[i] === "number") {
      result += params[i];
    }
  }
  return result;
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

// 4.
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  },
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },

  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// 5.
function mapBuilder(keysArray, valuesArrays) {
  const newMap = new Map();
  for (let i = 1; i <= keys.length; i += 1) {
    newMap.set(keys[i], values[i]);
  }
  return newMap;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); 
console.log(map.get(2)); 
