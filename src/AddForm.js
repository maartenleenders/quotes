import { UserIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const QuoteAndAuthor = ( { quote, setQuote, author, setAuthor } ) => {
    const handleAuthor = ( event ) => {
        setAuthor( event.target.value );
    };

    const handleQuote = ( event ) => {
        setQuote( event.target.value );
    };

    return <div>
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
                <label htmlFor="quote" className="block text-sm font-medium text-gray-700">
                    Add a quote
                </label>
                <p className="mt-2 text-sm text-gray-500">No need for ""</p>
                <div className="mt-1">
				<textarea
                    id="quote"
                    name="quote"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    onChange={ handleQuote }
                    value={ quote }
                />
                </div>
            </div>
        </div>
        <div className="mt-6">
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                Author
            </label>
            <div className="mt-1 flex flex-row">
                <UserIcon className="flex-grow-0 h-10"/>
                <input
                    type="text"
                    name="author"
                    id="author"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Who said it?"
                    onChange={ handleAuthor }
                    value={ author }
                />
            </div>
        </div>
    </div>
};

export default function AddForm() {

    const [ quote, setQuote ] = useState( "" );
    const [ author, setAuthor ] = useState( "" );

    const [ quoteLines, setQuoteLines ] = useState( [] );

    const handleAddLine = () => {
        setQuoteLines( oldQuoteLines => [ ...oldQuoteLines, { "sentence": quote, "author": author } ] );
        setQuote( "" );
        setAuthor( "" );
    };

    return (
		<form className="space-y-8 divide-y divide-gray-200 ">
			<div className="space-y-8 divide-y divide-gray-200">
				<div>
					<QuoteAndAuthor
						quote={ quote }
						setQuote={ setQuote }
						author={ author }
						setAuthor={ setAuthor }
					/>
					<button
						type="button"
						className="mt-8 ml-3 inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						onClick={ handleAddLine }
					>
						+ Add line
					</button>
					<div className="mt-6">
						<fieldset>
							<legend className="text-base font-medium text-gray-900">NSFS</legend>
							<div className="mt-4 space-y-4">
								<div className="relative flex items-start">
									<div className="flex items-center h-5">
										<input
											id="nsfs"
											name="nsfs"
											type="checkbox"
											className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
										/>
									</div>
									<div className="ml-3 text-sm">
										<label htmlFor="nsfs" className="font-medium text-gray-700">
											Note safe for some
										</label>
										<p className="text-gray-500">Whether or not you feel that this could be
											displayed publicly (e.g. in the canteen)</p>
									</div>
								</div>
							</div>
						</fieldset>
					</div>
					<button
						type="submit"
						className="mt-8 ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						submit
					</button>
					<ul className="mt-8">{ quoteLines.map( ( quoteLine, index ) =>
						<li key={ index }>
							<p>{ quoteLine.sentence }</p>
							<p>- { quoteLine.author }</p>
						</li>
					) }
					</ul>
				</div>
			</div>
		</form>
    )
}