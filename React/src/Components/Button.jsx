
// eslint-disable-next-line react/prop-types, no-unused-vars
const Button = ({text , mx , bg}) => {
    // eslint-disable-next-line no-unused-vars
    const classNames = `py-2 px-4 sm:px-10 bg-red-500 text-white w-fit ${mx} ${bg} transition-colors hover:bg-transparent hover:text-red-500 hover:border border-red-500 `;
    return (
   <button className= {classNames}>{text}</button>
    )
  }
  
  export default Button