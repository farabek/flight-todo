import React, {useState} from 'react';
import {Input} from "./Input";
import styles from './../Styles.module.css';

type UpdateRouteProps = {
    oldItem: string;
    callBack: (newItem: string) => void;
};

export const UpdateItem = ({oldItem, callBack}: UpdateRouteProps) => {
    const [edit, setEdit] = useState(false);
    const [newItem, setNewItem] = useState(oldItem);

    const editHandler = () => {
        callBack(newItem)
        setEdit(false);
    };

    return (
        edit
            ? <Input newTitle={newItem} setNewTitle={setNewItem} editHandler={editHandler}/>
            : <span className={styles.hoverEffect} onDoubleClick={() => setEdit(true)}>{oldItem}</span>
    );
};


