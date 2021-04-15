import { useState } from 'react'
import { ApiManager } from '../../managers/api-manager'
import CarCard from '../../components/card/car-card'
import HomeStyle from './home-style'
import { Box, Grid, Typography } from '@material-ui/core'

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

    const classes = HomeStyle();
    return (
        <div>
            <Box boxShadow={2}>
                <div className={classes.bar}>
                    <Grid container >
                        <Grid item xs={6}>
                            <Typography className={classes.title}>
                                Rating Cars
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <button onClick={(e) => RequestData()}>get data</button>
                        </Grid>
                    </Grid>
                </div>
            </Box>
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