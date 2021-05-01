import { Container, Card, Typography, Grid, CardContent, Button, TextField, MenuItem } from '@material-ui/core';
import classe from './Layout.module.css';
import useStyles from './style';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { apiActions } from '../store/ApiSlice';

const Layout = () => {
	const classes = useStyles();
	//const [category, setCategory] = useState('Devops');
	const [category, setCategory] = useState('');
	const [Questions, setQuestions] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [fetch, setFetch] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('yes');
		console.log(Questions);
		const fetchData = async () => {
			console.log('api');
			try {
				const { data } = await axios.get('https://quizapi.io/api/v1/questions', {
					params: {
						apiKey: 'rShOKXWkGrpbGQz2GoQd9V6SM0aEMnj7kSnNAlPZ',
						limit: Questions,
						category,
						difficulty,
					},
				});
				console.log(data);
                dispatch(apiActions.start(data));
            
			} catch (error) {
				console.log(error);
			}
		};

		if (fetch) {
			fetchData();
		}
	}, [fetch]);

	return (
		<div className={classes.body}>
			<Grid container alignItems="center" justify="center" xs={12} className={classes.body}>
				<Grid item xs={6}>
					<Card color="primary" className={classes.card}>
						<Typography variant="h6" className={classes.typography}>
							<h1 style={{ color: 'white' }}>Quiz Setup</h1>
						</Typography>
						<CardContent>
							<Grid>
								<Grid item className={classes.new}>
									<div>
										<Typography variant="h6">Category</Typography>
										<select
											id="questions"
											name="questions"
											style={{ width: '40%' }}
											onClick={(e) => setCategory(e.target.value)}
										>
											<option value="Linux">Linux</option>
											<option value="Devops">Devops</option>
											<option value="Networking" selected>
												Networking
											</option>
											<option value="Javascript">Javascript</option>
											<option value="Kubernetes">Kubernetes</option>
										</select>
									</div>
								</Grid>
								<Grid item className={classes.new}>
									<div
										className={{
											display: 'flex',
											flexDirection: 'row',
											alignItems: 'center',
										}}
									>
										<Typography variant="h6">No of Questions</Typography>
										<input
											type="number"
											id="noofq"
											style={{ width: '40%' }}
											onChange={(e) => setQuestions(e.target.value)}
										/>
									</div>
								</Grid>
								<Grid item className={classes.new}>
									<div>
										<Typography variant="h6">Difficulty</Typography>
										<select
											id="difficulty"
											name="difficulty"
											style={{ width: '40%' }}
											onClick={(e) => setDifficulty(e.target.value)}
										>
											<option value="Easy">Easy</option>
											<option value="Medium">Medium</option>
											<option value="Hard" selected>
												Difficult
											</option>
										</select>
									</div>
								</Grid>
							</Grid>
							<Button color="secondary" variant="contained" onClick={(e) => setFetch(true)}>
								Start Quiz
							</Button>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default Layout;
