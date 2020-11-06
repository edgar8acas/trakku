import express from "express";

const app = express();

const add = (a: number, b?: number): number => {
  if (b) {
    return a + b;
  } else {
    return a;
  }
};

interface Chair {
  width: number;
  height: number;
}

const victorianChair: Chair = {
  width: 32,
  height: 30,
};

app.get("/", (req: any) => {
  req.name = "something";
  const result = add(4.43, 5.21);
  add(3);
  console.log(result.toFixed());
  console.log(req.name);
});

console.log("hello from typescript!");
