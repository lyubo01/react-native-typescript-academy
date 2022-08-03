// type Point = {
//     x: number;
//     y: number;
//     z?: number;
// };
interface Point {
    x: number;
    y: number;
    z?: number;
    format(): string;
}

export class PointImpl implements Point{
    constructor(
        public x: number,
        public y: number,
        public z: number=0){}
    format(): string {
       return `[${this.x}, ${this.y}, ${this.z}]`;
    }
}

// interface Point {
//     [key: string]: number
// }
interface PointDict {
    [key:string]:number
}
function printCoord(pt: Point) {
    for(const key in pt){
        console.log(`The coordinate's ${key} value is  ${(pt as unknown as PointDict)[key]}`);
    }
  }
   
  printCoord({
      x: 100, y: 100, z: 230,
      format: function (): string {
          throw new Error("Function not implemented.");
      }
  });

  type StringOrBoolean = string[] | boolean ;
  type AnyArray = any[];
  type ResultType = StringOrBoolean & AnyArray;

  const myarr: ResultType = ['da'];
    
  console.log(myarr);

interface Counter {
    counter: 0 | 1
}
  const obj : Counter = { counter: 1 };
// eslint-disable-next-line no-constant-condition
obj.counter = 1;


const req = { url: "https://example.com", method: "GET" } //as const;

handleRequest(req.url, req.method as "GET");

function handleRequest (url:string, method: "GET" | "POST") {
    return console.log(url + method);
}