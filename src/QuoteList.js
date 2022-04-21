import QuoteItem from "./QuoteItem";

export default function QuoteList( { quotes } ) {
	console.log( quotes );
	return (
		<ol>
			{
				quotes.map( ( conversation, index ) => {
					console.table( conversation );
					console.log( typeof conversation )
					return (
						<li key={`quote-${ index }`}>
							<QuoteItem conversation={ conversation } />
						</li>
					);
				} )
			}
		</ol>
	);
}