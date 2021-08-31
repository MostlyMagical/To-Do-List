import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='blue' text='Add' onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps ={
    title: "To Do List"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


//Heading styling below
{/* <h1 style={headingStyle}>{title}</h1> */}

// const headingStyle = {
//     color: 'purple', backgroundColor: 'black'
// }

export default Header