import React, {Component} from "react";

const Rainbow = (WrappedComponent) => {
    const colors = ['primary', 'warning', 'success', 'danger', 'secondary', 'info'];
    const colorRandom = `text-${colors[Math.floor(Math.random()*5)]}`;
    return (props)=>{
        return(
            <div className={colorRandom}>
                <WrappedComponent {...props}/>
            </div>
        );
    }
}

export default Rainbow;