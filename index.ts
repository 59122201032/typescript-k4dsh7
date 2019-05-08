// example basic
const numberArray = [1,2,3,4,5,6];
numberArray.forEach(item=>{
  console.log('item',item);
});
console.log('End Example');

// example
// sum ตัวเลขใน Array ด้วย forEach
const numberArray2 = [1,2,3,4,5,6];
let sum = 0;
numberArray2.forEach(item=>{
  sum += item;
});
console.log('sum',sum);

//Example เปลี่ยนค่า property ใน object ของ element ภายใน array
interface DepartmentType {
  dpt: string;
  dpc?: string|null;
  status?: number;
}

const dptArray:DepartmentType[] = [{dpt:'Union'},{dpt:'China',dpc:'Chi'},{dpt:'United State',dpc:null,status:1}];

//ใช้ forEach เปลี่ยนทุก object ใน Array ให้มี status = 1
dptArray.forEach(dpt=>dpt.status=1);
console.log('result3',JSON.stringify(dptArray));


//โจทย์ 1. หา sum เฉพาะเลขคู่ใน Array แล้วแสดงผ่าน console.log
const problemArray3 = [1,2,3,4,5,6];
const isEven = problemArray3 => problemArray3%2 === 0;
let sum1 = 0;
problemArray3.forEach(i=>{
  if (isEven(i)) {
      sum1 = sum1+i;
  }
});
console.log('Sum: '+sum1);
// let sumProblem: number;
// console.log('sumProblem',sumProblem);

//โจทย์ 2. ใช้ forEach เปลี่ยนทุกตัวให้ status = 1 ยกเว้นตัวที่ status มีค่า 2 อยู่ก่อนแล้ว
const problemDptArray: DepartmentType[] =[
{dpt:'Union'},{dpt:'China',dpc:'Chi',status:2},{dpt:'United State',dpc:null,status:1}
];
problemDptArray.forEach(i =>  {
  if (i.status !== 2) {
      i.status=1;
  }
});
console.log(problemDptArray);
