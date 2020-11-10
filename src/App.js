import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': 'Steve Yang',
  'birthday': '911212',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '921212',
  'gender': '남자',
  'job': 'unemployed'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': 'Jane Doe',
  'birthday': '9361212',
  'gender': '여자',
  'job': '디자이너'
}
]


function App() {
  return (
    <div>
       {
         customers.map((c)=> {
           return (
             <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
             />
           )
         })
       
       /* <Customer
    id={customers[0].id}
    image= {customers[0].image}
    name={customers[0].name}
    birthday= {customers[0].birthday}
    gender={customers[0].gender}
    job={customers[0].job}
  
  />
  <Customer
    id={customers[1].id}
    image= {customers[1].image}
    name={customers[0].name}
    birthday= {customers[1].birthday}
    gender={customers[1].gender}
    job={customers[1].job}
  
  />
  <Customer
    id={customers[2].id}
    image= {customers[2].image}
    name={customers[2].name}
    birthday= {customers[2].birthday}
    gender={customers[2].gender}
    job={customers[2].job}
  
  /> */}
    </div>
 
  );
}

export default App;
