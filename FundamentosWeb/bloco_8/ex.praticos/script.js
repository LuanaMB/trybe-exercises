 const employeesGenerator = (fullname) => {
  let email = `${fullname.toLowerCase().split(" ").join("")}@trybe.com.br`;
  return { Nome: fullname, Email: email };
};

const newEmployees = () => {
  const employees = {
    id1: employeesGenerator("Luana Moneró"),
    id2: employeesGenerator("Luana Braga"),
    id3: employeesGenerator("Carolina Lopes"),
  };
  return employees;
};

console.log(newEmployees()); 
