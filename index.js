// const n1 = 19;
// const n2 = 10;

// console.log(`la suma es: ${n1 + n2}`);
/*import express from "express"
const app = express();

const people=[];

app.use(express.json());

app.get("/",(request, response) =>{
    return response.json({
        ok: true,
        data: people,
    });
});
app.post("/create", function(req,res){
    const data= req.body;
    data.id = people.length + 1; 
    people.push(data); 
    return res.status(201).json({
        ok: true,
        data: "Persona creada",
    });
})
*/
import express from "express";

const app = express();

app.use(express.json());

const people = [];

app.get("/", (request, response) => {
  return response.json({
    ok: true,
    data: people,
  });
});

app.post("/create", function (req, res) {
  const data = req.body;
  data.id = people.length + 1;
  people.push(data);

  return res.status(201).json({
    ok: true,
    data: "Persona creada",
  });
});
app.put("/update", function(req,res){
    const data= req.body;
    let x;
    for (x=0;x<people.length;x++){
        if(people[x].id==data.id){
            people[x].name=data.name
            people[x].last_name=data.last_name
            //x=0//bucle infinito
        }
    }
    return res.status(201).json({
        ok: true,
        data: "Persona editada",
    });
})

app.delete("/delete", function(req,res){
    const data = req.body;
    let x;
    for (x=0;x<people.length;x++){
        if(people[x].id==data.id){
            people.splice(x,1)
            x=0
        }
    }
    return res.status(201).json({
        ok: true,
        data: "Persona eliminada",
    });
})

app.listen(6004, () => 
console.log(`El servidor inicio en http://localhost:6004`))