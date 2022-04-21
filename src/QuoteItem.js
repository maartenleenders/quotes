import { Fragment } from "react";
import { uniq } from "lodash";

// export default function QuoteItem( { conversation } ) {
// 	const backgroundClasses = [ "bg-red-200", "bg-blue-200", "bg-green-200" ];

// 	return (
// 		<div className={ `relative mt-4 h-52 text-black ${ backgroundClasses[ Math.floor( Math.random() * backgroundClasses.length ) ] }` }>
// 			<div className="z-50">

// 			</div>
// 		</div>
// 	);
// }

export default function QuoteItem( { conversation } ) {
	let formattedQuote = [];
	
	if ( conversation.quote.length > 1 ) {
		formattedQuote = conversation.quote.map( ( { sentence, author }, index ) => {
			return <div className="flex flex-row items-center justify-between"><p className="text-black grow" key={ `quote-${ author }-${ index }`} >{ sentence }</p><p className="text-gray-600 text-base">{ `~ ${author}` }</p></div>
		} );
	} else {
		formattedQuote = <p className="text-black">{ conversation.quote[ 0 ].sentence }</p>;
	}

	return (
	  <section className="bg-white overflow-hidden">
		<div className="border-2 mb-2 relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
		  <div className="relative">
			<div className="relative lg:ml-10">
				<svg
					className="absolute top-0 left-0 transform h-36 w-36 text-indigo-200 opacity-50"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 144 144"
					aria-hidden="true"
				>
				<path
					strokeWidth={2}
					d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
				/>
				</svg>
				<div className="text-2xl leading-9 font-medium text-gray-900">
					{ formattedQuote }
				</div>
				<footer className="mt-8">
					<div className="flex">
					<div className="ml-4 lg:ml-0">
						<div className="text-base font-medium text-gray-900">{ uniq( conversation.quote.map( ( { author } ) => author ) ).join( " & ") }</div>
						<div className="text-base font-medium text-indigo-600">{ conversation.year }</div>
					</div>
					</div>
				</footer>
			</div>
		  </div>
		</div>
	  </section>
	)
  }
  