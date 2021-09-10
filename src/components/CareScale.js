import '../styles/ShoppingList.css';

const CareScale = (props) => {
    const {scaleValue, careType} = props;
    const range = [1, 2, 3];

    let scaleType = null;

    if(careType ==='light') {
        scaleType = '☀️';
    } else {
        scaleType = '💧';
    }

    return (
        range.map((rangeValue) => {
            if(scaleValue >= rangeValue) {
                return (<span key={rangeValue.toString()}>{scaleType}</span>);
            }
            return null;
        })
    );
};

export default CareScale;