import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './CardsGlobalNegara.module.css';

const Info = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography variant= "h4" color="dark" align ="center" gutterBottom>
            Positif
            </Typography>
            <Typography align="center" variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.50} separator="," />
            </Typography>
            <Typography align="center" variant="body2" component="h2">
              Jumlah orang yang COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography variant= "h4" color="dark" align ="center" gutterBottom>
              Sembuh
            </Typography>
            <Typography align="center" variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography  align="center" variant="body2" component="h2">
              Jumlah orang yang sembuh dari COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography variant= "h4" color="dark" align ="center" gutterBottom>
              Meninggal
            </Typography>
            <Typography align="center" variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography align="center" variant="body2" component="h2">
              Jumlah orang yang meninggal karena COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;





// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import styles from './CardGlobal.module.css';

//   return (
//     <div>
//       <br/>
//          <h2 style= {{ textAlign: "center" }}>Global</h2>
//       <br/>
//       <CardDeck>
//   <Card bg= "info"
//         text= "white"  
//         className= "text-center"
//         style= {{margin: "7px" }}>
//     <Card.Body>
//       <Card.Title>Infected</Card.Title>
//       <Card.Text>
//         0
//       </Card.Text>
//     </Card.Body>
//   </Card>
//     <Card bg="success" 
//           text= "white"
//           className= "text-center"
//           style= {{margin: "7px" }}>
//     <Card.Body>
//       <Card.Title>Recovered</Card.Title>
//       <Card.Text>
//         0
//       </Card.Text>
//     </Card.Body>
//     </Card>
//     <Card bg= "danger" 
//           text= "white"
//           className= "text-center"
//           style= {{margin: "7px" }}>
//     <Card.Body>
//         <Card.Title>Deaths</Card.Title>
//         <Card.Text>
//            0
//         </Card.Text>
//     </Card.Body>
//     </Card>
//   </CardDeck>
//       </div>
//     )
//   }
// }