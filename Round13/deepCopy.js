/**
 * Date: 20th April, 2026
 * Write a function which accepts a nested JS object
 * and create a deep clone out of it
 */
const company = {
  name: "TechCorp",
  location: "Bangalore",

  departments: [
    {
      name: "Engineering",
      head: {
        name: "Alice",
        experience: 12,

        teams: [
          {
            name: "Frontend",
            members: [
              { name: "John", skills: ["React", "JS"] },
              { name: "Doe", skills: ["Angular", "TS"] },
            ],
          },
          {
            name: "Backend",
            members: [{ name: "Sam", skills: ["Node.js", "MongoDB"] }],
          },
        ],
      },
    },
    {
      name: "HR",
      head: {
        name: "Bob",
        experience: 8,

        policies: {
          leave: {
            annual: 20,
            sick: 10,
          },
        },
      },
    },
  ],
};

function cloneDeep(inputObj) {
  const deepCopy = {};

  for (let key in inputObj) {
    const value = inputObj[key];
    if (typeof value === "object") {
      deepCopy[key] = cloneDeep(value);
    } else {
      deepCopy[key] = value;
    }
  }

  return deepCopy;
}

const deepCopyObj = cloneDeep(company);
console.log(`.........Deep Copy Obj.......`);
console.log(JSON.stringify(deepCopyObj));

console.log(`...Original Object data.....`);
console.log("Location: ", company.location);
console.log("Head of department: ", company.departments[0].head.name);
console.log("Leave Policy: ", company.departments[1].head.policies.leave);

// Modifying the cloned object
deepCopyObj.location = "Karnataka";
deepCopyObj.departments[0].head.name = "John";
deepCopyObj.departments[1].head.policies.leave["casual"] = 10;

console.log(`.........Post Modifying the copied Object........`);
console.log(`...Copied Object data.....`);
console.log("Location: ", deepCopyObj.location);
console.log("Head of department: ", deepCopyObj.departments[0].head.name);
console.log("Leave Policy: ", deepCopyObj.departments[1].head.policies.leave);
