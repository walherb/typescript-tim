let x: number = 3;
let y: string = "Hello World!";
let z: boolean = true;
let n: any;
let m: unknown;

function p(): void {

}

var nums: number[] = [1, 2, 3, 4];
var tuple: [string, number] = ["Hello", 2]
var obj: object = {};

// Custom Types 
type Animal = {
    name: string;
    age: number;
    colors: string[];
    legs?: number;
}