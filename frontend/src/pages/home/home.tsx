import React, { useEffect, useState } from 'react'
import { ApiManager } from '../../managers/api-manager'
import CarCard from '../../components/card/car-card'
import HomeStyle from './home-style'
import { AppBar, Toolbar, Grid, Typography, IconButton, Icon, Button } from '@material-ui/core'
import RefreshIcon from '@material-ui/icons/Refresh';

const api = (new ApiManager())

const Home = () => {
    const [cars, setCars] = useState([])

    const RequestData = async () => {
        setCars([])
        await api.getCars().then((response: any) => {
            console.log(JSON.stringify(response.data))
            setCars(response.data)
        }).catch((error: any) => {
            console.error(error)
        })
    }

    useEffect(() => {
        RequestData()
    }, [])

    const classes = HomeStyle();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Rating Cars
                    </Typography>
                    <div className={classes.grow} />
                    <Button startIcon={<RefreshIcon />}
                        variant="outlined" 
                        className={classes.btn}
                        onClick={RequestData}
                        >Refresh</Button>
                </Toolbar>
            </AppBar>
            <Grid item xs={12}>
                <Grid container justify="center">
                    {cars.map((car: any) => (
                        <Grid key={car.id} item>
                            <CarCard {...car} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    )

}

export default Home;