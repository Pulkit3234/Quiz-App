import Header from './components/Header';
import Layout from './components/Layout';
import Quiz from './components/Quiz';
import { useSelector } from 'react-redux';

function App() {
	const { startQuiz } = useSelector((state) => state.api);

	return (
		<>
			<Header />
			{startQuiz ? <Quiz /> : <Layout />}
		</>
	);
}

export default App;
