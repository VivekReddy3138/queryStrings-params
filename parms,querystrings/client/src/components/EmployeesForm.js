
import React,{useEffect, useRef, useState} from "react";

function EmployeesForm() {

  let [employees,setEmployees] = useState([]);
  let[countriesList,setCountriesList] = useState([]);
  let[departmentList,setDepartmentList] = useState([]);
  let[genderList,setGenderList] = useState([]);
  let[ageList,setAgeList] = useState([]);
  let[salaryList,setSalaryList] = useState([]);
  let[firstNameList,setFirstNameList] = useState([]);

  let countriesSelectRef = useRef();
  let departmentSelectRef = useRef();
  let genderSelectRef = useRef();
  let ageSelectRef = useRef();
  let salarySelectRef = useRef();
  let firstNameSelectRef = useRef();

  useEffect(()=>{
    getCountriesList();
    getDepartmentList();
    getGenderList();
    getAgeList();
    getSalaryList();
    getFirstNameList();
    
  },[])

  let getCountriesList = async()=>{

    let reqOptions = {
      method:"GET"
    }

    let JSONData = await fetch("http://localhost:1234/countriesList",reqOptions);

    let JSOData = await JSONData.json();
    setCountriesList(JSOData);
  }

  let getDepartmentList = async()=>{

    let reqOptions = {
      method:"GET"
    }

    let JSONData = await fetch("http://localhost:1234/departmentList",reqOptions);

    let JSOData = await JSONData.json();
    setDepartmentList(JSOData);
  }

  let getGenderList = async()=>{

    let reqOptions = {
      method:"GET"
    }

    let JSONData = await fetch("http://localhost:1234/genderList",reqOptions);

    let JSOData = await JSONData.json();
    setGenderList(JSOData);
  }

  let getAgeList = async()=>{

    let reqOptions = {
      method:"GET"
    }

    let JSONData = await fetch("http://localhost:1234/ageList",reqOptions);

    let JSOData = await JSONData.json();
    setAgeList(JSOData);
  }

  let getSalaryList = async()=>{

    let reqOptions = {
      method:"GET"
    }

    let JSONData = await fetch("http://localhost:1234/salaryList",reqOptions);

    let JSOData = await JSONData.json();
    setSalaryList(JSOData);
  }

  let getFirstNameList = async()=>{

    let reqOptions = {
      method:"GET"
    }

    let JSONData = await fetch("http://localhost:1234/firstNameList",reqOptions);

    let JSOData = await JSONData.json();
    setFirstNameList(JSOData);
  }


    let getEmployeesFromServer = async ()=>{
        let reqOptions = {
            method:"GET"
        };

        // let url = `http://localhost:1234/employees?country=${countriesSelectRef.current.value}&department=${departmentSelectRef.current.value}&gender=${genderSelectRef.current.value}&age=${ageSelectRef.current.value}&salary=${salarySelectRef.current.value}&firstName=${firstNameSelectRef.current.value}`;

        // console.log(url);

        let url2 = `http://localhost:1234/employees/${countriesSelectRef.current.value}/${departmentSelectRef.current.value}/${genderSelectRef.current.value}/${ageSelectRef.current.value}/${salarySelectRef.current.value}/${firstNameSelectRef.current.value}`;

        console.log(url2)

         
        let JSONData = await fetch(url2,reqOptions);

        let JSOData = await JSONData.json();

        setEmployees(JSOData);

        console.log(JSOData);

    }
  return (
    <div>
      <form>
        <div>
          <label>Country</label>
          <select ref={countriesSelectRef}>
           {countriesList.map((ele,i)=>{
            return <option>{ele}</option>
           })}
          </select>
        </div>
        <div>
          <label>Department</label>
          <select ref={departmentSelectRef}>
           {departmentList.map((ele,i)=>{
            return <option>{ele}</option>
           })}
           </select>
        </div>
        <div>
          <label>Gender</label>
          <select ref={genderSelectRef}>
           {genderList.map((ele,i)=>{
            return <option>{ele}</option>
           })}
           </select>
        </div>
        <div>
          <label>Age</label>
          <select ref={ageSelectRef}>
           {ageList.map((ele,i)=>{
            return <option>{ele}</option>
           })}
           </select>
        </div>
        <div>
          <label>Salary</label>
          <select ref={salarySelectRef}>
           {salaryList.map((ele,i)=>{
            return <option>{ele}</option>
           })}
           </select>
        </div>
        <div>
          <label>First Name</label>
          <select ref={firstNameSelectRef}>
           {firstNameList.map((ele,i)=>{
            return <option>{ele}</option>
           })}
           </select>
        </div>
        <button type="button" onClick = {()=>{
            getEmployeesFromServer();
        }}>Get Employees</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>ID</th>
              <th>profile pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Department</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
          {employees.map((ele,i)=>{
    return (
      <tr key = {i}>
      <td>{i+1}</td>
      <td>{ele.id}</td>
      <td>
        <img src = {ele.profilePic}></img>
      </td>
      <td>{ele.firstName}</td>
      <td>{ele.lastName}</td>
      <td>{ele.gender}</td>
      <td>{ele.age}</td>
      <td>{ele.email}</td>
      <td>{ele.salary}</td>
      <td>{ele.department}</td>
      <td>{ele.country}</td>
    </tr>
    );
        })}
          </tbody>
          <tfoot></tfoot>
        </table>
       
      
    </div>
  )
}

export default EmployeesForm
