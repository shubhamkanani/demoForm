import React,{useEffect,useState} from 'react'
import { Table, Button} from 'antd';
import { useHistory } from 'react-router-dom';
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
      },
  ];
function List() {
    const [data,setData] = useState([]);
    const history  = useHistory();
    useEffect(()=>{
        const localData  = JSON.parse(localStorage.getItem('Data'));
        if(localData && localData.length > 0){
            setData(localData);
        }
    },[]);

    return (
        <div>
            <Table columns={columns} dataSource={data} />
            <Button onClick={()=>history.push("/form")}>Add Data</Button>
        </div>
    )
}

export default List
