import React,{useState,useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import Select from '@mui/material/Select';
export default function AddLabels() {
  const[label,setLabel]=useState();
  const handleChange2=(e)=>{
    setLabel(e.target.value);
  }

  const handleChange=()=>{
    const article={operation:{callList:deleteList,label_ops:[{name:label,op:"add"}]}};
    const headers={
      'Content-Type':'application/json',
      'user_id':'24b456',}

     axios.post('https://damp-garden-93707.herokuapp.com/applyLabels', article,{headers})
         .then(response => {console.log(response);response.data.message==="successfull"?alert("label posted succesfully"):alert("label cannot be posted")})

  }
  const [label_data,setLabel_data]=useState([]);
  const [deleteList, setDeleteList] = useState([]);
  const columns = [
    {
      field: 'id',
      headerName: 'call_id',
    },
    {
      field: 'label_id',
      headerName: 'label_id',
    },
    {
      field: 'agent_id',
      headerName: 'agent_id',
    },
    {
      field: 'call_time',
      headerName: 'call_time',
    },
    ]
    const rows = [
      {
        id: 1,
        agent_id: "Janet Nelson ",
        call_time: "1 hour"
      },
      {
        id: 2,
        agent_id: "Wayne Brown",
        call_time: "2 hour"
      },
      {
        id: 3,
        agent_id: "Linda Brooks ",
        call_time: "3 hour"
      },
      {
        id: 4,
        agent_id: "Sandra Fehlinger",
        call_time: "4 hour"
      },
      {

        id: 5,
        agent_id: "Latisha Sledge",
        call_time: "5 hour"
      }
    ];
    const [data,setData]=useState(rows);
    useEffect(()=>{
      const headers={
        'Content-Type':'application/json',
        'user_id':'24b456',}
      fetch("https://damp-garden-93707.herokuapp.com/getlistoflabels",{headers})
      .then(res=>res.json())
      .then(res=>{
        setLabel_data(res.data.unique_label_list);
        console.log("res",res.data.unique_label_list);
      })

    },[])
  return (
    <>
    <h2>Add Labels </h2>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(model) => {
          setDeleteList(model);
        }}
        disableSelectionOnClick
      />
    </div>
    <FormControl>
  <InputLabel id="demo-simple-select-label">Labels</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={label}
    label="agent"
    onChange={handleChange2}
  >
    {label_data.map((e)=>{
      return(
       <MenuItem value={e}>{e}</MenuItem>
      )
    })}
  </Select>

</FormControl>
<button onClick={handleChange}>set Label</button>
    </>
  )
}
