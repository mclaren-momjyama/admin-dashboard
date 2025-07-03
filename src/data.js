const firstNames = ["Pranjal", "Aarav", "Ishaan", "Aanya", "Diya", "Kunal", "Riya", "Arjun", "Sneha", "Ankit", "Nisha", "Kabir", "Tanya", "Rahul", "Megha"];
const lastNames = ["Sharma", "Verma", "Patel", "Kapoor", "Agarwal", "Reddy", "Chopra", "Bansal", "Mishra", "Kumar", "Jain", "Singh", "Desai", "Nair", "Joshi"];
const roles = ["admin", "member", "moderator"];

const data = [];

for (let i = 1; i <= 100; i++) {
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  const name = `${first} ${last}`;
  const email = `${first.toLowerCase()}${last.toLowerCase()}${i}@mailinator.com`;
  const role = roles[Math.floor(Math.random() * roles.length)];

  data.push({
    id: i.toString(),
    name,
    email,
    role
  });
}

console.log(JSON.stringify(data, null, 2));
export default data;