// Task1: Resume data in JSON format

var resume= 
     
    {
    
      "name": "Vimaladhithan",
      "email": "vimaladhithan007@gmail.com",
      "phone": "8220591940",
      "degree": "BE",
      "location": ["Gobichettipalayam","Tamilnadu"],
      "company": "Rently",
       "position": "Technical Support",
        "Skills": ["Java script","HTML"],
        "languages known": ["Tamil","English"],
        "Hobby": "Chess"
  }

// Task 2
// Iterate JSON with for loop

var a = Object.keys(resume);
for (var i = 0; i < a.length; i++) {
  var key = a[i];
  console.log(resume[key]);
}

// Iterate JSON with for in loop
for(var key in resume)
{
  console.log(resume[key]);
}

// Iterate JSON with for of loop
const data= Object.entries(resume)

for(var [key,value] of data)
{
  console.log(value);
}

// Iterate JSON with forEach loop
data.forEach(([key,value])=>console.log(value));