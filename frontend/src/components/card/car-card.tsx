import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useEffect, useState } from 'react';
import CarCardStyle from './car-card-style';

const CarCard = (data: any) => {
    const classes = CarCardStyle();
    const [isSelected, setIsSelected] = useState<boolean>(false)

    const CardClick = () => {
        setIsSelected(!isSelected)
    }

    useEffect(() => {
    }, [isSelected])

    return (
        <Card className={classes.root} style={{ backgroundColor: isSelected ? '#F0F8FF' : '#FFF' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={data.model}
                    height="140"
                    image={data.image}
                    title={data.model}
                />
                <CardContent>
                    <Typography className={classes.subtitle}>
                        {data.make || "---"}
                    </Typography>
                    <Typography className={classes.title}>
                        {data.model || "---"}
                    </Typography>
                    <Typography className={classes.body}>
                        Km: {data.km || "---"}
                    </Typography>
                    <Typography className={classes.body}>
                        Description: {data.description || "---"}
                    </Typography>
                    <Typography className={classes.body}>
                        Estimate date: {data.estimatedate || "---"}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={(e) => CardClick()} size="small" color="primary">
                    In maintenance
                </Button>
            </CardActions>
        </Card>
    );
}

export default CarCard;