import React,{ Children }  from "react";


const style ={
    padding: '.5em 1.5em',
    fontSize: '1em',
    border: 'none',
    borderRadius: '.5em'
}

const Button = ({children, className, ...rest}) => {
    return(
        <button className={className} style={style} {...rest}>
            {children}
        </button>
    )
}


export default Button;