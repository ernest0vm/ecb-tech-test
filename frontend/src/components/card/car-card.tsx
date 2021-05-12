import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useState } from 'react';
import SimpleModal from '../modal/car-modal';
import CarCardStyle from './car-card-style';

function CarCard(props: any) {
    const classes = CarCardStyle();
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)

    const CardClick = () => {
        setIsSelected(!isSelected)
    }

    const OpenCarModal = () => {
        setOpenModal(!openModal)
        console.log(openModal)
    }

    return (
        <>
            <Card className={classes.root}
                onClick={(e) => CardClick()}
                style={{ backgroundColor: isSelected ? '#F0F8FF' : '#FFF' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.data.model}
                        height="140"
                        image={props.data.image}
                        title={props.data.model}
                    />
                    <CardContent>
                        <Typography className={classes.subtitle}>
                            {props.data.make || "---"}
                        </Typography>
                        <Typography className={classes.title}>
                            {props.data.model || "---"}
                        </Typography>
                        <Typography className={classes.body}>
                            Km: {props.data.km || "---"}
                        </Typography>
                        <Typography className={classes.body}>
                            Description: {props.data.description || "---"}
                        </Typography>
                        <Typography className={classes.body}>
                            Estimate date: {props.data.estimatedate || "---"}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={(e) => OpenCarModal()} size="small" color="primary">
                        In maintenance
                </Button>
                </CardActions>
            </Card>

            < SimpleModal showModal={openModal} data={props.data} />
        </>
    );
}

export default CarCard;