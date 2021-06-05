import Card from '../components/Card';

const IndexPage = () => (
	<div className="h-screen p-4">
		<div className="flex flex-col p-8 mx-auto items-center justify-items-center">
			<h1 className="text-3xl font-bold">Hi from OnlySpices</h1>
			<h2 className="text-lg">The one-stop spice inventory manager</h2>
		</div>
		{/*cards and stuff*/}
		<div className="flex flex-row p-8 items-center flex-wrap justify-center">
			<Card spice='Cajun pepper' purchasedAt={1622926497} tag={1}/>
			<Card spice='Salt' purchasedAt={1622926497} tag={2}/>
			<Card spice='Cumin' purchasedAt={1622926497} tag={3}/>
			<Card />
		</div>
	</div>
);

export default IndexPage;
