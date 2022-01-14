
import './Wheatherinfo.css';

const Wheatherinfo = (props) => {
  console.log(props);

  if (props.wheatherData.list.length === 0) {
    return (
      <div>
        <h1>unable to find details</h1>
      </div>
    );
  } 
  return (
   <div className='warm'>
      <h1>City :{props.wheatherData.list[0].name}  </h1>
      <h1>Temp Average:{Math.round(props.wheatherData.list[0].main.temp)} &#8451;</h1>
      <h1>minimum temprature :{Math.floor(props.wheatherData.list[0].main.temp_min)}&#8451; </h1>
      <h1>maximum temprature :{Math.ceil(props.wheatherData.list[0].main.temp_max)}&#8451; </h1>
      <h1>feels:{Math.round(props.wheatherData.list[0].main.feels_like)}&#8451; </h1>
    </div>
  );
};
export default Wheatherinfo;

