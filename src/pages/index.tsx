import Link from 'next/link';
import { Camera } from 'react-feather';
import SpiceCard from '../components/Card';

const IndexPage = () => (
	<div className="h-screen p-4">
		<div className="flex flex-col p-8 mx-auto items-center justify-items-center">
			<h1 className="text-3xl font-bold">Hi from OnlySpices</h1>
			<h2 className="text-lg">The one-stop spice inventory manager</h2>
			<Link href="/scan">
				<a href="/scan" className="flex flex-row mt-8 p-4 bg-gray-600 text-white rounded-xl shadow-xl">
					<Camera className="mr-4" /> Scan-a-Spice
				</a>
			</Link>
		</div>
		{/*cards and stuff*/}
		<div className="flex flex-row p-4 items-center flex-wrap justify-center">
			<SpiceCard spice="Cajun pepper" purchasedAt={Math.floor(new Date().getTime() / 1000)} tag={1} />
			<SpiceCard spice="Salt" purchasedAt={1627386878} tag={2} />
			<SpiceCard spice="Cumin" purchasedAt={1627386878} tag={3} />
		</div>
	</div>
);

export default IndexPage;
