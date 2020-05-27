import React from "react"

import { Link } from "gatsby"
// import { Card, CardContent, Typography } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles({
//     root: {
//       minWidth: 275,
//       marginBottom: 12,
//     },
//     title: {
//       fontSize: '1rem',
//       fontFamily: 'serif',
//       color: '#185d8c',
//     },
//   });
  

// const useContentStyles = makeStyles({
//     root: {
//         padding: 16,
//         '&:last-child': {
//           paddingBottom: 16,
//         },
//       },
//   });


// function MenuRecipe({ item }) {
//     const classes = useStyles();
//     const content = useContentStyles();

//     return(
//         <>
//         <Link to={item.slug} style={{ textDecoration: 'none' }}>
//             {/* <div className="menu-recipe-card" >
//              */}
//              <Card className={classes.root}>
//              <CardContent className={content.root}>
//              <Typography className={classes.title} variant="h5" component="h2">
//              {item.recipename}
//             </Typography>
//                 {/* <p>{item.recipename}</p> */}
//             </CardContent>
//             </Card>
//             {/* </div> */}
//         </Link>
//         </>
//     )
// }


function MenuRecipe({ item }) {

    return(
        <>
        <Link to={item.slug} style={{ textDecoration: 'none' }}>
            <div className="menu-recipe-card" >
                <p>{item.recipename}</p>
            </div>
        </Link>
        </>
    )
}
  
export default MenuRecipe