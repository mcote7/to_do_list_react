import React from 'react';

const Input = (props) => {
    const {list, setList} = props;
    let task = {
        name: "",
        isComplete: false,
    };

    const onChange = (e) => {
        task.name = e.target.value;
    }
    const onClick = (e) => {
        e.preventDefault();
        setList([...list, task]);
    }
    return(

                <div className="mycontainer">
                    <label className="mylabel">Add a Chore - &nbsp;&nbsp;</label>
                    <input spellCheck="false" className="form-control" onChange={onChange} type="text" />
                    <button onClick={onClick} className="btn btn-primary"></button>
                </div>

    );
}

export default Input;