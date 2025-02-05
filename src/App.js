import Card from './components/Card';
import data from './data';

const App = () => {
    return (
        <div className='appContainer'>
            {data.map((item) => {
                return (<Card oneData={item} key={item.id}/>);
            })}
        </div>
    );
};

export default App;
