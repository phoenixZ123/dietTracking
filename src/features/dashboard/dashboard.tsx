import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();
const SubmitLogOut = () => {
  localStorage.clear();
  navigate("/login");
}

  return <div className="">
    <div className="text-green-800 text-xl font-bold container m-auto">dashboard</div>
    <button className="m-10 bg-blue-400 p-3 rounded" onChange={SubmitLogOut}>
      Log Out</button></div>
}

export default Dashboard