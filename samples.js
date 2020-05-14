const debug= require('debug')('mo');
const async=require('async');
const lodash=require('lodash')

var pets=[{
    name:'cat',
    age:10
},
{
    name:'dog',
    age:12
},
{
    name:'mouse',
    age:6
}
]
const x=lodash.find(pets,{age:6});
console.log(x)
const y=lodash.filter(pets,{age:6})
const a=lodash.sortBy(pets,'age');
console.log(a)
