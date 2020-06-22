import React, {useState} from 'react';
import ClassCounter from './ClassCounter'
import Button from '../components/common/Button';
import FunctionalCounter from './FunctionalCounter';


const App2 = () => {
    const [showCount, setShowCount] = useState(true);
    const handleShow = () => setShowCount(!showCount);
    return (
        <div className="container">
            <Button 
                label={showCount ? 'Unmount' : 'Mount'}
                classes="btn btn-primary m-2"
                onClick={handleShow}
            />
            { showCount && <ClassCounter /> } 
            { showCount && <FunctionalCounter /> }
        </div>
    )
}

export default App2;