import React,{useState,useEffect} from 'react'
import MaterialTable from 'material-table';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import { Link } from 'react-router-dom';
export default function ContactsList() {
const [agent_data,setAgent_data]=useState([]);
  const [data1,setData1]=useState([]);
const [agent, setAgent] = React.useState([]);

const [maxValue,setMaxValue]=useState(0);
const [minValue,setMinValue]=useState(0);
const [val, setVal] = React.useState([30, 40]);


const handleChange1=(e,newValue)=>{
  setVal(newValue);
  console.log(val);
}
const handleChange2=(event)=>{

  setAgent(event.target.value);
  console.log(agent);
}
  const handleChange = () => {
     const article={info:{filter_agent_list:agent,filter_time_range:val}};
     const headers = {
      'Content-Type': 'application/json',
  };

      axios.post('https://damp-garden-93707.herokuapp.com/getfilteredcalls', article,{headers})
          .then(response => setData1(response.data.data));

  };

  const columns = [
  //  { title: "label_id", field: "label_id" },
    { title: "call_id", field: "call_id" },
    {title:"agent",field:"agent_id"},
    {title:"call_time",field:"call_time"},

  ]
  useEffect(()=>{
    fetch("https://damp-garden-93707.herokuapp.com/getlistofagents")
    .then(res=>res.json())
    .then(res=>{
      console.log(res.data.listofagents);
      setAgent_data(res.data.listofagents);
    })

  },[])

  useEffect(()=>{
    fetch("https://damp-garden-93707.herokuapp.com/getdurationrange")
    .then(res=>res.json())
    .then(res=>{
      setMaxValue(res.data.maximum);
      setMinValue(res.data.minimum);


    })

  },[])


  return (
    <div>

<Link to="/label">AddLabels</Link>

<MaterialTable
title=" calls table"
data={data1}
columns={columns}
/>
<h2>choose agent</h2>
<FormControl>
  <InputLabel id="demo-simple-select-label">Agent</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    multiple
    value={agent}
    label="agent"
    onChange={handleChange2}
  >
    {agent_data.map((e)=>{
      return(
       <MenuItem value={e}>{e}</MenuItem>
      )
    })}
  </Select>

</FormControl>
<h2>set time duration</h2>
<Slider
min={minValue}
max={maxValue}
value={val}
onChange={handleChange1}/>
<button onClick={handleChange}>filter</button>
    </div>
  );

}
