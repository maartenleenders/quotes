import QuoteItem from "./QuoteItem";

export default function QuoteList( { quotes } ) {
	console.log( quotes );
	return (
		<ol>
			{
				quotes.map( ( conversation, index ) => {
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