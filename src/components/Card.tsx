import { format } from "date-fns";

interface CardProps {
	spice: string
	purchasedAt: number
	tag: number
}

const Card = (props: CardProps) => {
	const date = format(props.purchasedAt ?? 0, 'yyyy-mm-dd')
	return (
		<div className="border-gray-300 border-solid border-2 rounded-xl shadow-xl p-8 m-8 flex flex-row">
			<div>
				<p className="font-bold">{props.spice ?? 'Tumeric'}</p>
				<p className="font-mono">{date}</p>
				<p className="font-mono text-xs">OS-{(props.tag ?? 'NOTAG').toString().padStart(3, '0')}</p>
			</div>
			<div className="flex flex-col justify-between ml-16">
				<button className="rounded-lg bg-blue-400 p-1 w-20 text-sm font-semibold">Depleted</button>{' '}
				<button className="rounded-lg bg-red-500 p-1 w-20 text-sm font-semibold">Delete</button>
			</div>
		</div>
	);
};

export default Card;
