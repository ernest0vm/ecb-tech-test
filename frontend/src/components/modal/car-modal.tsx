import { Button, Modal } from "@material-ui/core";
import { useEffect, useState } from "react";
import CarModalStyle from "./car-modal-style";

function SimpleModal(props: any) {
    const classes = CarModalStyle();
    var isOpen: boolean = false;

    useEffect(()=>{
        isOpen = props.showModal
    }, [props.showModal])

    const body = (
        <div className={classes.paper}>
            <h2 id="simple-modal-title">{props.data.model}</h2>
            <p id="simple-modal-description">{props.data.make}</p>
            <Button>exit</Button>
        </div>
    );

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={() => isOpen = false}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default SimpleModal;