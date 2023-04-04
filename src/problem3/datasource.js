/**
 * This is a Datasource utility class with a datasource connector 
 * to abstract away data retrieval and manipulation from the View Controllers.
 */
class Datasource {
    /**
     * Returns a Promise which provides fulfilment handler with an array of prices retrieved from a remote pricing engine.
     * 
     * @returns {Promise<Array>} A Promise that has an array of price objects.
     * @throws {Error} If an error occurs in fetching the prices.
     */
    // A Promise is a proxy for a value not necessarily known when the promise is created. 
    // It allows one to associate handlers with an asynchronous action's eventual success value or failure reason.
    static async getPrices() {
        try {
            // Fetches remote price data from given endpoint.
            const response = await fetch('https://interview.switcheo.com/test.json');
            const prices = await response.json();

            // Map the array of prices to a new array with objects having 'pair', 'mid' and 'quote' properties.
            return prices.map(price => ({
                pair: price.pair,
                // Returns the mid-point value between price.buy and price.sell by taking the average.
                mid: () => (price.buy + price.sell) / 2,
                // Returns the quote currency (counter currency) of the trade pair, e.g. for ETHSGD pair the quote currency is SGD.
                quote: () => price.pair.slice(-3)
            }));
        } catch (error) {
            throw new Error('Error fetching prices.');
        }
    }
}
