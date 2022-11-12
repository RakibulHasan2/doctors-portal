import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    // const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <header className='my-6'>
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="dentist chair" className="max-w-lg rounded-lg shadow-2xl" />
                <div className='mr-6 shadow-2xl shadow-gray-800 w-96 sm:w-full'>
                    <DayPicker 
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    </header>
    );
};

export default AppointmentBanner;