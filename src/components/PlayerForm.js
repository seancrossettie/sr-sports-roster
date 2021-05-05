// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { TextField, Button, Grid } from '@material-ui/core';
// import PropTypes from 'prop-types';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// const PlayerForm = ({
//   formTitle,
//   setAuthors,
//   name,
//   email,
//   firebaseKey
// }) => {
//   const classes = useStyles();
//   const [author, setAuthor] = useState({
//     name: name || '',
//     email: email || '',
//     firebaseKey: firebaseKey || null
//   });

//   const handleInputChange = (e) => {
//     setAuthor((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (author.firebaseKey) {
//       updateAuthor(author)
//         .then((arr) => setAuthors(arr));
//     } else {
//       addAuthor(author)
//         .then((array) => setAuthors(array));
//     }
//   };

//   return (
//     <>
//       <Grid container direction='row'>
//           <Grid container direction='column'>
//             <Grid item>
//               <h2>{formTitle}</h2>
//             </Grid>
//         <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
//         <Grid item>
//           <TextField
//             label="Name"
//             name='name'
//             type='text'
//             value={author.name}
//             onChange={handleInputChange}
//             variant="outlined"
//             required
//           />
//           </Grid>
//           <Grid item>
//           <TextField
//             label="Email"
//             variant="outlined"
//             name='email'
//             type='email'
//             value={author.email}
//             onChange={handleInputChange}
//             required
//           />
//           </Grid>
//           <Button type='submit'>Submit</Button>
//         </form>
//         </Grid>

//       </Grid>
//     </>
//   );
// };

// AuthorForm.propTypes = {
//   formTitle: PropTypes.string.isRequired,
//   setAuthors: PropTypes.func.isRequired,
//   name: PropTypes.string,
//   email: PropTypes.string,
//   firebaseKey: PropTypes.string
// };

// export default AuthorForm;
