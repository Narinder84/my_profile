
import React from 'react';
import {Link} from 'react-router-dom'

import './profile.scss';

function Profile (){
    return(
        <div className='profile' >
            <h1>Narinder Pal Singh</h1>
            <p><em>Full stack developer-<strong>React and Node.js</strong></em></p>
            <p><strong>Email</strong> : getdev84@gmail.com</p>
            <p><strong>Location</strong> : NYC USA</p>
            <hr></hr>
            <p><strong>Projects:</strong></p>
            
            <ul>
            <p><Link className='p-lk' to='/cr' >click---><em>Crown-cloth App</em></Link> --- <em><strong>E-commerce app</strong>. Created by using <strong>Redux</strong> and <strong>React Router</strong></em> library.</p>
            <p><Link className='p-lk' to='smartBrain' >click---><em>Smart Brain App</em></Link> --- <em><strong>Face detection app</strong>. Created by using <strong>Clarifai API</strong> and <strong>hash</strong> for securing users login information.</em> </p>
            <p className='fe' ><strong>Front End</strong></p>
            <ul>
            <li>Extensive in developing  SPA web site. Designing and developing web pages using <strong>React JS, Redux,JSON, Node.js</strong>, Ajax, HTML/HTML5, XML, CSS/CSS3,SASS,JavaScript. </li>
            <li>Using <strong>Object Oriented programming Concepts and Functional programming</strong> to develop <strong>UI components that could be reused</strong> across the web application.</li>
            <li>Experienced in using<strong>Material library</strong> to create simple submission forms and other components.</li>
            <li>Creating batter user experience by implementing mediaQuery</li>
            <li>Worked with <strong>Tachyons</strong> library for quick styling components and for making forms</li>
            <li>Ability to create <strong>reusable custom components</strong> from scratch like <strong>customized buttons ,from input fields , tables, drag and drop components etc.</strong></li>
            <li>Ability to use <strong>CSS in js.Used Styled-components.js</strong> to create efficient css layout for an applications.</li>
            <li>Worked with <strong>React-Router</strong> for routing different pages in application.</li>
            <li>Integrated applications with <strong>Redux</strong> for better state management. </li>
            <li>Implemented <strong>reselect library</strong>for better <strong>memoization of sate data</strong>.</li>
            <li>Ability to manage <strong>asynchronous function</strong> in React application using <strong>Redux-Thunk and Sagas</strong>.</li>
            <li>Applied <strong>optimization techniques like code splitting:React-Lazy and Suspense</strong>,for managing page size and to reduce load time for better user experience. </li> 
            <li>Ability to integrate new features of React like <strong>hooks</strong> in applications.</li>
            <li>Integrating <strong>Front-end with Back-end</strong> using concept of <strong>RESTful API</strong>.</li>        
            <li>Integrated with <strong>Clarifai API for face detection</strong> </li>
            <li>Integrating application <strong>payment processing APP like Stripe API</strong></li>
            <li>Used <strong>react-particles-js</strong> library for making nicer background</li>
            <li>Implemented <strong>React state management</strong> to have batter control for UI.</li>
                       
            </ul>
            <p className='fe' ><strong>Back End</strong></p>
            <ul>
            <li>Ability to create server using <strong>Node.js Express server</strong></li>
            <li>Extensive understanding of data base like <strong>Postgres SQL,Firebase,SQL server,Redis</strong> to store user related data.</li>
            <li>Using <strong>knex library</strong> for safer and secure integration with data bases</li>
            <li>Creating secure user connection using <strong>JWT as session tokens</strong></li>
            <li>Implemented <strong>Hash bcrypt-nodejs for security</strong> of user data.</li>
            <li>Deploying app at <strong>Heroku</strong></li>
            </ul>
            
            </ul>
            <hr></hr>
            <p><strong>Skills:</strong></p> 
            <ul>
            <p><strong className='fe' >Web Technologies:</strong> React JS,React-Router-Dom,Redux,Redux-Thunk,Sagas,Reselect,Styled-component-js, Express JS, Node.js,Deno, GitHub,Heroku HTML, HTML5, CSS3, SASS, XHTML, XML, JavaScript, AJAX, jQuery,JSON, Twitter Bootstrap.</p>
            <p><strong className='fe' >DataBase:</strong> Firebase, MONGO DB, PostgreSQL, SQL Server,AWS Lamda,Redis</p>
            <p><strong className='fe' >Programming Language:</strong> javaScript, Micrsoft SQL server,Python.</p>
            <p><strong className='fe' >Platforms:</strong> Windows 95/98/NT/2000/XP/Vista, Linux 5/6.</p>
            <p><strong className='fe' >Testing:</strong> Jasmine.</p>
            <p><strong className='fe' >Version control:</strong> GitHub</p>
            </ul>
            <hr></hr>
            <p><strong>Education:</strong></p>
            <ul>
            <li>B.commerce from India</li>
            <li>Masters in Business Adminstration from India</li>
            </ul>
            
        </div>
    );
};

export default Profile;