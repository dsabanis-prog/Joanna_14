const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

async function fetchQuote() {
    newQuoteBtn.disabled = true;
    newQuoteBtn.textContent = 'Loading...';
    
    try {
        const response = await fetch('https://api.quotable.io/random');
        
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }
        
        const data = await response.json();
        
        quoteText.textContent = data.content;
        quoteAuthor.textContent = `— ${data.author}`;
        
    } catch (error) {
        quoteText.textContent = 'Oops! Could not fetch a quote. Please try again.';
        quoteAuthor.textContent = '';
        console.error('Error fetching quote:', error);
    } finally {
        newQuoteBtn.disabled = false;
        newQuoteBtn.textContent = 'New Quote';
    }
}

newQuoteBtn.addEventListener('click', fetchQuote);
