import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

import Converter from './modules/converter/converter';

const App = () => {
	return (
		<>
			<Helmet>
				<title>Template converter</title>
				<meta
					name='description'
					content='Convert JSON or Go templates to strings easily with our tool.'
				/>
				<meta
					name='keywords'
					content='JSON converter, Go template to string, online tool'
				/>
			</Helmet>

			<Converter />
			<Toaster />
		</>
	);
};

export default App;
