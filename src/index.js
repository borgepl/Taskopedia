import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './layout/Header';
import Student from './Components/Student/Student';
import Footer from './layout/Footer';
import MainBody from './MainBody';
import { faker } from '@faker-js/faker';
import StudentReview from './Components/Student/StudentReview';
import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
/* root.render(<div>Hello World</div>);
*/

root.render(
  <div className='container-fluid bg-black' style={{color:'gray'}}>
    <Header />
    <MainBody />
    <div className='row px-2'>Students Enrolled</div>
    <Student experience={faker.number.int({ min: 1, max: 5 })} name={faker.person.fullName()} userImg={faker.number.int({ min: 20, max: 70 })} sex="men">
      <StudentReview></StudentReview>
    </Student>
    <Student experience={faker.number.int({ min: 1, max: 5 })} name={faker.person.fullName()} userImg="65" sex="women" />
    <Student experience={faker.number.int({ min: 1, max: 5 })} name={faker.person.fullName()} userImg="20" sex="men"/>
    <Footer />
  </div>
);