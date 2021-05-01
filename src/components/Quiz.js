import { Container, Card, CardHeader, CardContent, Checkbox, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

const quiz = () => {

    const { data } = useSelector(state => state.api);
	return (
		<Container style={{ marginTop: '20px' }}>
			<Card>
				<CardHeader title="first question" style={{ margin: '10px' }} />
				<CardContent>
					<h4>
						<Checkbox />
						option1
					</h4>

					<h4>
						<Checkbox />
						option1
					</h4>

					<h4>
						<Checkbox />
						option1
					</h4>

					<h4>
						<Checkbox />
						option1
					</h4>
				</CardContent>
				<CardContent>
					<Button variant="contained" color="primary">
						Next Question
					</Button>
				</CardContent>
			</Card>
		</Container>
	);
};

export default Quiz;
