class User
{
    constructor(username,email,passsword)
    {
        this.username=username
        this.email=email
        this.passsword=passsword
    }
    static registeredUsers(){ 
		console.log(User.registeredUsercount) //or return User.registeredUsercount
    }
    register()
    {
        console.log(this.username+' is now registered')
        User.registeredUsercount = User.registeredUsercount ?User.registeredUsercount + 1 :1;
    }
}
class Member extends User
{
    constructor(username,email,passsword,memberPackage='Standard',membershipType='Statndard')
    {
        super(username,email,passsword);
        this.memberPackage=memberPackage;
        this.membershipactivetilldate=new Date();
        this.membershipType=membershipType;
        this.renewMembership(this.memberPackage);
        Member.activeMember = Member.activeMember ?Member.activeMember + 1 :1;
        this.register()
    }
    static activeMembers(){ 
		console.log(Member.activeMember) //or return Member.activeMember
    }
    renewMembership(memberPackage)
    {
        if(memberPackage=='Standard')
        {
            this.membershipactivetilldate.setMonth(this.membershipactivetilldate.getMonth()+1)
            this.membershipType='Standard';
        }
        else if(memberPackage=='Yearly')
        {
            this.membershipactivetilldate.setFullYear(this.membershipactivetilldate.getFullYear()+1)
            this.membershipType='Yearly';
        }
        else
        console.log('Wrong Membership');
    }
}

let alex=new User('alex','user@email.com','12345')
alex.register()
User.registeredUsers() //1 as output.
Member.activeMembers() //Undefined or 0 as output.

let bob=new Member('bob','bob@email.com','12345')
console.log(bob.membershipactivetilldate)
console.log(bob.membershipType)
User.registeredUsers() //2 as output
Member.activeMembers() //1 as output.








//function Student(firstname,lastname,roll,sex,dob)
//{
//    this.firstname=firstname;
//    this.lastname=lastname;
//    this.roll=roll;
//    this.sex=sex;
//    this.dob=new Date(dob);
//    this.getBirthYear=function()
//    {
//        return this.dob.getFullYear();
//    }
//    this.getFullName=function()
//    {
//        return `${this.firstname} ${this.lastname}`
//   }

//}
//Student.prototype.getMinimunAge=function()
//{
//    return (2020-this.getBirthYear()>30?'Eligible':'Not Eligible')
//}

//class Student
//{
   // constructor(firstname,lastname,roll,sex,dob)
   // {
   // this.firstname=firstname;
   // this.lastname=lastname;
  //  this.roll=roll;
  //  this.sex=sex;
 //   this.dob=new Date(dob);
 //   }
 //   getBirthYear()
 //   {
//        return this.dob.getFullYear();
//    }
//    getFullName()
//    {
//        return `${this.firstname} ${this.lastname}`
//    }

//    getMinimunAge()
//    {
//        return (2020-this.getBirthYear()>30?'Eligible':'Not Eligible')
//    }

//}

//const student1=new Student('david','warner',31,'m','4-3-1980')
//const student2=new Student('kane','williamson',22,'m','3-5-1992')
//if(student2.getBirthYear()<student1.getBirthYear())
//console.log(student2.getFullName())
//else
//console.log(student1.getFullName())

//console.log(student2.getMinimunAge())



//function convertTemp(temperatureValue, conversionUnit){
//    return (conversionUnit=='K'?(temperatureValue+273)+conversionUnit:(temperatureValue-273)+conversionUnit);
//}

//console.log(convertTemp(35,'K'))
//console.log(convertTemp(308,'C'))

//const person={
//    firstName:'John',
//    lastName:'Doe',
 //   age:30,
   // hobbies:['music','movies','sports'],
   // address:{
    //    street:'50 main st',
      //  city:'Boston',
       // state:'MA'
    //}

//}

//console.log(person.hobbies[1])
//console.log(person.address.state)

//var {age,address:{state}}=person
//console.log(age)
//console.log(state)

//const todo=[{
//    id:1,
//    text:'Take out trash',
//    isCompleted:true
//},
//{
//    id:2,
//    text:'Meeting',
//    isCompleted:true
//},
//{
//    id:3,
//    text:'Dentist appt',
//    isCompleted:false
//}
//]
//for( let i=0;i<todo.length;i++)
//{
//    console.log(todo[i].id)
//}
//i=0
//while(i<todo.length)
//{
//    console.log(todo[i].id)
//    i+=1
//}






//let arr=[3,4,5,1,9,8,0]
//let maxi=arr[0]
//let mini=arr[0]
//for(let i=0;i<arr.length;i++)
//{
//    if(arr[i]<mini)
//    mini=arr[i]
//    if(arr[i]>maxi)
//    maxi=arr[i]
//}

//console.log(maxi,mini)

//const fruits=['apples','oranges']
//fruits[2]='banana'
//console.log(fruits)
//fruits.unshift('grapes')
//console.log(fruits)
//fruits.push('strawberries')
//console.log(fruits)
//fruits.pop()
//console.log(fruits)
//console.log(Array.isArray(fruits))
//console.log(fruits.indexOf('banana'))



//const name='vamsi'
//const age=22
//const address='hyd'

//const ans=`My name is ${name}, age is ${age}, address is ${address}`
//console.log(`persolnal details = ${ans}`)

//var arr=ans.split(',')
//console.log(arr)

//let a=2
//let b=3

//console.log(`before swapping a=${a},b=${b}`)

//a=a+b
//b=a-b
//a=a-b

//console.log(`after swapping a=${a},b=${b}`)
// let str='abcd'
// let newString=''
// for (var i = str.length - 1; i >= 0; i--) { 
//    newString += str[i];
//}
//console.log(newString);

//if(newString==str)
//    console.log('YES')
//else
//    console.log('NO')