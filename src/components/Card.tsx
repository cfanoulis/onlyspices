const Card = () => {
	return (
		<div className="border-gray-300 border-solid border-2 rounded-xl shadow-xl p-8 m-8 flex flex-row">
			<div>
				<p className="font-bold">Tumeric</p>
				<p className="font-mono">2021-01-01</p>
				<p className="font-mono text-xs">OS-001</p>
			</div>
			<div className="flex flex-col justify-between ml-16">
				<button className="rounded-lg bg-blue-400 p-1 w-20 text-sm font-semibold">Depleted</button>{' '}
				<button className="rounded-lg bg-red-500 p-1 w-20 text-sm font-semibold">Delete</button>
			</div>
		</div>
	);
};

export default Card;
